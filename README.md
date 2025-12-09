# RegLand™ - Registration Intelligence Platform

The UK's first Registration Intelligence Platform — automating Land Registry compliance, application readiness and post-completion certainty for conveyancers.

## 🔷 About RegLand

RegLand validates AP1 and TR1 applications, restriction compliance, execution checks and registration readiness for UK conveyancers — reducing Land Registry requisitions and delays.

**Because "submitted" is not the same as "registered".**

## 🚀 Features

- **TR1 & AP1 Validation** - Automated validation before submission
- **Restriction Compliance** - Intelligent checking of restrictions and consents
- **Execution Verification** - Verify signatures and witness requirements
- **SDLT & Evidence Checks** - Confirm stamp duty and supporting evidence
- **Real-Time Risk Detection** - Identify registration risks before submission
- **Registration Readiness Score** - Clear visibility on application readiness

## 💻 Development

### Prerequisites

- Modern web browser
- Node.js (optional, for local development server)
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/regland.git
cd regland
```

2. Open in browser:
```bash
# Simple Python server
python3 -m http.server 8000

# Or Node.js http-server
npx http-server -p 8000
```

3. Visit `http://localhost:8000`

### Project Structure

```
regland/
├── index.html          # Main landing page
├── styles.css          # All styling and design system
├── script.js           # Interactive functionality
├── README.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## 🎨 Design System

### Colors
- Primary Blue: `#1e40af`
- Accent Diamond: `#60a5fa`
- Success Green: `#10b981`
- Warning Amber: `#f59e0b`

### Typography
- Font: Inter
- Headings: 700-800 weight
- Body: 400-500 weight

## 🌐 Deployment

This site is configured for GitHub Pages deployment.

### Setup GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch `main`
4. Folder: `/` (root)

### Custom Domain (reg.land)

1. In your GoDaddy account, add DNS records:
   ```
   Type: A
   Host: @
   Points to: 185.199.108.153
   
   Type: A
   Host: @
   Points to: 185.199.109.153
   
   Type: A
   Host: @
   Points to: 185.199.110.153
   
   Type: A
   Host: @
   Points to: 185.199.111.153
   
   Type: CNAME
   Host: www
   Points to: YOUR_USERNAME.github.io
   ```

2. In GitHub repo settings, add custom domain: `reg.land`

3. Enable "Enforce HTTPS"

## 📊 Analytics Integration

Ready for:
- Google Analytics
- Mixpanel
- Hotjar
- Microsoft Clarity

## 🔧 Tech Stack

- **Frontend**: Pure HTML, CSS, JavaScript
- **Hosting**: GitHub Pages
- **Domain**: GoDaddy (reg.land)
- **Design**: Custom CSS with modern design system
- **Typography**: Google Fonts (Inter)

## 📝 Brand Guidelines

**Positioning**: Registration Intelligence Platform

**Tagline**: "Registration, Intelligent."

**Key Messages**:
- Case Management tells you what you uploaded. RegLand tells you if it will register.
- Stop Submitting. Start Registering.
- Built by conveyancers. Designed for registration certainty.

## 🤝 Development Handoff

This front-end is built to be:
- **Backend-agnostic** - Easy to integrate with any backend framework
- **API-ready** - Designed for RESTful API integration
- **Component-based** - Sections can be easily extracted and reused
- **Responsive** - Mobile-first design approach

### Integration Points

When integrating with backend:

1. **Form submission** - Add form handlers to CTAs
2. **Authentication** - Add user login/signup flows
3. **Dashboard** - Connect dashboard preview to real data
4. **API integration** - Connect to `api.reg.land`
5. **Analytics** - Implement event tracking

## 📄 License

Proprietary - All rights reserved

## 🔗 Links

- Website: https://reg.land
- App: https://app.reg.land
- API Docs: https://api.reg.land

---

Built with ❤️ for UK conveyancers

**RegLand™** - The Registration Intelligence Platform
