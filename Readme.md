
# Institute of Digital Risk – Landing Page

Responsive single‑page website built as an assignment to recreate the Institute of Digital Risk (IDR) marketing page using only semantic HTML5, custom CSS, and vanilla JavaScript.

## 📋 Project Overview

This project recreates the main sections of the IDR website:

- Sticky navigation bar with smooth scrolling  
- Hero section with CTA buttons and visual graphic  
- About section with “train–hire–innovate–deploy” pipeline  
- Services section with feature cards  
- Community / target‑audience section  
- Contact section with form and basic validation  
- Footer with links and credits  

The site is fully responsive and works across desktop, tablet, and mobile screens.

## 🛠 Tech Stack

- HTML5 (semantic structure)
- CSS3 (flexbox, grid, custom properties, media queries)
- Vanilla JavaScript (no frameworks, no libraries)

## 📂 Project Structure

- `index.html` – page markup and section structure  
- `style.css` – all layout, typography, colors, and responsive design  
- `script.js` – interactive behaviour:
  - Sticky navbar on scroll  
  - Mobile hamburger menu (open/close, outside‑click close)  
  - Smooth scrolling to sections with nav height offset  
  - Scroll‑reveal animations using IntersectionObserver  
  - Hero background hex‑grid animation  
  - Contact form validation and success message

## 🚀 Running the Project

1. Clone or download this repository.
2. Open `index.html` directly in a browser, **or** use a simple local server:
   - VS Code: use “Live Server” extension  
   - Node: `npx serve` in the project folder

No build step is required; everything is plain HTML/CSS/JS.

## 📱 Responsiveness

The layout is responsive for:

- Desktop (large screens)
- Tablets (navigation switches to a right‑side drawer)
- Mobile phones (navigation drawer, stacked sections)

Key patterns used:

- CSS Grid for services, community, and about pipeline  
- Flexbox for nav, hero content, stats, and badges  
- Media queries at common breakpoints (1024px, 768px, 600px, 480px)

## ✉️ Contact Form Behaviour

The contact form includes:

- Required fields: name, email, message  
- Client‑side validation with error messages  
- Prevents submit when invalid  
- Simulated “sending” state and success message without page reload  

This is front‑end only; no real email is sent.

## 🔍 Known Limitations / Notes

- All animations and interactions are client‑side; there is no backend.
- Form validation is basic and intended for learning purposes.
- Design is a close recreation, not an official IDR site.

# Institute of Digital Risk – Landing Page

Live Demo : https://sakshiingle.github.io/Institute-of-Digital-Risk-Website/

Repository: https://github.com/Sakshiingle/Institute-of-Digital-Risk-Website


## 👤 Author

**Sakshi Ingle**