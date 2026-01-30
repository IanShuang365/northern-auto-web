import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Safety as a Core Principle',
    description: 'We design equipment with safety as a key element, ensuring user-friendly products meet strict standards to minimize accidents and promote a safe working environment.',
    icon: '🛡️'
  },
  {
    id: '2',
    title: 'Durability By Design',
    description: 'Our technologies are engineered specifically to withstand the rigorous demands of high-performing garages and provide shops with reliable equipment they can count on every day.',
    icon: '💪'
  },
  {
    id: '3',
    title: 'Ease Of Use',
    description: 'The technology we design is user-friendly and features U.S.-built systems for easy serviceability and minimal downtime, maximizing shop efficiency and productivity.',
    icon: '⚙️'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
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
            Designed To Last
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
            sx={{
              color: '#666',
              fontSize: '1.05rem',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Built on three core principles that define our commitment to excellence
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
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
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(211, 47, 47, 0.05) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 32px rgba(211, 47, 47, 0.2)',
                    borderColor: '#d32f2f',
                    '&::before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      fontSize: '3.5rem',
                      mb: 2,
                      transition: 'all 0.4s ease',
                      '.Card:hover &': {
                        transform: 'scale(1.15) rotate(-5deg)',
                      },
                    }}
                  >
                    {feature.icon}
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
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.8,
                      color: '#666',
                      fontSize: '0.95rem',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
