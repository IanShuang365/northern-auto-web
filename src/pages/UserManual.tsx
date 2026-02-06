import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Grid,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
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
