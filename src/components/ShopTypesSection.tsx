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
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import StoreIcon from '@mui/icons-material/Store';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ShopType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  route: string;
}

const shopTypes: ShopType[] = [
  {
    id: '1',
    title: 'General Repair',
    description: 'Complete solutions for all repair needs',
    icon: <BuildIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
    route: '/shop/general-repair',
  },
  {
    id: '2',
    title: 'Tire Dealer',
    description: 'Specialized tire service solutions',
    icon: <DirectionsCarIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
    route: '/shop/tire-dealer',
  },
  {
    id: '3',
    title: 'Car Dealership',
    description: 'Dealership-specific solutions',
    icon: <StoreIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
    route: '/shop/car-dealership',
  },
  {
    id: '4',
    title: 'Heavy Duty',
    description: 'Heavy-duty equipment and services',
    icon: <ConstructionIcon sx={{ fontSize: 48, color: '#d32f2f' }} />,
    route: '/shop/heavy-duty',
  }
];

export const ShopTypesSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
      }}
      id="shop-types"
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
            What Kind Of Shop Are You?
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
            Find solutions tailored to your business needs
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {shopTypes.map((shop) => (
            <Grid item xs={12} sm={6} md={3} key={shop.id}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid #efefef',
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: '#d32f2f',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 32px rgba(211, 47, 47, 0.2)',
                    borderColor: '#d32f2f',
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 80,
                      height: 80,
                      bgcolor: '#f0f0f0',
                      borderRadius: 2,
                      transition: 'all 0.4s ease',
                      '.Card:hover &': {
                        bgcolor: '#d32f2f',
                        transform: 'rotate(5deg) scale(1.05)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        transition: 'all 0.4s ease',
                        '.Card:hover & > svg': {
                          color: '#fff !important',
                        },
                      }}
                    >
                      {shop.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 1.5,
                      color: '#1a1a1a',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                    }}
                  >
                    {shop.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      flex: 1,
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                    }}
                  >
                    {shop.description}
                  </Typography>
                  <Button
                    onClick={() => navigate(shop.route)}
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
                    sx={{
                      bgcolor: '#d32f2f',
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.95rem',
                      py: 1.2,
                      px: 2.5,
                      boxShadow: '0 2px 8px rgba(211, 47, 47, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: '#b71c1c',
                        boxShadow: '0 4px 16px rgba(211, 47, 47, 0.3)',
                        transform: 'translateY(-2px)',
                        '& svg': {
                          transform: 'translateX(4px)',
                        },
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
