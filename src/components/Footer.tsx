import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer: React.FC = () => (
  <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: '#e0e0e0', pt: 6, pb: 3, borderTop: '1px solid #333', mt: 8 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Contact Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#fff', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Contact Info
          </Typography>
          <Stack spacing={1.5}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <PhoneIcon sx={{ color: '#d32f2f', fontSize: 20 }} />
              <Link href="tel:+1-647-886-2259" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
                +1 (647) 886-2259
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <EmailIcon sx={{ color: '#d32f2f', fontSize: 20 }} />
              <Link href="mailto:info@bdbcartools.com" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
                info@bdbcartools.com
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <WhatsAppIcon sx={{ color: '#d32f2f', fontSize: 20 }} />
              <Link href="https://wa.me/14375538502" color="inherit" underline="hover" target="_blank" rel="noopener" sx={{ fontSize: '0.95rem' }}>
                +1 (437) 553-8502
              </Link>
            </Stack>
            <Typography variant="body2" sx={{ mt: 1, color: '#aaa', fontSize: '0.9rem' }}>
              9:00am – 6:00pm EST, Mon–Sat
            </Typography>
          </Stack>
        </Grid>

        {/* Company Links */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#fff', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Company
          </Typography>
          <Stack spacing={1}>
            <Link href="/about" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              About Us
            </Link>
            <Link href="/contact" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              Contact Us
            </Link>
          </Stack>
        </Grid>

        {/* Products Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#fff', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Products
          </Typography>
          <Stack spacing={1}>
            <Link href="/#products" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              Wheel Balancers
            </Link>
            <Link href="/#products" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              Wheel Aligners
            </Link>
            <Link href="/#products" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              Lift Systems
            </Link>
            <Link href="/#products" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              Tire Changers
            </Link>
          </Stack>
        </Grid>

        {/* Resources & Social */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#fff', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Resources
          </Typography>
          <Stack spacing={1}>
            <Link href="/#videos" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              Videos
            </Link>
            <Link href="/#faq" color="inherit" underline="hover" sx={{ fontSize: '0.95rem' }}>
              FAQ
            </Link>
          </Stack>
          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: '#fff', fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Follow Us
          </Typography>
          <IconButton
            href="https://instagram.com/bdb_mechanixpro"
            target="_blank"
            rel="noopener"
            sx={{
              color: '#fff',
              bgcolor: '#d32f2f',
              '&:hover': { bgcolor: '#b71c1c' },
              mr: 1,
            }}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
      <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,0.7)' }}>
        &copy; {new Date().getFullYear()} BDB Car Tools. All rights reserved.
      </Typography>
    </Container>
  </Box>
);
