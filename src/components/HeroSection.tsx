import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';

const heroImages = [carousel1, carousel2, carousel3, carousel4];

const heroContent = [
  {
    title: 'Precision Wheel Balancing',
    description: 'Advanced diagnostic technology delivers unmatched accuracy. Keep your customers satisfied with professional-grade results.',
  },
  {
    title: 'Professional Tire Service',
    description: 'Automated tire changing equipment saves time and increases efficiency. Perfect for high-volume automotive shops.',
  },
  {
    title: 'Expert Diagnostic Tools',
    description: 'Comprehensive vehicle system analysis with cloud connectivity. Stay updated with the latest diagnostic data.',
  },
  {
    title: 'Complete Workshop Solutions',
    description: 'From tire service to vehicle lifts, we provide everything your shop needs. All-in-one equipment for maximum productivity.',
  },
];

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 400, md: 550 },
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
          filter: 'brightness(0.65)',
          transition: 'background-image 1.5s cubic-bezier(0.4,0,0.2,1), filter 1.5s ease',
          '&:hover': {
            filter: 'brightness(0.7)',
          },
        }}
      />
      {/* Gradient Overlay - Enhanced */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(211,47,47,0.15) 50%, rgba(0,0,0,0.5) 100%)',
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
                animation: `${slideInLeft} 0.8s cubic-bezier(0.4,0,0.2,1)`,
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}
            >
              {heroContent[bgIndex].title}
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
                animation: `${slideInUp} 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s both`,
                opacity: 0.95,
              }}
            >
              {heroContent[bgIndex].description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#d32f2f',
                fontWeight: 700,
                px: 5,
                py: 1.75,
                fontSize: '1.05rem',
                borderRadius: 1,
                boxShadow: '0 8px 24px rgba(211,47,47,0.3)',
                color: '#fff',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  bgcolor: '#b71c1c',
                  transition: 'left 0.3s ease',
                  zIndex: -1,
                },
                '&:hover': {
                  bgcolor: '#b71c1c',
                  boxShadow: '0 12px 32px rgba(211,47,47,0.4)',
                  transform: 'translateY(-2px)',
                  letterSpacing: '0.5px',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
              href="#products"
            >
              View Products
            </Button>
          </Grid>
        </Grid>
      </Container>
      
      {/* Slide Indicator Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        {heroImages.map((_, index) => (
          <Box
            key={index}
            onClick={() => setBgIndex(index)}
            sx={{
              width: bgIndex === index ? 28 : 12,
              height: 6,
              bgcolor: bgIndex === index ? '#fff' : 'rgba(255,255,255,0.5)',
              borderRadius: 3,
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              '&:hover': {
                bgcolor: '#fff',
                width: bgIndex === index ? 28 : 16,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
