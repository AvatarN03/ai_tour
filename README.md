# 🌍 AI Tour Organizer

> **Transform your travel dreams into perfectly planned adventures with the power of AI**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/JavaScript-ES2023-yellow?style=for-the-badge&logo=javascript)](https://javascript.info/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)

**AI Tour Organizer** is a cutting-edge web application that leverages artificial intelligence to create personalized travel itineraries, complete with real-time weather data, interactive maps, budget planning, and community features. Built with modern web technologies for a seamless user experience.

## ✨ Features

### 🏠 **Landing & Authentication**
- **Stunning Landing Page** with animated hero section and feature highlights
- **Secure Authentication** with multiple login options (Google, Email, etc.)
- **Multi-language Support** for global accessibility
- **Dark/Light Mode** with smooth transitions
- **Web Accessibility** compliant (WCAG 2.1)

### 📊 **Smart Dashboard**
- **Personalized Welcome** with user city weather integration
- **Trip Creation Button** for quick itinerary generation
- **Recommended Trips** based on user preferences and analytics
- **User Reports & Analytics** with visual charts and insights
- **Real-time Updates & Notifications** for trip changes and offers

### 🔍 **Advanced Trip Discovery**
- **Intelligent Search** with source and destination options
- **Category-based Filters** (Adventure, Culture, Beach, Food, etc.)
- **Interactive Map Integration** with route visualization
- **Budget Planning Tools** with cost breakdowns
- **Preference Matching** for personalized recommendations

### 💾 **Trip Management**
- **Saved Trips Library** with search and organization features
- **Trip Information Dashboard** with detailed breakdowns
- **Budget Tracking** with expense monitoring
- **Date Management** with calendar integration
- **Dynamic Data Refresh** for up-to-date pricing and availability

### 🤖 **AI-Powered Assistant**
- **Intelligent Chat Interface** for trip planning assistance
- **Voice Assistant Integration** for hands-free interaction
- **Personalized Recommendations** based on user history
- **Real-time Trip Optimization** with weather and traffic data

### 🌐 **Community Zone**
- **Travel Forums** for community discussions
- **User Reviews & Feedback** system
- **Discord-style Chat** for real-time communication
- **Experience Sharing** with photos and stories

### 🛠️ **Utility Tools**
- **Expense Tracker** with category-wise breakdown
- **Multi-Currency Converter** with real-time rates
- **Emergency Contact Information** by country
- **Travel Document Reminders** and checklists

### 📈 **Advanced Features**
- **Detailed Trip Analytics** with insights and patterns
- **Weather Integration** for each day of travel
- **Route Optimization** with multiple transport options
- **Booking Integration** with hotels, flights, and activities
- **Package Materials** with downloadable itineraries

## 🚀 Tech Stack

### **Frontend**
- **[Next.js 15.5.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern component library
- **[Framer Motion](https://framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### **Backend & Database**
- **[Prisma](https://prisma.io/)** - Database ORM
- **[Neon PostgreSQL](https://neon.tech/)** - Serverless PostgreSQL
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution

### **External Services**
- **[OpenAI API](https://openai.com/api/)** - AI-powered itinerary generation
- **[Mapbox](https://mapbox.com/)** - Interactive maps and route visualization
- **[OpenWeatherMap](https://openweathermap.org/)** - Weather data integration
- **[Pusher](https://pusher.com/)** - Real-time notifications and chat

### **State Management & Forms**
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[TanStack Query](https://tanstack.com/query)** - Server state management

### **Development & Testing**
- **[Jest](https://jestjs.io/)** - Unit testing
- **[Playwright](https://playwright.dev/)** - E2E testing
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - Code quality
- **[Husky](https://typicode.github.io/husky/)** - Git hooks

## 🏗️ Application Architecture

```
AI Tour Organizer
├── Landing Page (Multi-language, Dark Mode)
├── Authentication (Login/Signup)
└── Main Application
    ├── 📊 Dashboard
    │   ├── User Weather
    │   ├── Trip Creation
    │   ├── Recommendations
    │   └── Notifications
    ├── 🔍 Discover
    │   ├── Search Options
    │   ├── Category Filters
    │   ├── Interactive Maps
    │   └── Budget Planning
    ├── 💾 Saved Trips
    │   ├── Trip Library
    │   ├── Budget Tracking
    │   └── Data Refresh
    ├── 🤖 AI Assistant
    │   ├── Chat Interface
    │   └── Voice Assistant
    ├── 🌐 Community Zone
    │   └── Forums & Chat
    ├── 🛠️ Tools
    │   ├── Expense Tracker
    │   ├── Currency Converter
    │   └── Emergency Contacts
    └── 📈 Insights
        └── Analytics Dashboard
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **PostgreSQL** database (Neon recommended)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-tour-organizer.git
cd ai-tour-organizer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
```

Configure your `.env.local` file:
```env
# Database
DATABASE_URL="your-neon-postgresql-url"

# Authentication
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# AI & APIs
OPENAI_API_KEY="your-openai-api-key"
NEXT_PUBLIC_MAPBOX_TOKEN="your-mapbox-token"
NEXT_PUBLIC_OPENWEATHER_KEY="your-openweather-api-key"

# Real-time Features
PUSHER_APP_ID="your-pusher-app-id"
PUSHER_KEY="your-pusher-key"
PUSHER_SECRET="your-pusher-secret"
PUSHER_CLUSTER="your-pusher-cluster"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database
node prisma/seed.js
```

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📱 Key Features Demo

### AI Itinerary Generation
The core feature that sets this app apart:
1. **Input**: Source, destination, dates, budget, preferences
2. **Processing**: AI analyzes data and creates optimized itinerary
3. **Output**: Day-by-day schedule with activities, routes, and weather
4. **Integration**: Booking links, budget tracking, and real-time updates

### Interactive Trip Planning
- **Visual Route Planning** with drag-and-drop waypoints
- **Weather-Aware Scheduling** with activity recommendations
- **Budget Optimization** with cost comparisons
- **Real-time Collaboration** for group trip planning

## 🔧 API Endpoints

### Trip Generation
```bash
POST /api/itinerary/generate
Content-Type: application/json

{
  "userId": "user_123",
  "source": {"place": "Mumbai, India", "lat": 19.0760, "lon": 72.8777},
  "destination": {"place": "Goa, India", "lat": 15.2993, "lon": 74.1240},
  "startDate": "2025-09-10",
  "endDate": "2025-09-14",
  "budget": {"currency": "INR", "amount": 20000},
  "persons": 2,
  "preferences": ["beach", "local-food", "budget"]
}
```

### Weather Integration
```bash
GET /api/weather?lat=15.2993&lon=74.1240
```

### Trip Management
```bash
POST /api/trips/:id/refresh    # Refresh trip data
GET /api/trips/user/:userId    # Get user trips
```

## 🧪 Testing

### Run Unit Tests
```bash
npm run test
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:coverage
```

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on git push

### Manual Deployment
```bash
npm run build
npm run start
```

### Environment Variables for Production
Ensure all environment variables are set in your deployment platform:
- Database connections
- API keys for external services
- Authentication providers
- Real-time service credentials

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for powerful AI capabilities
- **Mapbox** for beautiful map visualizations
- **shadcn/ui** for elegant component design
- **Vercel** for seamless deployment platform
- **The open-source community** for amazing tools and libraries

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/ai-tour-organizer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ai-tour-organizer/discussions)
- **Email**: support@aitourorganizer.com

---

<div align="center">
  <p><strong>Made with ❤️ for travelers worldwide</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>