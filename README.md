# Chim Sithy-Portfolio

A modern, executive, and minimalist personal developer portfolio built with **React 19**, **Vite 8**, and **Tailwind CSS v4** in the **Linear / Vercel design aesthetic**. Features an authentic bilingual toggle (**English & Khmer / ខ្មែរ**), dark/light theme persistence, honest technical skill categorization, and direct communication links.

---

## ✨ Key Highlights

- **Executive & Minimalist Aesthetic**: Linear and Vercel-inspired UI with quiet obsidian tones (`#09090b`), subtle ambient lighting, clean 1px borders, and refined typography.
- **Bilingual i18n Architecture**: Instant toggle between English (`EN`) and Khmer (`ខ្មែរ`) without reload. Uses Google Fonts (`Plus Jakarta Sans` & `Kantumruy Pro`) configured with generous line-heights and letter-spacing for optimal Khmer script readability.
- **Interactive Component Architecture**: Modular React 19 components (`Hero`, `About`, `TechStack`, `Projects`, `Contact`, `Footer`).
- **Honest Skill Labeling**: Clear separation of core competencies (`React.js`, `PHP`, `Laravel`, `MySQL`, etc.) and foundational exploration technologies (`Java`, `Docker`) with interactive category filtering.
- **Direct Contacts**: Clickable Telegram links (`@Qianqiann2`), direct phone call links (`+855 71 844 9301`), and one-click copy buttons with stateful checkmark feedback.
- **Light & Dark Mode**: Persistent theme toggle respecting both OS preferences and user selection via `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: React 19.3 + Vite 8.3
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React + React Icons (`react-icons/si`, `react-icons/fa6`)
- **Typography**: Google Fonts (`Plus Jakarta Sans`, `Kantumruy Pro`, `JetBrains Mono`)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized bundle will be compiled to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Codebase Structure

```
Portfolio/
├── index.html                 # HTML shell, SEO meta tags, Google Fonts
├── vite.config.js             # Vite + React + Tailwind CSS v4 config
├── package.json               # Dependencies & scripts
└── src/
    ├── main.jsx               # React 19 entry point
    ├── App.jsx                # Theme & language state root
    ├── index.css              # Global styles, Khmer typography tokens
    ├── data/
    │   ├── translations.js    # Bilingual dictionaries (EN & natural KH)
    │   └── portfolioData.js   # Profile metadata, skills list, links
    └── components/
        ├── Navbar.jsx         # Sticky header, bilingual switcher, dark mode
        ├── Hero.jsx           # Grounded headline, status badge, code terminal
        ├── About.jsx          # Academic background, core values, highlights
        ├── TechStack.jsx      # Categorized skill pills, honest learning badges
        ├── TechIcons.jsx      # Official brand SVG tech icons
        ├── Projects.jsx       # Featured project cards, stack tags, links
        ├── Contact.jsx        # Telegram card, phone card, copy-to-clipboard
        └── Footer.jsx         # Copyright, location, smooth back-to-top
```
