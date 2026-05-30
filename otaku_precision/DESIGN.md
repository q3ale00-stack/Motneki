---
name: Otaku Precision
colors:
  surface: '#fff8f6'
  surface-dim: '#f0d4ca'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e1'
  surface-container-high: '#fee2d8'
  surface-container-highest: '#f8ddd2'
  on-surface: '#261812'
  on-surface-variant: '#5a4136'
  inverse-surface: '#3d2d26'
  inverse-on-surface: '#ffede7'
  outline: '#8e7164'
  outline-variant: '#e3bfb1'
  surface-tint: '#a33e00'
  primary: '#a33e00'
  on-primary: '#ffffff'
  primary-container: '#ff6600'
  on-primary-container: '#561d00'
  inverse-primary: '#ffb596'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#0062a1'
  on-tertiary: '#ffffff'
  tertiary-container: '#009cfc'
  on-tertiary-container: '#003155'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497b'
  background: '#fff8f6'
  on-background: '#261812'
  surface-variant: '#f8ddd2'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
  label-bold:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
  price:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 12px
  container-max: 1280px
---

## Brand & Style
The brand personality is authoritative, organized, and enthusiastic. It mimics the curated density of Akihabara retail spaces—where every inch of space is utilized without feeling cluttered. The design system follows a **Minimalist-Retail** hybrid style: it uses a clean white base to ensure product photography (the primary focus) is vibrant and undistracted, while utilizing high-contrast accents to signal urgency and exclusivity. The emotional response should be one of "discovery within order," providing a trustworthy environment for collectors to browse extensive catalogs efficiently.

## Colors
This design system utilizes a high-clarity palette. The **Vibrant Orange** is reserved for primary actions, price points, and active states to draw immediate attention. Neutral tones are tiered: pure white for the primary canvas and a light gray for secondary grouping containers and subtle borders. A deep charcoal is used for text to ensure high legibility. Specific semantic colors are assigned to hobby-specific statuses: Blue for "Pre-Order" and Gold for "Exclusive" to provide instant visual categorization for collectors.

## Typography
The typography strategy prioritizes information density and hierarchy. **Plus Jakarta Sans** provides a modern, slightly friendly geometric feel for headlines and price displays, ensuring the brand feels contemporary. **Inter** is utilized for all functional text, UI labels, and product descriptions due to its exceptional readability at small sizes—essential for high-density product grids. Use all-caps for "PRE-ORDER" and "EXCLUSIVE" labels to create a distinctive "tag" aesthetic.

## Layout & Spacing
The layout uses a **Fixed Grid** system optimized for density. On desktop, a 12-column grid is used with narrow 12px gutters to allow for 5 or 6 product cards per row, maximizing vertical screen real estate. Spacing follows a strict 4px baseline rhythm. Margins within product cards are tight (8px-12px) to keep the focus on the product image while allowing for clear pricing and status badges. Section padding is kept moderate (40px) to distinguish between category blocks without wasting excessive white space.

## Elevation & Depth
This design system employs **Low-Contrast Outlines** rather than heavy shadows to maintain a clean, organized retail look. Depth is primarily communicated through tonal layering: product cards sit on the #F5F5F5 background with a 1px #E5E5E5 border and a pure #FFFFFF fill. Subtle, tight shadows (2px blur, 5% opacity) are reserved only for hover states on interactive cards or floating navigation elements to indicate "lift." This keeps the interface feeling "flat" and professional, similar to high-end technical documentation or catalog indices.

## Shapes
A **Soft** (Level 1) roundedness profile is applied throughout. 4px (0.25rem) corner radii are used for product cards, buttons, and input fields. This slight rounding takes the "edge" off the density of the grid without making the UI feel overly playful or "bubbly." Status tags (Pre-order/Exclusive) use 2px radii to maintain a more industrial, label-like appearance.

## Components
- **Buttons:** Primary buttons use a solid #FF6600 fill with white text. Secondary buttons use a #222222 outline. Shapes are consistently 4px rounded.
- **Product Cards:** The core component. Features a large image area, followed by a tight vertical stack of: Status Tag (top-left overlay), Manufacturer Name (body-sm, gray), Product Title (body-md, bold, 2-line clamp), and Price (price-md, orange).
- **Chips/Badges:** Small, rectangular tags with 2px corner radius. Use high-contrast backgrounds (Blue for Pre-order, Gold for Exclusive, Orange for Sale) with white or black text respectively.
- **Input Fields:** Minimalist design with a 1px #E5E5E5 border. Focus state shifts the border to 1px #FF6600.
- **Lists:** Used for filter sidebars. High density with 8px vertical padding between items and 14px text.
- **Progress Bars:** Used for "Pre-order availability" or "Stock levels," using a thin 4px height with orange fill on a light gray track.