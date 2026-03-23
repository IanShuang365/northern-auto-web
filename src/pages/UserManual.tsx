import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import acMachineManual from '../assets/Other/AC Machine User Manual.pdf';
import tbl510Manual from '../assets/Other/TBL-510 User Manual.pdf';
import tbl620Manual from '../assets/Other/TBL-620 User Manual.pdf';
import hdac50cvManual from '../assets/Other/UserManual-HDAC-50CV.pdf';
import './UserManual.css';

export const UserManual: React.FC = () => {
  const manuals = [
    {
      title: 'AC Machine User Manual',
      description: 'Comprehensive guide for AC machine operation and maintenance',
      file: acMachineManual,
      fileName: 'AC Machine User Manual.pdf',
      category: 'AC Equipment',
      icon: '🚗',
    },
    {
      title: 'TBL-510 User Manual',
      description: 'Heavy-duty industrial wheel balancer manual',
      file: tbl510Manual,
      fileName: 'TBL-510 User Manual.pdf',
      category: 'Wheel Balancers',
      icon: '⚖️',
    },
    {
      title: 'TBL-620 User Manual',
      description: 'Advanced wheel balancer operation and maintenance guide',
      file: tbl620Manual,
      fileName: 'TBL-620 User Manual.pdf',
      category: 'Wheel Balancers',
      icon: '⚖️',
    },
    {
      title: 'HDAC-50CV Heavy Duty User Manual',
      description: 'Heavy-duty AC machine for commercial use',
      file: hdac50cvManual,
      fileName: 'UserManual-HDAC-50CV.pdf',
      category: 'AC Equipment',
      icon: '🚗',
    },
  ];

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
              Available User Manuals
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
            {manuals.map((manual, index) => (
              <Grid item xs={12} md={6} lg={6} key={index}>
                <Paper sx={{ p: 3.5, background: 'linear-gradient(135deg, #f8f9fa 0%, #fff 100%)', border: '1px solid rgba(211, 47, 47, 0.15)', boxShadow: '0 4px 12px rgba(211, 47, 47, 0.08)', borderRadius: 1.5, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h2" sx={{ fontSize: '2rem', mr: 2 }}>
                      {manual.icon}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f', mb: 0.5, fontSize: '1.15rem' }}>
                        {manual.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {manual.category}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      mb: 2.5,
                      flex: 1,
                      lineHeight: 1.6,
                    }}
                  >
                    {manual.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="medium"
                    startIcon={<DownloadIcon />}
                    onClick={() => handleDownload(manual.file, manual.fileName)}
                    sx={{
                      backgroundColor: '#d32f2f',
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: '#b71c1c',
                        boxShadow: '0 6px 16px rgba(211, 47, 47, 0.3)',
                      },
                    }}
                  >
                    Download PDF
                  </Button>
                </Paper>
              </Grid>
            ))}
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
