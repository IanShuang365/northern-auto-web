import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';

const heroImages = [product1, product2, product3, product4];

export const HeroSection: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 400, md: 500 },
        minHeight: 350,
        bgcolor: '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Auto-sliding Product Image Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          backgroundImage: `url(${heroImages[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          transition: 'background-image 1s cubic-bezier(0.4,0,0.2,1)',
        }}
      />
      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.4)',
          zIndex: 2,
        }}
      />
      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#fff',
                fontSize: { xs: '2rem', md: '2.5rem' },
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              Professional Automotive Equipment
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: '#fff',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                maxWidth: 500,
              }}
            >
              Discover precision, durability, and innovation for your shop. Explore our range of wheel balancers, aligners, lifts, and more.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#d32f2f',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 1,
                boxShadow: '0 4px 16px rgba(211,47,47,0.25)',
                color: '#fff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#b71c1c',
                  color: '#ffe066',
                  boxShadow: '0 6px 24px rgba(211,47,47,0.35)',
                },
              }}
              href="#products"
            >
              View Products
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
