import Navbar from "../components/Navbar/Navbar.jsx";
import Headerimage from "/src/assets/Header-Image.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={Headerimage} 
            alt="Header" 
            className="w-full h-full object-cover"
          />
          {/* Optional: Add overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Transform Your Space with Color
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl">
            Transforming Spaces with Professional Painting Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#Contact" className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Get a Quote
            </a>
            <a href="#Services" className="btn bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition">
              Our Services
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;