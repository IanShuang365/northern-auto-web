import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  Divider,
  Chip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpecsIcon from '@mui/icons-material/Info';
import { getProductById } from '../data/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <>
        <Header />
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
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: '#f5f5f5', py: 4 }}>
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: '#d32f2f',
              mb: 3,
              '&:hover': {
                bgcolor: 'rgba(211, 47, 47, 0.1)',
              },
            }}
          >
            Back to Products
          </Button>

          <Grid container spacing={4}>
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: 2 }}>
                <Box
                  component="img"
                  src={product.image}
                  alt={product.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Card>
            </Grid>

            {/* Product Info */}
            <Grid item xs={12} md={6}>
              <Box>
                <Chip
                  label={product.category}
                  sx={{
                    bgcolor: '#d32f2f',
                    color: '#fff',
                    mb: 2,
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    color: '#333',
                    fontWeight: 700,
                  }}
                >
                  {product.title}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: '#d32f2f',
                    mb: 3,
                    fontWeight: 700,
                  }}
                >
                  {product.price}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  {product.longDescription}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#d32f2f',
                      mr: 2,
                      mb: 1,
                      '&:hover': {
                        bgcolor: '#b71c1c',
                      },
                    }}
                  >
                    Request Quote
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: '#d32f2f',
                      color: '#d32f2f',
                      mb: 1,
                      '&:hover': {
                        bgcolor: 'rgba(211, 47, 47, 0.1)',
                      },
                    }}
                  >
                    Contact Sales
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Features Section */}
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: '#333',
                fontWeight: 700,
              }}
            >
              Key Features
            </Typography>
            <Grid container spacing={2}>
              {product.features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ h: '100%' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <CheckCircleIcon
                        sx={{
                          color: '#d32f2f',
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" sx={{ color: '#333' }}>
                        {feature}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Benefits Section */}
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: '#333',
                fontWeight: 700,
              }}
            >
              Benefits
            </Typography>
            <Card>
              <CardContent>
                <List>
                  {product.benefits.map((benefit, index) => (
                    <React.Fragment key={index}>
                      <ListItem disableGutters>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={benefit}
                          primaryTypographyProps={{
                            sx: { color: '#333', fontWeight: 500 },
                          }}
                        />
                      </ListItem>
                      {index < product.benefits.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>

          {/* Specifications Section */}
          <Box sx={{ mt: 6, mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: '#333',
                fontWeight: 700,
              }}
            >
              Technical Specifications
            </Typography>
            <Grid container spacing={2}>
              {product.specifications.map((spec, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <SpecsIcon
                        sx={{
                          color: '#2196F3',
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {spec}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* CTA Section */}
          <Card
            sx={{
              bgcolor: '#d32f2f',
              color: '#fff',
              p: 4,
              textAlign: 'center',
              mb: 4,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
              Ready to Upgrade Your Shop?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Contact our sales team today to learn more about {product.title} and financing options.
            </Typography>
            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#fff',
                  color: '#d32f2f',
                  mr: 2,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                  },
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
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Call: 800-688-6359
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
