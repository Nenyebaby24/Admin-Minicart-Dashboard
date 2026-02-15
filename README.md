# Project Name

A modern web application called Mini-Cart, built with React, Vite, Tailwind CSS,



## Tech Stack

- React
- Vite
- Tailwind CSS
- Supabase (Database & Auth)
- Lucide Icons
- Recharts



# Setup Instructions

## 1️⃣ Clone the repository

bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


# Install dependencies
bash npm install

# Start development server
bash npm run dev
App will run at:
http://localhost:5173

# Data Configuration
This project uses internal mock data (JSON/Objects) located within the component files to simulate a live API environment.

No external database (PostgreSQL/MongoDB) is required.

No .env file or environment variables are necessary for the current build.

# Running Tests

bash npm run test


For watch mode:

bash npm run test:watch


I Made sure test dependencies are installed:

bash npm install --save-dev vitest

# Running the Project
Development Mode
To view the interactive dashboard in your browser:

Testing the UI
To ensure component reliability and state management:

# ✨ UI Features & Design Tokens
Interactive Sidebar: Dynamic navigation where the dark blue highlight (#150B3D) moves based on the selection state managed in App.jsx.

Figma-Aligned Stat Cards: Four key metric cards featuring custom hex-coded pastel backgrounds and matching icon colors.

Dynamic Badges: Custom Badge component that toggles between "increased" and "decreased" labels based on the isUp prop.

# 🎨 Color Palette
Primary Navy: #150B3D (Sidebar active state)

Highlight Red: #FF6B6B (Decreased metrics & Logo)

Success Green: #0CA678 (Increased metrics)

Pastel Accents: #748FFC (Revenue), #FDAD5F (Stores), #D63384 (Referrals)

# Build for Production
bash npm run build


Preview production build:

bash npm run preview

# Project Structure

src/
├── assets/                   # Static files
│   ├── images/               # Profile pictures, logos, illustrations
│   └── icons/                # Custom SVG icons (if not using Lucide)
│
├── components/               # Reusable UI building blocks (Atomic design)
│   ├── ui/                   # Base reusable components
│   │   ├── Button.jsx        # Custom button component
│   │   ├── Card.jsx          # Reusable card wrapper
│   │   ├── Input.jsx         # Styled input field
│   │   └── Badge.jsx         # Status & percentage indicators
│   │
│   ├── layout/               # Layout-related components
│   │   ├── Sidebar.jsx       # Left navigation menu
│   │   ├── TopNav.jsx        # Top navigation bar
│   │   └── Shell.jsx         # Main layout wrapper (Sidebar + TopNav + Outlet)
│
├── features/                 # Feature-based modular architecture
│   ├── dashboard/            # Dashboard module
│   │   ├── components/       # Dashboard-only UI components
│   │   │   ├── StatCard.jsx
│   │   │   └── RevenueChart.jsx
│   │   ├── hooks/            # Custom hooks for dashboard data
│   │   ├── services/         # Dashboard API/data logic
│   │   └── Dashboard.jsx     # Dashboard page
│   │
│   ├── revenue/              # Revenue feature module
│   │   ├── components/       # Revenue-specific components (if needed)
│   │   ├── services/         # Revenue-related API calls
│   │   └── Revenue.jsx       # Revenue page
│   │
│   ├── locations/            # Locations feature module
│   │   ├── components/       # Location-specific components
│   │   ├── services/         # Location-related API logic
│   │   └── Locations.jsx     # Locations page
│
├── styles/                   # Global styling
│   └── index.css             # Tailwind directives + global styles
│
├── utils/                    # Utility/helper functions
│   ├── formatCurrency.js     # Currency formatter helper
│   └── cn.js                 # Tailwind class merging utility (clsx + tailwind-merge)
│
├── App.jsx                   # Main routing configuration
└── main.jsx                  # Application entry point


# Deployment
To deploy:

bash npm run build

I Uploaded the dist/ folder to:

Vercel

# Author

Chinenye Udo
Frontend Developer