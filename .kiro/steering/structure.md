# Project Structure & Organization

## Root Directory

```
├── src/                    # Source code
├── public/                 # Static assets
├── guidelines/             # Project guidelines
├── .kiro/                  # Kiro configuration
├── node_modules/           # Dependencies
├── index.html              # Entry HTML file
├── vite.config.ts          # Vite configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Project dependencies
```

## Source Structure (`src/`)

```
src/
├── main.tsx                # Application entry point
├── app/
│   ├── App.tsx            # Main application component
│   └── components/        # React components
│       ├── ui/            # Reusable UI components (Radix-based)
│       ├── figma/         # Figma-specific components
│       └── *.tsx          # Custom application components
└── styles/
    ├── index.css          # Main stylesheet (imports others)
    ├── tailwind.css       # Tailwind imports
    ├── fonts.css          # Font definitions
    └── theme.css          # Theme variables
```

## Component Organization

### Custom Components (`src/app/components/`)
- **AnimatedBackground.tsx**: Background animation effects
- **CursorGlow.tsx**: Mouse cursor glow effect
- **FloatingElement.tsx**: Floating UI elements
- **MacDock.tsx**: macOS-style dock component
- **MacMenuBar.tsx**: macOS-style menu bar
- **MacWindow.tsx**: macOS-style window component
- **MagneticButton.tsx**: Interactive magnetic button effect
- **SkillCard.tsx**: Skill showcase cards

### UI Components (`src/app/components/ui/`)
- Built on Radix UI primitives
- Styled with Tailwind CSS
- Accessible and customizable
- Include utilities like `use-mobile.ts` and `utils.ts`

### Figma Components (`src/app/components/figma/`)
- **ImageWithFallback.tsx**: Image component with fallback handling

## Styling Architecture

- **CSS Imports**: All styles imported through `src/styles/index.css`
- **Tailwind**: Primary styling system with custom configuration
- **Custom CSS**: Theme variables and font definitions
- **Component Styles**: Inline styles and Tailwind classes

## Asset Management

- **Static Assets**: Stored in `public/` directory
- **Images**: Profile photos and other media assets
- **Fonts**: Defined in `src/styles/fonts.css`

## Naming Conventions

- **Components**: PascalCase (e.g., `SkillCard.tsx`)
- **Files**: kebab-case for non-components (e.g., `use-mobile.ts`)
- **Directories**: lowercase with hyphens
- **CSS Classes**: Tailwind utility classes preferred

## Import Patterns

- Use `@/` alias for src imports: `import { Component } from '@/app/components/Component'`
- Relative imports for nearby files
- Named exports preferred over default exports for utilities