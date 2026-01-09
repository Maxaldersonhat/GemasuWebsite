import React from 'react';
import { Home as HomeIcon, Palette, Wrench } from 'lucide-react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop" 
          alt="Modern living room" 
          className="hero-bg-image"
        />
        
        <div className="hero-content">
          <h1 className="hero-title">
            Bringing Color to Life
          </h1>
          <p className="hero-subtitle">
            Discover our premium range of paints, designed to transform your spaces with vibrant and lasting colors.
          </p>
          <div className="hero-buttons">
            < a href="/products" >
            <button className="btn btn-primary">
              Explore Our Products
            </button>
            </a>
            < a href="/contact" >
            <button className="btn btn-secondary">
              Request a Quote
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* --- WELCOME SECTION --- */}
      <section className="welcome-section">
        <div className="section-container-small">
          <h2 className="section-title">
            Welcome to Gemasu Paints
          </h2>
          <p className="section-text">
            Gemasu Paints is a leading Kenyan paint manufacturer dedicated to providing high-quality, durable, and beautiful paint solutions. Our passion for color and commitment to excellence has made us the go-to choice for countless projects across the nation.
          </p>
        </div>
      </section>

      {/* --- OUR JOURNEY (TIMELINE) SECTION --- */}
      <section className="timeline-section">
        <h2 className="section-title" style={{textAlign: 'center'}}>Our Journey</h2>
        
        <div className="timeline-wrapper">
          {/* Vertical Center Line */}
          <div className="timeline-line"></div>

          {/* Timeline Item 2019 (Right) */}
          <div className="timeline-row">
            <div className="col-empty"></div>
            
            <div className="year-bubble">2019</div>

            <div className="col-content content-right">
              <div className="timeline-card">
                <h3>The Founding</h3>
                <p>Gemasu Paints was founded with a vision to bring vibrant, high-quality color to every corner of Kenya.</p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2020 (Left) */}
          <div className="timeline-row">
            <div className="col-content content-left">
              <div className="timeline-card">
                <h3>First Manufacturing Plant</h3>
                <p>We opened our state-of-the-art manufacturing facility, enabling us to produce our signature paints locally.</p>
              </div>
            </div>
            
            <div className="year-bubble">2020</div>
            <div className="col-empty"></div> 
          </div>

          {/* Timeline Item 2021 (Right) */}
          <div className="timeline-row">
            <div className="col-empty"></div>
            
            <div className="year-bubble">2021</div>

            <div className="col-content content-right">
              <div className="timeline-card">
                <h3>Market Expansion</h3>
                <p>Expanded our reach to major towns across Kenya, making our products more accessible to a wider audience.</p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2022 (Left) */}
          <div className="timeline-row">
            <div className="col-content content-left">
              <div className="timeline-card">
                <h3>Industry Recognition</h3>
                <p>Awarded "Best Paint Manufacturer in Kenya" for our commitment to quality and innovation.</p>
              </div>
            </div>
            
            <div className="year-bubble">2022</div>
            <div className="col-empty"></div>
          </div>

           {/* Timeline Item 2023 (Right) */}
           <div className="timeline-row">
            <div className="col-empty"></div>
            
            <div className="year-bubble">2023</div>

            <div className="col-content content-right">
              <div className="timeline-card">
                <h3>Major Project Success</h3>
                <p>Became the official paint supplier for several landmark construction projects, solidifying our reputation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TRUSTED BY SECTION --- */}
      <section className="trusted-section">
        <div className="trusted-container">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '4rem'}}>
            Trusted by builders, homeowners, and decorators across Kenya
          </h2>

          <div className="trusted-grid">
            {/* Builder Card */}
            <div className="trusted-card">
              <div className="icon-circle">
                <Wrench className="icon-svg" />
              </div>
              <h3 className="card-title">Builders</h3>
              <p className="card-desc">
                Reliable and durable paints that stand the test of time, perfect for new constructions and large-scale projects.
              </p>
            </div>

            {/* Homeowner Card */}
            <div className="trusted-card">
              <div className="icon-circle">
                <HomeIcon className="icon-svg" />
              </div>
              <h3 className="card-title">Homeowners</h3>
              <p className="card-desc">
                A wide palette of beautiful colors to bring your vision to life and create a home you love.
              </p>
            </div>

            {/* Decorator Card */}
            <div className="trusted-card">
              <div className="icon-circle">
                <Palette className="icon-svg" />
              </div>
              <h3 className="card-title">Decorators</h3>
              <p className="card-desc">
                Premium quality and finish that meets the high standards of professional interior and exterior designers.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;