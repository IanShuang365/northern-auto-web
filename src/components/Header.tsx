import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Container,
  Drawer,
  IconButton,
  Stack,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../components/Header.css';
import { SearchBar } from './SearchBar';
import { InfoSidebar } from './InfoSidebar';

export const Header: React.FC = () => {

  // Mega menu data structure
  const megaMenuColumns = [
    {
      title: 'TIRE CHANGERS',
      href: '/tire-changers',
      desc: 'Browse all tire changer models',
      items: [
        { label: 'TC-100 Entry Series', href: '/product/tc-100', highlight: false },
        { label: 'TC-211 Professional', href: '/product/tc-211', highlight: false },
        { label: 'Maxx Series Tire Changer', href: '/product/maxx-series', highlight: false },
        { label: 'RC Series Tire Changer', href: '/product/rc-series', highlight: false },
        { label: 'C Series Tire Changer', href: '/product/c-series', highlight: false },
        { label: 'Tilt Back Tire Changers', href: '/product/tilt-back', highlight: false },
      ],
      heavyDesc: 'Heavy Duty',
      heavyItems: [
        { label: 'CHD Series', href: '/product/chd-series', highlight: false },
        { label: 'HIT Series', href: '/product/hit-series', highlight: false },
      ],
    },
    {
      title: 'WHEEL BALANCERS',
      href: '/wheel-balancers',
      desc: 'Browse all wheel balancer models',
      items: [
        { label: 'Elite II Pro Balancer', href: '/product/elite-ii-pro', highlight: true },
        { label: 'NH-3 Series', href: '/product/nh-3', highlight: false },
        { label: 'NH-6 Series', href: '/product/nh-6', highlight: false },
        { label: 'Space Saving Wheel Balancers', href: '/product/space-saving', highlight: false },
      ],
      heavyDesc: 'Heavy Duty',
      heavyItems: [
        { label: 'HD 6450 Heavy-Duty', href: '/product/hd-6450', highlight: false },
      ],
    },
    {
      title: 'AC MACHINES',
      href: '/air-compressors',
      desc: 'Browse all AC service equipment',
      items: [
        { label: 'R134A AC Machine', href: '/product/r134a', highlight: false },
        { label: 'R1234YF AC Machine', href: '/product/r1234yf', highlight: false },
        { label: 'MS906PRO Diagnostic Scanner', href: '/product/ms906pro', highlight: false },
      ],
      heavyDesc: 'Air Systems',
      heavyItems: [
        { label: 'Maxx Air Compressor', href: '/product/maxx-air-compressor', highlight: false },
      ],
    },
    {
      title: 'LIFTING EQUIPMENT',
      href: '/lifts',
      items: [
        { label: 'SlideTop Series Lift 1', href: '/product/slideop-lift-1', highlight: false },
        { label: 'SlideTop Series Lift 2', href: '/product/slideop-lift-2', highlight: false },
        { label: '2-Post Lift System', href: '/product/2-post-lifts', highlight: false },
        { label: '4-Post Lift System', href: '/product/4-post-lifts', highlight: false },
        { label: 'Low-Profile Lift System', href: '/product/low-profile-lifts', highlight: false },
        { label: 'Mobile Lift Columns', href: '/product/mobile-columns', highlight: false },
      ],
      extra: [
        {
          title: 'Storage & Tools',
          href: '/tool-boxes',
          items: [
            { label: 'Mobile Tool Cart', href: '/product/tool-cart', highlight: false },
            { label: 'Battery Tester Pro', href: '/product/battery-tester', highlight: false },
            { label: 'Shop Press 20-Ton', href: '/product/shop-press', highlight: false },
          ],
        },
        {
          title: 'Alignment & Diagnostics',
          href: '/wheel-alignment',
          items: [
            { label: 'CWA 6000 Wheel Aligner', href: '/product/cwa-6000', highlight: false },
            { label: 'Tread Depth Scanner', href: '/product/tread-depth-scanner', highlight: false },
            { label: 'Alignment Check Tool', href: '/product/alignment-check', highlight: false },
          ],
        },
      ],
    },
  ];

  const navLinks = [
    // Products will be handled as a dropdown
    { label: 'About', href: '/about' },
    { label: 'User Manual', href: '/user-manual' },
    { label: 'Contact', href: '/contact' },
  ];

  // Dropdown state
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const megaMenuRef = React.useRef<HTMLDivElement>(null);

  const handleMegaToggle = () => setMegaOpen(!megaOpen);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaOpen(false);
      }
    };

    if (megaOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [megaOpen]);

  // Mobile drawer content
  const mobileDrawerContent = (
    <Box
      sx={{
        width: 280,
        p: 2,
        bgcolor: '#fff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#d32f2f' }}>
          Menu
        </Typography>
        <IconButton onClick={() => setMobileMenuOpen(false)} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack spacing={1} sx={{ overflow: 'auto', flex: 1 }}>
        {/* Products Menu */}
        <Box>
          <Box
            onClick={() => setExpandedMobileMenu(expandedMobileMenu === 'products' ? null : 'products')}
            sx={{
              p: 1.5,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 1,
              bgcolor: expandedMobileMenu === 'products' ? 'rgba(211, 47, 47, 0.1)' : 'transparent',
              '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.05)' },
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#333' }}>Products</Typography>
            <ExpandMoreIcon sx={{ transform: expandedMobileMenu === 'products' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
          </Box>
          <Collapse in={expandedMobileMenu === 'products'} timeout="auto" unmountOnExit>
            <Stack spacing={0.5} sx={{ pl: 2, pt: 1 }}>
              {megaMenuColumns.map((col) => (
                <Box key={col.title}>
                  <Link
                    component={RouterLink}
                    to={col.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setExpandedMobileMenu(null);
                    }}
                    sx={{
                      display: 'block',
                      py: 0.8,
                      px: 1,
                      color: '#d32f2f',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      borderRadius: 0.5,
                      '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.1)' },
                    }}
                  >
                    {col.title}
                  </Link>
                  {col.items && (
                    <Stack spacing={0.3} sx={{ pl: 1 }}>
                      {col.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setExpandedMobileMenu(null);
                          }}
                          sx={{
                            display: 'block',
                            py: 0.5,
                            px: 1,
                            color: '#666',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            borderRadius: 0.5,
                            '&:hover': { color: '#d32f2f', bgcolor: 'rgba(211, 47, 47, 0.05)' },
                          }}
                        >
                          {item.highlight && <span style={{ color: '#d32f2f', fontWeight: 700 }}>NEW </span>}
                          {item.label}
                        </Link>
                      ))}
                    </Stack>
                  )}
                </Box>
              ))}
            </Stack>
          </Collapse>
        </Box>

        {/* Other nav links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            component={RouterLink}
            to={link.href}
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              p: 1.5,
              color: '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              borderRadius: 1,
              display: 'block',
              '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.1)', color: '#d32f2f' },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Box>
  );

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
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              transition: 'transform 0.3s ease',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
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
              Northern Industrial
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
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            {/* Products Mega Menu - Custom HTML/CSS version */}
            <div
              ref={megaMenuRef}
              className="mega-menu-root"
              style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
            >
              <button
                type="button"
                className="mega-menu-btn"
                aria-expanded={megaOpen}
                onClick={handleMegaToggle}
              >
                <span>Products</span>
                <svg viewBox="0 0 26 27" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.03833 9.80575L13 14.7674L17.9725 9.80575L19.5 11.3333L13 17.8333L6.5 11.3333L8.03833 9.80575Z"></path>
                </svg>
              </button>
              {megaOpen && (
                <div className="mega-menu-outer">
                  <div className="mega-menu-panel">
                    {megaMenuColumns.map((col) => (
                      <div className="mega-menu-col" key={col.title}>
                        <a href={col.href} className="mega-menu-title menu--item-title hover:text-red-700" onClick={() => setMegaOpen(false)}>{col.title}</a>
                        {col.desc && <p className="mega-menu-desc">{col.desc}</p>}
                        {col.items && (
                          <ul className="mega-menu-list">
                            {col.items.map((item) => (
                              <li key={item.label} style={{ lineHeight: '1.4em' }}>
                                <a className="mega-menu-link" href={item.href} onClick={() => setMegaOpen(false)}>
                                  {item.highlight ? <span style={{ color: '#AE282E', fontWeight: 700 }}>NEW </span> : null}
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                        {col.heavyDesc && <p className="mega-menu-desc">{col.heavyDesc}</p>}
                        {col.heavyItems && (
                          <ul className="mega-menu-list">
                            {col.heavyItems.map((item) => (
                              <li key={item.label} style={{ lineHeight: '1.4em' }}>
                                <a className="mega-menu-link" href={item.href} onClick={() => setMegaOpen(false)}>{item.label}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                        {col.extra && col.extra.map((ex) => (
                          <React.Fragment key={ex.title}>
                            <a href={ex.href} className="mega-menu-title menu--item-title hover:text-red-700" onClick={() => setMegaOpen(false)}>{ex.title}</a>
                            <ul className="mega-menu-list">
                              {ex.items.map((item) => (
                                <li key={item.label} style={{ lineHeight: '1.4em' }}>
                                  <a className="mega-menu-link" href={item.href} onClick={() => setMegaOpen(false)}>{item.label}</a>
                                </li>
                              ))}
                            </ul>
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mega-menu-viewall-wrapper">
                    <Link
                      component={RouterLink}
                      to="/products"
                      className="mega-menu-viewall"
                      onClick={() => setMegaOpen(false)}
                      sx={{
                        display: 'block',
                        margin: '2rem auto 0 auto',
                        background: '#b71c1c',
                        color: '#fff',
                        fontWeight: 700,
                        borderRadius: '6px',
                        padding: '0.9rem 2.5rem',
                        textAlign: 'center',
                        textDecoration: 'none',
                        border: '2px solid #b71c1c',
                        transition: 'background 0.2s, color 0.2s, border 0.2s',
                        fontSize: '1.1rem',
                        '&:hover': {
                          background: '#fff',
                          color: '#111',
                          border: '2px solid #111',
                        },
                      }}
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* Other nav links */}
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

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setMobileMenuOpen(true)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#fff',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        {mobileDrawerContent}
      </Drawer>
    </AppBar>
  );
};
