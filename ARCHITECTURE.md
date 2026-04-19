# Architecture

## Overview

The site is a static single-page application mounted on `#app` in `index.html`. Vue 3 is loaded through CDN and each UI block is registered as a global component from files in `js/components/`.

## Structure

- `index.html`: page shell, metadata, stylesheet and script loading order
- `css/main.css`: tokens, reset, base layout and global utilities
- `css/components.css`: section-specific component styles
- `css/responsive.css`: breakpoint overrides for tablet and desktop
- `js/app.js`: root app state, clinic configuration, gallery state and registration logic
- `js/components/*.js`: presentational Vue components
- `js/utils/scroll.js`: reveal animations, scroll helpers and WhatsApp link builder
- `js/utils/touch.js`: swipe gesture handling for the gallery lightbox

## Data Flow

The root app holds the reusable configuration for profile data, navigation, services, gallery images and social links. Components receive only the data they need through props and emit events back to the root app for navigation and gallery state transitions.

## Interaction Model

- Header emits menu toggle and anchor navigation events
- Gallery emits open, close, next and previous events
- The root app manages scroll locking for the mobile menu and lightbox
- The service worker is registered after `window.load`

## Rendering Strategy

The implementation keeps dependencies minimal and avoids a build pipeline in the initial version. This makes the project suitable for direct deployment to static hosts while still preserving a component-based structure.
