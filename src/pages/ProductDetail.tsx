import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getProductById } from '../data/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './ProductDetail.css';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container maxWidth="lg">
            <Box sx={{ py: 8, textAlign: 'center' }}>
              <Typography variant="h4" color="error" sx={{ mb: 2 }}>
                Product Not Found
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                sx={{ bgcolor: '#d32f2f' }}
              >
                Back to Home
              </Button>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <>
      <Header />

      {/* Main Content Section */}
      <Box sx={{ bgcolor: '#fafafa', pt: 8, pb: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center" sx={{ mb: 16 }}>
            {/* Left: Description & Specs */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: '#1a1a1a',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  {product.title}
                </Typography>

                <Box
                  sx={{
                    width: 60,
                    height: 3,
                    bgcolor: '#d32f2f',
                    borderRadius: '2px',
                    mb: 4,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    mb: 6,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    fontWeight: 400,
                  }}
                >
                  {product.longDescription}
                </Typography>

                <Box sx={{ mb: 6 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1a1a1a',
                      mb: 3,
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Key Specifications
                  </Typography>
                  <List disablePadding>
                    {product.specifications.slice(0, 4).map((spec, idx) => (
                      <ListItem key={idx} disableGutters sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 28, color: '#d32f2f' }}>
                          <CheckCircleIcon sx={{ fontSize: '1rem' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={spec}
                          primaryTypographyProps={{
                            sx: { fontSize: '0.95rem', color: '#555', fontWeight: 500 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* CTA Button */}
                <Button
                  href="tel:+1-800-688-6359"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#d32f2f',
                    color: '#fff',
                    py: 1.8,
                    px: 5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 1,
                    boxShadow: '0 4px 16px rgba(211, 47, 47, 0.2)',
                    '&:hover': {
                      bgcolor: '#b71c1c',
                      boxShadow: '0 8px 24px rgba(211, 47, 47, 0.35)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Request Quote (Call Now)
                </Button>
              </Box>
            </Grid>

            {/* Right: Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 450,
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '30px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 16 }}>
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
              fontSize: '2rem',
            }}
          >
            Features
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: '#d32f2f',
              borderRadius: '2px',
              mb: 8,
            }}
          />
          <Grid container spacing={4}>
            {product.features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    border: 'none',
                    background: '#fff',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                    borderRadius: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: '#ffe6e6',
                        color: '#d32f2f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '1.2rem',
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: '#333',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Specifications Display */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
              fontSize: '2rem',
            }}
          >
            Specifications
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: '#d32f2f',
              borderRadius: '2px',
              mb: 8,
            }}
          />
          <Grid container spacing={4}>
            {product.specifications.map((spec, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    background: '#fff',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                    borderRadius: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    p: 3.5,
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12)',
                      borderColor: '#d32f2f',
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {spec}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
              fontSize: '2rem',
            }}
          >
            Business Benefits
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: '#d32f2f',
              borderRadius: '2px',
              mb: 8,
            }}
          />
          <Grid container spacing={4}>
            {product.benefits.map((benefit, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    background: '#fff',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                    borderRadius: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    p: 3.5,
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 8px 28px rgba(0, 0, 0, 0.12)',
                      borderColor: '#d32f2f',
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#555',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Final CTA Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            p: 8,
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: 2,
            boxShadow: '0 4px 24px rgba(211, 47, 47, 0.08)',
            textAlign: 'center',
            mt: 4,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 32px rgba(211, 47, 47, 0.15)',
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
              fontSize: '1.8rem',
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              mb: 4,
              fontSize: '1rem',
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            Contact our team today to learn more about this product and how it can benefit your business.
          </Typography>
          <Button
            href="tel:+1-800-688-6359"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#d32f2f',
              color: '#fff',
              px: 6,
              py: 1.8,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 1,
              boxShadow: '0 4px 16px rgba(211, 47, 47, 0.2)',
              '&:hover': {
                bgcolor: '#b71c1c',
                boxShadow: '0 8px 24px rgba(211, 47, 47, 0.35)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Call Now
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  );
};
