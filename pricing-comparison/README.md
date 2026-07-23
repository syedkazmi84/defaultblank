# AuthorWings — Service Comparison Block

A redesigned Coaching vs. Ghostwriting vs. Editing comparison table for the
[Book Coaching](https://authorwings.com/book-coaching/) page. Built with the
AuthorWings brand palette and the **Inter** font used site-wide (GeneratePress).

## Files

| File | Purpose |
|------|---------|
| `pricing-comparison.html` | Markup only — paste into a **Custom HTML** block |
| `pricing-comparison.css`  | Styles — paste into **Additional CSS** (or a CSS box) |
| `pricing-comparison.js`   | Optional enhancements (hover highlight + scroll reveal) |
| `pricing-comparison-combined.html` | All three in one block — the simplest option |
| `preview-desktop.png` / `preview-mobile.png` | Rendered previews |

## How to add it in WordPress

### Option A — one block (simplest)
1. Edit the page → add a **Custom HTML** block.
2. Paste the entire contents of **`pricing-comparison-combined.html`**.
3. Update / Publish. Done — style + markup + script travel together.

### Option B — separated (cleaner / recommended)
Keeps CSS out of the content so it loads once and is easy to maintain.

1. **CSS** → *Appearance → Customize → Additional CSS* (or your theme's
   global CSS box). Paste `pricing-comparison.css`.
2. **HTML** → add a **Custom HTML** block on the page and paste
   `pricing-comparison.html`.
3. **JS** (optional) → paste `pricing-comparison.js` into a footer scripts
   area — e.g. *WPCode / Insert Headers and Footers → Footer*, wrapped in
   `<script> … </script>`. The table works fully without it.

## What changed vs. the original

- **Brand-true typography** — explicit **Inter** stack matching the live site.
- **Added an intro** (eyebrow + headline + subhead) to frame the choice.
- **Featured column** (Book Coaching) now lifts with a plum top-accent and a
  "You're Here" badge; each tier header carries a short descriptor note.
- **Section bands** use a subtle plum gradient; rows get a light zebra tint.
- **Check marks** sit in soft plum chips instead of bare glyphs.
- **CTA buttons** align to their columns with a lift-on-hover, plus a redesigned
  cost-calculator callout card.
- **Mobile** — a price strip up top, then each feature becomes a tidy card with
  right-aligned values and per-service labels.
- **Progressive enhancement** — column cross-highlight on hover and a gentle
  scroll-reveal, both respecting `prefers-reduced-motion`. Zero dependencies.
- Everything is namespaced under `.awp-compare` / `.awp-*` so it can't collide
  with theme or plugin styles.

## Editing content

All copy, prices, and links live in the HTML. To change a value, edit the
matching `<td>`. To re-point a button, edit the `href` in the `.awp-cta-row`.
Colors are CSS variables at the top of the stylesheet (`--awp-plum`,
`--awp-navy`, `--awp-mauve`, `--awp-cream`, `--awp-blue`).
