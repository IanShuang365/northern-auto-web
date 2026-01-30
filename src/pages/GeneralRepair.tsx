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
import BuildIcon from '@mui/icons-material/Build';

export const GeneralRepair: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    'Complete diagnostic solutions',
    'Multi-brand compatibility',
    'Comprehensive service coverage',
    'Easy-to-use interfaces',
    '24/7 technical support',
    'Warranty included',
  ];

  const equipment = [
    'Wheel Balancers',
    'Wheel Aligners',
    'Diagnostic Systems',
    'Tire Changers',
    'Lift Systems',
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Button
            onClick={() => navigate('/#shop-types')}
            sx={{ mb: 3, color: '#d32f2f', textTransform: 'none' }}
          >
            ← Back to Shop Types
          </Button>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#333',
            }}
          >
            General Repair Solutions
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              maxWidth: '800px',
              lineHeight: 1.8,
            }}
          >
            Complete automotive equipment and technology solutions designed for independent repair shops that service all makes and models.
          </Typography>
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
                Why Choose Our Solutions?
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
                Equipment We Offer
              </Typography>
              <Grid container spacing={2}>
                {equipment.map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <BuildIcon
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
              Ready to Upgrade Your Shop?
            </Typography>
            <Typography
              sx={{
                color: '#666',
                mb: 4,
                fontSize: '1.1rem',
              }}
            >
              Contact us today to learn more about our comprehensive repair solutions.
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
