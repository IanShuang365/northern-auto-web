import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/Products.css';

export const Products: React.FC = () => {
  const portfolios = [
    {
      title: 'TIRE CHANGERS',
      subtitle: 'Light Passenger Car and Truck',
      color: '#d32f2f',
      darkColor: '#b71c1c',
      icon: '⚙️',
      items: ['Maxx Series', 'RC Series', 'C Series', 'Tilt Back Tire Changers'],
      heavyTitle: 'Heavy Duty',
      heavyItems: ['CHD Series', 'HIT Series'],
    },
    {
      title: 'WHEEL BALANCERS',
      subtitle: 'Light Passenger Car and Truck',
      color: '#1976d2',
      darkColor: '#1565c0',
      icon: '⚖️',
      items: ['E900 Diagnostic Balancer', 'Direct Drive Series', 'Space Saving Wheel Balancers'],
      heavyTitle: 'Heavy Duty',
      heavyItems: ['HD 6450'],
    },
    {
      title: 'LIFTS',
      subtitle: 'Light Passenger Car and Truck',
      color: '#388e3c',
      darkColor: '#2e7d32',
      icon: '🔧',
      items: ['Scissor Lifts', '2 Post', '4 Post', 'Low Profile Lifts'],
      heavyTitle: 'Heavy Duty',
      heavyItems: ['Mobile Columns'],
    },
  ];

  const technologies = [
    {
      icon: '⚙️',
      title: 'Wheel Balancers',
      description: 'Precision balancing technology for all tire sizes with advanced diagnostics',
      gradient: 'linear-gradient(135deg, #d32f2f 0%, #f44336 100%)',
    },
    {
      icon: '📐',
      title: 'Alignment Systems',
      description: '3D wheel alignment for perfect vehicle geometry and handling',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    },
    {
      icon: '🔍',
      title: 'Inspection Systems',
      description: 'Complete wheel inspection in seconds with comprehensive reporting',
      gradient: 'linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)',
    },
  ];

  const principles = [
    {
      title: 'Diagnostic Reports',
      description:
        'We provide the performance data outputs needed to make real-time decisions and informed recommendations to customers, quickly with confidence.',
      icon: '📊',
    },
    {
      title: 'User Centered Interfaces',
      description:
        'Our software and controls are designed to be simple, intuitive, and easy-to-train for results that are fast and accurate.',
      icon: '🎯',
    },
    {
      title: 'Convenient Automation',
      description:
        'We reduce manual inputs and build automation into your shop to reduce customer wait times and accelerate service quality.',
      icon: '⚡',
    },
    {
      title: 'Serviceability',
      description:
        'Easy service with dedicated support, the only nationwide network of factory-trained technicians and central dispatch.',
      icon: '🔧',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '90vh',
          backgroundImage:
            'linear-gradient(135deg, rgba(211, 47, 47, 0.8) 0%, rgba(211, 47, 47, 0.6) 100%), url(https://images.unsplash.com/photo-1486262715619-4b633ee2b314?w=1600&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '800px' }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#fff',
                mb: 3,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Complete Shop Solutions. <br />
              All Performance.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.8,
                color: '#fff',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                maxWidth: '600px',
              }}
            >
              From precision wheel balancers to diagnostic lifts to nationwide support — we give you a
              complete product line of technology and services built for real-world results.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ py: { xs: 8, md: 12, lg: 16 }, px: 2 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 900,
              mb: 2,
              color: '#1a1a1a',
            }}
          >
            Our Product Portfolio
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '1.05rem',
              color: '#666',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Industry-leading equipment designed for efficiency, durability, and precision
          </Typography>

          <Grid container spacing={4}>
            {portfolios.map((portfolio, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box
                  className="portfolio-card"
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      transform: 'translateY(-12px)',
                    },
                  }}
                >
                  {/* Color Bar */}
                  <Box
                    sx={{
                      height: '6px',
                      background: `linear-gradient(90deg, ${portfolio.color}, ${portfolio.darkColor})`,
                    }}
                  />

                  <Box sx={{ p: 4 }}>
                    {/* Header */}
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
                          fontSize: '2.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '60px',
                          height: '60px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${portfolio.color}20, ${portfolio.color}40)`,
                        }}
                      >
                        {portfolio.icon}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '1.3rem',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: portfolio.color,
                          }}
                        >
                          {portfolio.title}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography sx={{ fontStyle: 'italic', color: '#999', mb: 3, fontSize: '0.95rem' }}>
                      {portfolio.subtitle}
                    </Typography>

                    {/* Items */}
                    <Box sx={{ mb: 4 }}>
                      {portfolio.items.map((item, i) => (
                        <Typography
                          key={i}
                          sx={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#333',
                            mb: 1.5,
                            pl: 2,
                            borderLeft: `3px solid ${portfolio.color}`,
                            paddingLeft: '12px',
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    {/* Heavy Duty Section */}
                    {portfolio.heavyTitle && (
                      <>
                        <Box
                          sx={{
                            pt: 3,
                            borderTop: '2px solid rgba(0, 0, 0, 0.08)',
                          }}
                        >
                          <Typography
                            sx={{
                              fontStyle: 'italic',
                              color: '#999',
                              mb: 2,
                              fontSize: '0.95rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {portfolio.heavyTitle}
                          </Typography>
                          {portfolio.heavyItems.map((item, i) => (
                            <Typography
                              key={i}
                              sx={{
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: '#333',
                                mb: 1,
                                pl: 2,
                                borderLeft: `3px solid ${portfolio.color}`,
                                paddingLeft: '12px',
                              }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Banner Section with Images */}
      <Box
        sx={{
          backgroundColor: '#2a2a2a',
          color: '#fff',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Typography sx={{ fontSize: '2rem' }}>⚙️</Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Our Complete Product Line
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 2,
              mb: 4,
              minHeight: { xs: '200px', md: '300px' },
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                sx={{
                  backgroundImage: `url(https://images.unsplash.com/photo-${1486262715619 + i}?w=400&h=300&fit=crop)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              position: 'relative',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              p: 4,
              borderRadius: '0.5rem',
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Engineered for Performance and Reliability
            </Typography>
            <Typography sx={{ mt: 2, fontSize: '1.1rem' }}>
              Our complete product portfolio is designed with technicians in mind
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Two Column Section */}
      <Box sx={{ py: { xs: 6, md: 8, lg: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1486262715619-4b633ee2b314?w=600&h=400&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      color: '#fff',
                      textTransform: 'uppercase',
                    }}
                  >
                    PRO
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 800,
                  mb: 3,
                  textTransform: 'uppercase',
                  color: '#1a1a1a',
                }}
              >
                Precision That Pays Off
              </Typography>

              <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#555', mb: 2 }}>
                Our Pro Series are the measurement and diagnostic systems your shop needs to boost
                the ride quality and safety of your customers' vehicles.
              </Typography>

              <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#555', mb: 2 }}>
                Our Pro Series portfolio includes wheel balancers, aligners, and vehicle inspection
                systems, so that your shop is the complete provider of wheel diagnostics and repairs.
              </Typography>

              <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#555' }}>
                Designed for high performing tire service providers, our portfolio identifies and
                corrects tough issues like imbalance, alignment, and tread depth.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Technologies Grid Section */}
      <Box sx={{ py: { xs: 8, md: 12, lg: 16 }, px: 2 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 900,
              mb: 2,
              color: '#1a1a1a',
            }}
          >
            Advanced Technologies
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '1.05rem',
              color: '#666',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Cutting-edge solutions for modern repair shops
          </Typography>

          <Grid container spacing={4}>
            {technologies.map((tech, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    minHeight: '360px',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  {/* Gradient Header */}
                  <Box
                    sx={{
                      background: tech.gradient,
                      height: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3.5rem',
                    }}
                  >
                    {tech.icon}
                  </Box>

                  <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      sx={{
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        mb: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        background: tech.gradient,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {tech.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#666', flex: 1 }}>
                      {tech.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Engineering Principles Section */}
      <Box sx={{ py: { xs: 8, md: 12, lg: 16 }, px: 2, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 900,
              mb: 2,
              color: '#1a1a1a',
            }}
          >
            Our Engineering Principles
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '1.05rem',
              color: '#666',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Built with technicians in mind
          </Typography>

          <Grid container spacing={3}>
            {principles.map((principle, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '12px',
                    border: '2px solid rgba(211, 47, 47, 0.1)',
                    backgroundColor: 'rgba(211, 47, 47, 0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#d32f2f',
                      backgroundColor: 'rgba(211, 47, 47, 0.08)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Typography sx={{ fontSize: '2rem', mb: 1.5 }}>{principle.icon}</Typography>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      mb: 1,
                      color: '#d32f2f',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {principle.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#666' }}>
                    {principle.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12, lg: 16 },
          px: 2,
          background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              fontWeight: 900,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            Ready to Transform Your Shop?
          </Typography>

          <Typography sx={{ fontSize: '1.1rem', mb: 6, maxWidth: '600px', mx: 'auto' }}>
            Talk to our representative today to find the right mix of technology and tools for your
            operation.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fff',
              color: '#d32f2f',
              px: { xs: 6, md: 12 },
              py: 1.75,
              fontSize: '1.05rem',
              fontWeight: 800,
              borderRadius: '8px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
              },
            }}
            href="/contact"
          >
            Get Expert Help
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
