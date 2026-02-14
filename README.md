# The Wild Oasis - Customer Booking Website

A Next.js customer-facing website for cabin bookings, built to learn Next.js App Router, Server Components, and OAuth authentication.

**Live Demo**: https://the-wild-oasis-website-tau-cyan.vercel.app

## Purpose

This project demonstrates how to build a customer booking system where users can browse cabins, check availability, make reservations, and manage their bookings. It focuses on Next.js 14 features like Server Components, Server Actions, and modern authentication patterns.

## Architecture

**Next.js App Router Structure**:
```
app/
├── _components/       # Reusable React components
├── _lib/              # Business logic and data services
├── cabins/            # Cabin browsing and booking
├── account/           # User account management
└── api/               # API routes for auth
```

**Key Design Decisions**:
- Server Components by default for better performance
- Client Components only when interactivity is needed
- Server Actions for form submissions and mutations
- NextAuth v5 for Google OAuth integration

## Technical Skills Demonstrated

**Next.js App Router**:
- Server Components for data fetching without client-side JavaScript
- Client Components marked with `"use client"` for interactivity
- Server Actions for form handling and mutations
- Middleware for authentication checks

**Server vs Client Components**:
- Server: Data fetching, static content, SEO-friendly pages
- Client: Interactive forms, date pickers, buttons with state
- Understanding when to use each improves performance

**Authentication Flow**:
- Google OAuth with NextAuth v5
- Session management with JWT tokens
- Automatic guest profile creation on first login
- Protected routes that require authentication

**Data Fetching**:
- Server-side data fetching in Server Components
- No loading spinners for initial page load (SSR)
- Supabase client for database queries
- Date-based availability checking

**Form Handling**:
- Server Actions for form submissions
- Optimistic UI updates for instant feedback
- Form validation and error handling
- File uploads (national ID, profile images)

## Implementation Details

**Server Component Example**:
```javascript
// Fetches data on the server, no client-side JavaScript
async function CabinList() {
  const cabins = await getCabins(); // Direct database call
  return <div>{cabins.map(cabin => <CabinCard cabin={cabin} />)}</div>;
}
```

**Server Action Example**:
```javascript
// Form submission handled on the server
async function createBooking(formData) {
  'use server';
  const booking = await insertBooking(formData);
  revalidatePath('/account/reservations');
  redirect('/cabins/thankyou');
}
```

**Authentication Flow**:
1. User clicks "Sign in with Google"
2. NextAuth redirects to Google OAuth
3. Google returns user data
4. System creates guest profile if new user
5. Session enriched with guest ID for bookings

**Booking Process**:
1. Browse cabins with filtering by capacity
2. Select cabin and view details
3. Choose dates with interactive calendar
4. System checks availability against existing bookings
5. Calculate price: (regularPrice - discount) × nights
6. Submit booking form with guest count and observations
7. Server Action creates booking in database
8. Redirect to confirmation page

**Optimistic Updates**:
- Delete booking: UI updates immediately, rollback on error
- Edit booking: Shows changes before server confirms
- Improves perceived performance

## Technology Stack

- Next.js 14 with App Router
- React 18 with Server Components
- NextAuth v5 for Google OAuth
- Supabase for database and storage
- Tailwind CSS for styling
- React Day Picker for date selection
- date-fns for date manipulation

## What I Learned

**Server Components Benefits**:
- Zero JavaScript shipped for static content
- Data fetching happens on the server (faster, more secure)
- SEO-friendly with fully rendered HTML
- Reduces client-side bundle size significantly

**Server Actions**:
- Simplify form handling without API routes
- Type-safe with TypeScript
- Automatic revalidation of cached data
- Can be called from Client Components

**Next.js App Router**:
- File-based routing with conventions (page.js, layout.js, loading.js)
- Nested layouts share UI across routes
- Loading and error states handled declaratively
- Parallel routes and intercepting routes for advanced patterns

**OAuth Integration**:
- NextAuth v5 simplifies OAuth significantly
- Session management handled automatically
- Callbacks allow custom logic (create guest profile)
- Middleware protects routes without manual checks

**Real-World Challenges**:
- Server vs Client Components requires careful planning
- Date handling across timezones is complex
- Availability checking needs careful database queries
- Optimistic updates require rollback logic

**Performance Considerations**:
- Server Components reduce JavaScript bundle
- Static generation for pages that don't change
- Image optimization with next/image
- Lazy loading for client-side components

## Project Stats

- 8 pages with full booking functionality
- 20+ components (mix of Server and Client)
- 6 Server Actions for mutations
- 4 database tables (cabins, guests, bookings, settings)
- Google OAuth integration
- Mobile-responsive design

---

**Learning Focus**: Next.js App Router, Server Components, Server Actions, and OAuth authentication with NextAuth
