# Deployment

## Local Preview

Use any static server so that the service worker and manifest behave correctly.

```powershell
npx serve .
```

## GitHub Pages

1. Push the files to a GitHub repository.
2. Enable GitHub Pages from the repository settings.
3. Select the root folder or the default branch output as the publishing source.

## Netlify

1. Create a new site from the project folder or repository.
2. Set the publish directory to the project root.
3. No build command is required for the CDN-based version.

## Vercel

1. Import the project into Vercel.
2. Keep the framework preset as `Other`.
3. Set the output directory to the project root if prompted.

## Custom Domain

After deployment, point the chosen domain to the provider and update Open Graph URLs, favicon assets and contact information in `js/app.js`.
