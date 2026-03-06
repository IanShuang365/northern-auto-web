import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './CategoryPage.css';
import { products } from '../data/products';

// Filter products by Measurement & Diagnostics category
const wheelBalancerProducts = products
  .filter(product => product.category === 'Measurement & Diagnostics')
  .map(product => ({
    id: product.slug,
    name: product.title,
    category: product.category,
    price: product.price,
    image: product.image,
    description: product.shortDescription,
    features: product.features.slice(0, 3),
  }));

export const WheelBalancers: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const maxCarouselIndex = Math.max(0, wheelBalancerProducts.length - 1);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, maxCarouselIndex]);

  const handleCarouselPrev = () => {
    setIsAutoPlay(false);
    setCarouselIndex((prev) => (prev === 0 ? maxCarouselIndex : prev - 1));
  };

  const handleCarouselNext = () => {
    setIsAutoPlay(false);
    setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
  };

  const currentProduct = wheelBalancerProducts[carouselIndex];

  return (
    <>
      <Header />

      {/* Hero Section with Carousel */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #d32f2f 0%, #8b1a1a 50%, #1a1a1a 100%)',
          py: 10,
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,107,107,0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Side - Product Image and Info */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  animation: 'fadeIn 0.8s ease-out',
                }}
              >
                <CardMedia
                  component="img"
                  image={currentProduct.image}
                  alt={currentProduct.name}
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    animation: 'slideIn 0.8s ease-out',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {currentProduct.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#f0f0f0', mb: 2 }}>
                    {currentProduct.description}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: '#ff6b6b' }}>
                    {currentProduct.price}
                  </Typography>
                </Box>

                {/* Carousel Controls */}
                <IconButton
                  onClick={handleCarouselPrev}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': {
                      background: 'rgba(0,0,0,0.7)',
                    },
                  }}
                >
                  <ChevronLeftIcon />
                </IconButton>
                <IconButton
                  onClick={handleCarouselNext}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': {
                      background: 'rgba(0,0,0,0.7)',
                    },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Box>

              {/* Carousel Indicators */}
              <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                {wheelBalancerProducts.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      setCarouselIndex(index);
                      setIsAutoPlay(false);
                    }}
                    sx={{
                      width: carouselIndex === index ? 24 : 10,
                      height: 8,
                      borderRadius: 4,
                      background:
                        carouselIndex === index
                          ? '#ff6b6b'
                          : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Box>
            </Grid>

            {/* Right Side - Title and Description */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  animation: 'slideInRight 0.8s ease-out',
                }}
              >
                Wheel Balancers
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: '#f0f0f0',
                  maxWidth: 500,
                  mb: 3,
                  lineHeight: 1.8,
                  animation: 'slideInRight 0.8s ease-out 0.1s both',
                }}
              >
                Precision wheel balancing equipment for perfect vehicle balance
              </Typography>
              <Button
                component={RouterLink}
                to={`/product/${currentProduct.id}`}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ff9999 100%)',
                  color: '#1a1a1a',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.5,
                  animation: 'slideInRight 0.8s ease-out 0.2s both',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff9999 0%, #ffb3b3 100%)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                Explore Featured Product
              </Button>
            </Grid>
          </Grid>
        </Container>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}</style>
      </Box>

      {/* All Products Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 6, textAlign: 'center', color: '#1a1a1a' }}>
          All Wheel Balancers
        </Typography>
        <Grid container spacing={3}>
          {wheelBalancerProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                  border: '1px solid rgba(211, 47, 47, 0.15)',
                  borderTop: '5px solid #d32f2f',
                  boxShadow: '0 6px 24px rgba(211, 47, 47, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(211, 47, 47, 0.1), transparent)',
                    transition: 'left 0.35s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 16px 40px rgba(211, 47, 47, 0.25)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 1.5 }}>
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{
                        background: 'linear-gradient(135deg, #d32f2f 0%, #ff6b6b 100%)',
                        color: '#fff',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#d32f2f', mb: 2 }}>
                    {product.price}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    {product.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: '#d32f2f',
                          color: '#d32f2f',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    component={RouterLink}
                    to={`/product/${product.id}`}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
                      marginTop: 'auto',
                      fontWeight: 700,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #b71c1c 0%, #8b1a1a 100%)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};
