# 🛍️ Gadget Heaven

> **Your Ultimate Destination for Cutting-Edge Technology**

A modern, responsive e-commerce platform built with React and Vite, featuring a sleek design and seamless shopping experience for tech enthusiasts.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.10-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.43-5A0EF8?style=flat&logo=daisyui)](https://daisyui.com/)

## ✨ Features

### 🛒 **Shopping Experience**
- **Smart Cart Management** - Add, remove, and sort items with $1000 spending limit
- **Wishlist Functionality** - Save favorite items for later
- **Category Filtering** - Browse by phones, computers, smart watches, chargers, and power banks
- **Product Search & Sort** - Find products easily with intuitive navigation

### 💾 **Data Persistence**
- **Local Storage Integration** - Cart and wishlist data persists across sessions
- **Real-time Updates** - Instant feedback with toast notifications
- **Responsive Design** - Optimized for all device sizes

### 📊 **Analytics Dashboard**
- **Interactive Statistics** - Visual charts showing product category data
- **Purchase Tracking** - Complete order management system
- **User Dashboard** - Centralized cart and wishlist management

### 🎨 **Modern UI/UX**
- **Purple-themed Design** - Elegant and professional appearance
- **Smooth Animations** - Enhanced user interactions
- **Mobile-first Approach** - Responsive across all devices
- **Accessibility Compliant** - WCAG guidelines followed

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/gadget-heaven.git

# Navigate to project directory
cd gadget-heaven

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Hero section component
│   ├── CategorySidebar.jsx
│   ├── Footer.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── RatingStars.jsx
├── context/            # React Context providers
│   ├── CartContext.jsx
│   └── WishlistContext.jsx
├── data/              # Static data files
│   └── products.json
├── layout/            # Layout components
│   └── MainLayout.jsx
├── pages/             # Page components
│   ├── CartTab.jsx
│   ├── Dashboard.jsx
│   ├── Details.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Stats.jsx
│   └── WishlistTab.jsx
└── assets/            # Static assets
```

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.0** - Latest React with concurrent features
- **React Router DOM 7.6.2** - Client-side routing
- **Vite 6.3.5** - Lightning-fast build tool

### **Styling & UI**
- **TailwindCSS 4.1.10** - Utility-first CSS framework
- **DaisyUI 5.0.43** - Beautiful component library
- **Custom CSS** - Additional styling enhancements

### **Data Visualization**
- **Recharts 3.0.0** - Interactive charts and graphs

### **User Experience**
- **React Toastify 11.0.5** - Elegant notifications
- **Local Storage API** - Data persistence

### **Development Tools**
- **ESLint** - Code linting and formatting
- **React Hooks** - Modern React patterns
- **ES6+ JavaScript** - Latest JavaScript features

## 🎯 Key Features Breakdown

### **Smart Shopping Cart**
- Add products with availability checking
- Remove individual items
- Sort by price (high to low)
- $1000 spending limit with warnings
- Persistent storage across sessions

### **Wishlist Management**
- Save products for later
- Move items from wishlist to cart
- Duplicate prevention
- Visual status indicators

### **Product Catalog**
- 50+ products across 5 categories
- High-quality product images
- Detailed specifications
- Star ratings and reviews
- Stock availability status

### **Analytics & Insights**
- Category-wise product distribution
- Average pricing analysis
- Rating trends visualization
- Interactive charts with Recharts

## 🎨 Design Philosophy

### **Color Scheme**
- **Primary**: Purple (#8B5CF6) - Modern and tech-focused
- **Secondary**: White/Gray - Clean and minimal
- **Accent**: Green/Red - Status indicators

### **Typography**
- Clean, readable fonts
- Consistent sizing hierarchy
- Proper contrast ratios

### **Layout**
- Mobile-first responsive design
- Grid-based product layouts
- Intuitive navigation patterns

## 📱 Responsive Design

- **Mobile** (320px+): Single column layout
- **Tablet** (768px+): Two-column product grid
- **Desktop** (1024px+): Three-column product grid
- **Large screens** (1280px+): Optimized spacing

## 🔧 Configuration

### **Vite Configuration**
```javascript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
});
```

### **TailwindCSS Setup**
```css
@import "tailwindcss";
@plugin "daisyui";
```

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Netlify/Vercel**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the blazing-fast build tool
- **TailwindCSS** - For the utility-first CSS framework
- **DaisyUI** - For beautiful UI components
- **Unsplash** - For high-quality product images

## 📞 Support

For support, email alamin24.7oli@gmail.com or join our Slack channel.

---

<div align="center">
  <p>Made with ❤️ by <strong>Gadget Heaven Team</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>