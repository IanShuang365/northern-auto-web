import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What types of equipment does BDB Car Tools offer?',
    answer: 'BDB Car Tools provides a comprehensive range of professional automotive equipment including Wheel Balancers, Wheel Aligners, Tire Changers, and Heavy-Duty Lift Systems. All our equipment is designed to improve efficiency, accuracy, and profitability for repair shops of all sizes.'
  },
  {
    id: '2',
    question: 'Is your equipment compatible with different vehicle types?',
    answer: 'Yes! Our equipment is designed with multi-brand compatibility in mind. Whether you service sedans, trucks, SUVs, or commercial vehicles, our solutions work across all vehicle types. We provide regular updates and support for new vehicle models.'
  },
  {
    id: '3',
    question: 'What kind of warranty and support do you provide?',
    answer: 'All BDB Car Tools products come with comprehensive warranties and professional technical support. We offer 24/7 customer support via phone at +1 (647) 886-2259, and our team is ready to help with setup, troubleshooting, and maintenance.'
  },
  {
    id: '4',
    question: 'Can you help with installation and training?',
    answer: 'Absolutely! We provide professional installation services and comprehensive training for all our equipment. Our expert team ensures your staff is fully trained to operate and maintain the equipment for maximum productivity and safety.'
  },
  {
    id: '5',
    question: 'How can I get a quote or more information?',
    answer: 'Contact us today! Reach us at +1 (647) 886-2259, email info@bdbcartools.com, or message us on WhatsApp at +1 (437) 553-8502. Our team will be happy to discuss your specific needs and provide customized solutions.'
  },
  {
    id: '6',
    question: 'Do you offer financing options?',
    answer: 'We work with various financing partners to make our equipment accessible to shops of all sizes. Contact our sales team to discuss financing options and find a plan that works best for your business.'
  }
];

export const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (id: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
      }}
      id="faq"
    >
      <Container maxWidth="md">
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
            Frequently Asked Questions
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
            Find answers to common questions about our products and services
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                border: 'none',
                bgcolor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                borderRadius: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(211, 47, 47, 0.15)',
                  transform: 'translateY(-2px)',
                },
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  boxShadow: '0 6px 20px rgba(211, 47, 47, 0.2)',
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: '#d32f2f',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                }
                sx={{
                  bgcolor: expanded === item.id ? '#f9f9f9' : '#fff',
                  padding: '1.5rem',
                  '&:hover': {
                    bgcolor: '#f9f9f9',
                  },
                  transition: 'background-color 0.3s ease',
                  borderLeft: expanded === item.id ? '4px solid #d32f2f' : '4px solid transparent',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: expanded === item.id ? 700 : 600,
                    color: expanded === item.id ? '#d32f2f' : '#1a1a1a',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: '#fff',
                  padding: '1.5rem',
                  borderTop: '1px solid #e8e8e8',
                  animation: expanded === item.id ? 'fadeIn 0.3s ease' : 'none',
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#555',
                    lineHeight: 1.8,
                    fontSize: '0.975rem',
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
