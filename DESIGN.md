---
name: Binho Restauração de Móveis
description: Workshop-poster landing page for a Curitiba furniture restoration studio
colors:
  workshop-ink: "#282d1c"
  lamp-lit-ink: "#31372a"
  cream-paper: "#e5dbcc"
  fresh-cream: "#f2ebdd"
  beeswax: "#d0c7b8"
  restored-oak: "#6d4d30"
  deep-oak: "#543a24"
  charred-oak: "#33291b"
  weathered-bark: "#5e523f"
  paper-ash: "#c9bba0"
  varnish-gold: "#d8c5a3"
typography:
  display:
    fontFamily: "'Anton', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "0.01em"
  headline:
    fontFamily: "'Anton', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "'Archivo', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.06rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Archivo', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.12em"
  button:
    fontFamily: "'Anton', 'Arial Narrow', sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  sm: "10px"
  md: "12px"
  lg: "14px"
spacing:
  xs: "0.85rem"
  sm: "1.25rem"
  md: "2.5rem"
  section: "clamp(4rem, 9vw, 6.5rem)"
components:
  button-light:
    backgroundColor: "{colors.fresh-cream}"
    textColor: "{colors.workshop-ink}"
    rounded: "{rounded.md}"
    padding: "0.95rem 1.9rem"
    typography: "{typography.button}"
  button-light-hover:
    backgroundColor: "#fff8ec"
  card:
    backgroundColor: "{colors.fresh-cream}"
    textColor: "{colors.charred-oak}"
    rounded: "{rounded.lg}"
    padding: "1.6rem 1.5rem 1.5rem"
  service-icon-chip:
    backgroundColor: "{colors.restored-oak}"
    textColor: "{colors.cream-paper}"
    rounded: "{rounded.sm}"
    size: "2.6rem"
  contact-item:
    backgroundColor: "{colors.fresh-cream}"
    textColor: "{colors.charred-oak}"
    rounded: "{rounded.lg}"
    padding: "1.15rem 1.5rem"
---

# Design System: Binho Restauração de Móveis

## Overview

**Creative North Star: "The Workshop Poster"**

The system reads like a carpenter's signboard: a dark, warm workshop-ink ground where the promise is stamped in heavy condensed poster capitals, cream paper surfaces where the work is listed, and warm oak accents where the hand acts. The page opens on a full-bleed workshop photograph of a piece mid-restoration, used as a banner with the WhatsApp CTA seated at its foot.

Density is generous and unhurried: wide cream sections with softly lifted cards, alternating with full ink bands that carry the emotional beats (the values, the slogans, the footer). Type is the loudest instrument — Anton uppercase for every display moment, quiet Archivo for reading. There is exactly one authored motion moment (the hero rise); everything else responds to touch through soft lifts and border tinting.

**Key Characteristics:**
- Heavy condensed uppercase display voice (Anton) over a clean grotesque body (Archivo)
- Full-width ink bands (contact-banner, footer) alternating with cream content sections
- The page opens on a full-bleed restoration photo as a banner with a WhatsApp CTA at its foot
- Warm oak accents used sparingly: icon chips, emphasis words, separators
- Soft-lift elevation: cards rise on hover with blurred shadows; never hard offset shadows
- One-weight stroke icons (Lucide) inside filled oak chips

## Colors

A warm, earthy, high-contrast palette: dark ink and warm cream carry the surface, oak and varnish tones do the accenting. Text pairs are always ink-on-cream or cream-on-ink; nothing is rendered gray.

