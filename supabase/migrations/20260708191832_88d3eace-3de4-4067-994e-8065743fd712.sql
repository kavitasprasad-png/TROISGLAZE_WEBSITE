-- Move has_role out of the exposed public API schema to prevent direct RPC execution.
-- RLS policies can still call it via the fully-qualified name.

CREATE SCHEMA IF NOT EXISTS private;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated;

-- Drop the old public function (and any dependent policies will be recreated below if needed).
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role) CASCADE;
