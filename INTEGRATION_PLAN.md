# RegLand Platform Integration Plan

**Project:** Registration Intelligence Platform for UK Conveyancers  
**Domain:** reg.land  
**Status:** Marketing site live, platform integration required

---

## Executive Summary

This document outlines the integration plan for connecting the reg.land marketing website to the backend platform/API. We're using a **front-end first approach** to ensure efficient parallel development.

---

## Phase 1: Define Platform Requirements (Week 1-2)

### 1.1 User Journey Mapping
**Owner:** Product/UX  
**Priority:** Critical

- [ ] Map complete user journey from landing page to platform login
- [ ] Define authentication flow (sign up, login, password reset)
- [ ] Identify all data collection points
- [ ] Create wireframes for platform dashboard
- [ ] Design user onboarding flow

**Deliverable:** User journey diagram + wireframes

---

### 1.2 Front-End Platform Pages (Mock Data)
**Owner:** Front-end dev  
**Priority:** Critical

Build these pages with **mock/fake data** first:

- [ ] **Sign Up Page** - Email, password, company details
- [ ] **Login Page** - Email/password authentication
- [ ] **Dashboard** - Overview of searches, alerts, recent activity
- [ ] **Property Search** - Search by title number or address
- [ ] **Property Details Page** - Display registration data
- [ ] **Alerts Setup** - Configure change notifications
- [ ] **Account Settings** - Profile, billing, preferences
- [ ] **Billing/Subscription** - Payment integration placeholder

**Mock Data Examples:**
```javascript
// Example property data structure
{
  titleNumber: "DN12345",
  address: "123 Main Street, London, SW1A 1AA",
  proprietor: "John Smith",
  tenure: "Freehold",
  priceData: {
    lastSale: "£450,000",
    date: "2023-06-15"
  },
  restrictions: ["Mortgage to ABC Bank Ltd"],
  alerts: {
    enabled: true,
    lastCheck: "2025-12-09"
  }
}
```

**Tech Stack:**
- Same HTML/CSS/JS approach as marketing site OR
- React/Next.js if scaling up
- Local storage for mock authentication

---

### 1.3 Define API Requirements
**Owner:** Front-end + Back-end  
**Priority:** Critical

Based on front-end mock pages, document required API endpoints:

#### Authentication APIs
- [ ] `POST /api/auth/register` - Create new user account
- [ ] `POST /api/auth/login` - Authenticate user
- [ ] `POST /api/auth/logout` - End session
- [ ] `POST /api/auth/reset-password` - Password reset flow
- [ ] `GET /api/auth/verify-token` - Validate JWT token

#### Property Search APIs
- [ ] `GET /api/properties/search?query={titleNumber|address}` - Search properties
- [ ] `GET /api/properties/{titleNumber}` - Get property details
- [ ] `GET /api/properties/{titleNumber}/history` - Get change history
- [ ] `GET /api/properties/{titleNumber}/alerts` - Get configured alerts

#### Alert Management APIs
- [ ] `POST /api/alerts` - Create new alert
- [ ] `GET /api/alerts` - List user's alerts
- [ ] `PUT /api/alerts/{id}` - Update alert settings
- [ ] `DELETE /api/alerts/{id}` - Remove alert
- [ ] `GET /api/alerts/notifications` - Get recent notifications

#### User Management APIs
- [ ] `GET /api/users/me` - Get current user profile
- [ ] `PUT /api/users/me` - Update profile
- [ ] `GET /api/users/subscription` - Get subscription details
- [ ] `POST /api/users/subscription` - Update subscription

#### Dashboard APIs
- [ ] `GET /api/dashboard/stats` - Overview statistics
- [ ] `GET /api/dashboard/recent` - Recent searches/activity

**Deliverable:** API specification document (OpenAPI/Swagger format)

---

## Phase 2: Backend API Development (Week 2-4)

### 2.1 Database Schema Design
**Owner:** Backend dev  
**Priority:** Critical

Design database tables for:

- [ ] Users (authentication, profile, subscription)
- [ ] Properties (cached Land Registry data)
- [ ] Alerts (user alert configurations)
- [ ] Activity Log (search history, changes detected)
- [ ] Subscriptions/Billing (payment tracking)

