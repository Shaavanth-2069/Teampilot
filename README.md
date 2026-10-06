# UI-Template-Collection

## Modern SaaS — Team Management Hackathon Collection

A responsive collection of 15 original SaaS UI templates created for the UI Template Collection Hackathon.

### Team
- **G.SHAAVANTH** — Team Leader / Product & Project Lead
- **Y.CHAKRADHAR REDDY** — UI Developer / Frontend & Interaction
- **M.SURYA NIVAS REDDY** — UI Developer / Dashboard & Data UI

## Templates
1. SaaS Landing Page
2. SaaS Dashboard
3. SaaS Onboarding
4. SaaS Login / Signup
5. SaaS Pricing
6. SaaS Billing
7. SaaS Account Settings
8. SaaS Team Management
9. SaaS User Management
10. SaaS Integrations
11. SaaS Help Center
12. SaaS Documentation
13. SaaS Calendar
14. SaaS File Management
15. SaaS Collaboration Workspace
16. SaaS Command Palette

## Shared experience
Every template includes:
- 1 → 100 TeamPilot launch counter over exactly 2 seconds on the root landing page only; after 100 it fades into the TeamPilot demo page
- Team logo and TeamPilot brand treatment
- Dark futuristic SaaS theme
- Scroll reveal motion
- 3D hover/depth animation
- Responsive mobile/tablet/desktop layouts
- Original HTML/CSS/JavaScript
- No external runtime dependencies
- Contact/footer section with team details
- Horizontal brand marquee
- Accessible semantic structure and readable class names

## Special Team Management feature
`saas-team-management/index.html` contains a team editor. Edit a member and the information is saved with browser `localStorage`, so the updated details remain after refresh on the same browser.

Recommended workflow for the hackathon:
```text
```

Example branches:
```text
feature/saas-landing
feature/saas-dashboard
feature/saas-team-management
feature/saas-user-management
```

Example commit:
```text
feat: add responsive SaaS team management UI
```

## Run locally
Open any template's `index.html` directly, or serve the repository with a local static server.

Example:
```bash
python -m http.server 8000
```
Then open:
`http://localhost:8000/saas-team-management/`

## Customization
The demo company name is **TeamPilot** so the collection works immediately. Replace it with your actual company/team name in each `index.html`.

The supplied logo is an original inline SVG placeholder created for this project. Replace the SVG in the `.brand` sections if your team has an official logo.

## Research references
- ThemeForest site templates
- Kombai web UI gallery
- Dribbble UI collections
- Uizard templates
- Material UI templates
- n8n workflow patterns

## Notes
The demos intentionally avoid copying any existing website. They are designed as original hackathon-ready starting points. Backend authentication, databases, live APIs, real billing, and production security should be connected separately before deployment.


## TeamPilot logo
The uploaded TeamPilot logo is included at `assets/teampilot-logo.png` and is used as:
- the launch/counter logo
- navigation branding
- a subtle fixed background watermark
- the 3D hero visual
- the TeamPilot theme identity

## Real-time-ready architecture
The UI currently uses browser JavaScript to simulate live metrics and status updates. To make it production-real-time, connect the same UI elements to your API/WebSocket/SSE layer. The front-end does not require a framework.

## Scroll and 3D effects
The shared JavaScript adds:
- scroll-linked 3D perspective
- scroll-linked logo movement/rotation
- heading scale-up near the viewport focus
- reveal-on-scroll cards
- 3D pointer hover
- live clock and demo metric updates

## Team editing
The TeamPilot pages include an **Edit team details** action. The member data is persisted in browser `localStorage`, making it easy to demonstrate live editing during the hackathon. Replace this storage layer with your backend database/API for production.


## Root demo flow
The root `index.html` starts with the TeamPilot logo and a 1→100 counter over 2 seconds. After reaching 100, the overlay fades into the demo page, which contains a horizontal scrolling **TEAM PILOT** company-name banner, the template collection, and a bottom **Contact Us** section featuring team leader **G.SHAAVANTH** and project/team details.


## Team directory
The root demo now includes a **3D rotating ID-card cube** showing G.SHAAVANTH, Y.CHAKRADHAR REDDY, M.SURYA NIVAS REDDY, and J. MAHESH YADAV one at a time. The **Edit all team member details** panel allows every name, role, email, phone number, and description to be changed. Data is saved in browser `localStorage`. The collection uses a green-and-black TeamPilot visual theme.
