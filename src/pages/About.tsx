import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import BuildIcon from '@mui/icons-material/Build';
import GroupIcon from '@mui/icons-material/Group';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const About: React.FC = () => {
  const values = [
    {
      icon: <BuildIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality equipment and service in the automotive industry.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
      title: 'Partnership',
      description: 'We build long-term relationships with our customers, supporting their growth and success.',
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge solutions that help our customers stay ahead.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
      title: 'Growth',
      description: 'We invest in our team and technologies to ensure sustainable growth and success.',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#333',
              textAlign: 'center',
            }}
          >
            About Northern Auto
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            We are a leading provider of automotive equipment and solutions for professional repair shops, dealerships, and tire dealers worldwide.
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#333',
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  color: '#666',
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Founded in 1995, Northern Auto has been at the forefront of automotive equipment innovation for nearly three decades. What started as a small family business has grown into an industry leader, serving thousands of shops across North America.
              </Typography>
              <Typography
                sx={{
                  color: '#666',
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Our mission is simple: to provide automotive professionals with the best tools, equipment, and support they need to serve their customers with excellence.
              </Typography>
              <Typography
                sx={{
                  color: '#666',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                We believe in continuous innovation, customer-first service, and building partnerships that last. Every product we offer is tested rigorously to ensure it meets our high standards for quality and reliability.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#d32f2f',
                    mb: 2,
                  }}
                >
                  28+
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '1.1rem', mb: 3 }}>
                  Years of Excellence
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#d32f2f',
                    mb: 2,
                  }}
                >
                  5,000+
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '1.1rem', mb: 3 }}>
                  Shops Worldwide
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#d32f2f',
                    mb: 2,
                  }}
                >
                  100%
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '1.1rem' }}>
                  Customer Satisfaction
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 6,
              color: '#333',
              textAlign: 'center',
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: '#333',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography sx={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#333',
              textAlign: 'center',
            }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#d32f2f',
                  }}
                >
                  ✓ Industry Leading Technology
                </Typography>
                <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                  Our equipment incorporates the latest advancements in automotive diagnostic and service technology.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#d32f2f',
                  }}
                >
                  ✓ Expert Support
                </Typography>
                <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                  Our dedicated support team is available 24/7 to help you maximize your equipment investment.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#d32f2f',
                  }}
                >
                  ✓ Comprehensive Warranty
                </Typography>
                <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                  All our products come with comprehensive warranties and extended support options available.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
