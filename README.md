# calc-web-next
Calculator web app on Next.js

## Requirements
Build a simple calculator web application based on the attached UI mockup.

<img src="img.png" alt="Calculator" style="width:225px; height:auto;" />

### Tech stack
- Next.js
- TypeScript
- Tailwind CSS

### Scope
- Support basic arithmetic operations (add, subtract, multiply, divide)
- Input via on-screen buttons
- Clear/reset functionality
- Sensible handling of edge cases

The goal is to assess code structure, state management, and overall implementation quality. Exact (or close enough) UI pixel matching is required.

### Deliverables
- Git repository with the solution
- Short README with setup instructions and any assumptions made


## Implementation

### Location
The source code is available at: https://github.com/oleg-alexeyev/calc-web-next

The latest version is deployed at: https://oleg-alexeyev.github.io/calc-web-next/

### Notes
- The size of the calculator is fixed to match the mockup (225x400px) -
  how it looks in the _email_ (the raw image is 450x800px).
- Button labels are rendered as text to allow internationalization,
  accessibility, better scaling on high-DPI screens, and adding more
  operations easily.
- All the graphics are done with pure CSS, no image assets are used.
- Generic `<section>` is used for the calculator component to allow
  embedding it into various contexts (not only `<main>`).
- Favicon is from Google's Material Symbols (Calculate), Apache License v 2.0.
- The mockup seems to be using Arial, so same font is used in the app.
- The mockup seems to be cut on the right and bottom edges.
  Added a border rounded on the bottom too.

### Running locally 
Run the development server:
```bash
npm run dev
```
Open http://localhost:3000 with your browser to use the calculator.

### Tasks done
- Add a favicon
- Build SPA app with GitHub Actions and publish to GitHub Pages
- Backbone UI with clickable buttons
- Style the app to match the mockup
  * Buttons with armed state and hover effects
  * Round buttons are not clickable outside their visible area
- Calculator logic implementation with unit tests
  * Division by zero handling
  * Rounding errors handling
  * Large number handling
  * Clear Entry (CE) should clear only the current entry (number), second click should clear all
- State management
- Connect UI with the calculator logic
- CE while clearing the last entry removes the whole string if only one number is present
- '.' after '0' should produce '0.'
- Limit the number of digits displayed
- Decrease font size if output doesn't fit
- Dot not allow more than one '.' in a number
- Replace '*', '/', and '-' with nice-looking Unicode symbols
- Typing digits after '=' should starts a new calculation

### Backlog
 
### Future improvements
- Use mathjs for expression parsing and evaluation
- Responsive design for various screen sizes
- Parentheses support
- Keyboard support
- Clipboard support (copy/paste)
- Memory functions (M+, M-, MR, MC)
- History of calculations
- Theme support (light/dark mode)
- Internationalization (i18n) support for multiple languages
- Right to left layout support for languages like Arabic, Hebrew, etc.
- Ensure accessibility compliance (ARIA roles, screen reader support)
  * role="region" aria-label="Calculator" -> Calculator component
- Scientific calculator mode with advanced functions (sin, cos, tan, log, etc.)
