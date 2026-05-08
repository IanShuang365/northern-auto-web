import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { getProductById } from '../data/products';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './ProductDetail.css';

const parseSpec = (spec: string): { label: string; value: string } => {
  const colonIdx = spec.indexOf(':');
  if (colonIdx > 0) {
    return {
      label: spec.substring(0, colonIdx).trim(),
      value: spec.substring(colonIdx + 1).trim(),
    };
  }
  return { label: spec, value: '' };
};

const FAQ_ITEMS = [
  {
    q: 'What warranty does this product come with?',
    a: 'All our equipment includes a manufacturer warranty covering parts and workmanship. Contact us for the specific warranty terms on this model, as coverage may vary.',
  },
  {
    q: 'Do you offer installation and operator training?',
    a: 'Yes. Our technicians handle delivery, installation, and on-site training so your team is confident and productive from day one.',
  },
  {
    q: 'What financing or payment options are available?',
    a: 'We accept wire transfer, business check, and offer flexible financing plans. Reach out to our sales team to find the best fit for your budget.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Lead times are typically 2–4 weeks depending on your location and current stock. Call us for a specific estimate on this model.',
  },
  {
    q: 'Is after-sales service and spare parts support available?',
    a: 'Absolutely. We maintain a dedicated service team and parts inventory to keep your equipment performing at peak efficiency long after purchase.',
  },
];

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const validImages = images.filter(Boolean);

  if (validImages.length === 0) {
    return (
      <div className="gallery-placeholder">
        <span>Image Coming Soon</span>
      </div>
    );
  }

  const prev = () => setActiveIdx(i => (i - 1 + validImages.length) % validImages.length);
  const next = () => setActiveIdx(i => (i + 1) % validImages.length);

  return (
    <div className="image-gallery">
      <div className="gallery-main">
        <img src={validImages[activeIdx]} alt={`${title} — view ${activeIdx + 1}`} />
        {validImages.length > 1 && (
          <>
            <button className="gallery-arrow gallery-arrow--prev" onClick={prev} aria-label="Previous image">
              &#8249;
            </button>
            <button className="gallery-arrow gallery-arrow--next" onClick={next} aria-label="Next image">
              &#8250;
            </button>
            <div className="gallery-counter">{activeIdx + 1} / {validImages.length}</div>
          </>
        )}
      </div>
      {validImages.length > 1 && (
        <div className="gallery-thumbs">
          {validImages.map((img, idx) => (
            <button
              key={idx}
              className={`gallery-thumb${idx === activeIdx ? ' gallery-thumb--active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`View image ${idx + 1}`}
            >
              <img src={img} alt={`${title} thumbnail ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = productId ? getProductById(productId) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container maxWidth="lg">
            <Box sx={{ py: 8, textAlign: 'center' }}>
              <Typography variant="h4" color="error" sx={{ mb: 2 }}>
                Product Not Found
              </Typography>
              <Button variant="contained" onClick={() => navigate('/')} sx={{ bgcolor: '#d32f2f' }}>
                Back to Home
              </Button>
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }

  const galleryImages = product.images?.length ? product.images : product.image ? [product.image] : [];
  const isComingSoon = product.price === 'Coming Soon';

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        <Container maxWidth="lg">
          <nav className="pd-breadcrumb__nav">
            <Link to="/" className="pd-breadcrumb__link">Home</Link>
            <span className="pd-breadcrumb__sep">/</span>
            <Link to="/products" className="pd-breadcrumb__link">Products</Link>
            <span className="pd-breadcrumb__sep">/</span>
            <span className="pd-breadcrumb__current">{product.title}</span>
          </nav>
        </Container>
      </div>

      {/* Hero: Gallery + Info */}
      <section className="pd-hero">
        <Container maxWidth="lg">
          <div className="pd-hero__grid">
            {/* Left: Image Gallery */}
            <div className="pd-hero__gallery">
              <ImageGallery images={galleryImages} title={product.title} />
            </div>

            {/* Right: Product Info */}
            <div className="pd-hero__info">
              <Chip
                label={product.category}
                size="small"
                sx={{
                  bgcolor: '#fff0f0',
                  color: '#d32f2f',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.04em',
                  mb: 2,
                  borderRadius: '4px',
                }}
              />
              <h1 className="pd-hero__title">{product.title}</h1>
              <p className="pd-hero__desc">{product.longDescription}</p>

              {/* Price */}
              <div className="pd-price-block">
                <span className="pd-price-block__label">Starting Price</span>
                <span className={`pd-price-block__value${isComingSoon ? ' pd-price-block__value--soon' : ''}`}>
                  {product.price}
                </span>
              </div>

              <div className="pd-hero__actions">
                <a href="tel:+1-800-688-6359" className="pd-btn pd-btn--primary">
                  &#128222;&nbsp; Call Now
                </a>
                <a href="/contact" className="pd-btn pd-btn--secondary">
                  Get a Quote
                </a>
              </div>

              {/* Quick Specs Highlight */}
              {product.specifications.length > 0 && product.specifications[0] !== 'To be announced' && (
                <div className="pd-quick-specs">
                  <p className="pd-quick-specs__label">Key Specifications</p>
                  <div className="pd-quick-specs__list">
                    {product.specifications.slice(0, 3).map((spec, idx) => {
                      const { label, value } = parseSpec(spec);
                      return (
                        <div key={idx} className="pd-quick-spec-item">
                          <span className="pd-quick-spec-item__label">{label}</span>
                          <span className="pd-quick-spec-item__value">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications Table */}
      {product.specifications.length > 0 && product.specifications[0] !== 'To be announced' && (
        <section className="pd-section pd-section--gray">
          <Container maxWidth="lg">
            <div className="pd-section__header">
              <h2 className="pd-section__title">Specifications</h2>
              <div className="pd-section__rule" />
            </div>
            <div className="pd-specs-table">
              {product.specifications.map((spec, idx) => {
                const { label, value } = parseSpec(spec);
                return (
                  <div key={idx} className={`pd-spec-row${idx % 2 === 0 ? '' : ' pd-spec-row--alt'}`}>
                    <div className="pd-spec-row__label">{label}</div>
                    <div className="pd-spec-row__value">{value || '—'}</div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Features + Benefits */}
      <section className="pd-section">
        <Container maxWidth="lg">
          <div className="pd-fb-grid">
            <div>
              <div className="pd-section__header">
                <h2 className="pd-section__title">Features</h2>
                <div className="pd-section__rule" />
              </div>
              <ul className="pd-checklist">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="pd-checklist__item">
                    <span className="pd-checklist__icon">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="pd-section__header">
                <h2 className="pd-section__title">Business Benefits</h2>
                <div className="pd-section__rule" />
              </div>
              <ul className="pd-checklist pd-checklist--benefits">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="pd-checklist__item">
                    <span className="pd-checklist__icon pd-checklist__icon--benefit">&#9679;</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Q&A Section */}
      <section className="pd-section pd-section--gray">
        <Container maxWidth="lg">
          <div className="pd-section__header">
            <h2 className="pd-section__title">Frequently Asked Questions</h2>
            <div className="pd-section__rule" />
          </div>
          <div className="pd-faq">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`pd-faq__item${isOpen ? ' pd-faq__item--open' : ''}`}>
                  <button
                    className="pd-faq__question"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="pd-faq__icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="pd-faq__answer">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pd-faq__cta">
            <p>Still have questions? We're here to help.</p>
            <div className="pd-faq__cta-actions">
              <a href="tel:+1-800-688-6359" className="pd-btn pd-btn--primary">
                &#128222;&nbsp; 1-800-688-6359
              </a>
              <a href="/contact" className="pd-btn pd-btn--secondary">
                Send a Message
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
};
