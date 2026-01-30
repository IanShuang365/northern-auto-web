import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Drawer,
  Box,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

type NavLink = {
  label: string;
  href: string;
  isHash?: boolean;
};

export const InfoSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(newOpen);
  };

  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Wheel Balancers', href: '/product/1' },
        { label: 'Wheel Aligners', href: '/product/2' },
        { label: 'Lift Systems', href: '/product/3' },
        { label: 'Tire Changers', href: '/product/4' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Videos', href: '/#videos', isHash: true },
        { label: 'FAQ', href: '/#faq', isHash: true },
      ],
    },
  ];

  const content = (
    <Box
      sx={{
        width: 320,
        height: '100%',
        bgcolor: '#1a1a1a',
        color: '#e0e0e0',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
          Menu
        </Typography>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ color: '#e0e0e0', '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.1)' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: '#333', mb: 3 }} />

      {/* Contact Info */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#fff',
            mb: 2,
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Contact Info
        </Typography>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <PhoneIcon sx={{ fontSize: 20, color: '#d32f2f' }} />
            <Link
              href="tel:+1-647-886-2259"
              sx={{
                color: '#e0e0e0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#ffeb3b' },
              }}
            >
              +1 (647) 886-2259
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <EmailIcon sx={{ fontSize: 20, color: '#d32f2f' }} />
            <Link
              href="mailto:info@bdbcartools.com"
              sx={{
                color: '#e0e0e0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#ffeb3b' },
              }}
            >
              info@bdbcartools.com
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <WhatsAppIcon sx={{ fontSize: 20, color: '#d32f2f' }} />
            <Link
              href="https://wa.me/14375538502"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#e0e0e0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#ffeb3b' },
              }}
            >
              +1 (437) 553-8502
            </Link>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ bgcolor: '#333', mb: 3 }} />

      {/* Navigation Links */}
      {sections.map((section) => (
        <Box key={section.title} sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#fff',
              mb: 1.5,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {section.title}
          </Typography>
          <Stack spacing={0.8}>
            {section.links.map((link: NavLink) => {
              const isInternal = link.href.startsWith('/');
              if (link.isHash) {
                return (
                  <Link
                    key={link.href}
                    component={RouterLink}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    sx={{
                      color: '#e0e0e0',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                      pl: 1,
                      borderLeft: '2px solid transparent',
                      '&:hover': {
                        color: '#ffeb3b',
                        borderLeftColor: '#d32f2f',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                );
              }
              return isInternal ? (
                <Link
                  key={link.href}
                  component={RouterLink}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    color: '#e0e0e0',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    pl: 1,
                    borderLeft: '2px solid transparent',
                    '&:hover': {
                      color: '#ffeb3b',
                      borderLeftColor: '#d32f2f',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    color: '#e0e0e0',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    pl: 1,
                    borderLeft: '2px solid transparent',
                    '&:hover': {
                      color: '#ffeb3b',
                      borderLeftColor: '#d32f2f',
                    },
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Stack>
        </Box>
      ))}

      {/* Social Links */}
      <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid #333' }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#fff',
            mb: 2,
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          Follow Us
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link
            href="https://instagram.com/bdb_mechanixpro"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#d32f2f',
                transform: 'scale(1.2)',
              },
            }}
            title="Instagram"
          >
            <InstagramIcon />
          </Link>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{
          color: '#666',
          mt: 4,
          fontSize: '0.75rem',
          textAlign: 'center',
        }}
      >
        © 2024 BDB Car Tools. All rights reserved.
      </Typography>
    </Box>
  );

  return (
    <>
      {/* Menu Button */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: '#fff',
          '&:hover': {
            bgcolor: 'rgba(255, 235, 59, 0.1)',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: '#1a1a1a',
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};
