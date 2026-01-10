# AX Company - AI & Data Science Solutions

<div align="center">
  <img src="public/images/logo/logo.png" alt="AX Company Logo" width="200"/>
  
  <p align="center">
    <strong>Leading provider of Data Science, Artificial Intelligence, and Machine Learning solutions</strong>
  </p>

  <p align="center">
    <a href="https://axionvate.com">Website</a> •
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#deployment">Deployment</a>
  </p>
</div>

---

## 🌟 About

AX Company (Axionvate) is a leading technology company specializing in Data Science, Artificial Intelligence, and Machine Learning solutions. We deliver cutting-edge AI technologies to businesses across the UK, Dubai, Azerbaijan, and Turkey, helping them transform their operations through data-driven insights and intelligent automation.

## ✨ Features

### 🎯 Core Services
- **Big Data Analytics** - Harness the power of massive datasets with distributed computing
- **Machine Learning** - Custom ML models for automation and prediction
- **Artificial Intelligence** - Enterprise AI solutions including NLP and computer vision
- **Predictive Analytics** - Forecast future trends with advanced statistical models
- **Data Science** - Comprehensive analytics and statistical modeling
- **Natural Language Processing** - NLP solutions for chatbots and text analysis

### 🚀 Technical Features
- **SEO Optimized** - Complete meta tags, Open Graph, Twitter Cards
- **Performance Optimized** - Next.js 14 with image optimization (AVIF & WebP)
- **Responsive Design** - Mobile-first approach with beautiful UI/UX
- **Structured Data** - JSON-LD schema for better search engine visibility
- **Dynamic Sitemap** - Auto-generated sitemap.xml
- **Google Analytics Ready** - Built-in analytics integration
- **Accessibility** - WCAG compliant with proper alt texts and semantic HTML

## 🛠️ Technologies

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **SCSS/Sass** - Advanced styling with variables and mixins
- **AOS** - Animate On Scroll library for smooth animations
- **React Modal Video** - Video modal components

### SEO & Performance
- **Next.js Metadata API** - Advanced SEO configuration
- **Sitemap & Robots.txt** - Dynamic generation
- **Image Optimization** - Next/Image with AVIF & WebP support
- **Structured Data** - JSON-LD for rich snippets

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Git** - Version control

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ax-oguz/axcompanywebsite.git
cd axcompanywebsite
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://axionvate.com
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ax-company/
├── app/                          # Next.js 14 App Router
│   ├── about/                   # About page
│   ├── service/                 # Services listing page
│   ├── service-details/[slug]/ # Dynamic service detail pages
│   ├── contact/                # Contact page
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic sitemap.xml
├── components/
│   ├── containers/             # Page-specific components
│   │   ├── HomeOne/           # Homepage sections
│   │   ├── HomeTwo/           # About page sections
│   │   ├── service/           # Service components
│   │   └── contact/           # Contact components
│   ├── layout/                # Layout components
│   │   ├── header/           # Header & navigation
│   │   ├── footer/           # Footer components
│   │   └── banner/           # Hero banners
│   ├── GoogleAnalytics.tsx   # GA integration
│   └── StructuredData.tsx    # JSON-LD schemas
├── public/
│   ├── images/               # Static images
│   └── styles/              # SCSS styles
├── next.config.mjs          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🎨 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with services overview |
| `/about` | Company information and mission |
| `/service` | All services listing |
| `/service-details/[slug]` | Individual service details |
| `/contact` | Contact form and information |

### Service Detail Routes

- `/service-details/big-data`
- `/service-details/machine-learning`
- `/service-details/artificial-intelligence`
- `/service-details/predictive-analytics`
- `/service-details/data-science`
- `/service-details/natural-language-processing`

## 🔧 Configuration

### Image Optimization

Images are automatically optimized using Next.js Image component with:
- AVIF & WebP format support
- Responsive sizes: 640px to 3840px
- Lazy loading by default
- Minimum cache TTL: 60 seconds

### SEO Configuration

Located in `app/layout.tsx`:
- Meta descriptions and keywords
- Open Graph tags for social media
- Twitter Card metadata
- Canonical URLs
- Structured data (JSON-LD)

### Custom Banner Images

Each page can have a custom hero image:

```typescript
<CmnBanner 
  title="Page Title" 
  backgroundImage="/images/your-image.png" 
/>
```

## 📊 SEO Features

### Implemented SEO Strategies

1. **Meta Tags**
   - Title templates
   - Description optimization
   - Keywords targeting

2. **Structured Data**
   - Organization schema
   - Website schema
   - Service schema
   - Local business markup

3. **Sitemap & Robots**
   - Dynamic sitemap generation
   - Search engine directives
   - Crawl optimization

4. **Social Media**
   - Open Graph protocol
   - Twitter Cards
   - LinkedIn optimization

5. **Performance**
   - Core Web Vitals optimization
   - Image optimization
   - Code splitting
   - Compression enabled

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

```bash
# Build and export
npm run build
```

### Environment Variables for Production

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Build Optimization

The project includes:
- Automatic code splitting
- CSS optimization
- Image optimization
- Console.log removal in production
- SWC minification

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

### Optimization Techniques

- ✅ Next.js Image optimization
- ✅ Code splitting and lazy loading
- ✅ SCSS for efficient styling
- ✅ Compression enabled
- ✅ Minimized bundle size
- ✅ Optimized fonts and assets

### Target Metrics

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

## 🔐 Security

- ✅ No sensitive data in client-side code
- ✅ Environment variables for configuration
- ✅ HTTPS enforced in production
- ✅ Secure headers configured
- ✅ No `X-Powered-By` header

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact Information

- **Website**: [https://axionvate.com](https://axionvate.com)
- **Email**: info@axionvate.com
- **Phone**: +208-6666-0112
- **Address**: Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE

## 🌍 Service Areas

We provide services across:
- 🇦🇪 United Arab Emirates (Dubai)
- 🇬🇧 United Kingdom
- 🇦🇿 Azerbaijan
- 🇹🇷 Turkey

## 📄 License

This project is proprietary and confidential.

---

<div align="center">
  <p>Made with ❤️ by AX Company</p>
  <p>© 2024 AX Company. All rights reserved.</p>
</div>
