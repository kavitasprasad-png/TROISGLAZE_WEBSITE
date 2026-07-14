CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'))
  WITH CHECK (private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all enquiries"
  ON public.enquiries FOR SELECT
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update enquiries"
  ON public.enquiries FOR UPDATE
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'))
  WITH CHECK (private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete enquiries"
  ON public.enquiries FOR DELETE
  TO authenticated
  USING (private.has_role(auth.uid(), 'admin'));
