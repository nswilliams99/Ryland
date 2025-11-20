# Ryland Environmental - Tifton Demo Website

## Project Overview
Three-page demo website for Ryland Environmental's Tifton, Georgia location. Built with Next.js 16.0.3 App Router, TypeScript, and Tailwind CSS v4. Features a simple signup form that emails both the City of Tifton and Ryland Environmental via Replit Mail integration.

## Tech Stack
- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Runtime**: Node.js 20

## Project Structure
```
/
├── app/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Navigation with Ryland logo
│   │   ├── Footer.tsx     # Site footer
│   │   └── SignupForm.tsx # City trash signup form
│   ├── api/
│   │   └── signup/
│   │       └── route.ts   # Form submission handler
│   ├── utils/
│   │   └── replitmail.ts  # Email utility using Replit Mail
│   ├── tifton/            # City of Tifton services page
│   │   └── page.tsx
│   ├── tift-co/           # Tift County services page
│   │   └── page.tsx
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and Tailwind config
├── public/
│   └── images/            # Equipment photos and logo
│       ├── logo.png
│       ├── 96-gallon-cart.jpg
│       ├── 4-yard-frontload.jpg
│       └── 20-yard-rolloff.jpg
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Pages

### 1. Home Page (`/`)
- **Hero Section**: Professional waste management for Tifton & Tift County
- **Services Overview**: Three main service types with CTAs
  - Residential Service (exclusive City of Tifton)
  - Commercial Solutions (inside city limits)
  - Roll-Off Containers (construction & cleanup)
- **Service Areas**: Side-by-side comparison of city vs county services
- **CTA Section**: Sign up for city service or call for quotes

### 2. City of Tifton Services (`/tifton`)
- **Three Service Types**:
  - Residential: Exclusive provider, 96-gallon carts, weekly pickup, recycling
  - Commercial: 96-gallon carts + 4, 6, 8-yard front-load dumpsters
  - Roll-Off Containers: 20, 30, 40-yard for large projects
- **Equipment Photos**: Visual showcase of actual equipment
- **Service Schedule & Routes Map**: Interactive Google My Maps embed
  - Shows pickup days and routes for City of Tifton
  - Color-coded legend (Red=Monday, Blue=Tuesday, Yellow=Thursday, Purple=Friday)
  - Responsive iframe (500px mobile, 600px desktop)
  - Centered with max-width 1200px, zoomed in for detail
  - Lazy loading for performance
- **Holiday Schedule**: Family-focused company values
  - New Year's Day, Memorial Day, Thanksgiving, Christmas
  - Important notice: Service runs one day behind after holidays
  - Professional card layout with icons
- **Signup Form**: Simple form for residential trash service
  - Fields: Name, Email, Phone, Address, Number of Cans
  - Sends to both City of Tifton and Ryland Environmental
  - Uses Replit Mail integration

### 3. Tift County Services (`/tift-co`)
- **Notice**: Outside city limits = roll-offs only
- **Roll-Off Container Sizes**: 20, 30, 40-yard options
- **Project Types**: Construction, demolition, cleanup
- **Accepted/Not Accepted Materials**: Clear waste guidelines
- **CTA**: Call for quotes

## Key Features

### Email Integration
- ✅ Replit Mail connector for sending emails
- ✅ Dual-recipient delivery (City of Tifton + Ryland Environmental)
- ✅ Form validation with error handling
- ✅ Success/failure user feedback
- ⚠️ Requires CITY_OF_TIFTON_EMAIL and RYLAND_EMAIL environment variables

### Design
- Professional green and blue color scheme
- Mobile-first responsive layout
- Ryland logo in header navigation
- Equipment photos (96-gal cart, 4-yard front-load, 20-yard rolloff)
- Consistent branding throughout
- Clear call-to-action buttons
- Service cards with hover effects

### Technical
- TypeScript for type safety
- Tailwind CSS v4 custom theme
- Server and client components optimized
- API route for form submission (/api/signup)
- Fast refresh for development
- Production-ready build configuration

## Development

### Running Locally
```bash
npm run dev
```
App runs on port 5000 (configured for Replit webview)

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Color Scheme
- **Primary (Green)**: Environmental, sustainable
  - primary-600: #16a34a (main brand)
  - primary-700-900: Darker shades for gradients
  
- **Accent (Blue)**: Trust, professionalism
  - accent-600: #2563eb (secondary actions)
  - accent-700-900: Darker shades for variety

## Recent Changes
- **2025-11-20**: Tifton-focused demo site completed
  - Restructured to 3-page Tifton demo (Home, City of Tifton, Tift County)
  - Updated navigation: renamed /tifton-trash → /tifton, changed nav labels
  - Created simple signup form (name, email, phone, address, number of cans)
  - Implemented Replit Mail integration for dual-recipient email delivery
  - Added Ryland logo to header and equipment photos
  - Built API route (/api/signup) for form submissions with error handling
  - **Added Google My Maps integration** to /tifton page showing service routes
  - **Upgraded to professional branded equipment photography** across all pages:
    - Home page service cards now feature real equipment (96-gal cart, 6-yard front-load, 20-yard rolloff)
    - /tifton equipment section showcases Ryland-branded dumpsters and carts
    - /tift-co displays all 3 rolloff sizes (20/30/40-yard) with dimension diagrams
    - Replaced icon-only placeholders with high-quality product photos
  - **Enhanced service box styling** with 4px green borders and large shadows for better contrast
  - **Added Cart Placement Guidelines section** to /tifton page:
    - Professional Ryland-branded cart image showing proper lid placement
    - Clear instructions: "3 Feet Apart, Wheels Towards House"
    - 6 AM curbside placement reminder
  - Architect reviewed and approved all changes as meeting requirements

## Future Enhancements
- Add customer portal for account management
- Implement online service request system
- Interactive service area map with address lookup
- Blog/news section for updates
- Analytics integration for conversion tracking
- Contact form backend integration
- Image optimization with Next.js Image component
- Add actual business photos and testimonials

## Notes
- Uses Tailwind CSS v4 syntax (@import "tailwindcss" and @theme)
- Port 5000 required for Replit webview integration
- LSP diagnostics can be ignored - they're Tailwind v4 compatibility warnings
- All forms are frontend-only (need backend integration for production)

## Production Checklist
Before deploying to production, update the following placeholder information:

### Contact Information (Update in multiple locations)
1. **Footer Component** (`app/components/Footer.tsx`):
   - Phone number: Currently "(123) 456-7890"
   - Email: Currently "info@rylandenvironmental.us"
   - Address details

2. **Home Page Contact Section** (`app/page.tsx`):
   - Phone number in contact info
   - Email address
   - Service area details

3. **JSON-LD Structured Data** (`app/page.tsx`):
   - streetAddress (currently blank)
   - postalCode (currently blank)
   - telephone
   - business hours if different
   - geo coordinates (currently set to Tifton approximate location)

### Optional Enhancements
- Add Open Graph image (/og-image.jpg) for better social media sharing
- Add Google verification code in metadata if needed
- Update service schedules on Tifton Trash page with actual pickup days
