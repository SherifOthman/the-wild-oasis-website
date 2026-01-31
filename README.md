# 🏨 The Wild Oasis - Customer Booking Website

> **Next.js Customer Website** for luxury cabin bookings with Google authentication and real-time availability


## 🔗 **Live Demo**

- **🌐 Live Website**: [https://the-wild-oasis-website-tau-cyan.vercel.app](https://the-wild-oasis-website-tau-cyan.vercel.app)
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **🔐 Google Login**: OAuth authentication required for bookings

## 🎯 **What This Project Is**

A customer-facing website for "The Wild Oasis" luxury cabin hotel. Guests can browse cabins, check availability, make reservations, and manage their bookings with Google authentication integration.

## 🛠️ **Technology Stack**

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | Frontend library with server components |
| **Tailwind CSS** | Utility-first styling framework |
| **Supabase** | Backend database and storage |
| **NextAuth v5** | Authentication with Google OAuth |
| **React Day Picker** | Interactive date selection |
| **date-fns** | Date manipulation utilities |

## ✅ **Key Features Implemented**

### **Cabin Browsing & Booking**
- ✅ **Cabin Gallery** - Browse all available luxury cabins with detailed information
- ✅ **Capacity Filtering** - Filter by guest capacity (small 1-3, medium 4-7, large 8-12)
- ✅ **Interactive Date Picker** - Visual calendar with real-time availability checking
- ✅ **Dynamic Pricing** - Automatic price calculation based on dates and discounts
- ✅ **Booking Constraints** - Respects min/max booking length settings

### **Authentication & User Management**
- ✅ **Google OAuth** - Secure login with Google accounts
- ✅ **Automatic Guest Creation** - Creates guest profile on first login
- ✅ **Profile Management** - Update nationality and national ID with validation
- ✅ **Session Management** - Persistent login with guest ID tracking

### **Reservation Management**
- ✅ **View Reservations** - Complete list of user's bookings (past and upcoming)
- ✅ **Edit Bookings** - Modify guest count and observations for upcoming reservations
- ✅ **Delete Reservations** - Cancel bookings with authorization checks
- ✅ **Booking Details** - Dates, duration, guest count, total price, creation date
- ✅ **Optimistic Updates** - Instant UI feedback during operations

### **User Experience**
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Server Components** - Default for data fetching and SEO optimization
- ✅ **Loading States** - Spinners and skeleton screens
- ✅ **Error Handling** - Graceful error messages and fallbacks

### **Content & Pages**
- ✅ **Home Page** - Hero section with call-to-action
- ✅ **About Page** - Hotel information and description
- ✅ **Account Dashboard** - User account overview and management
- ✅ **Booking Confirmation** - Thank you page after successful booking

## 🏗️ **Architecture**

**Next.js App Router Structure:**
- **app/_components/** - Reusable React components
- **app/_lib/** - Business logic, authentication, and data services
- **app/cabins/** - Cabin browsing and booking pages
- **app/account/** - User account management pages

**Key Patterns:**
- **Server Components** - Default for data fetching and SEO
- **Client Components** - Interactive features with "use client"
- **Server Actions** - Form handling and mutations
- **Optimistic Updates** - Instant UI feedback

## 💾 **Database**

**Supabase (PostgreSQL):**
- **cabins** - Cabin information with images and pricing
- **guests** - Guest profiles linked to Google OAuth accounts
- **bookings** - Reservations with guest and cabin relationships
- **settings** - Hotel configuration (min/max booking length)

## 🔄 **Key Workflows**

**Booking Process:**
1. User selects cabin → views details page
2. Chooses dates → system checks availability
3. Calculates price → (regularPrice - discount) × nights
4. Fills booking form → submits with guest info
5. Server action creates booking → redirects to confirmation

**Authentication Flow:**
1. User clicks login → redirected to Google OAuth
2. Google returns user data → NextAuth processes
3. System creates guest if new → session enriched with guest ID

## 🚀 **Quick Start**

**Prerequisites:** Node.js 18+, Supabase account, Google OAuth credentials

**Environment Variables:**
```bash
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

**Setup:**
```bash
npm install
# Create .env.local with environment variables
npm run dev
# Access: http://localhost:3000
```

## 📊 **Project Stats**

- **8 Pages** - Complete booking website functionality
- **20+ Components** - Reusable React components
- **6 Server Actions** - Secure mutation functions
- **4 Database Tables** - Normalized schema
- **Google OAuth** - NextAuth v5 integration
- **Mobile-First** - Responsive Tailwind CSS design

---

**Part of:** React Course by Jonas Schmedtmann - Customer-facing hotel booking website
