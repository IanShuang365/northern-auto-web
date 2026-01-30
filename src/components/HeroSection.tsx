import React, { useRef } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';

const slides = [
  {
    id: 1,
    title: 'Professional Wheel Balancer',
    description: 'Precision equipment for perfect wheel balance',
    image: product1,
  },
  {
    id: 2,
    title: 'Advanced Wheel Aligner',
    description: '3D alignment system with laser precision',
    image: product2,
  },
  {
    id: 3,
    title: 'Heavy-Duty Lift System',
    description: 'Industrial-grade lifting for all vehicles',
    image: product3,
  },
  {
    id: 4,
    title: 'Automatic Tire Changer',
    description: 'Fast and reliable tire changing equipment',
    image: product4,
  },
];

export const HeroSection: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        py: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .hero-swiper {
          height: auto;
        }
        .hero-swiper .swiper-pagination {
          bottom: 20px;
          z-index: 10;
        }
        .hero-swiper .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background-color: #d32f2f;
        }
        .hero-slide {
          position: relative;
          height: 500px;
        }
        @media (max-width: 600px) {
          .hero-slide {
            height: 400px;
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        loop
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box className="hero-slide">
              {/* Blurred Background Image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(10px)',
                  zIndex: 1,
                }}
              />
              {/* Dark Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.4)',
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
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h3"
                      component="h1"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#fff',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        color: '#fff',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {slide.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: '#d32f2f',
                        '&:hover': {
                          bgcolor: '#b71c1c',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <IconButton
        ref={prevRef}
        sx={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          '&:hover': {
            bgcolor: 'rgba(211, 47, 47, 0.7)',
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          '&:hover': {
            bgcolor: 'rgba(211, 47, 47, 0.7)',
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};
