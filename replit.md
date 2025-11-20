# Ryland Environmental Website

## Project Overview
Professional waste management and environmental services website for Ryland Environmental, serving Tifton and Tift County, Georgia. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS v4 with comprehensive SEO optimization.

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
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── tifton-trash/      # Tifton trash services page
│   │   └── page.tsx
│   ├── tift-co/           # Tift County services page
│   │   └── page.tsx
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page with structured data
│   └── globals.css        # Global styles and Tailwind config
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Pages

### 1. Home Page (`/`)
- **Hero Section**: Clear value proposition with CTAs
- **Services Showcase**: 6 key services with icons and descriptions
- **Why Choose Us**: 4 key differentiators
- **Contact Form**: Lead generation with service selection
- **SEO Features**:
  - JSON-LD structured data for LocalBusiness
  - Optimized meta tags and Open Graph
  - Semantic HTML5 structure
  - Fast Core Web Vitals

### 2. Tifton Trash Services (`/tifton-trash`)
- Residential trash pickup details
- Weekly pickup schedule by area
- Recycling program information
- Yard waste collection details
- Clear CTAs for service signup

### 3. Tift County Services (`/tift-co`)
- Service area coverage map (8 communities)
- Commercial waste solutions
- Roll-off container rentals (10, 20, 30-yard)
- Industries served
- Special services (construction debris, events)

## Key Features

### SEO Optimization
- ✅ Comprehensive metadata in root layout
- ✅ JSON-LD structured data for search engines
- ✅ Open Graph and Twitter Card tags
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Alt text for all icons and images
- ✅ Mobile-first responsive design
- ✅ Fast page loads with Next.js optimization

### Design
- Professional green and blue color scheme
- Mobile-first responsive layout
- Accessible navigation with mobile menu
- Consistent branding throughout
- Clear call-to-action buttons
- Service cards with hover effects

### Technical
- TypeScript for type safety
- Tailwind CSS v4 custom theme
- Server and client components optimized
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
- **2025-11-20**: Initial project setup
  - Created Next.js app with TypeScript and Tailwind CSS v4
  - Implemented three main pages with SEO optimization
  - Added structured data and comprehensive metadata
  - Configured responsive navigation and footer
  - Set up development workflow on port 5000

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
- Add real business photos to replace icon-only design
