# Go Bikey - Online Bike Service Website

A modern, responsive website for Go Bikey, an online professional bike service and repair company based in Hyderabad. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with full responsive design
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: FAQ accordion, booking modal, contact forms
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Form Handling**: React Hook Form with validation
- **Routing**: React Router for seamless navigation
- **Accessibility**: ARIA labels, keyboard navigation, focus management

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Routing**: React Router DOM
- **HTTP Client**: Axios (ready for backend integration)
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with sticky behavior
│   ├── Hero.tsx        # Hero section with call-to-action
│   ├── Services.tsx    # Service cards with pricing
│   ├── WorkProcess.tsx # 4-step work process
│   ├── WhatsIncluded.tsx # Service inclusions list
│   ├── FAQ.tsx         # Expandable FAQ section
│   ├── CallToAction.tsx # Call-to-action section
│   ├── ContactInfo.tsx # Contact information display
│   ├── ContactForm.tsx # Contact form with validation
│   ├── BookingModal.tsx # Comprehensive booking form
│   ├── Footer.tsx      # Footer with links and social media
│   ├── WhatsAppFloat.tsx # Floating WhatsApp button
│   └── ScrollToTop.tsx # Back to top button
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with all sections
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About/Work Process page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component with routing
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gobikey-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Yellow (#FBBF24)
- **Accent**: Purple (#7C3AED)
- **Neutral**: Gray scale

### Typography
- Modern, clean font stack
- Responsive text sizing
- Proper hierarchy and spacing

### Animations
- Smooth scroll animations
- Hover effects and transitions
- Page load animations
- Interactive micro-animations

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js` or use CSS custom properties.

### Content
All text content is easily editable in the component files.

### Images
Replace placeholder images with actual service images in the `public/images/` directory.

## 📋 Pages & Sections

### Homepage
- Hero section with main message
- Services overview
- Work process steps
- What's included in services
- FAQ section
- Call to action

### Services Page
- Detailed service descriptions
- Pricing information
- Service images
- Booking buttons

### About Page
- Work process explanation
- Service inclusions
- Company information

### Contact Page
- Contact information
- Contact form
- Location details
- WhatsApp integration

## 📞 Contact Information

- **Location**: Gachibowli, Hyderabad 500032
- **Email**: helpdesk@gobikey.in
- **Phone**: +91 9346256309
- **WhatsApp**: +91 9346256309

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with one click

### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

## 🔒 Environment Variables

Create a `.env` file for any API keys or configuration:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

## 📊 Performance

- Lazy loading for images
- Optimized bundle size
- Efficient animations
- Responsive images
- Minimal dependencies

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support
- Semantic HTML structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from the original Go Bikey website
- Icons from Heroicons
- Tailwind CSS for styling
- Framer Motion for animations

## 📞 Support

For support or questions, please contact:
- **Email**: helpdesk@gobikey.in
- **Phone**: +91 9346256309

---

**Built with ❤️ for Go Bikey**
