# 🚀 ShadCN UI + Next.js Practice Repository

A comprehensive learning repository for practicing with **ShadCN UI** components in a **Next.js 15** application with **Turbopack** support. This project demonstrates modern React development using accessible, beautifully designed components from the ShadCN UI library.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Components](#components)
- [Pages](#pages)
- [Styling & Theming](#styling--theming)
- [Configuration](#configuration)
- [Learning Exercises](#learning-exercises)
- [Future Enhancements](#future-enhancements)

## 🎯 Overview

This repository serves as a hands-on learning environment for:
- **Next.js 15** with App Router and Turbopack
- **ShadCN UI** component library integration
- **TypeScript** best practices
- **Tailwind CSS** styling with custom themes
- **Radix UI** primitives for accessibility
- Modern React patterns and hooks

## 🛠 Tech Stack

### Core Technologies
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with Server Components
- **TypeScript 5** - Type-safe JavaScript
- **Turbopack** - Next-generation bundler for development

### UI & Styling
- **ShadCN UI** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Geist Fonts** - Modern typefaces from Vercel

### Styling Utilities
- **Class Variance Authority (CVA)** - Component variant management
- **Tailwind Merge** - Intelligent Tailwind class merging
- **tw-animate-css** - Animation utilities
- **clsx** - Conditional className utility

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page (landing)
│   ├── layout.tsx         # Root layout with fonts
│   ├── globals.css        # Global styles & CSS variables
│   ├── chai/              # Practice page
│   │   └── page.tsx
│   └── shadcn/            # ShadCN components showcase
│       └── page.tsx
├── components/
│   └── ui/               # ShadCN UI components
│       ├── button.tsx
│       ├── accordion.tsx
│       └── alert-dialog.tsx
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

## ✨ Features

### 🧩 Implemented Components

1. **Button Component**
   - Multiple variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `custom`
   - Different sizes: `default`, `sm`, `lg`, `icon`
   - Accessible with proper focus states
   - Custom styling support

2. **Accordion Component**
   - Collapsible content sections
   - Single and multiple collapsible variants
   - Smooth animations
   - Keyboard navigation support

3. **Alert Dialog Component**
   - Modal dialogs for critical actions
   - Accessible with focus trap
   - Customizable header, footer, and content
   - Action and cancel buttons

### 🎨 Design System

- **Dark mode support** with CSS variables
- **Custom color palette** using OKLCH color space
- **Responsive design** patterns
- **Accessible components** following ARIA guidelines
- **Custom animations** with Tailwind utilities

### 📱 Pages

- **Home Page** (`/`) - Landing page with navigation buttons
- **Chai Page** (`/chai`) - Profile page demonstration
- **ShadCN Page** (`/shadcn`) - Component showcase with accordions and alert dialogs

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.17+** 
- **npm** or **yarn** 
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shadcn-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
```bash
npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production with Turbopack |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🧩 Components

### Button Component

```tsx
import { Button } from "@/components/ui/button"

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Custom variant (defined in button.tsx)
<Button variant="custom">Custom Button</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### Accordion Component

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question here?</AccordionTrigger>
    <AccordionContent>Answer content here.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Alert Dialog Component

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## 🎨 Styling & Theming

### CSS Variables

The project uses CSS variables for theming:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  /* ... more variables */
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  /* ... dark mode variables */
}
```

### Custom Colors

The project includes:
- **Background**: Custom dark gray (`#473f3f`)
- **Primary**: Blue variants for buttons
- **Typography**: Custom font stacking

### Utility Function

```tsx
import { cn } from "@/lib/utils"

// Intelligently merge Tailwind classes
const className = cn(
  "base-classes",
  condition && "conditional-classes",
  "final-classes"
)
```

## ⚙️ Configuration

### ShadCN UI Configuration (`components.json`)

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### TypeScript Configuration

- **Strict mode** enabled
- **Path aliases** configured (`@/*`)
- **Next.js** plugin integration
- **Modern ESNext** target

### ESLint Configuration

- **Next.js** recommended rules
- **TypeScript** support
- **Modular** configuration approach

## 📚 Learning Exercises

### Beginner Level

1. **Customize Button Variants**
   - Add new color variants
   - Experiment with sizes
   - Implement hover effects

2. **Accordion Enhancements**
   - Multiple accordion behavior
   - Customize animations
   - Add icons to triggers

### Intermediate Level

3. **Theme Integration**
   - Implement dark/light mode toggle
   - Create custom color schemes
   - Add theme persistence

4. **Component Composition**
   - Combine components to build complex UIs
   - Create reusable component patterns
   - Implement form layouts

### Advanced Level

5. **Performance Optimization**
   - Implement lazy loading
   - Add component memoization
   - Optimize bundle size

6. **Accessibility Enhancements**
   - Add ARIA labels
   - Implement keyboard navigation
   - Ensure screen reader compatibility

## 🔮 Future Enhancements

### Planned Features

- [ ] **Additional ShadCN Components**
  - Card, Input, Select, Checkbox, Radio Group
  - Table, Dialog, Sheet, Tooltip, Popover
  - Calendar, Date Picker, Progress, Spinner

- [ ] **Form Handling**
  - React Hook Form integration
  - Zod validation
  - Error handling patterns

- [ ] **Animation Enhancements**
  - Framer Motion integration
  - Page transitions
  - Micro-interactions

- [ ] **State Management**
  - Context API examples
  - Zustand integration
  - Server state management

- [ ] **Testing**
  - Jest + React Testing Library
  - Component testing examples
  - Visual regression testing

- [ ] **Performance**
  - Bundle analysis
  - Code splitting examples
  - Image optimization

### Advanced Concepts

- [ ] **Server Components** patterns
- [ ] **Parallel/Intercepting Routes**
- [ ] **Middleware** implementation
- [ ] **API Routes** examples
- [ ] **Database** integration (Prisma)
- [ ] **Authentication** flow (NextAuth.js)

## 🎓 Learning Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Useful Articles
- [CSS Layers in Tailwind](https://tailwindcss.com/docs/functions-and-directives#layer)
- [OKLCH Color Space](https://oklch.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Happy Learning! 🚀**

Start with the home page and explore each component example. Experiment with the different variants and styling options to understand how ShadCN UI works with Next.js and Tailwind CSS.