
-- Roles
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Admins can manage all roles"
  on public.user_roles for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- Enquiries
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text not null,
  location text,
  message text not null,
  source text default 'contact_form',
  status text not null default 'new',
  admin_notes text,
  handled_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant insert on public.enquiries to anon;
grant select, insert, update, delete on public.enquiries to authenticated;
grant all on public.enquiries to service_role;

alter table public.enquiries enable row level security;

-- Anyone can submit an enquiry (anon + authenticated)
create policy "Anyone can submit enquiries"
  on public.enquiries for insert
  to anon, authenticated
  with check (
    length(trim(name)) between 1 and 200
    and length(trim(email)) between 3 and 320
    and length(trim(phone)) between 3 and 40
    and length(trim(message)) between 1 and 5000
  );

-- Only admins can read/update/delete
create policy "Admins can view all enquiries"
  on public.enquiries for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update enquiries"
  on public.enquiries for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete enquiries"
  on public.enquiries for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- updated_at trigger
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_enquiries_updated_at
  before update on public.enquiries
  for each row execute function public.update_updated_at_column();

create index enquiries_created_at_idx on public.enquiries (created_at desc);
create index enquiries_status_idx on public.enquiries (status);