**Technology Recommendations:**
- PostgreSQL for structured data
- Redis for caching Land Registry API responses
- JWT for authentication tokens

---

### 2.2 Land Registry API Integration
**Owner:** Backend dev  
**Priority:** Critical

- [ ] Research Land Registry API access (credentials, pricing)
- [ ] Implement API client for Land Registry Business Gateway
- [ ] Build caching layer (avoid repeat API calls)
- [ ] Handle rate limiting
- [ ] Error handling and retry logic
- [ ] Parse and normalize Land Registry XML/JSON responses

**Land Registry APIs to integrate:**
- Title Register API
- Title Plan API
- Official Copy Service
- Change Notification Service

---

### 2.3 Build Backend APIs
**Owner:** Backend dev  
**Priority:** Critical

Implement all endpoints defined in Phase 1.3:

- [ ] Set up API framework (Express.js, FastAPI, Django, etc.)
- [ ] Implement authentication middleware
- [ ] Build all property search endpoints
- [ ] Build alert management system
- [ ] Build user management endpoints
- [ ] Build dashboard data aggregation
- [ ] Add API documentation (Swagger UI)
- [ ] Write unit tests for each endpoint

---

### 2.4 Payment Integration
**Owner:** Backend dev  
**Priority:** High

- [ ] Integrate Stripe for subscription billing
- [ ] Create subscription tiers (Basic, Pro, Enterprise)
- [ ] Implement webhook handlers for payment events
- [ ] Build billing portal integration

---

## Phase 3: Front-End Integration (Week 4-5)

### 3.1 Replace Mock Data with Real APIs
**Owner:** Front-end dev  
**Priority:** Critical

- [ ] Create API client module (fetch/axios wrapper)
- [ ] Implement JWT token management
- [ ] Replace all mock data calls with real API calls
- [ ] Add loading states for API calls
- [ ] Implement error handling UI
- [ ] Add retry logic for failed requests

---

### 3.2 Authentication Integration
**Owner:** Front-end dev  
**Priority:** Critical

- [ ] Connect signup form to `POST /api/auth/register`
- [ ] Connect login form to `POST /api/auth/login`
- [ ] Implement JWT storage (httpOnly cookies or localStorage)
- [ ] Add protected route guards
- [ ] Implement auto-logout on token expiry
- [ ] Add "remember me" functionality

---

### 3.3 Platform Features Integration
**Owner:** Front-end dev  
**Priority:** Critical

- [ ] Wire up property search to real API
- [ ] Display real property data on detail pages
- [ ] Implement alert creation/management
- [ ] Connect dashboard to real statistics
- [ ] Integrate payment flow with Stripe

---

## Phase 4: Testing & Deployment (Week 5-6)

### 4.1 Testing
**Owner:** QA + Dev team  
**Priority:** Critical

- [ ] End-to-end user flow testing
- [ ] API integration testing
- [ ] Performance testing (page load, API response times)
- [ ] Security testing (auth, XSS, CSRF)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Load testing (concurrent users)

---

### 4.2 Deployment
**Owner:** DevOps  
**Priority:** Critical

- [ ] Set up production backend server
- [ ] Configure production database
- [ ] Set up SSL certificates
- [ ] Configure environment variables
- [ ] Deploy backend API
- [ ] Update reg.land DNS to point to platform
- [ ] Set up monitoring (Sentry, DataDog, etc.)
- [ ] Configure backup strategy

---

## Phase 5: Launch & Monitoring (Week 6+)

### 5.1 Soft Launch
- [ ] Beta testing with select solicitors (10-20 users)
- [ ] Collect feedback
- [ ] Fix critical bugs
- [ ] Optimize based on real usage

### 5.2 Public Launch
- [ ] Marketing campaign
- [ ] Monitor performance metrics
- [ ] Track user signups and retention
- [ ] Gather user feedback
- [ ] Iterate on features

---

## Technical Architecture Diagram

