NISS TECHNOLOGY - CRM SOLUTIONS PAGE PATCH

Files to copy into the existing NISS website project, preserving the existing folder structure:

1. src/CRMSolutions/CRMSolutions.js       (new)
2. src/CRMSolutions/CRMSolutions.css     (new)
3. src/App.js                             (replace)
4. src/Navbar/Navbar.js                   (replace)

What this patch changes:
- Adds /crm-solutions route.
- Adds "CRM Solutions" to the existing Services dropdown.
- Adds a responsive CRM landing page with four cards and live links.
- Does NOT import or merge any CRM source code.
- Does NOT modify any CRM login, Firebase, database, repository, or deployment.

Current live destinations:
Medical: https://app.punaraxistherapy.com
Retail: https://retailcrm-three.vercel.app
Real Estate: https://testingcrm-peach.vercel.app
School: https://schoolcrm-ok.vercel.app

After copying:
1. Run: npm start
2. Open: http://localhost:3000/crm-solutions
3. Check desktop and mobile.
4. If correct, commit and push the NISS website repository.

Important:
This is a source patch, not a deployment. No GitHub push or Vercel deployment has been performed.
