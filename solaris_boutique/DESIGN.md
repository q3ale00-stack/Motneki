---
name: Motneki Premium
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5a4136'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#ffb693'
  secondary: '#5d5f5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#636564'
  tertiary: '#0062a1'
  on-tertiary: '#ffffff'
  tertiary-container: '#059eff'
  on-tertiary-container: '#003357'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497b'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-glass: rgba(255, 255, 255, 0.7)
  outline-subtle: '#e2bfb0'
  success-teal: '#0062a1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 64px
  gutter: 24px
  section-gap: 120px
  card-gap: 12px
---

## Brand & Style

Motneki Premium embodies a sophisticated, gallery-inspired aesthetic tailored for high-end collectors. The brand personality is "Approachably Exclusive"—it combines the warmth of a lifestyle boutique with the precision of a high-tech laboratory. 

The design style is a refined mix of **Minimalism** and **Glassmorphism**. It relies on generous whitespace (spatial "breathing room"), a restricted but high-energy color palette, and subtle translucent layers to create a sense of depth without visual clutter. The emotional goal is to elevate anime collectibles from "merchandise" to "fine art," evoking feelings of prestige, authenticity, and meticulous curation.

## Colors

The palette is anchored by a high-fidelity **Vibrant Orange** (#ff6b00) used for calls to action, price points, and highlights. This is balanced against a sophisticated **Obsidian** (#1a1c1c) for primary text and brand-critical elements.

The background system utilizes a "Warm Neutral" scale. The base surface is a very light grey (#f9f9f9), while containers use a slightly cooler, lower-contrast grey (#f3f3f3) to separate product grids from the main canvas. Accent neutrals, like the "on-surface-variant," lean slightly warm/brown to complement the primary orange and maintain a premium, organic feel.

## Typography

The system exclusively uses **Plus Jakarta Sans** to maintain a modern, friendly, and geometric appearance. 

Key hierarchies are established through tight line-heights on display text and generous tracking on all-caps labels. **Display-lg** is reserved for hero statements, while **Label-caps** serves as the "eyebrow" text for section introductions. The **Price-display** role is specifically tuned for numerical legibility and impact, using a slightly tighter vertical alignment to keep product cards compact.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (max-width: 1440px) and a fluid model for mobile. 

The vertical rhythm is defined by a massive **120px section gap**, emphasizing the gallery feel where each collection segment is given its own stage. Horizontal spacing uses a 24px gutter for standard product grids. On desktop, large 64px side margins ensure content feels centered and premium, while mobile scales down to 20px to maximize real estate for product imagery.

## Elevation & Depth

Depth is primarily communicated through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Level 0 (Base):** Background (#f9f9f9)
- **Level 1 (Inlay):** Surface-container-low (#f3f3f3) used for card backgrounds and secondary sections.
- **Level 2 (Glass):** Navigation bars use a 70% white fill with a 20px backdrop blur and a subtle 1px border.
- **Level 3 (Interactive):** Cards and decorative image blocks use a "Soft Shadow" (0 10px 40px -10px rgba(0, 0, 0, 0.04)) to create a gentle lift that feels ambient rather than structural.
- **Level 4 (Overlay):** High-priority FABs or Modals use "shadow-2xl" for maximum separation from the content plane.

## Shapes

The shape language is bold and "super-elliptical." Standard buttons and badges are fully **pill-shaped**, emphasizing a soft, modern touch. 

Product cards and secondary images use a heavy **24px to 32px corner radius**, making large imagery feel friendly and integrated. Functional elements like input fields and smaller containers follow a standard 12px (rounded-xl) radius.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary-container background, white text. No border. High-impact.
- **Secondary/Outline:** Pill-shaped, 1px border using `outline`, Obsidian text. 
- **Ghost/Icon:** No background, transforms on hover (scale-95), uses Primary color on active states.

### Cards
- **Product Card:** 24px rounded corners. Image sits in a `#f3f3f3` container with a 3:4 aspect ratio. Content follows with minimal padding, focusing on typography hierarchy.
- **Interactive Card:** 32px rounded corners, uses `border-outline-variant/30` which intensifies to `primary/40` on hover.

### Badges & Chips
- **Status Badge:** All-caps, 10px font, rounded-full. Primary color for "Popular," Obsidian for "Limited." 
- **Date Badge:** Light primary background with primary text for high legibility in timeline views.

### Input Fields
- Fully rounded (pill), subtle border, and backdrop-blur when used over dark sections. Focus state uses a primary color ring.

### Navigation
- **Glass Nav:** Sticky at top, 64px height, 20px blur. Active links are denoted by a 2px bottom border in the primary color.