```
┌─────────────────┐
│   reg.land      │
│  (Marketing)    │ ← Static site (current)
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│   Platform Front-End                │
│  - Login/Signup                     │
│  - Dashboard                        │
│  - Search Interface                 │
│  - Alert Management                 │
└────────┬───────────────────────┬────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌──────────────────┐
│  Backend API    │    │  Payment (Stripe)│
│  - Auth         │    │  - Subscriptions │
│  - Properties   │    │  - Billing       │
│  - Alerts       │    └──────────────────┘
│  - Users        │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  External APIs                      │
│  - Land Registry Business Gateway   │
│  - Title Register API               │
│  - Change Notification Service      │
└─────────────────────────────────────┘
```

---

## Development Priorities

### Must Have (MVP)
1. User authentication (signup/login)
2. Property search by title number
3. Display basic property details
4. Single alert setup per user
5. Basic subscription payment

### Should Have (v1.1)
1. Advanced search (by address)
2. Multiple alerts per user
3. Change history visualization
4. Export property reports (PDF)
5. Team/organization accounts

### Nice to Have (v2.0)
1. Mobile app
2. Bulk property imports
3. API access for third parties
4. Advanced analytics dashboard
5. Integration with case management systems

---

## Resource Requirements

### Team
- **Front-End Developer:** 1 person, 6 weeks
- **Back-End Developer:** 1 person, 6 weeks
- **DevOps Engineer:** 0.5 person, 2 weeks
- **QA Tester:** 0.5 person, 2 weeks
- **Product Owner/PM:** 0.25 person (ongoing)

### Infrastructure Costs (Monthly)
- **Hosting:** £50-200 (AWS/DigitalOcean)
- **Database:** £20-100 (managed PostgreSQL)
- **Land Registry API:** £Variable (pay per search)
- **Stripe fees:** 1.5% + 20p per transaction
- **Monitoring/Tools:** £50-100

**Total Estimated Monthly:** £200-500 initially

---

## Key Decisions Needed

1. **Technology Stack:**
   - Backend: Node.js/Express, Python/FastAPI, or Ruby/Rails?
   - Frontend: Keep vanilla JS or upgrade to React/Next.js?
   - Database: PostgreSQL, MySQL, or MongoDB?

2. **Hosting:**
   - AWS, Google Cloud, Azure, or DigitalOcean?
   - Serverless (Vercel, Netlify) or traditional VPS?

3. **Pricing Model:**
   - Pay-per-search vs subscription tiers?
   - Free tier limitations?
   - Enterprise pricing?

4. **Feature Scope:**
   - Start with MVP or build more features first?
   - Which alerts are most valuable?

---

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Land Registry API changes | High | Medium | Cache aggressively, version API client |
| Slow API responses | High | High | Implement robust caching, queue system |
| Security breach | Critical | Low | Security audit, penetration testing |
| User adoption low | High | Medium | Beta testing, user feedback loops |
| Backend delays front-end | Medium | Medium | Mock data approach, parallel development |

---

## Success Metrics

### Phase 1 (Month 1)
- [ ] 50 beta users signed up
- [ ] 500+ property searches performed
- [ ] Average response time < 2 seconds

### Phase 2 (Month 3)
- [ ] 200+ active users
- [ ] 5000+ property searches/month
- [ ] 100+ alerts configured
- [ ] £5000+ MRR (Monthly Recurring Revenue)

### Phase 3 (Month 6)
- [ ] 500+ active users
- [ ] 20,000+ searches/month
- [ ] £15,000+ MRR
- [ ] 90%+ user satisfaction score

---

## Next Steps (This Week)

1. **Get feedback on this plan** - Review with stakeholders
2. **Choose tech stack** - Make technology decisions
3. **Start Phase 1.1** - Begin user journey mapping
4. **Hire/assign resources** - Get developers allocated
5. **Set up project tracking** - Use Jira, Linear, or Trello

---

## Questions to Answer

1. Do you have Land Registry API access already?
2. What's the budget for development?
3. Timeline constraints (hard launch date)?
4. Preferred technology stack?
5. Existing backend platform or starting from scratch?

---

**Document Version:** 1.0  
**Last Updated:** 9 December 2025  
**Owner:** RegLand Product Team
