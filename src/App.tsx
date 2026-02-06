import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProductsSection } from './components/ProductsSection'
import { ShopTypesSection } from './components/ShopTypesSection'
import { FeaturesSection } from './components/FeaturesSection'
import { VideosSection } from './components/VideosSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { UserManual } from './pages/UserManual'
import { GeneralRepair } from './pages/GeneralRepair'
import { TireDealer } from './pages/TireDealer'
import { CarDealership } from './pages/CarDealership'
import { HeavyDuty } from './pages/HeavyDuty'
import { TireChangers } from './pages/TireChangers'
import { WheelBalancers } from './pages/WheelBalancers'
import { Lifts } from './pages/Lifts'
import { AirCompressors } from './pages/AirCompressors'
import { WheelAlignment } from './pages/WheelAlignment'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsSection />
      <ShopTypesSection />
      <FeaturesSection />
      <VideosSection />
      <FAQSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-manual" element={<UserManual />} />
          <Route path="/shop/general-repair" element={<GeneralRepair />} />
          <Route path="/shop/tire-dealer" element={<TireDealer />} />
          <Route path="/shop/car-dealership" element={<CarDealership />} />
          <Route path="/shop/heavy-duty" element={<HeavyDuty />} />
          <Route path="/tire-changers" element={<TireChangers />} />
          <Route path="/wheel-balancers" element={<WheelBalancers />} />
          <Route path="/lifts" element={<Lifts />} />
          <Route path="/air-compressors" element={<AirCompressors />} />
          <Route path="/wheel-alignment" element={<WheelAlignment />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
