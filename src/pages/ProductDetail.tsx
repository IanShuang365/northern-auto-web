import React from 'react';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getProductById } from '../data/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './ProductDetail.css';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  // Product variants for carousel
  const productVariants = product ? [
    {
      title: product.title,
      subtitle: product.shortDescription,
      description: 'Standard Edition - Proven Performance',
      image: product.image,
      badge: 'POPULAR',
    },
    {
      title: `${product.title} - Pro Series`,
      subtitle: 'Advanced features for professional shops',
      description: 'Enhanced capabilities with professional-grade components',
      image: product.image,
      badge: 'PREMIUM',
    },
    {
      title: `${product.title} - Industrial Grade`,
      subtitle: 'Heavy-duty variant for demanding applications',
      description: 'Maximum performance and durability for industrial use',
      image: product.image,
      badge: 'INDUSTRIAL',
    },
  ] : [];

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

      {/* Hero Section with Carousel */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.carousel-next',
            prevEl: '.carousel-prev',
          }}
          style={{
            width: '100%',
            height: '600px',
          }}
        >
          {productVariants.map((variant, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(211, 47, 47, 0.5)), url(${variant.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#fff',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    bgcolor: 'rgba(211, 47, 47, 0.8)',
                    color: '#fff',
                    px: 3,
                    py: 0.75,
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    mb: 1,
                  }}
                >
                  {variant.badge}
                </Box>
                <Box sx={{ maxWidth: 800 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      textShadow: '0 4px 12px rgba(0,0,0,0.5)',
                    }}
                  >
                    {variant.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontStyle: 'italic',
                      fontSize: '1.3rem',
                      mb: 2,
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    }}
                  >
                    {variant.subtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      mb: 3,
                      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                      fontWeight: 500,
                    }}
                  >
                    {variant.description}
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
                      boxShadow: '0 4px 12px rgba(211, 47, 47, 0.3)',
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Arrows */}
        <Box
          className="carousel-prev"
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              bgcolor: 'rgba(211, 47, 47, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#d32f2f',
                transform: 'scale(1.1)',
              },
            }}
          >
            ←
          </Box>
        </Box>
        <Box
          className="carousel-next"
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              bgcolor: 'rgba(211, 47, 47, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#d32f2f',
                transform: 'scale(1.1)',
              },
            }}
          >
            →
          </Box>
        </Box>
      </Box>

      {/* Product Description Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box sx={{ mb: 10 }}>
          <Box
            sx={{
              position: 'relative',
              pb: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#333',
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 40,
                  bgcolor: '#d32f2f',
                  borderRadius: '3px',
                }}
              />
              Product Overview
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%)',
                borderRadius: '2px',
              }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: '#f8f9fa',
              p: 5,
              borderRadius: 3,
              borderLeft: '5px solid #d32f2f',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.15rem',
                lineHeight: 2,
                color: '#555',
                fontWeight: 500,
              }}
            >
              {product.longDescription}
            </Typography>
          </Box>
        </Box>

        {/* Video Section */}
        <Box sx={{ mb: 12 }}>
          <Box
            sx={{
              position: 'relative',
              pb: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#333',
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 40,
                  bgcolor: '#d32f2f',
                  borderRadius: '3px',
                }}
              />
              Product Video
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%)',
                borderRadius: '2px',
              }}
            />
          </Box>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: '0 12px 40px rgba(211, 47, 47, 0.15)',
                  bgcolor: '#000',
                  '& iframe': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  },
                }}
              >
                {/* YouTube Video Embed */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UVid2vASCWQ"
                  title="Product Video"
                  allowFullScreen
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#333',
                    mb: 2,
                    fontSize: '1.3rem',
                  }}
                >
                  See It In Action
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  Watch our comprehensive product demonstration video to see all the features and capabilities in action. This video will give you a complete understanding of how our product works and its key benefits.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: '#d32f2f',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        mt: 0.3,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 500,
                      }}
                    >
                      Complete feature overview
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: '#d32f2f',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        mt: 0.3,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 500,
                      }}
                    >
                      Installation & setup guide
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: '#d32f2f',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        mt: 0.3,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 500,
                      }}
                    >
                      Real-world use cases
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Specifications Section */}
        <Box sx={{ mb: 12 }}>
          <Box
            sx={{
              position: 'relative',
              pb: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#333',
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 40,
                  bgcolor: '#d32f2f',
                  borderRadius: '3px',
                }}
              />
              Technical Specifications
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%)',
                borderRadius: '2px',
              }}
            />
          </Box>
          <Grid container spacing={3}>
            {product.specifications.map((spec, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="spec-card"
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(211, 47, 47, 0.15)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 500,
                        fontSize: '0.95rem',
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
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 12 }}>
          <Box
            sx={{
              position: 'relative',
              pb: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#333',
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 40,
                  bgcolor: '#d32f2f',
                  borderRadius: '3px',
                }}
              />
              Key Features
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%)',
                borderRadius: '2px',
              }}
            />
          </Box>
          <Grid container spacing={3}>
            {product.features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    border: 'none',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                    borderTop: '4px solid #d32f2f',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(211, 47, 47, 0) 0%, rgba(211, 47, 47, 0.05) 100%)',
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(211, 47, 47, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          bgcolor: '#d32f2f',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          mt: 0.2,
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
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 12 }}>
          <Box
            sx={{
              position: 'relative',
              pb: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: '#333',
                mb: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 40,
                  bgcolor: '#d32f2f',
                  borderRadius: '3px',
                }}
              />
              Business Benefits
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%)',
                borderRadius: '2px',
              }}
            />
          </Box>
          <Grid container spacing={3}>
            {product.benefits.map((benefit, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  className="benefit-card"
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                    borderLeft: '5px solid #d32f2f',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(211, 47, 47, 0.2)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Price and CTA */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            mb: 12,
            p: 5,
            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(211, 47, 47, 0.12)',
            border: '1px solid rgba(211, 47, 47, 0.1)',
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: '#999',
                mb: 1.5,
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.5px',
              }}
            >
              STARTING PRICE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#d32f2f',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              {product.price}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#d32f2f',
              ml: 'auto',
              px: 5,
              py: 2,
              fontSize: '1.05rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderRadius: 1.5,
              boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
              '@media (max-width: 600px)': {
                ml: 0,
                width: '100%',
              },
              '&:hover': {
                bgcolor: '#b71c1c',
                boxShadow: '0 12px 28px rgba(211, 47, 47, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Request Quote
          </Button>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
          py: 12,
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(211, 47, 47, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(211, 47, 47, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '2rem', md: '3.5rem' },
              lineHeight: 1.2,
              background: 'linear-gradient(135deg, #fff 0%, #d32f2f 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Built to Last.
            <br />
            Built to Perform.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#ccc',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Engineered and manufactured with quality and reliability in mind
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#d32f2f',
                color: '#d32f2f',
                px: 5,
                py: 1.8,
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderWidth: '2px',
                borderRadius: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#d32f2f',
                  color: '#fff',
                  borderColor: '#d32f2f',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                },
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
                px: 5,
                py: 1.8,
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: 1.5,
                boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#b71c1c',
                  boxShadow: '0 12px 28px rgba(211, 47, 47, 0.4)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
