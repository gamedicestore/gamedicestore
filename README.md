# GameDice Website

A minimal, single-page site for the GameDice mobile game studio, plus a privacy policy page.

## Structure
- `index.html` — Landing page with hero, about, portfolio, careers, contact
- `privacy.html` — Privacy policy
- `styles.css` — Minimal styling and responsive layout
- `script.js` — Small enhancements (smooth scroll, mobile nav, portfolio card links)
- `assets/placeholder.svg` — Placeholder cover image

## Running locally
Open `index.html` in your browser, or serve the folder:

```bash
# macOS: from this directory
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing the portfolio
In `index.html`, find the `#portfolio` section. Duplicate a `<li class="card">` block and update:
- The `data-url` attribute (store link)
- The `<img src>` and `alt`
- The `<h3>` title and `<p>` description

Example:
```html
<li class="card" tabindex="0" role="button" data-url="https://store.link/your-game">
  <figure>
    <img src="./assets/your-cover.png" alt="Your Game cover art" loading="lazy" />
    <figcaption>
      <h3>Your Game</h3>
      <p>One-line description.</p>
    </figcaption>
  </figure>
</li>
```

## Updating branding
- Favicon/emoji: replace `assets/placeholder.svg` and update the `<link rel="icon">` if needed.
- Colors: tweak CSS variables at the top of `styles.css`.

## Contact links
Update the `mailto:` addresses and social links in `index.html` under the Contact section.

## Accessibility notes
- Cards are focusable and activate on Enter/Space.
- Mobile nav uses `aria-expanded` and hides/shows menu.

## Deploying
Host the folder on any static host (GitHub Pages, Netlify, Vercel, S3/CloudFront, etc.).

