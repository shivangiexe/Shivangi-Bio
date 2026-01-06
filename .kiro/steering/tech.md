# Tech Stack & Build System

## Core Technologies

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12 with custom CSS
- **Animations**: Motion (Framer Motion) 12.23.24
- **Icons**: Lucide React 0.487.0

## UI Component Libraries

- **Radix UI**: Comprehensive set of unstyled, accessible components
- **Material-UI**: Icons and some components (@mui/material, @mui/icons-material)
- **Custom Components**: Built on top of Radix primitives in `src/app/components/ui/`

## Key Dependencies

- **Class Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`
- **Forms**: `react-hook-form` with validation
- **Drag & Drop**: `react-dnd` with HTML5 backend
- **Date Handling**: `date-fns`, `react-day-picker`
- **Charts**: `recharts`
- **Notifications**: `sonner`
- **Theming**: `next-themes`

## Development Commands

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Configuration

- **Path Aliases**: `@/` maps to `./src/`
- **Package Manager**: npm (with pnpm overrides for Vite)
- **Module Type**: ESM (type: "module")
- **PostCSS**: Configured for Tailwind processing

## Build Requirements

- Both React and Tailwind plugins are required for Make compatibility
- Do not remove these plugins even if not actively used
- Vite version is pinned to 6.3.5 via pnpm overrides