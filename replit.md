# Ryland Environmental - Tifton Demo Website

## Overview
This project is a four-page demo website for Ryland Environmental's Tifton, Georgia location, showcasing their waste management and recycling services. It aims to provide a modern, user-friendly interface for residents and businesses to learn about services, sign up, and access essential information. The site features a simple signup form with email integration, a dedicated recycling page, and detailed service information for both the City of Tifton and Tift County. The business vision is to establish a strong online presence for Ryland Environmental, emphasizing their family-owned values and commitment to the local community, with market potential in expanding their digital reach and streamlining customer interactions.

## User Preferences
I prefer simple language and clear explanations. I want iterative development with regular updates. Please ask before making major architectural changes or implementing new features. Ensure all new code adheres to the existing TypeScript and Tailwind CSS v4 conventions. Do not make changes to the existing folder structure unless explicitly discussed.

## System Architecture

### UI/UX Decisions
The design follows a professional green and blue color scheme, inspired by Waste Management (WM) for a familiar and trustworthy aesthetic. Call-to-action buttons are prominently red. The site is mobile-first responsive with consistent branding, including the Ryland logo and authentic equipment photos. Key UI elements include a WM-style header, an accordion-style footer, swipeable service cards, and a dedicated section for account access.

### Technical Implementations
The project is built with Next.js 16.0.3 using the App Router, TypeScript for type safety, and Tailwind CSS v4 for styling. It leverages server and client components for optimized performance. An API route (`/api/signup`) handles form submissions. Google My Maps is integrated for interactive service route visualization, and all equipment photos are high-quality, branded images. SEO is optimized for local commercial keywords, ensuring visibility for "commercial dumpster service Tifton GA" and similar queries.

### Feature Specifications
- **Home Page**: WM-style design with a hero section, location finder, services carousel, quick account access, Georgia office locations, and contact information.
- **City of Tifton Services Page**: Details residential, commercial, and roll-off services. Includes equipment photos, an interactive Google My Maps embed for service routes, a holiday schedule, a free recycling promotion, and a residential signup form. Features a comprehensive FAQ hub with 20 individual FAQ pages covering various service aspects.
- **Recycling Page**: Modern design promoting free recycling drop-off in Tifton. Includes impact statistics, drop-off location details, a grid of accepted materials, a list of items not accepted, and quick recycling tips.
- **Tift County Services Page**: Focuses on roll-off container services for areas outside city limits, detailing container sizes and material guidelines.

### System Design Choices
The application uses Next.js API routes for backend logic, such as form submissions, ensuring a streamlined full-stack development approach within the Next.js framework. The project structure is organized for maintainability, separating components, API routes, and page-specific content. Environment variables are used for sensitive information like email addresses.

## External Dependencies
- **Replit Mail**: Used for sending emails from the signup form to multiple recipients. Requires `CITY_OF_TIFTON_EMAIL` and `RYLAND_EMAIL` environment variables.
- **Google My Maps**: Integrated on the City of Tifton services page to display interactive service schedules and routes.
- **Tailwind CSS v4 with @tailwindcss/postcss**: For utility-first CSS styling.