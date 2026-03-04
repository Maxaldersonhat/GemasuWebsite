import React, { useState } from 'react';
import './Projects.css';
import image1 from '../assets/image1.jpg';
import image23 from '../assets/Image23.jpg';
import image10 from '../assets/image10.jpg';
import image2 from '../assets/image2.jpg';
import image5 from '../assets/image5.jpg';
import image16 from '../assets/image16.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image27 from '../assets/image27.jpg';
import image33 from '../assets/image33.jpg';
import image34 from '../assets/image34.jpg';
import image35 from '../assets/image35.jpg';
import image36 from '../assets/image36.jpg';
import image38 from '../assets/image38.jpg';
import image43 from '../assets/image43.jpeg';
import image44 from '../assets/image44.jpeg';
import image45 from '../assets/image45.jpeg';
import image46 from '../assets/image46.jpeg';






const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6); 

  const projectData = [
    {
      id: 1,
      category: 'commercial-exterior',
      image: image1,
      alt: 'Commercial Exterior Project',
      label: 'COMMERCIAL EXTERIOR'
    },
  
    {
      id: 2,
      category: 'residential-interior',
      image: image23,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 3,
      category: 'commercial-exterior',
      image: image10,
      alt: 'Commercial Exterior Project',
      label: 'COMMERCIAL EXTERIOR'
    },
    {
      id: 4,
      category: 'residential-exterior',
      image: image2,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR'
    },
    {
      id: 5,
      category: 'commercial-interior',
      image: image5,
      alt: 'Commercial Interior Project',
      label: 'COMMERCIAL INTERIOR'
    },
    {
      id: 6,
      category: 'industrial',
      image: image16,
      alt: 'Industrial Project',
      label: 'INDUSTRIAL'
    },
    {
      id: 7,
      category: 'residential-interior',
      image: image23,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 8,
      category: 'residential-interior',
      image: image3,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 9,
      category: 'residential-interior',
      image: image4,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 10,
      category: 'residential-exterior',
      image: image6,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR'
    },
    {
      id: 11,
      category: 'residential-exterior',
      image: image7,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR'
    },
    {
      id: 12,
      category: 'residential-interior',
      image: image27,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 13,
      category: 'residential-interior',
      image: image33,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 14,
      category: 'residential-interior',
      image: image34,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 15,
      category: 'residential-interior',
      image: image35,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 16,
      category: 'residential-interior',
      image: image36,
      alt: 'Residential Interior Project',
      label: 'RESIDENTIAL INTERIOR'
    },
    {
      id: 17,
      category: 'residential-exterior',
      image: image38,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR'
    },
    { 
      id: 18,
      category: 'residential-exterior',
      image: image43,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR'
    },
    {
      id: 19,
      category: 'residential-exterior',
      image: image44,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR' 
    },
    {
      id: 20,
      category: 'residential-exterior',
      image: image45,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR' 
    },
    {
      id: 21,
      category: 'residential-exterior',
      image: image46,
      alt: 'Residential Exterior Project',
      label: 'RESIDENTIAL EXTERIOR' 
    }
  ];

  const filterProjects = (category) => {
    if (category === 'all') return projectData;
    
    if (category === 'residential') {
      return projectData.filter(project => 
        project.category.includes('residential')
      );
    }
    
    if (category === 'commercial') {
      return projectData.filter(project => 
        project.category.includes('commercial')
      );
    }
    
    if (category === 'exterior') {
      return projectData.filter(project => 
        project.category.includes('exterior')
      );
    }
    
    if (category === 'interior') {
      return projectData.filter(project => 
        project.category.includes('interior')
      );
    }
    
    return projectData;
  };

  const filteredProjects = filterProjects(activeFilter);

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Transformations We're Proud Of</h1>
        <p>A showcase of completed painting projects across residential, commercial, and industrial spaces.</p>
      </section>

      {/* Filter Buttons */}
      <div className="filter-container">
        <button 
          className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={activeFilter === 'residential' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('residential')}
        >
          Residential
        </button>
        <button 
          className={activeFilter === 'commercial' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('commercial')}
        >
          Commercial
        </button>
        <button 
          className={activeFilter === 'exterior' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('exterior')}
        >
          Exterior
        </button>
        <button 
          className={activeFilter === 'interior' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('interior')}
        >
          Interior
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.slice(0, visibleCount).map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.alt} />
            <div className="project-label">{project.label}</div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            LOAD MORE PROJECTS
          </button>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Like what you see?</h2>
        <p>Get in touch for a free site visit and quote. Our experts are ready to help you choose the perfect finish for your space.</p>
        < a href ="/contact" >
        <button className="request-quote-btn">Request a Quote →</button>
        </a>
      </section>
    </div>
  );
};

export default Projects;