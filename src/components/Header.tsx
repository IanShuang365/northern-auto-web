import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
} from '@mui/material';
import logoImage from '../assets/logo.jpg';
import { SearchBar } from './SearchBar';
import { InfoSidebar } from './InfoSidebar';

export const Header: React.FC = () => {
  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: '#d32f2f',
        overflow: 'visible',
        boxShadow: '0 2px 12px rgba(211, 47, 47, 0.25)',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: 0,
            gap: 3,
            minHeight: 75,
            position: 'relative',
          }}
        >
          {/* Logo and Brand */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="BDB Car Tools Logo"
              sx={{
                height: 50,
                width: 50,
                borderRadius: 1.5,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  transform: 'translateY(-2px)',
                },
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                color: '#fff',
                letterSpacing: '0.5px',
              }}
            >
              BDB Car Tools
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flex: 1,
              justifyContent: 'center',
              '@media (max-width: 960px)': {
                display: 'none',
              },
            }}
          >
            <SearchBar />
          </Box>

          {/* Navigation Links and Menu */}
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              '@media (max-width: 600px)': {
                gap: 1,
              },
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                component={RouterLink}
                to={link.href}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  display: { xs: 'none', sm: 'block' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: 2,
                    background: '#ffeb3b',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                  '&:hover': {
                    color: '#ffeb3b',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
            <InfoSidebar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
