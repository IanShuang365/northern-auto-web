import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import HelpIcon from '@mui/icons-material/Help';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import WarningIcon from '@mui/icons-material/Warning';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './UserManual.css';

export const UserManual: React.FC = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #d32f2f 0%, #8b1a1a 50%, #1a1a1a 100%)',
          py: 12,
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,107,107,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(211,47,47,0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              letterSpacing: '-1px',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            User Manual & Documentation
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
              borderRadius: '2px',
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 400,
              color: '#f0f0f0',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Complete guides and instructions for our automotive equipment
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        {/* Quick Links Section */}
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
              Quick Start Guide
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

          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                  border: 'none',
                  borderTop: '5px solid #d32f2f',
                  boxShadow: '0 6px 24px rgba(211, 47, 47, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(211, 47, 47, 0.1), transparent)',
                    transition: 'left 0.35s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 16px 40px rgba(211, 47, 47, 0.25)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d32f2f 0%, #ff6b6b 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                      }}
                    >
                      <BuildIcon sx={{ fontSize: 36, color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.1rem' }}>
                      Installation
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Step-by-step setup instructions
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                  border: 'none',
                  borderTop: '5px solid #d32f2f',
                  boxShadow: '0 6px 24px rgba(211, 47, 47, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(211, 47, 47, 0.1), transparent)',
                    transition: 'left 0.35s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 16px 40px rgba(211, 47, 47, 0.25)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d32f2f 0%, #ff6b6b 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                      }}
                    >
                      <HelpIcon sx={{ fontSize: 36, color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.1rem' }}>
                      Operating Guide
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      How to use all features
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                  border: 'none',
                  borderTop: '5px solid #d32f2f',
                  boxShadow: '0 6px 24px rgba(211, 47, 47, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(211, 47, 47, 0.1), transparent)',
                    transition: 'left 0.35s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 16px 40px rgba(211, 47, 47, 0.25)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d32f2f 0%, #ff6b6b 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                      }}
                    >
                      <WarningIcon sx={{ fontSize: 36, color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.1rem' }}>
                      Maintenance
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Care and upkeep tips
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                  border: 'none',
                  borderTop: '5px solid #d32f2f',
                  boxShadow: '0 6px 24px rgba(211, 47, 47, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(211, 47, 47, 0.1), transparent)',
                    transition: 'left 0.35s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 16px 40px rgba(211, 47, 47, 0.25)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #d32f2f 0%, #ff6b6b 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                      }}
                    >
                      <SecurityIcon sx={{ fontSize: 36, color: '#fff' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.1rem' }}>
                      Safety & Warranty
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Important safety information
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Installation Section */}
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
              Installation & Setup
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

          <Accordion
            sx={{
              boxShadow: '0 4px 12px rgba(211, 47, 47, 0.12)',
              border: '1px solid rgba(211, 47, 47, 0.15)',
              mb: 2,
              borderRadius: 1.5,
              background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(211, 47, 47, 0.18)',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#d32f2f' }} />}
              sx={{
                bgcolor: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
                borderBottom: '2px solid #d32f2f',
                borderRadius: '8px 8px 0 0',
                '& .MuiAccordionSummary-content': {
                  my: 2,
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.05rem' }}>
                1. Initial Unboxing & Inspection
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3 }}>
              <List sx={{ width: '100%' }}>
                <ListItem>
                  <ListItemText
                    primary="Unpack the equipment carefully"
                    secondary="Ensure all components are present and undamaged"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Check the contents list"
                    secondary="Verify against the included documentation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Inspect for shipping damage"
                    secondary="Report any issues within 48 hours of delivery"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Review the quick start guide"
                    secondary="Familiarize yourself with all components"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: '0 4px 12px rgba(211, 47, 47, 0.12)',
              border: '1px solid rgba(211, 47, 47, 0.15)',
              mb: 2,
              borderRadius: 1.5,
              background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(211, 47, 47, 0.18)',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#d32f2f' }} />}
              sx={{
                bgcolor: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
                borderBottom: '2px solid #d32f2f',
                borderRadius: '8px 8px 0 0',
                '& .MuiAccordionSummary-content': {
                  my: 2,
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.05rem' }}>
                2. Assembly & Installation
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3 }}>
              <List sx={{ width: '100%' }}>
                <ListItem>
                  <ListItemText
                    primary="Prepare installation location"
                    secondary="Ensure proper space, ventilation, and power supply"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Follow assembly instructions carefully"
                    secondary="Refer to step-by-step diagrams in the manual"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Tighten all connections securely"
                    secondary="Use appropriate tools and apply proper torque"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Test all functions before full operation"
                    secondary="Verify everything works correctly"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              boxShadow: '0 4px 12px rgba(211, 47, 47, 0.12)',
              border: '1px solid rgba(211, 47, 47, 0.15)',
              mb: 2,
              borderRadius: 1.5,
              background: 'linear-gradient(135deg, #fff 0%, #fafafa 100%)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(211, 47, 47, 0.18)',
              },
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#d32f2f' }} />}
              sx={{
                bgcolor: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
                borderBottom: '2px solid #d32f2f',
                borderRadius: '8px 8px 0 0',
                '& .MuiAccordionSummary-content': {
                  my: 2,
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', fontSize: '1.05rem' }}>
                3. Power & Connection Setup
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 3 }}>
              <List sx={{ width: '100%' }}>
                <ListItem>
                  <ListItemText
                    primary="Verify power requirements"
                    secondary="Check voltage and amperage specifications"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Connect to appropriate power outlet"
                    secondary="Use a dedicated, grounded outlet if required"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Configure network/control connections"
                    secondary="Follow wiring diagrams provided"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Perform safety checks"
                    secondary="Ensure all electrical connections are secure"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Operating Guide Section */}
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
              Operating Instructions
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

          <Paper
            sx={{
              p: 4,
              background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)',
              border: '1px solid rgba(211, 47, 47, 0.15)',
              boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)',
              borderRadius: 1.5,
            }}
          >
            <List>
              <ListItem sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
                    1.
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary="Power On the Equipment"
                  secondary="Press the main power button and wait for startup sequence to complete"
                />
              </ListItem>
              <ListItem sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
                    2.
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary="Configure Operating Parameters"
                  secondary="Set up required settings using the control panel or software interface"
                />
              </ListItem>
              <ListItem sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
                    3.
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary="Perform Calibration"
                  secondary="Run calibration routine before first use (refer to specific product manual)"
                />
              </ListItem>
              <ListItem sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
                    4.
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary="Load Your First Item"
                  secondary="Follow proper loading procedures as outlined in your product manual"
                />
              </ListItem>
              <ListItem sx={{ mb: 2 }}>
                <ListItemIcon>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
                    5.
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary="Execute the Operation"
                  secondary="Press start/execute button and monitor progress"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
                    6.
                  </Typography>
                </ListItemIcon>
                <ListItemText
                  primary="Remove and Store Results"
                  secondary="Safely remove completed item and clean work area"
                />
              </ListItem>
            </List>
          </Paper>
        </Box>

        {/* Maintenance Section */}
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
              Maintenance & Care
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
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 2 }}>
                  Daily Maintenance
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Clean exterior surfaces" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Check for loose connections" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Verify proper operation" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Remove debris and buildup" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 2 }}>
                  Monthly Maintenance
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Lubricate moving parts" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Inspect for wear and damage" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Check fluid levels" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Perform calibration check" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 2 }}>
                  Yearly Maintenance
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Professional inspection recommended" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Replace consumable parts" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Full system diagnostics" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Update firmware if available" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 2 }}>
                  Storage & Shutdown
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Clean thoroughly before storage" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Allow to cool down completely" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Store in dry environment" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Disconnect power when not in use" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Product Manuals Section */}
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
              Product Manuals by Category
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
            {/* Tire Changers */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3.5, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f', mb: 2, fontSize: '1.15rem' }}>
                  🔧 Tire Changers
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Maxx Series Manual" 
                      secondary="Light duty, automated operation"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="RC Series Manual" 
                      secondary="Standard rotating chuck model"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="C Series Manual" 
                      secondary="Compact, space-saving design"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Tilt Back Manual" 
                      secondary="Heavy-duty commercial use"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="CHD Series Manual" 
                      secondary="Professional grade equipment"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                </List>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 1.5,
                    borderColor: '#d32f2f',
                    color: '#d32f2f',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.05)',
                      borderColor: '#d32f2f',
                    },
                  }}
                >
                  Download All
                </Button>
              </Paper>
            </Grid>

            {/* Wheel Balancers */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3.5, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f', mb: 2, fontSize: '1.15rem' }}>
                  ⚖️ Wheel Balancers
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="E900 Diagnostic Manual" 
                      secondary="Advanced diagnostic system"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Direct Drive Manual" 
                      secondary="High-speed direct drive system"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Space Saving Manual" 
                      secondary="Compact workshop solution"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="HD 6450 Manual" 
                      secondary="Heavy-duty industrial model"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                </List>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 1.5,
                    borderColor: '#d32f2f',
                    color: '#d32f2f',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.05)',
                      borderColor: '#d32f2f',
                    },
                  }}
                >
                  Download All
                </Button>
              </Paper>
            </Grid>

            {/* Lifts */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3.5, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f', mb: 2, fontSize: '1.15rem' }}>
                  🚗 Lifts
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Scissor Lifts Manual" 
                      secondary="Vertical lifting mechanism"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="2-Post Lifts Manual" 
                      secondary="Symmetric column design"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="4-Post Lifts Manual" 
                      secondary="Maximum stability and safety"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Low Profile Manual" 
                      secondary="Compact ceiling-friendly model"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Mobile Columns Manual" 
                      secondary="Portable heavy-duty lifting"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                </List>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 1.5,
                    borderColor: '#d32f2f',
                    color: '#d32f2f',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.05)',
                      borderColor: '#d32f2f',
                    },
                  }}
                >
                  Download All
                </Button>
              </Paper>
            </Grid>

            {/* Air Compressors & Alignment */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3.5, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f', mb: 2, fontSize: '1.15rem' }}>
                  💨 Air Compressors & Alignment
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Maxx Air Compressor Manual" 
                      secondary="Industrial-grade air supply"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="CWA 6500 Aligner Manual" 
                      secondary="Advanced wheel alignment system"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="CWA 6000 Aligner Manual" 
                      secondary="Professional alignment tool"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Tread Depth Scanner Manual" 
                      secondary="Tire measurement device"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.8 }}>
                    <ListItemText 
                      primary="Bodyguard System Manual" 
                      secondary="Vehicle safety inspection tool"
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItem>
                </List>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 1.5,
                    borderColor: '#d32f2f',
                    color: '#d32f2f',
                    fontWeight: 600,
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.05)',
                      borderColor: '#d32f2f',
                    },
                  }}
                >
                  Download All
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Download Section */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
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
                justifyContent: 'center',
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
              Download Documentation
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                background: 'linear-gradient(90deg, #d32f2f 0%, #ff6b6b 100%)',
                borderRadius: '2px',
                mx: 'auto',
              }}
            />
          </Box>

          <Paper sx={{ p: 4, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '2px solid rgba(211, 47, 47, 0.2)', boxShadow: '0 6px 20px rgba(211, 47, 47, 0.12)', borderRadius: 2 }}>
            <Typography variant="body1" sx={{ color: '#555', mb: 4, fontSize: '1.05rem', fontWeight: 500 }}>
              Download complete PDF manuals for all our products
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
                px: 5,
                py: 1.8,
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: 1.5,
                boxShadow: '0 8px 20px rgba(211, 47, 47, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #b71c1c 0%, #8b1a1a 100%)',
                  boxShadow: '0 12px 28px rgba(211, 47, 47, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download All Manuals (ZIP)
            </Button>
          </Paper>
        </Box>

        {/* Support Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 50%, #1a1a1a 100%)',
            p: 6,
            borderRadius: 2,
            border: '1px solid rgba(211, 47, 47, 0.2)',
            textAlign: 'center',
            boxShadow: '0 8px 28px rgba(211, 47, 47, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,107,107,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
              pointerEvents: 'none',
            },
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff', mb: 2, position: 'relative', zIndex: 1, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            Need Additional Help?
          </Typography>
          <Typography variant="body1" sx={{ color: '#f0f0f0', mb: 4, fontSize: '1.05rem', position: 'relative', zIndex: 1, maxWidth: 600, mx: 'auto' }}>
            If you can't find what you're looking for in our user manual, our support team is here to help.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#fff',
              color: '#fff',
              px: 5,
              py: 1.8,
              fontSize: '1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              borderWidth: '2px',
              borderRadius: 1.5,
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 2,
              '&:hover': {
                bgcolor: '#fff',
                color: '#d32f2f',
                borderColor: '#fff',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 28px rgba(255,255,255,0.2)',
              },
            }}
          >
            Contact Support
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  );
};
