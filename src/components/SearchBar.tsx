import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'Product' | 'Shop Type' | 'FAQ' | 'Video';
  link: string;
  productId?: string; // For product navigation
}

// All searchable content
const searchableContent: SearchResult[] = [
  // Products
  {
    id: 'product-1',
    title: 'Professional Wheel Balancer',
    description: 'With Direct Drive technology for precision balancing',
    category: 'Product',
    link: '/product/1',
    productId: '1',
  },
  {
    id: 'product-2',
    title: 'Advanced Wheel Aligner',
    description: '3D Wheel Alignment System with laser precision',
    category: 'Product',
    link: '/product/2',
    productId: '2',
  },
  {
    id: 'product-3',
    title: 'Heavy-Duty Lift System',
    description: 'For Under Vehicle Services and Alignments',
    category: 'Product',
    link: '/product/3',
    productId: '3',
  },
  {
    id: 'product-4',
    title: 'Automatic Tire Changer',
    description: 'Fast and reliable tire changing equipment',
    category: 'Product',
    link: '/product/4',
    productId: '4',
  },
  // Shop Types
  {
    id: 'shop-1',
    title: 'General Repair',
    description: 'Complete solutions for all repair needs',
    category: 'Shop Type',
    link: '#shop-types',
  },
  {
    id: 'shop-2',
    title: 'Tire Dealer',
    description: 'Specialized tire service solutions',
    category: 'Shop Type',
    link: '#shop-types',
  },
  {
    id: 'shop-3',
    title: 'Car Dealership',
    description: 'Dealership-specific solutions',
    category: 'Shop Type',
    link: '#shop-types',
  },
  {
    id: 'shop-4',
    title: 'Heavy Duty',
    description: 'Heavy-duty equipment and services',
    category: 'Shop Type',
    link: '#shop-types',
  },
  // FAQs
  {
    id: 'faq-1',
    title: 'What is smart vehicle repair?',
    description: 'Learn about smart vehicle repair technology and solutions',
    category: 'FAQ',
    link: '#faq',
  },
  {
    id: 'faq-2',
    title: 'What equipment does Coats offer?',
    description: 'Discover our complete equipment portfolio',
    category: 'FAQ',
    link: '#faq',
  },
  {
    id: 'faq-3',
    title: 'Where is Coats equipment made?',
    description: 'Learn about our manufacturing locations',
    category: 'FAQ',
    link: '#faq',
  },
  {
    id: 'faq-4',
    title: 'How do I get service for my equipment?',
    description: 'Contact and support information',
    category: 'FAQ',
    link: '#faq',
  },
  // Videos
  {
    id: 'video-1',
    title: 'Professional Equipment Demo',
    description: 'See our products in action',
    category: 'Video',
    link: '#videos',
  },
  {
    id: 'video-2',
    title: 'Advanced Features Walkthrough',
    description: 'Explore advanced features and capabilities',
    category: 'Video',
    link: '#videos',
  },
  {
    id: 'video-3',
    title: 'Installation Guide',
    description: 'Step-by-step installation instructions',
    category: 'Video',
    link: '#videos',
  },
  {
    id: 'video-4',
    title: 'Maintenance & Support',
    description: 'Learn about maintenance and support services',
    category: 'Video',
    link: '#videos',
  },
  {
    id: 'video-5',
    title: 'Customer Testimonials',
    description: 'Success stories from our customers',
    category: 'Video',
    link: '#videos',
  },
];

export const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const results = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    setSearchQuery('');
    
    // If it's a product, navigate to product detail page
    if (result.category === 'Product' && result.productId) {
      navigate(`/product/${result.productId}`);
      return;
    }
    
    // For other categories, scroll to the section
    const elementId = result.link.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Product':
        return '#2196F3';
      case 'Shop Type':
        return '#4CAF50';
      case 'FAQ':
        return '#FF9800';
      case 'Video':
        return '#d32f2f';
      default:
        return '#757575';
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 400 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: 0.5,
          pl: 1.5,
          pr: 1.5,
          height: 40,
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.25)',
          },
          '&:focus-within': {
            bgcolor: 'rgba(255, 255, 255, 0.25)',
          },
        }}
      >
        <SearchIcon sx={{ color: '#fff', mr: 1, fontSize: 20 }} />
        <TextField
          placeholder="Search products, topics..."
          variant="standard"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && results.length > 0) {
              handleResultClick(results[0]);
            }
          }}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            width: '100%',
            color: '#fff',
            '& .MuiInputBase-input': {
              color: '#fff',
              fontSize: '0.95rem',
              py: 0.5,
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {searchQuery.trim() !== '' && (
        <Paper
          elevation={3}
          sx={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            maxHeight: 400,
            overflowY: 'auto',
            zIndex: 9999,
            borderRadius: 0.5,
            minWidth: '100%',
          }}
        >
          {results.length === 0 ? (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography color="textSecondary">
                No results found for "{searchQuery}"
              </Typography>
            </Box>
          ) : (
            <List sx={{ pt: 0, pb: 0, m: 0 }}>
              {results.map((result, index) => (
                <ListItem 
                  key={result.id} 
                  disablePadding
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.08)',
                    },
                  }}
                >
                  <ListItemButton
                    onClick={() => handleResultClick(result)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderBottom: index < results.length - 1 ? '1px solid #eee' : 'none',
                      width: '100%',
                    }}
                  >
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body2" sx={{ flex: 1, fontWeight: 500 }}>
                            {result.title}
                          </Typography>
                          <Chip
                            label={result.category}
                            size="small"
                            sx={{
                              bgcolor: getCategoryColor(result.category),
                              color: '#fff',
                              fontWeight: 600,
                              height: 24,
                              fontSize: '0.75rem',
                            }}
                          />
                        </Box>
                      }
                      secondary={result.description}
                      primaryTypographyProps={{ sx: { mb: 0.5 } }}
                      secondaryTypographyProps={{ sx: { fontSize: '0.85rem' } }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      )}
    </Box>
  );
};
