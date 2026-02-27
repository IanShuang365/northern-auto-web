import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY_HERE'); // You'll need to replace this with your EmailJS public key

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const templateParams = {
        to_email: 'info@bdbcartools.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID_HERE', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID_HERE', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Email error:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 32, color: '#d32f2f' }} />,
      title: 'Phone',
      details: ['+1 (647) 886-2259'],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32, color: '#d32f2f' }} />,
      title: 'Email',
      details: ['info@bdbcartools.com'],
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32, color: '#d32f2f' }} />,
      title: 'Address',
      details: ['1235 Journey\'s End Cir #3, Newmarket, ON L3Y 8T7'],
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 32, color: '#d32f2f' }} />,
      title: 'Business Hours',
      details: ['Monday - Friday: 10:00 AM - 4:30 PM EST', 'Saturday: 10:00 AM - 3:00 PM EST'],
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      {/* Hero Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: '#333',
              textAlign: 'center',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Have questions? We'd love to hear from you. Get in touch with our team today!
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{info.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#333',
                      }}
                    >
                      {info.title}
                    </Typography>
                    {info.details.map((detail, idx) => (
                      <Typography
                        key={idx}
                        sx={{
                          color: '#666',
                          mb: idx < info.details.length - 1 ? 1 : 0,
                          fontSize: '0.95rem',
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Contact Form */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#333',
                }}
              >
                Send us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {submitted && (
                  <Alert severity="success">
                    Thank you for your message! We'll get back to you shortly.
                  </Alert>
                )}
                {error && (
                  <Alert severity="error">
                    {error}
                  </Alert>
                )}
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  disabled={loading}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  disabled={loading}
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  disabled={loading}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                  disabled={loading}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    bgcolor: '#d32f2f',
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1rem',
                    '&:hover': {
                      bgcolor: '#b71c1c',
                    },
                    '&:disabled': {
                      bgcolor: '#ccc',
                      cursor: 'not-allowed',
                    },
                  }}
                >
                  {loading ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CircularProgress size={20} sx={{ color: '#fff' }} />
                      Sending...
                    </Box>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Box>
            </Grid>

            {/* FAQ */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#333',
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#d32f2f',
                      mb: 1,
                    }}
                  >
                    How quickly will I receive a response?
                  </Typography>
                  <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                    We aim to respond to all inquiries within 24 business hours during our regular business hours.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#d32f2f',
                      mb: 1,
                    }}
                  >
                    Do you offer technical support?
                  </Typography>
                  <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                    Yes! Our technical support team is available to assist with product setup, troubleshooting, and maintenance questions.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#d32f2f',
                      mb: 1,
                    }}
                  >
                    What are your warranty options?
                  </Typography>
                  <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                    All products come with a standard 2-year warranty. Extended warranty and service plans are available upon request.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#d32f2f',
                      mb: 1,
                    }}
                  >
                    Do you offer installation services?
                  </Typography>
                  <Typography sx={{ color: '#666', lineHeight: 1.6 }}>
                    Yes, we offer professional installation services in most areas. Contact our sales team to inquire about availability.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
