---
name: MotnekiStore
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#373940'
  surface-container-lowest: '#0c0e14'
  surface-container-low: '#191b22'
  surface-container: '#1e1f26'
  surface-container-high: '#282a30'
  surface-container-highest: '#33343b'
  on-surface: '#e2e2eb'
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#e2e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb693'
  primary: '#ffb693'
  on-primary: '#561f00'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#a04100'
  secondary: '#d2bbff'
  on-secondary: '#3f008e'
  secondary-container: '#6001d1'
  on-secondary-container: '#c9aeff'
  tertiary: '#c2c6d6'
  on-tertiary: '#2b303d'
  tertiary-container: '#9499a8'
  on-tertiary-container: '#2c313e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#dee2f3'
  tertiary-fixed-dim: '#c2c6d6'
  on-tertiary-fixed: '#161b27'
  on-tertiary-fixed-variant: '#424754'
  background: '#111319'
  on-background: '#e2e2eb'
  surface-variant: '#33343b'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

The design system is engineered for an elite demographic of anime connoisseurs and high-end geek culture collectors. The brand personality is **Cinematic, Mystical, and Exclusive**, bridging the gap between traditional Japanese luxury and modern tech-forward aesthetics. 

The visual direction utilizes a **Modified Glassmorphism** approach set against a deep, immersive background. The interface should feel like a premium digital gallery where the collectibles are the focal point. Key stylistic markers include:
- **Depth through Translucency:** Layers use varying degrees of blur and transparency to simulate physical glass depth.
- **Neon Accents:** Vibrant orange and purple are used sparingly to mimic high-end electronics and futuristic cityscapes.
- **Cinematic Composition:** Use of generous whitespace (negative space) and oversized imagery to create a sense of grandeur and "Otaku" prestige.

## Colors

The palette is rooted in a "Midnight in Akihabara" concept. 

- **Primary (#FF6B00):** A high-energy "Spirit Orange" used for calls to action and critical highlights.
- **Secondary (#7C3AED):** A "Techno Purple" used for secondary actions, interactive states, and indicating rarity tiers.
- **Neutrals:** The background hierarchy moves from #0F1117 (Deep base) to #1F2430 (Elevated cards).
- **Text:** Primary text is kept off-white to reduce eye strain while maintaining high contrast. Secondary text is muted to provide visual hierarchy.
- **Glass Accents:** Borders must use a 1px translucent stroke to define shapes without creating heavy visual breaks.

## Typography

This design system utilizes **Plus Jakarta Sans** for its modern, clean, and slightly tech-oriented geometry. 

- **Titles:** Use `display-xl` for hero sections and limited-run product reveals. High-end editorial feel is achieved through tight letter spacing and bold weights.
- **Hierarchy:** Maintain a clear distinction by using the `label-sm` in uppercase with increased tracking (letter spacing) for categories and meta-data.
- **Readability:** Body text should maintain a 1.5x line height minimum to ensure descriptions of intricate collectibles are easy to digest against the dark background.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with high-margin "Cinematic Padding."

- **Grid:** A 12-column grid system for desktop, transitioning to 4 columns for mobile.
- **Rhythm:** Spacing is based on an 8px scale. For a luxury feel, lean towards "LG" and "XL" spacing between major sections (e.g., between the Hero and the Featured Collection).
- **Product Display:** Use asymmetrical layouts for featured items to create a gallery-like browsing experience. Standard catalog views should use a generous 32px gap between product cards to avoid visual clutter.

## Elevation & Depth

Hierarchy is established through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

- **Base Layer:** #0F1117 (Solid).
- **Card Layer:** #1F2430 with a 40% background-blur (backdrop-filter: blur(20px)) and a 1px border of `rgba(255, 255, 255, 0.08)`.
- **Active Elevation:** When a user hovers over a card, apply a subtle outer glow using the primary color at 10% opacity (0px 10px 30px rgba(255, 107, 0, 0.1)).
- **Overlays:** Modals and dropdowns should use a higher blur value (40px) and a slightly lighter background to appear physically closer to the user.

## Shapes

The shape language is sophisticated and "Soft-Tech."

- **Primary Radius:** 20px is the standard for cards, buttons, and input fields.
- **Inner Elements:** Elements nested inside cards (like badges or small buttons) should use 12px or 16px to maintain visual nested harmony.
- **Icons:** Use linear, 2px stroke icons with slightly rounded terminals to match the typography.

## Components

### Buttons
- **Primary:** Solid #FF6B00 background, black text (#0F1117), 20px radius. On hover, add a subtle orange outer glow.
- **Secondary:** Ghost style with a 1px purple (#7C3AED) border and purple text. 
- **Tertiary:** Text-only with an underline effect on hover.

### Cards
- **Product Cards:** Image-centric. The container uses the card background (#1F2430) with a subtle glass effect. Prices are highlighted in Primary Orange.
- **Status Badges (Chips):** For rarity tiers (e.g., "Legendary", "1 of 500"). Use the Secondary Purple with 20% opacity and a solid purple border.

### Input Fields
- Dark backgrounds (#181C24) with a subtle 1px border. On focus, the border transitions to Primary Orange with a faint glow.

### Specialized Components
- **The "Rarity" Indicator:** A progress bar or glowing dot system that indicates the exclusivity of a geek collectible.
- **Cinematic Carousel:** Full-width hero images with floating "Glass" info panels containing product titles and "Pre-order" actions.
- **Tracking Timeline:** A sleek, vertical line using purple gradients to show the status of custom orders.