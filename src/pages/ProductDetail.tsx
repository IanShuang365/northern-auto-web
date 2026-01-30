import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { getProductById } from '../data/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './ProductDetail.css';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;
  const [activeTab, setActiveTab] = useState(0);

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

      {/* Hero Section with Background */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '600px',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ maxWidth: 800 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', md: '3.5rem' },
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontStyle: 'italic',
              fontSize: '1.3rem',
              mb: 3,
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            {product.shortDescription}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#d32f2f',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': { bgcolor: '#b71c1c' },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Promise Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1a1a1a',
            }}
          >
            The Promise
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              lineHeight: 1.8,
              fontSize: '1.1rem',
              maxWidth: 800,
            }}
          >
            {product.longDescription}
          </Typography>
        </Container>
      </Box>

      {/* Features Tab Section */}
      <Box sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1a1a1a',
            }}
          >
            Key Features & Benefits
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: '#d32f2f',
              borderRadius: 2,
              mx: 'auto',
              mb: 6,
            }}
          />

          {/* Tab Buttons with Bottom Highlighter */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 0,
              mb: 6,
              overflowX: 'auto',
              borderBottom: '2px solid #e0e0e0',
              '&::-webkit-scrollbar': {
                height: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#d32f2f',
                borderRadius: '3px',
              },
            }}
          >
            {product.features.map((feature, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(index)}
                sx={{
                  px: 2,
                  py: 1.5,
                  fontWeight: activeTab === index ? 700 : 500,
                  color: activeTab === index ? '#d32f2f' : '#666',
                  bgcolor: 'transparent',
                  borderRadius: 0,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  borderBottom: activeTab === index ? '3px solid #d32f2f' : '3px solid transparent',
                  mb: '-2px',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#d32f2f',
                    bgcolor: 'rgba(211, 47, 47, 0.05)',
                  },
                }}
              >
                {feature}
              </Button>
            ))}
          </Box>

          {/* Feature Display with Animation */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  animation: 'fadeIn 0.4s ease-in',
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateX(-10px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.features[activeTab]}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 450,
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  animation: 'fadeIn 0.4s ease-in',
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateX(10px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: '#d32f2f',
                      color: '#fff',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                    }}
                  >
                    {activeTab + 1}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: '#1a1a1a',
                      fontSize: { xs: '1.4rem', md: '1.8rem' },
                    }}
                  >
                    {product.features[activeTab]}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 40,
                    height: 4,
                    bgcolor: '#d32f2f',
                    borderRadius: 2,
                    mb: 3,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    mb: 3,
                  }}
                >
                  {product.benefits[activeTab] || 'This feature is designed to improve your workflow and enhance productivity.'}
                </Typography>

                {/* Feature Highlights */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#333',
                      mb: 2,
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Key Benefits:
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {[
                      'Increased efficiency and speed',
                      'Improved accuracy and precision',
                      'Reduced maintenance costs',
                    ].map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            bgcolor: '#d32f2f',
                            borderRadius: '50%',
                          }}
                        />
                        <Typography
                          sx={{
                            color: '#666',
                            fontSize: '0.95rem',
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#d32f2f',
                      '&:hover': { bgcolor: '#b71c1c' },
                    }}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#d32f2f',
                      color: '#d32f2f',
                      '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.05)' },
                    }}
                  >
                    Request Demo
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Grid Section */}
      <Box sx={{ py: 8, bgcolor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 1,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1a1a1a',
            }}
          >
            Why Choose {product.title}?
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: '#d32f2f',
              borderRadius: 2,
              mx: 'auto',
              mb: 6,
            }}
          />
          <Grid container spacing={3}>
            {product.benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderLeft: '6px solid #d32f2f',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 100,
                      height: 100,
                      bgcolor: 'rgba(211, 47, 47, 0.05)',
                      borderRadius: '50%',
                      transform: 'translate(30%, -30%)',
                    },
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(211, 47, 47, 0.15)',
                      transform: 'translateY(-8px)',
                      borderLeftColor: '#b71c1c',
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        bgcolor: '#ffeaea',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        fontSize: '1.5rem',
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333',
                        fontWeight: 600,
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      }}
                    >
                      {benefit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Specifications Section */}
      <Box sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1a1a1a',
            }}
          >
            Technical Specifications
          </Typography>
          <Grid container spacing={2}>
            {product.specifications.map((spec, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    bgcolor: '#f9f9f9',
                    borderLeft: '3px solid #d32f2f',
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 500,
                        lineHeight: 1.6,
                      }}
                    >
                      {spec}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          bgcolor: '#d32f2f',
          color: '#fff',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Ready to Equip Your Shop?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '1.1rem',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Contact our sales team today to learn more about {product.title} and explore flexible financing options.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#fff',
                color: '#d32f2f',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              Call: 1-647-886-2259
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Made in USA Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: 400,
          backgroundImage:
            'linear-gradient(26deg, rgba(0,0,0,0.7) 0%, rgba(39,46,56,0.7) 100%), url(/api/placeholder/1920/600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Built to Last. Built to Perform.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontSize: '1.2rem',
              fontWeight: 500,
            }}
          >
            Engineered and manufactured with quality in mind
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                px: 4,
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              Learn About Us
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#d32f2f',
                color: '#fff',
                px: 4,
                '&:hover': { bgcolor: '#b71c1c' },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};
