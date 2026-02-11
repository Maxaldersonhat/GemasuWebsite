import React, { useState } from 'react';
import './Projects.css';
import image1 from '../assets/image1.jpg';
import image23 from '../assets/Image23.jpg';
import image10 from '../assets/image10.jpg';
import image2 from '../assets/image2.jpg';
import image5 from '../assets/image5.jpg';
import image16 from '../assets/image16.jpg';


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