### Primary
- **Workshop Ink** (#282D1C): the dark green-black ground of the hero, contact-banner band, and footer. Also the CTA text on cream buttons.
- **Restored Oak** (#6D4D30): the accent brown of icon chips, the slogan diamond separators, hover borders, selection, and focus rings.
- **Fresh Cream** (#F2EBDD): the lightest surface — card and button grounds on cream sections, and the primary text on ink bands.

### Secondary
- **Varnish Gold** (#D8C5A3): warm highlight for emphasis words inside dark headings, value icons on ink, and footer icons/underline accents.
- **Lamp-lit Ink** (#31372A): the radial-glow tint used at the top of ink bands; never a standalone text color.

### Tertiary
- **Deep Oak** (#543A24): the small tracked uppercase labels inside contact items.

### Neutral
- **Cream Paper** (#E5DBCC): the page ground; all content sections sit on it.
- **Beeswax** (#D0C7B8): the scrollbar thumb and subtle tone; secondary tan on the cream ground.
- **Charred Oak** (#33291B): body text on cream surfaces.
- **Weathered Bark** (#5E523F): secondary body text on cream surfaces (≈5.6:1 on Cream Paper).
- **Paper Ash** (#C9BBA0): secondary text on ink bands (≈7.5:1 on Workshop Ink).

### Named Rules
**The One-Oak Rule.** Oak appears in small committed doses — an icon chip, an emphasis word, a separator — never as a field. When a region needs a filled accent, it is ink or cream; oak stays the hand.

**The Ink-Cream Handshake Rule.** Every surface is either ink or cream; text on ink is cream, text on cream is ink. No gray-on-gray, no mid-tone text anywhere.

## Typography

**Display Font:** Anton (with 'Arial Narrow', sans-serif fallback)
**Body Font:** Archivo (with 'Segoe UI', system-ui, sans-serif fallback)

**Character:** A confident poster face over a working-garment sans. Anton gives the promise its physical weight in all-caps; Archivo stays quiet, legible, and structural underneath it.

### Hierarchy
- **Display** (Anton 400, clamp(2.6rem, 7vw, 5rem), 1.04): the hero promise only — "Transforme seus móveis e seu ambiente!". Emphasis words inside render in Varnish Gold.
- **Headline** (Anton 400, clamp(1.8rem, 3.4vw, 2.5rem), 1.1): section titles, uppercase, centered.
- **Title** (Archivo 700, 1.06rem, 1.3): service card and contact labels.
- **Body** (Archivo 400, 1rem, 1.6): paragraphs and service descriptions, held to 46–52ch on ink and cream.
- **Label** (Archivo 600, 0.72rem, 0.12em, uppercase): the "WhatsApp"/"Endereço" labels and the hero brand line.

### Named Rules
**The Uppercase Contract.** Anton appears only uppercase. If a line reads lowercase, it is not display type — set it in Archivo.

## Layout

Single-column flow of alternating full-width bands. The container is `min(1120px, 92%)`, centered. Sections breathe with `clamp(4rem, 9vw, 6.5rem)` vertical padding.

Card grids use `repeat(auto-fill, minmax(240px, 1fr))` with a 1.25rem gap; the gallery uses `repeat(auto-fill, minmax(180px, 1fr))` at 0.85rem. At ≤720px the service and gallery grids collapse to a single column.

Bands alternate strictly: photo banner (topo design) → cream (services, all 11 service cards) → ink (contact-banner: the client-supplied `contato.png` strip, full-width, wrapped in the WhatsApp link) → cream (gallery "Nosso Trabalho") → ink (footer).

## Elevation & Depth

The system is flat by default and soft-lifts in response. Ink bands carry depth through a radial lamp-lit tint at their top edge; cream surfaces carry depth only as response to hover.

### Shadow Vocabulary
- **Card rest** (`0 1px 2px rgba(40,45,28,.05), 0 10px 26px rgba(40,45,28,.08)`): cards and contact items at rest.
- **Card lift** (`0 2px 4px rgba(40,45,28,.05), 0 18px 34px rgba(40,45,28,.12)`): cards and contact items on hover, with a 2–3px translateY and oak-tinted border.
- **Hero CTA** (`0 10px 28px rgba(0,0,0,.28)`; hover `0 14px 32px rgba(0,0,0,.34)`): the single light-surface button on ink.
- **Gallery rest / lift** (`0 1px 2px rgba(40,45,28,.05), 0 8px 22px rgba(40,45,28,.09)` / `0 2px 4px rgba(40,45,28,.05), 0 16px 30px rgba(40,45,28,.13)`): restored-furniture photos.

### Named Rules
**The Soft-Lift Rule.** Shadows always carry a blur. The zero-offset block shadow, the hard offset costume, is never used; a surface moves 2–3px on hover or it does not move.

## Shapes

Gently curved, generous corners: 10px on small icon chips, 12px on buttons, 14px on cards and contact items, 12px on gallery photos. Borders are 1px hairlines of `rgba(40,45,28,.14)` on cream, `rgba(242,235,221,.16)` on ink; hover tints borders toward oak (50% opacity). The signature geometry is the rotated 45° oak square that separates slogans and footer trust items.

## Components

### Buttons
- **Shape:** gently curved (12px radius), uppercase Anton at 1.02rem with 0.05em tracking, icon at 1.2em.
- **Light (primary, on ink):** Fresh Cream ground, Workshop Ink text, 0.95rem × 1.9rem padding, deep blurred shadow. Hover: `#fff8ec` ground, 2px lift, deeper shadow.
- **Focus:** 3px outline in the section's opposite ink — cream outline on ink bands, oak outline on cream.

### Cards / Containers
- **Corner Style:** gently curved (14px radius).
- **Background:** Fresh Cream on the Cream Paper ground.
- **Border:** 1px `rgba(40,45,28,.14)`, tinting toward oak on hover.
- **Shadow Strategy:** Card rest → Card lift on hover (see Elevation).
- **Internal Padding:** 1.6rem top, 1.5rem sides, 1.5rem bottom.
- **Icon Chip:** a 2.6rem filled Restored Oak square (10px radius) with a 1.25rem cream Lucide icon, sitting above the title.

### Navigation
There is no nav bar; the page opens directly on the photo banner.

### Hero Banner
The user-supplied top band (`topo1.png`, converted to `hero.webp`, 1854×848) is used as-is: the ink ground with the baked-in poster title "TRANSFORME SEUS MÓVEIS E SEU AMBIENTE!", the subtitle, and the vertical "RENOVE / VALORIZE / TRANSFORME" stack on the right. It is displayed at its natural ratio — no cropping. The WhatsApp CTA sits centered at the foot over a subtle bottom ink gradient for legibility, as a cream pill with the WhatsApp icon. The H1 promise is present but visually hidden for structure and SEO.

### Before/After Slider
Removed at the client's request (the filtered "before" preview did not match the banner's piece). The Antes-e-Depois reveal does not appear on the page.

### Gallery
Restored-furniture photos in a 4:3 cover crop at 12px radius with a 1px hairline border and the Gallery rest/lift shadows. Images scale to 1.025 on hover; alt text names the piece.

## Do's and Don'ts

### Do:
- **Do** alternate ink and cream full-width bands in the fixed sequence (banner → services → contact-banner → gallery → footer).
- **Do** render every display moment in Anton uppercase and every reading moment in Archivo.
- **Do** use Varnish Gold for emphasis words inside dark headings and for icons on ink; never for text on cream.
- **Do** keep cards at Fresh Cream on Cream Paper with soft-lift hover shadows.
- **Do** set secondary text on cream with Weathered Bark and on ink with Paper Ash — the two approved muted voices.

### Don't:
- **Don't** use hard offset shadows or zero-blur block shadows anywhere; depth is soft or absent.
- **Don't** render text in gray; every text color is either ink-family on cream or cream-family on ink.
- **Don't** put a kicker or eyebrow label above a heading; the page opens directly on the banner, and the H1 is visually hidden.
- **Don't** introduce a second display face or a serif for headings; Anton carries every poster moment.
- **Don't** use emoji or glyph marks as icons; stroke icons (Lucide) sit inside the filled oak chips.
