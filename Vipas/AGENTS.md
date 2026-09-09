# VIPAS website — guide for future work

## Project purpose

This is the static website for **VIPAS School of Classical Dance**, centered on South Indian classical dance and Bharatanatyam. The final user-facing site lives in `outputs/`.

## File map

```text
outputs/
├── index.html      Landing page, school story, programs, admissions enquiry
├── albums.html     Program album archive and gallery modal
├── people.html     Teachers, students, testimonials, achievements
├── styles.css      Shared styles, visual system, animations, breakpoints
├── script.js       Opening screen, mobile menu, albums, enquiry interaction
└── README.md       Publishing, video, imagery, and architecture guide
```

## Design direction

Keep the site refined, arts-led, and contemporary-classical:

- Use the existing palette: paper `#f5f0e7`, ink `#211c18`, vermilion `#9e2e27`, wine `#64201d`, temple gold `#b88d4a`.
- Use `Playfair Display` for expressive headings, `DM Sans` for content, and `DM Mono` for labels, metadata, years, and small navigation details.
- Preserve generous spacing, editorial grids, fine rules, restrained uppercase labels, and purposeful motion.
- Prefer a small number of strong visual moments over decorative clutter.
- All layouts must retain a useful single-column mobile version at widths below 800px.

## Editing rules

- Make user-facing changes inside `outputs/` only unless the user explicitly asks otherwise.
- Maintain relative links between the three HTML pages.
- Keep shared styles in `outputs/styles.css`; do not add inline styles unless there is a compelling, local-only reason.
- Keep interactive behavior in `outputs/script.js` and make it defensive: the script is shared by pages that do not all contain every component.
- Update `outputs/README.md` whenever page structure, publishing requirements, form behaviour, or video guidance changes.
- Do not claim invented teacher bios, student stories, awards, statistics, dates, photographs, contact data, or program details are real. Clearly mark samples until the school provides verified information.

## Admissions form

The current enquiry form is static-hosting friendly. It creates a prefilled email to `hello@vipas.in`; it does not store submissions. If a backend/form provider is connected later:

1. Replace the `mailto:` routing in `outputs/script.js` with the approved endpoint.
2. Add validation and a clear success/error state.
3. Never place API keys, inbox credentials, or private tokens in browser-delivered HTML or JavaScript.
4. Update `outputs/README.md` with the deployment and data-handling changes.

## Program albums and video

- Prefer YouTube or Vimeo embeds over self-hosted recital video files.
- Use lazy-loaded 16:9 embeds and high-quality, approved thumbnail images.
- When adding an album, update `albums.html`, the `archive` data in `script.js`, and any relevant documentation.
- Respect student and performer consent before publishing video or imagery.

## Verification before handoff

Run these checks after edits:

```sh
node --check outputs/script.js
rg --files outputs
```

Also review all internal page links and verify desktop and mobile layouts when a local preview is available.
