# VIPAS — School of Classical Dance

A static, responsive website for VIPAS, designed around the visual language of Bharatanatyam: warm paper, deep vermilion, temple-gold detail, editorial typography, expressive photography, and deliberate movement.

## Open the website

Open `index.html` in any modern browser. The site has no build step, framework, or package installation.

## Pages and architecture

```text
outputs/
├── index.html      Main landing page and admissions enquiry form
├── albums.html     Program archive and gallery modal
├── people.html     Teachers, students and achievements page
├── styles.css      Shared visual system, animation, responsive rules
├── script.js       Opening sequence, navigation, albums, form behaviour
└── README.md       This guide
```

### Design system

| Layer | Direction |
| --- | --- |
| Visual mood | Museum-like, warm, contemporary-classical rather than decorative or generic |
| Palette | Paper `#f5f0e7`, ink `#211c18`, vermilion `#9e2e27`, wine `#64201d`, temple gold `#b88d4a` |
| Type | Playfair Display for expressive headings, DM Sans for content, DM Mono for labels and metadata |
| Layout | Wide editorial grids on desktop, single-column reading flow on small screens |
| Motion | Opening curtain, slow hero zoom, staggered reveals, continuous cultural-keyword ribbon, deliberate hover motion |

### Main page flow

1. Opening screen and full-bleed hero establish VIPAS.
2. Lineage and four core dimensions explain the school’s approach.
3. Performance spotlight links visitors to the archive.
4. Program cards guide prospective students to admissions.
5. The admissions enquiry form composes an email to `hello@vipas.in` with the entered details.
6. The final contact area offers direct email and social links.

## Admissions form

The form is intentionally static-host friendly: on submit it opens the visitor’s default email app with a fully populated VIPAS admissions email. Update `hello@vipas.in` in `index.html` and `script.js` with the school’s real admissions inbox before publishing.

For direct, database-backed submissions, replace the `window.location.href = ...` line in `script.js` with a request to your form provider or backend. Good choices include Formspree, Netlify Forms, a Google Apps Script endpoint, or a custom API. Do not expose private API keys in `script.js`.

## Adding program videos

The best production approach is to host each video on YouTube or Vimeo and embed it in the album modal. This keeps the website fast and avoids storing huge video files in the site folder.

### 1. Upload and prepare

1. Upload the recital video to YouTube or Vimeo.
2. Set its visibility to Public or Unlisted, depending on your audience.
3. Copy its **embed URL**, for example `https://www.youtube.com/embed/VIDEO_ID`.
4. Create a horizontal thumbnail image (recommended: 1600 × 900 px, compressed WebP/JPEG) and store it in an `assets/` folder beside the HTML files.

### 2. Add the video entry

In `albums.html`, add a new `album-card` inside `.album-grid`. Reuse an existing card and update its `data-album`, `data-year`, title, and image class. Then add the title and description to the `archive` object in `script.js`.

### 3. Embed a featured video

Inside `.modal-content` in `albums.html`, add this after the description:

```html
<div class="video-frame">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="VIPAS — Parashakti"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

Then add this to `styles.css`:

```css
.video-frame { aspect-ratio: 16 / 9; margin-top: 28px; }
.video-frame iframe { width: 100%; height: 100%; border: 0; }
```

To show a different video for every album, add an `embedUrl` to each item in the `archive` data and update the iframe source in the card click handler. Keep video loading lazy so visitors only download a player when they choose an album.

## Replacing imagery and copy

The current editorial image URLs are in `styles.css`, including `.hero-image`, `.performance-photo`, `.pc-one` through `.pc-three`, and `.a1` through `.a6`. Replace them with your own photographer-approved URLs or local files. For local images, create `assets/images/` and use paths such as `url('assets/images/parashakti.webp')`.

Update contact details, social links, dates, program names, and the sample email address in the HTML before going live.

## Publishing

Upload the entire `outputs/` folder to Netlify, Vercel, GitHub Pages, or any normal static web host. Keep all four site files together so links, style, and interactions continue to work.
