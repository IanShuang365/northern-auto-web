import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';

export const CarDealership: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    'Pre-sale vehicle inspection systems',
    'Quality assurance tools',
    'Vehicle maintenance tracking',
    'Professional diagnostics',
    'Training and support',
    'Compliance reporting',
  ];

  const equipment = [
    'Wheel Aligners',
    'Diagnostic Systems',
    'Wheel Balancers',
    'Inspection Equipment',
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)',
          py: 10,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(211, 47, 47, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            onClick={() => navigate('/#shop-types')}
            sx={{
              mb: 4,
              color: '#d32f2f',
              textTransform: 'none',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(-4px)',
                color: '#b71c1c',
              },
            }}
          >
            ← Back to Shop Types
          </Button>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#1a1a1a',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}
          >
            Car Dealership Solutions
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: '#d32f2f',
              borderRadius: 2,
              mb: 4,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: '#555',
              maxWidth: '700px',
              lineHeight: 1.9,
              mb: 5,
              fontSize: '1.1rem',
              fontWeight: 400,
            }}
          >
            Advanced inspection and maintenance tools to ensure your inventory meets the highest quality standards.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/product/2')}
            sx={{
              bgcolor: '#d32f2f',
              px: 4,
              py: 1.6,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 1,
              boxShadow: '0 4px 12px rgba(211, 47, 47, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#b71c1c',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(211, 47, 47, 0.4)',
              },
            }}
          >
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#333',
                }}
              >
                Dealership Advantages
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={{ mb: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon sx={{ color: '#d32f2f', fontSize: 24 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        sx: { fontSize: '1.05rem', color: '#333' },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#333',
                }}
              >
                Inspection Solutions
              </Typography>
              <Grid container spacing={2}>
                {equipment.map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <VerifiedIcon
                          sx={{
                            fontSize: 40,
                            color: '#d32f2f',
                            mb: 1,
                          }}
                        />
                        <Typography sx={{ color: '#333', fontWeight: 600 }}>
                          {item}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: '#333',
              }}
            >
              Enhance Your Dealership Operations
            </Typography>
            <Typography
              sx={{
                color: '#666',
                mb: 4,
                fontSize: '1.1rem',
              }}
            >
              Ensure every vehicle in your inventory is in perfect condition with our professional solutions.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                bgcolor: '#d32f2f',
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#b71c1c',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
