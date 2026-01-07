import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = () => (
  <section className="hero section section-cream">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">UX Designer + Front-End</p>
        <h1>Designing accessible, confident experiences that feel calm and human.</h1>
        <p className="lead">
          UX designer focused on UI/UX and front-end development. I blend
          research, prototyping, and accessible UI to build products that
          reduce friction and build trust.
        </p>
        <p className="note">
          Currently transitioning my professional name to Noah Blake Rhodes.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" to="/work">
            View projects
          </Link>
          <Link className="btn ghost" to="/#contact">
            Let&apos;s talk
          </Link>
        </div>
      </div>
      <div className="hero-card hero-card--philips">
        <div className="hero-card-header">
          <span className="pill">Internship</span>
          <span className="status-dot" aria-hidden="true"></span>
          <span className="subtle">Philips | Internal webshop</span>
        </div>
        <h2>Improving product discovery for Philips Myshop.</h2>
        <p>
          Led UX/UI improvements for L2 category clarity, comparison, and
          decision confidence for a 40-70+ audience.
        </p>
        <div className="hero-card-meta">
          <div>
            <span className="meta-label">Focus</span>
            <span className="meta-value">Product discovery, comparison</span>
          </div>
          <div>
            <span className="meta-label">Tools</span>
            <span className="meta-value">Figma, FigJam, research</span>
          </div>
        </div>
        <Link className="text-link" to="/work#philips">
          See internship spotlight
        </Link>
      </div>
    </div>
  </section>
);

export default HomeHero;
