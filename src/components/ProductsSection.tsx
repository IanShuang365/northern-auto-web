import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { products } from '../data/products';

export const ProductsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
      }}
      id="products"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#1a1a1a',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              letterSpacing: '-0.5px',
            }}
          >
            Our Products
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: '#d32f2f',
              borderRadius: 2,
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: '1.1rem',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Keep Your Shop in Complete Alignment
          </Typography>
        </Box>
        
        <Grid container spacing={3.5}>
          {products.slice(0, 11).map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid #efefef',
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 32px rgba(211, 47, 47, 0.2)',
                    borderColor: '#d32f2f',
                  },
                }}
                onClick={() => handleProductClick(product.id)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 200,
                    background: '#f0f0f0',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      transition: 'transform 0.4s ease',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(211, 47, 47, 0) 0%, rgba(211, 47, 47, 0.1) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '.Card:hover &': {
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                    background: '#fff',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 1.5,
                      color: '#1a1a1a',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2.5,
                      lineHeight: 1.6,
                      color: '#666',
                      fontSize: '0.95rem',
                      flexGrow: 1,
                    }}
                  >
                    {product.shortDescription}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#d32f2f',
                      fontWeight: 800,
                      mb: 2.5,
                      fontSize: '1.25rem',
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="contained"
                      size="medium"
                      fullWidth
                      sx={{
                        bgcolor: '#d32f2f',
                        color: '#fff',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '0.95rem',
                        py: 1.2,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(211, 47, 47, 0.2)',
                        '&:hover': {
                          bgcolor: '#b71c1c',
                          boxShadow: '0 4px 16px rgba(211, 47, 47, 0.3)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
