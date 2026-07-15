# Norvex Theme - Design System Edition v3.3.0

Professional WordPress theme with integrated design system colors and modern web components.

## Features

✅ **Design System Colors Applied**
- Primary Blue: #1A73E8
- Secondary Green: #34A853
- Accent Orange: #EA8C55
- Dark Charcoal: #202124

✅ **Modern Components**
- Responsive cards
- Styled buttons (primary, secondary, accent, outline)
- Beautiful form elements
- Alert and badge styles
- Professional tables
- Status colors (success, warning, error, info)

✅ **WordPress Features**
- Custom menus
- Widget support
- Featured images
- Custom logo
- Block editor support
- HTML5 markup
- Proper escaping and security

✅ **Accessibility**
- WCAG compliant
- Semantic HTML
- Keyboard navigation
- Screen reader friendly

## Installation

1. Upload the theme folder to `/wp-content/themes/`
2. Activate the theme in WordPress admin
3. Customize colors and options in the theme settings

## Design System Colors

All colors are defined as CSS variables for easy customization:

```css
:root {
  --color-primary: #1A73E8;
  --color-secondary: #34A853;
  --color-accent: #EA8C55;
  --color-dark: #202124;
  /* ... and more */
}
```

## Customization

### Changing Colors

Edit the color variables in `style.css`:

```css
:root {
  --color-primary: #YOUR_COLOR;
}
```

### Adding Custom Styles

Create a child theme and add your custom styles to `style.css` in the child theme directory.

### Modifying Templates

Copy template files to a child theme and modify as needed.

## File Structure

```
norvex-theme/
├── style.css          - Main stylesheet with design system colors
├── functions.php      - Theme functions
├── index.php          - Main template
├── header.php         - Header template
├── footer.php         - Footer template
├── theme.json         - WordPress block editor settings
├── README.md          - This file
└── css/
    └── design-system-colors.css
```

## Color Palette

| Name | Color | Usage |
|------|-------|-------|
| Primary | #1A73E8 | Main brand color, buttons, links |
| Secondary | #34A853 | Success, secondary actions |
| Accent | #EA8C55 | Highlights, special features |
| Dark | #202124 | Text, dark backgrounds |
| Light Gray | #F8F9FA | Backgrounds, borders |

## Status Colors

- **Success**: #34A853 (Green)
- **Warning**: #FBBC04 (Yellow)
- **Error**: #EA4335 (Red)
- **Info**: #4285F4 (Blue)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Support

For issues and feature requests, please contact the development team.

## License

GPL v2 or later - See LICENSE file for details

## Version History

### v3.3.0 - Design System Edition
- Applied comprehensive design system colors
- Updated all components with new color palette
- Added theme.json for WordPress block editor support
- Improved UI/UX with consistent styling

---

**Created with 💙 by Norvex Team**
