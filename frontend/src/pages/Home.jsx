import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to MyApp</h1>
        <p>A simple boilerplate for building your authentication system</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Clean Structure</h3>
            <p>Well-organized component hierarchy ready for your implementation</p>
          </div>
          <div className="feature-card">
            <h3>Modern UI</h3>
            <p>Beautiful, responsive design with CSS modules</p>
          </div>
          <div className="feature-card">
            <h3>Easy to Extend</h3>
            <p>Simple routing and component structure for quick development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
