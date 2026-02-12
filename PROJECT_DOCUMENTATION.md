# FIT Solar - Project Documentation

## Complete Directory Structure

```
FIT solar/
├── .github/
│   └── copilot-instructions.md
├── .next/                         (build output)
├── app/
│   ├── favicon.ico
│   ├── fonts/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── CategoryGrid.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── ValueProposition.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
├── node_modules/
├── public/
├── .eslintrc.json
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Component Overview

### 1. Layout & Routing

#### `app/layout.tsx`
- Root layout with SEO metadata
- Inter font configuration for Vietnamese support
- Viewport configuration
- Open Graph tags for social media sharing

#### `app/page.tsx`
- Main landing page
- Imports and renders all section components
- Clean, semantic structure

#### `app/globals.css`
- Tailwind CSS v4 configuration
- Custom emerald color palette
- CSS custom properties
- shadcn/ui theme integration

### 2. Section Components

#### `components/sections/Header.tsx`
**Features:**
- Sticky navigation with scroll effect
- Glassmorphism backdrop
- Mobile hamburger menu
- Desktop navigation links
- CTA button "Nhận báo giá"

**Menu Items:**
- Giải pháp (#solutions)
- Sản phẩm (#products)
- Dự án (#projects)
- Hỗ trợ (#support)

#### `components/sections/Hero.tsx`
**Features:**
- Full-screen hero section
- Background image with overlay gradient
- Main headline and sub-headline
- Slogan display
- Dual CTA buttons
- Animated scroll indicator

**Content:**
- Headline: "Năng Lượng Sạch - Giải Pháp Kinh Tế Bền Vững"
- Sub-headline: "Cung cấp giải pháp điện mặt trời trọn gói, giúp cắt giảm đến 80% chi phí điện năng"
- Slogan: "Tối ưu tiền điện - Bền bỉ cùng thời gian"

#### `components/sections/CategoryGrid.tsx`
**Features:**
- 4-card grid layout
- Responsive (1 col mobile → 2 col tablet → 4 col desktop)
- Background images with gradient overlays
- Hover scale animations
- Arrow icon with slide transition

**Categories:**
1. Hộ Gia Đình - Residential solutions
2. Cơ Sở Thương Mại - Commercial solutions
3. Quy Mô Lớn - Industrial scale
4. Sản Phẩm Thiết Bị - Equipment products

#### `components/sections/ValueProposition.tsx`
**Features:**
- 4-column layout
- Lucide React icons
- Icon background color transition on hover
- Center-aligned content

**Value Props:**
1. **Tiết kiệm 30% - 80%** (TrendingDown icon)
   - Giảm chi phí điện năng đáng kể

2. **Độ bền trên 25 năm** (ShieldCheck icon)
   - Sản phẩm chất lượng cao với bảo hành dài hạn

3. **Lắp đặt trọn gói** (PackageCheck icon)
   - Dịch vụ trọn gói từ khảo sát đến vận hành

4. **Hỗ trợ kỹ thuật 24/7** (Headset icon)
   - Đội ngũ kỹ thuật viên chuyên nghiệp

#### `components/sections/FeaturedProducts.tsx`
**Features:**
- 3-product grid
- Product cards with images
- Specification icons (Zap, Award, Shield)
- Pricing display
- CTA buttons

**Products:**
1. Panel Mono PERC 550W
   - Công suất: 550W
   - Hiệu suất: 21.2%
   - Bảo hành: 25 năm

2. Inverter Hybrid 10kW
   - Công suất: 10kW
   - Hiệu suất: 97.6%
   - Bảo hành: 10 năm

3. Pin Lưu Trữ LiFePO4 15kWh
   - Công suất: 15kWh
   - Hiệu suất: 95%
   - Bảo hành: 15 năm

#### `components/sections/Gallery.tsx`
**Features:**
- Masonry grid layout
- Variable span sizes for visual interest
- Hover scale and overlay effects
- Location tags

**Projects:**
1. Dự án 50kW - Nhà máy (Bình Dương) - 2x2 span
2. Hệ thống 10kW - Biệt thự (TP. HCM)
3. Hệ thống 30kW - Khách sạn (Đà Nẵng)
4. Hệ thống 15kW - Nhà hàng (Hà Nội)
5. Hệ thống 100kW - Nhà máy (Đồng Nai)

#### `components/sections/Footer.tsx`
**Features:**
- 4-column footer layout
- Company information with icons
- Quick links navigation
- Services list
- Newsletter signup form
- Social media links
- Bottom copyright bar

**Sections:**
1. **Company Info**
   - Logo and slogan
   - Address (with MapPin icon)
   - Phone (with Phone icon)
   - Email (with Mail icon)

2. **Quick Links**
   - Giải pháp
   - Sản phẩm
   - Dự án
   - Về chúng tôi
   - Liên hệ

3. **Services**
   - Tư vấn thiết kế
   - Lắp đặt hệ thống
   - Bảo trì & Sửa chữa
   - Giám sát từ xa
   - Hỗ trợ kỹ thuật 24/7

4. **Newsletter**
   - Email input field
   - Subscribe button
   - Social icons (Facebook, LinkedIn, YouTube)

### 3. UI Components (shadcn/ui)

#### `components/ui/button.tsx`
- Multiple variants (default, outline, ghost, etc.)
- Size options (sm, md, lg)
- Emerald green primary color
- Hover and active states

#### `components/ui/card.tsx`
- Container, header, title, description, content, footer
- Clean, modern styling
- Shadow effects

#### `components/ui/input.tsx`
- Form input field
- Focus states
- Disabled states
- Accessible labels

### 4. Utility Files

#### `lib/utils.ts`
- `cn()` function for conditional class merging
- Uses clsx and tailwind-merge

## SEO Configuration

### Metadata (in app/layout.tsx)
```typescript
title: "FIT Solar - Giải Pháp Điện Mặt Trời Trọn Gói | Tiết Kiệm Đến 80%"
description: "FIT Solar cung cấp giải pháp điện mặt trời trọn gói..."
keywords: "điện mặt trời, năng lượng sạch, pin mặt trời, ..."
authors: [{ name: "FIT Solar" }]
```

### Open Graph
```typescript
openGraph: {
  title: "FIT Solar - Giải Pháp Điện Mặt Trời Trọn Gói"
  description: "Cung cấp giải pháp điện mặt trời trọn gói..."
  type: "website"
  locale: "vi_VN"
}
```

### Viewport
```typescript
viewport: {
  width: "device-width"
  initialScale: 1
}
```

## Color Palette

### Emerald Green (Primary)
```css
--color-emerald-50: oklch(0.98 0.02 160)
--color-emerald-100: oklch(0.95 0.05 160)
--color-emerald-200: oklch(0.90 0.10 160)
--color-emerald-300: oklch(0.82 0.15 160)
--color-emerald-400: oklch(0.72 0.18 160)
--color-emerald-500: oklch(0.62 0.19 160)
--color-emerald-600: oklch(0.52 0.18 160)  /* Primary #10B981 */
--color-emerald-700: oklch(0.42 0.15 160)
--color-emerald-800: oklch(0.34 0.12 160)
--color-emerald-900: oklch(0.28 0.08 160)
```

### Usage Examples
```tsx
// Buttons
className="bg-emerald-600 hover:bg-emerald-700"

