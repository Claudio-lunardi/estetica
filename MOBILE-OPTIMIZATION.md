# Mobile Optimization

## Base Strategy

The layout starts at `320px` and scales progressively to tablet (`768px+`) and desktop (`1024px+`). Core actions are visible early in the document flow to reduce scrolling before contact.

## Touch Targets

- Buttons and key links use a minimum interactive size of `44x44px`
- Main CTA and mobile menu controls are sized above `56px`
- Gallery cards use large tap zones by wrapping image and text in a single button

## Performance Choices

- CSS is split by responsibility to keep the first version readable
- Placeholder images are local SVG assets, which are lightweight and easy to replace
- Gallery images use `loading="lazy"`
- Hero image uses preload and eager loading
- Motion is reduced automatically when `prefers-reduced-motion` is enabled

## Navigation and Reading

- Sticky header keeps primary navigation available
- Mobile navigation opens as a full-screen overlay below the header
- Smooth scrolling is handled through anchor navigation in the root app
- Text uses a comfortable line-height and avoids cramped card spacing

## Gesture Support

The lightbox supports left and right swipe gestures on touch devices. Keyboard navigation with `Escape`, `ArrowLeft` and `ArrowRight` is also included for broader accessibility.
