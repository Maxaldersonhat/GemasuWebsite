import React, { useState } from 'react';
import { ChevronDown, Home, Shield, Sparkles } from 'lucide-react';
import './Products.css';
import { Link } from 'react-router-dom';


const productData = [
  {
    name: "Plastic Emulsion",
    description: "A high-quality, economical paint for interior surfaces with a smooth matt finish.",
    colorPalette: ['#FF6347', '#4682B4', '#3CB371', '#FFD700'],
    datasheetLink: "#",
    cardColorClass: 'card-blue-light'
  },
  {
    name: "Cover Matt",
    description: "Excellent coverage and a durable, non-reflective finish. Ideal for walls and ceilings.",
    colorPalette: ['#FFA500', '#DA70D6', '#00CED1', '#ADFF2F'],
    datasheetLink: "#",
    cardColorClass: 'card-yellow-light'
  },
  {
    name: "Vinyl Matt",
    description: "A tough, wipeable matt emulsion that resists moisture, perfect for kitchens and bathrooms.",
    colorPalette: ['#FF1493', '#1E90FF', '#FFDAB9', '#8A2BE2'],
    datasheetLink: "#",
    cardColorClass: 'card-pink-light'
  },
  {
    name: "Silk Vinyl",
    description: "A mid-sheen finish that is durable and easy to clean. Adds a touch of elegance.",
    colorPalette: ['#CD5C5C', '#6A5ACD', '#32CD32', '#00FA9A'],
    datasheetLink: "#",
    cardColorClass: 'card-green-light'
  },
  {
    name: "Weather Guard",
    description: "Premium exterior paint with advanced protection against harsh weather conditions.",
    colorPalette: ['#808080', '#A9A9A9', '#696969', '#D3D3D3'],
    datasheetLink: "#",
    cardColorClass: 'card-grey-medium'
  },
  {
    name: "Gloss Economy",
    description: "An affordable, high-shine finish for wood and metal surfaces, both interior and exterior.",
    colorPalette: ['#0000CD', '#FF4500', '#BDB76B', '#800000'],
    datasheetLink: "#",
    cardColorClass: 'card-purple-light'
  },
  {
    name: "Super Gloss",
    description: "Our highest quality gloss enamel for a brilliant, long-lasting, mirror-like finish.",
    colorPalette: ['#000000', '#FFD700', '#FF69B4', '#191970'],
    datasheetLink: "#",
    cardColorClass: 'card-purple-medium'
  },
  {
    name: "Textured Paints",
    description: "Add dimension and character to your walls with our range of decorative textured finishes.",
    colorPalette: ['#F4A460', '#D2B48C', '#B8860B', '#A0522D'],
    datasheetLink: "#",
    cardColorClass: 'card-orange-light'
  },
];

const ProductCard = ({ product }) => (
  <div className={`product-card ${product.cardColorClass}`}>
    <div className="product-card-top">
      <div className="color-palette">
        {product.colorPalette.map((color, index) => (
          <span key={index} style={{ backgroundColor: color }}></span>
        ))}
      </div>
    </div>
    <div className="product-card-bottom">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
    </div>
  </div>
);

const Products = () => {
  // State for accordion functionality
  const [openGuide, setOpenGuide] = useState(null);

  // Guide steps data
  const guideSteps = [
    {
      icon: <Home className="guide-icon" />,
      title: "Identify Your Space",
      question: "Where are you painting?",
      content: "Different rooms have different needs. High-traffic areas like kitchens and bathrooms need washable, moisture-resistant paints. Living rooms can use standard emulsions for a beautiful finish.",
      recommendation: "Kitchen/Bathroom → Vinyl Matt or Silk Vinyl | Living Areas → Plastic Emulsion or Cover Matt"
    },
    {
      icon: <Shield className="guide-icon" />,
      title: "Consider Durability",
      question: "How much wear will it face?",
      content: "Think about who uses the space. Children's rooms need wipeable surfaces. Exterior walls need weather protection. High-traffic hallways benefit from tougher finishes.",
      recommendation: "Kids' Rooms → Silk Vinyl | Exteriors → Weather Guard | High Traffic → Cover Matt"
    },
    {
      icon: <Sparkles className="guide-icon" />,
      title: "Choose Your Finish",
      question: "What look do you want?",
      content: "Matt finishes hide imperfections and create a contemporary look. Gloss finishes are easier to clean and add elegance. Textured paints add depth and character.",
      recommendation: "Modern Look → Matt Finishes | Easy Clean → Gloss/Silk | Character → Textured"
    }
  ];

  return (
    <div className="products-page">
      
      {/* 1. Hero Section */}
      <section className="products-hero-section">
        <h1 className="main-title">Our Full Range of Paints</h1>
        <p className="subtitle">
          Discover the perfect finish for your space. Quality paints designed to bring your vision to life.
        </p>
      </section>

      

      {/* 3. Product Grid */}
      <section className="product-grid-section">
        <div className="product-grid">
          {productData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* How to Choose Guide */}
      <section className="guide-section">
        <div className="guide-container">
          <h2 className="section-title">How to Choose the Right Paint</h2>
          <p className="guide-subtitle">
            Overwhelmed by options? We've simplified it. Follow these three simple steps to find your perfect paint.
          </p>
          
          <div className="guide-steps">
            {guideSteps.map((step, index) => (
              <div key={index} className="guide-step">
                <button
                  onClick={() => setOpenGuide(openGuide === index ? null : index)}
                  className="guide-step-button"
                >
                  <div className="guide-step-header">
                    <div className="guide-icon-wrapper">
                      {step.icon}
                    </div>
                    <div className="guide-step-text">
                      <h3 className="guide-step-title">Step {index + 1}: {step.title}</h3>
                      <p className="guide-step-question">{step.question}</p>
                    </div>
                  </div>
                  <ChevronDown className={`chevron-icon ${openGuide === index ? 'rotated' : ''}`} />
                </button>
                
                {openGuide === index && (
                  <div className="guide-step-content">
                    <p className="guide-content-text">{step.content}</p>
                    <div className="guide-recommendation">
                      <p className="recommendation-label">Our Recommendation:</p>
                      <p className="recommendation-text">{step.recommendation}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="guide-cta">
            <p className="guide-cta-text">
              <strong>Still not sure?</strong> That's completely normal! Our team has helped thousands of customers find their perfect match.
            </p>
          <Link to="/contact" className="guide-cta-button">
           Get Free Expert Advice
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;