// Text
className="text-emerald-600"

// Icons
className="text-emerald-500"

// Backgrounds
className="bg-emerald-100"
```

## Responsive Design Strategy

### Breakpoints
- **Mobile**: < 768px (default)
- **Tablet**: >= 768px (md:)
- **Desktop**: >= 1024px (lg:)

### Examples
```tsx
// Grid responsive
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Text size
className="text-4xl md:text-5xl lg:text-6xl"

// Padding
className="px-4 lg:px-8"

// Hidden/visible
className="hidden md:block"
```

## Image Sources

All images are sourced from Unsplash for demonstration:
- Solar panels: `photo-1509391366360-2e959784a276`
- Residential: `photo-1560518883-ce09059eeffa`
- Commercial: `photo-1497366216548-37526070297c`
- Industrial: `photo-1497435334941-8c899ee9e8e9`
- Products: `photo-1559827260-dc66d52bef19`

**Note**: Replace these with actual FIT Solar images in production.

## Deployment Checklist

- [ ] Replace placeholder images with real FIT Solar images
- [ ] Update company contact information (address, phone, email)
- [ ] Add real product specifications and pricing
- [ ] Connect newsletter form to email service
- [ ] Add analytics tracking (Google Analytics, etc.)
- [ ] Set up contact form backend
- [ ] Configure domain and SSL certificate
- [ ] Test on all major browsers
- [ ] Run Lighthouse audit for performance
- [ ] Verify SEO tags and Open Graph images

## Development Tips

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation links in Header if needed

### Modifying Colors
Edit `app/globals.css` in the `@theme inline` block

### Adding Icons
```tsx
import { IconName } from "lucide-react";
<IconName className="w-5 h-5" />
```

### Adding UI Components
```bash
npx shadcn@latest add [component-name]
```

## Performance Optimizations

1. **Next.js Image Component**: Automatic optimization
2. **App Router**: Server components by default
3. **Tailwind CSS**: Purged unused styles
4. **Code Splitting**: Automatic with Next.js
5. **Font Optimization**: Inter font preloaded

## Accessibility Features

- Semantic HTML tags
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on all images
- Proper heading hierarchy

---

**Project Status**: ✅ Complete and Ready for Deployment

**Last Updated**: February 12, 2026
