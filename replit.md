# Ryland Environmental - Georgia Website

## Overview
This project is a comprehensive website for Ryland Environmental, showcasing their waste management and recycling services across Georgia. It features a WM-style homepage with 10 Georgia office locations, general service pages (Residential, Commercial, Roll-Off), and detailed location-specific pages (starting with Tifton). The site provides a modern, user-friendly interface for residents and businesses to learn about services, sign up, and access essential information including a Pay My Bill portal.

## User Preferences
I prefer simple language and clear explanations. I want iterative development with regular updates. Please ask before making major architectural changes or implementing new features. Ensure all new code adheres to the existing TypeScript and Tailwind CSS v4 conventions. Do not make changes to the existing folder structure unless explicitly discussed.

## System Architecture

### UI/UX Decisions
The design follows a professional green and blue color scheme, inspired by Waste Management (WM) for a familiar and trustworthy aesthetic. Call-to-action buttons are prominently red. The site is mobile-first responsive with consistent branding, including the Ryland logo and authentic equipment photos. Key UI elements include a WM-style header, an accordion-style footer, swipeable service cards, and a dedicated section for account access.

### Technical Implementations
The project is built with Next.js 16.0.7 using the App Router, TypeScript for type safety, and Tailwind CSS v4 for styling. It leverages server and client components for optimized performance. An API route (`/api/signup`) handles form submissions. Google My Maps is integrated for interactive service route visualization, and all equipment photos are high-quality, branded images. SEO is optimized for local commercial keywords, ensuring visibility for "commercial dumpster service Tifton GA" and similar queries.

### Feature Specifications

**General Service Pages:**
- **Residential Services** (`/residential`): General residential page with address search (links to trashjoes.com), three service types (Individual Subscription, HOA Partnerships, Contract Towns), service areas grid with all 10 office locations, HOA/municipal contact form, and FAQs. Breadcrumb: Home > Residential Services.
- **Commercial Dumpsters** (`/commercial`): General commercial page with dumpster sizes (4, 6, 8 yard), service areas with office links, and contact CTAs. Breadcrumb: Home > Commercial Dumpsters.
- **Roll-Off Dumpsters** (`/roll-off`): General roll-off page with container sizes (20, 30, 40 yard) with product images, service areas, Order Online and phone CTAs. Breadcrumb: Home > Roll-Off Dumpsters.
- **FAQs** (`/faq`): Comprehensive FAQ page with 5 categories (Residential, Commercial, Roll-Off, Billing, HOA/Municipal), jump links, and contact CTA. Breadcrumb: Home > FAQs.
- **Pay My Bill** (`/pay-my-bill`): Landing page with direct link to AMCS payment portal (iframe blocked by CSP).

**Home & Navigation:**
- **Home Page** (`/`): WM-style design with 3 CTA buttons (Residential Signup, Find Locations, Order Rolloff), services carousel, Georgia office locations (10 total with towns served), and contact information.
- **Header Navigation**: 7 links - Residential, Commercial, Rolloffs, Locations, Contact, Order Service, Pay My Bill.

**Location-Specific Pages (Tifton):**
- **Tifton Office Overview** (`/tifton`): Office landing page with hero, 4 service cards (Residential, Commercial, Roll-Off & Industrial, Recycling), Service Areas section explaining City of Tifton vs Tift County coverage, contact information, and FAQ CTA.
- **Residential Service Help Guide** (`/tifton/residential`): Complete City Hall signup guide with breadcrumb navigation. Includes City Hall address (130 1st Street East), phone, hours, directions button, required documents (Photo ID + Proof of Residence), step-by-step process, pickup day color schedule, holiday schedule, and a callout for customers who already signed up but haven't received their cart.
- **Commercial Services** (`/tifton/commercial`): Business dumpster services for City of Tifton. Container sizes (4, 6, 8 yard), pickup frequency options, commercial rates.
- **Roll-Off & Industrial Services** (`/tifton/roll-off`): Construction dumpsters and industrial compactors for all of Tift County. Container sizes (10-40 yard), material guidelines, industrial equipment options.
- **Recycling Page** (`/tifton/recycling`): Modern design promoting free recycling drop-off in Tifton. Includes impact statistics, drop-off location (2508 Carpenter Rd S), accepted materials grid, items not accepted, and quick recycling tips.
- **Tift County Services Page** (`/tift-county`): Roll-off container services for areas outside city limits, with notice that residential curbside service is City of Tifton only.
- **FAQ Hub** (`/tifton/faq`): 20 individual FAQ pages covering various service aspects, accessible from the Tifton office page.

### Breadcrumb Navigation
All subpages include breadcrumb navigation with JSON-LD schema markup for SEO. Breadcrumbs are rendered using the reusable `components/Breadcrumb.tsx` component.

**Breadcrumb format by page:**
- `/residential`: Home > Residential Services
- `/commercial`: Home > Commercial Dumpsters
- `/roll-off`: Home > Roll-Off Dumpsters
- `/faq`: Home > FAQs
- `/tifton/residential`: Tifton Office > Residential
- `/tifton/commercial`: Tifton Office > Commercial Dumpsters
- `/tifton/roll-off`: Tifton Office > Roll-Off & Industrial
- `/tifton/recycling`: Tifton Office > Recycling
- `/tifton/faq`: Tifton Office > FAQs
- `/tifton/faq/[slug]`: Tifton Office > FAQs > [FAQ Title]
- `/tift-county`: Home > Tift County

**Not applicable:** Home page (`/`), Tifton Office page (`/tifton`), and Pay My Bill page (`/pay-my-bill`) do not have breadcrumbs as they are top-level pages.

### System Design Choices
The application uses Next.js API routes for backend logic, such as form submissions, ensuring a streamlined full-stack development approach within the Next.js framework. The project structure is organized for maintainability, separating components, API routes, and page-specific content. Environment variables are used for sensitive information like email addresses.

## External Dependencies
- **Replit Mail**: Used for sending emails from the signup form to multiple recipients. Requires `CITY_OF_TIFTON_EMAIL` and `RYLAND_EMAIL` environment variables.
- **Google My Maps**: Integrated on the City of Tifton services page to display interactive service schedules and routes.
- **Tailwind CSS v4 with @tailwindcss/postcss**: For utility-first CSS styling.