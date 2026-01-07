import { Link } from 'react-router-dom';
import SectionHead from '../SectionHead/SectionHead';
import kromBanner from '../../assets/images/Krom Banner.png';
import philipsBanner from '../../assets/images/Philips Banner.png';
import kromLogo from '../../assets/images/studiokrom_logo.png';
import philipsLogo from '../../assets/images/philips_logo.jpg';
import './FeaturedWork.css';

const FeaturedWork = () => (
  <section id="work" className="section work section-rose">
    <div className="container">
      <SectionHead
        eyebrow="Featured work"
        title="Spotlight projects built for clarity and care."
      />

      <div className="project-grid">
        <Link
          className="project-card project-card--philips reveal"
          style={{ '--delay': '0ms' }}
          to="/work#philips"
          aria-label="View Philips case study"
        >
          <div className="project-cover cover-2">
            <img src={philipsBanner} alt="Philips Myshop case study thumbnail" loading="lazy" />
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="tag">Internship</span>
              <span className="tag">E-commerce</span>
              <span className="tag">Product discovery</span>
            </div>
            <h3 className="project-title">
              <span className="project-logo" aria-hidden="true">
                <img src={philipsLogo} alt="" />
              </span>
              <span>Philips</span>
            </h3>
            <div className="project-meta">
              <div>
                <span className="meta-label">Role</span>
                <span className="meta-value">UX/UI Design Intern</span>
              </div>
              <div>
                <span className="meta-label">Deliverables</span>
                <span className="meta-value">
                  Research synthesis, hi-fi prototype, usability plan
                </span>
              </div>
            </div>
            <span className="text-link">View case study</span>
          </div>
        </Link>

        <Link
          className="project-card project-card--krom reveal"
          style={{ '--delay': '80ms' }}
          to="/work#studio-krom"
          aria-label="View Studio Krom case study"
        >
          <div className="project-cover cover-1">
            <img src={kromBanner} alt="Studio Krom case study thumbnail" loading="lazy" />
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="tag">Accessibility</span>
              <span className="tag">Chrome Extension</span>
              <span className="tag">Research</span>
              <span className="tag">Front-End</span>
            </div>
            <h3 className="project-title">
              <span className="project-logo" aria-hidden="true">
                <img src={kromLogo} alt="" />
              </span>
              <span>Studio Krom</span>
            </h3>
            <div className="project-meta">
              <div>
                <span className="meta-label">Role</span>
                <span className="meta-value">UX + UI + Front-End</span>
              </div>
              <div>
                <span className="meta-label">Deliverables</span>
                <span className="meta-value">
                  Research synthesis, UI design, React build
                </span>
              </div>
            </div>
            <span className="text-link">View case study</span>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
