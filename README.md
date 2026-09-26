<div align="center">

Nocturne Archive — Static Exhibition Template

Nocturne Archive is a polished one-page exhibition experience designed to be uploaded as a static GitHub Pages site. It does **not** need Node.js, a build step, an API key, or a database.

</div>

## What is included

- 8 full-screen moments: introduction, six exhibition studies, and closing scene
- 6 original local visual assets in `assets/` (not remote image links)
- Five interactive illuminated detail points on every study
- Detail panel with focus zoom, contextual notes, and previous/next detail controls
- “Work” / “Reveal” controls on each image
- Smooth keyboard, mouse-wheel, button, and touch-swipe navigation
- EN / FR interface switcher
- Custom light cursor, grain, vignette, introductory loader, scene flash, and transition title cards
- Optional browser-generated ambient sound — starts only after a visitor chooses it
- Responsive desktop and mobile layout
- Accessibility basics: semantic controls, useful labels, focus states, reduced-motion support

## Folder map

```text
nocturne-archive-template/
├── assets/
│   ├── after-rain.jpg
│   ├── blue-hour.jpg
│   ├── ember-archive.jpg
│   ├── orbit-room.jpg
│   ├── salt-garden.jpg
│   ├── tide-index.jpg
│   └── favicon.svg
├── .gitignore
├── DESIGN-STUDY.md        # Reference-experience observations and rebuild decisions
├── app.js                 # Exhibition content, interactions, language strings
├── index.html             # Page structure
├── styles.css             # Theme, layout, responsiveness and animation
└── README.md              # This publishing/customization guide
```

## Preview locally (optional)

You can open `index.html` directly in most browsers. For the closest behavior, use a tiny local static server:

```bash
# If Python is installed, run this inside the project folder:
python -m http.server 8000
```

Then visit `http://localhost:8000`.

There are no packages to install.

---

# Customization guide

## Change exhibition words and details

Open `app.js` in a code editor. The `works` array near the top stores each room’s content:

- `title`, `author`, `year`, `caption`
- `poem` for the large side copy
- `context` for the main notes panel
- `hotspots` for the five illuminated detail points
- `quote` for the closing screen

Each hotspot uses this final structure:

```js
[
  "English title",
  "French title",
  "English observation",
  "French observation",
  "English intention",
  "French intention",
  "English feeling",
  "French feeling",
  x,
  y,
];
```

`x` and `y` are percentages. For example, `50, 35` places a detail marker near the horizontal center and upper third of the image.

## Replace an image

1. Place a new image in `assets/`.
2. Use a web-friendly `.jpg`, `.webp`, or `.png` file.
3. Keep portrait images whenever possible; **4:5** is ideal for this template.
4. In the corresponding work in `app.js`, change only the `file` value:

```js
file: 'my-new-image.jpg',
```

5. If you change the filename, upload that new file to GitHub’s `assets` folder too.

## Change colors

Open `styles.css` and edit the variables at the top:

```css
:root {
  --night: #080a11;
  --paper: #eee6d8;
  --amber: #dfa85f;
}
```

These control most of the experience without hunting through the stylesheet.

## Controls for visitors

| Action                 | Control                                                    |
| ---------------------- | ---------------------------------------------------------- |
| Next / previous room   | Arrow keys, mouse wheel, swipe, mobile side arrows         |
| Jump to a study        | Bottom-left progress dots or number keys 1–6               |
| Open work notes        | “Work” button or `I` key on a study                        |
| Open detail note       | Select a glowing marker                                    |
| Navigate detail notes  | Panel buttons or left/right arrow keys while panel is open |
| Toggle sound           | Top-right sound control or `S` key                         |
| Return to introduction | `Esc` or click the Nocturne wordmark                       |

## Deployment checklist

Before committing a final version, check:

- [ ] `index.html` remains in the repository root, not inside another folder.
- [ ] Every asset referenced in `app.js` is present in `assets/`.
- [ ] Image filenames match exactly, including upper/lowercase letters.
- [ ] GitHub Pages source is set to `main` and `/ (root)`.
- [ ] You have tested the published GitHub Pages URL on both desktop and mobile.

## License note

This starter does not include a license file by default. If you intend to share it publicly as a template, consider adding an MIT License on GitHub: **Add file** → **Create new file** → name it `LICENSE`, then select the MIT template. Only publish images, music, fonts, and copy you have permission to share.

<div align="center">
If this template is useful, please leave a star ⭐ on GitHub to show your support!

</div>
