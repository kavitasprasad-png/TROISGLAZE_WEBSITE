Fix the duplicate logo and brand name on the homepage by removing the hero logo and keeping the large headline.

Chosen approach:
- Remove the uploaded logo image from the hero section above the headline.
- Keep the large "TROIS GLAZE" hero text as the homepage headline.
- Keep the header logo + "TROIS GLAZE" text as the site navigation branding.

This removes the duplicate logo and duplicate brand name while still keeping the brand prominent on the homepage.

Steps:
1. Edit src/routes/index.tsx to remove the hero logo markup and its container.
2. Build the project to verify the change compiles.
3. Take a homepage screenshot to confirm the page no longer shows a duplicated logo or brand name.

No other pages or components are affected.