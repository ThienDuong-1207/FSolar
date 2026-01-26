# Dak Lak Coffee - Premium Coffee Website

A modern, responsive coffee e-commerce website showcasing premium coffee products from Dak Lak highlands, Vietnam. Built with **pure HTML & CSS** - no JavaScript required.

![Project Type](https://img.shields.io/badge/Type-Static%20Website-blue)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS-orange)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📋 Project Overview

**Dak Lak Coffee** is a premium coffee brand website featuring:
- Eco-friendly, sustainable coffee products
- Modern, engaging UI/UX design
- Fully responsive layout
- Pure CSS animations and effects
- Professional coffee shop aesthetics

**Live Demo:** Open `index.html` in your browser

---

## 🗂️ Website Structure

```
lab1/
├── index.html          # Homepage (Hero, Featured Products, Features, Social Media)
├── products.html       # Product Catalog (9 coffee products in 3 categories)
├── about.html          # About Us (Story, Values, Certifications, Process)
├── globals.css         # Main stylesheet (all CSS variables, components, animations)
└── README.md           # Project documentation
```

### **Page Breakdown**

#### **1. Homepage (`index.html`)**
- **Hero Section:** Animated gradient background with call-to-action buttons
- **Featured Products:** 3 premium coffee products with cards
- **Quality Features:** 3 value propositions with number badges
- **Social Media Grid:** 6 Instagram-style images
- **Contact Section:** Opening hours and contact information
- **Footer:** Company info, links, contact, social media

#### **2. Products Page (`products.html`)**
- **Page Header:** Small hero with title
- **Whole Beans Section:** 3 whole bean coffee products
- **Ground Coffee Section:** 3 ground coffee products
- **Instant Coffee Section:** 3 instant coffee products
- **Eco-Friendly Packaging Banner:** Sustainability message
- **Footer:** Complete footer with all links

#### **3. About Page (`about.html`)**
- **Page Header:** Story introduction
- **Story Section:** Featured layout with image and text
- **Core Values:** 6 sustainable values in 3-column grid
- **Certifications:** 3 certification badges with icons
- **Our Process:** 6-step coffee production process
- **Join Us CTA:** Call-to-action section
- **Footer:** Complete footer

---

## 🎨 CSS Techniques Applied

### **1. Advanced Layout Systems**

#### **CSS Grid**
- Responsive grid with `auto-fit` and `minmax()`
- Fixed 3-column grid for 6-item sections (`.grid-6`)
- Masonry-style social media grid
- Featured product 2-column layout

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.grid-6 {
  grid-template-columns: repeat(3, 1fr); /* Fixed 3 columns */
}
```

#### **Flexbox**
- Navigation layout with space-between
- Card content alignment
- Footer columns
- Button groups

---

### **2. Modern Visual Effects**

#### **Glassmorphism (Navigation)**
```css
.navbar {
  backdrop-filter: blur(10px) saturate(180%);
  background-color: hsla(var(--card) / 0.95);
}
```

#### **Animated Gradient Background (Hero)**
```css
.hero {
  background: linear-gradient(135deg, 
    hsl(30, 65%, 45%), 
    hsl(30, 55%, 35%), 
    hsl(25, 60%, 40%),
    hsl(30, 65%, 45%)
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

### **3. Advanced Hover Effects**

#### **Product Card Hover**
- **Lift & Scale:** `translateY(-12px) scale(1.02)`
- **Image Zoom:** `scale(1.1)` on image
- **Shine Effect:** Gradient sweep animation
- **Shadow Enhancement:** Dynamic box-shadow
- **Title Color Change:** Smooth color transition

```css
.card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.card:hover img {
  transform: scale(1.1);
}

.card::before {
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent
  );
  transition: left 0.5s;
}
```

#### **Button Effects**
- Ripple effect with `::before` pseudo-element
- Lift on hover with scale
- Enhanced shadow
- Glassmorphism on secondary buttons

#### **Navigation Underline Animation**
```css
.nav-links a::after {
  content: '';
  width: 0;
  height: 2px;
  background: hsl(var(--primary));
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
```

---

### **4. CSS Animations**

#### **Fade-in Animations**
```css
@keyframes fadeInUpAuto {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUpAuto 0.8s ease-out both;
}

/* Staggered delay for sequential appearance */
.fade-in:nth-child(1) { animation-delay: 0.1s; }
.fade-in:nth-child(2) { animation-delay: 0.2s; }
.fade-in:nth-child(3) { animation-delay: 0.3s; }
```

#### **Number Badge Rotation**
```css
.card:hover .number-badge {
  transform: rotate(360deg) scale(1.1);
}
```

#### **Pulse Animation (Back-to-Top)**
```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
}
```

---

### **5. Design Patterns**

#### **CSS Variables (Custom Properties)**
```css
:root {
  --primary: 30 65% 35%;
  --secondary: 30 55% 25%;
  --background: 30 20% 97%;
  --foreground: 30 10% 15%;
  /* ... more variables */
}
```

#### **Pseudo-elements**
- `::before` and `::after` for decorative elements
- Gradient shine effects
- Animated underlines
- Pulse rings

#### **Transitions & Cubic Bezier**
```css
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

---

### **6. Responsive Design**

#### **Mobile-First Breakpoints**
```css
@media (max-width: 968px) {
  .hero h1 { font-size: 3rem; }
  .featured-product { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
  .grid-6 { grid-template-columns: repeat(2, 1fr); }
  .social-grid { grid-template-columns: repeat(2, 1fr); }
}
```

---

### **7. Typography**

- **Font:** Montserrat (Google Fonts)
- **Weights:** 300, 400, 600, 700, 800
- **Techniques:**
  - `text-transform: uppercase` for headings
  - `letter-spacing` for spacing control
  - `text-shadow` for depth
  - Responsive font sizing

---

### **8. Color System**

**Coffee Brown Theme:**
- Primary: `hsl(30, 65%, 35%)` - Dark coffee brown
- Gradients: Multiple brown tones
- Light mode: `hsl(30, 20%, 97%)`
- Dark sections: `hsl(25, 35%, 12%)`

---

## ✨ Key Features

### **Pure CSS Implementation**
- ✅ **No JavaScript required** - All interactions via CSS
- ✅ **Animated gradients** - Hero background animation
- ✅ **Glassmorphism** - Modern blur effects
- ✅ **3D transforms** - Card hover effects
- ✅ **Staggered animations** - Sequential fade-ins
- ✅ **Smooth scrolling** - `scroll-behavior: smooth`

### **UX Enhancements**
- ✅ **Back-to-top button** - Quick navigation
- ✅ **Hover feedback** - All interactive elements
- ✅ **Visual hierarchy** - Clear content structure
- ✅ **Loading animations** - Smooth entrance effects
- ✅ **Responsive images** - Optimized for all screens

### **Performance Optimizations**
- ✅ **Hardware acceleration** - CSS transform animations
- ✅ **Efficient selectors** - Minimal specificity
- ✅ **Optimized transitions** - Only animate transform/opacity
- ✅ **No render blocking JS** - Pure CSS approach

---

## 🎯 Design Principles

1. **Modern & Minimal** - Clean design with breathing space
2. **Coffee-Themed** - Brown color palette, coffee imagery
3. **Sustainable Focus** - Eco-friendly messaging throughout
4. **Professional** - High-quality aesthetics for premium brand
5. **User-Centric** - Easy navigation, clear CTAs

---

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### **Installation**
1. Clone or download the project
2. Open `index.html` in your browser
3. That's it! No compilation needed.

### **File Structure**
```
All styles are in globals.css
All pages import globals.css
No external dependencies except Google Fonts
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Changes |
|------------|-------------|---------|
| Desktop | > 968px | Full layout, 3-column grids |
| Tablet | 768px - 968px | 2-column grids, smaller fonts |
| Mobile | < 768px | Single column, stacked layout |

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Brown | `#7A5234` | Buttons, badges, accents |
| Dark Brown | `#2E1A0F` | Footer, dark sections |
| Light Beige | `#F9F6F3` | Background |
| White | `#FFFFFF` | Cards, text on dark |

---

## 📊 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Note:** `backdrop-filter` requires modern browser support.

---

## 🔧 Customization

### **Change Color Theme**
Edit CSS variables in `globals.css`:
```css
:root {
  --primary: 30 65% 35%; /* Hue Saturation Lightness */
}
```

### **Modify Animations**
Adjust animation duration and timing:
```css
@keyframes gradientShift {
  /* Change 15s to your preferred duration */
}
```

### **Update Content**
- Edit HTML files directly
- Replace image URLs with your own
- Update text content

---

## 📄 License

This is a student project for UI/UX learning purposes.

---

## 👨‍💻 Author

**Student Project - UI/UX Lab 1**
- Focus: Pure HTML/CSS web design
- Techniques: Modern CSS, Animations, Responsive Design
- Year: 2026

---

## 🙏 Acknowledgments

- **Google Fonts** - Montserrat typeface
- **Unsplash** - Coffee imagery
- **CSS Tricks** - Animation techniques
- **Modern CSS** - Glassmorphism, Grid, Flexbox

---

## 📝 Notes

- **No JavaScript** - Entire site built with HTML/CSS only
- **Semantic HTML** - Proper HTML5 structure
- **Accessibility** - ARIA labels, semantic tags
- **SEO Ready** - Meta tags, proper heading hierarchy

---

**Built with ❤️ and ☕ - Pure HTML & CSS**
