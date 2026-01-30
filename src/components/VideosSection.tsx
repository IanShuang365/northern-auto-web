import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Video {
  id: string;
  title: string;
  videoId: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Professional Equipment Demo',
    videoId: 'UVid2vASCWQ',
  },
  {
    id: '2',
    title: 'Advanced Features Walkthrough',
    videoId: 'UoAlrUjc0P0',
  },
  {
    id: '3',
    title: 'Installation Guide',
    videoId: 'hp8ak0Tw2aw',
  },
  {
    id: '4',
    title: 'Maintenance & Support',
    videoId: 'Iuh0BrW51Lo',
  },
  {
    id: '5',
    title: 'Customer Testimonials',
    videoId: 'RfJIndqP7pM',
  },
];

export const VideosSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const currentVideo = videos[currentIndex];

  return (
    <Box sx={{ py: 8, bgcolor: '#fff' }} id="videos">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 1,
            fontWeight: 700,
            color: '#333',
          }}
        >
          Discover Innovation in Action
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: '#666',
            fontSize: '1.1rem',
          }}
        >
          Watch our expert tutorials, product demonstrations, and customer success stories
        </Typography>

        <Card
          sx={{
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
              title={currentVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Box>

          <CardContent sx={{ bgcolor: '#f9f9f9' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#333',
                  fontWeight: 600,
                }}
              >
                {currentVideo.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {currentIndex + 1} / {videos.length}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mt: 4,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              bgcolor: '#d32f2f',
              color: '#fff',
              '&:hover': {
                bgcolor: '#b71c1c',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {videos.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === currentIndex ? '#d32f2f' : '#ddd',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              bgcolor: '#d32f2f',
              color: '#fff',
              '&:hover': {
                bgcolor: '#b71c1c',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: '#333',
              fontWeight: 600,
            }}
          >
            Related Videos
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: 2,
            }}
          >
            {videos.map((video, index) => (
              <Card
                key={video.id}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: index === currentIndex ? '3px solid #d32f2f' : '1px solid #e0e0e0',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    bgcolor: '#000',
                  }}
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      color: '#333',
                    }}
                  >
                    {video.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
