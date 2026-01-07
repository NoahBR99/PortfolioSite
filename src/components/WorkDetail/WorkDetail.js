import { Link } from 'react-router-dom';
import './WorkDetail.css';

const WorkDetail = ({
  id,
  eyebrow,
  title,
  logoText,
  logoSrc,
  profile,
  lead,
  note,
  metaItems,
  summaryItems = [],
  roleItems = [],
  impactItems = [],
  mediaItems,
  challenge,
  approachItems,
  outcome,
  delay = '0ms',
  sectionClassName = '',
  enableReveal = true,
  onOpenLightbox
}) => {
  const hasLogo = logoText || logoSrc;

  const renderMediaItem = (item) => {
    const hasGallery = Array.isArray(item.images) && item.images.length > 0;
    const thumbClasses = [
      'work-media-thumb',
      item.frame ? `frame-${item.frame}` : '',
      item.thumbClass || ''
    ]
      .filter(Boolean)
      .join(' ');

    return (
    <button
      key={item.id}
      type="button"
      className={`work-media ${item.wide ? 'wide' : ''} ${
        item.tone ? `tone-${item.tone}` : ''
      }`}
      onClick={() => onOpenLightbox?.(item)}
      aria-label={`View ${item.title}`}
    >
      <span className={thumbClasses} aria-hidden="true">
        {hasGallery ? (
          <span
            className={`work-media-frame gallery ${item.galleryClass || ''}`.trim()}
          >
            {item.images.map((image) => (
              <span className="work-media-shot" key={image.src || image.alt}>
                <img
                  src={image.src}
                  alt={image.alt || item.title}
                  className={image.className}
                />
              </span>
            ))}
          </span>
        ) : item.src ? (
          <span className="work-media-frame">
            <img src={item.src} alt={item.alt || item.title} />
          </span>
        ) : (
          <span className="work-media-placeholder">{item.title}</span>
        )}
      </span>
      <span className="work-media-title">{item.title}</span>
      {item.summary && <span className="work-media-subtle">{item.summary}</span>}
      <span className="work-media-hint" aria-hidden="true">
        Click to expand
      </span>
    </button>
    );
  };

  const sectionClasses = [
    'section',
    'work-detail',
    sectionClassName,
    enableReveal ? 'reveal' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={sectionClasses}
      id={id}
      style={{ '--delay': delay }}
    >
      <div className="container">
        <div className="work-media-grid">{mediaItems.map(renderMediaItem)}</div>
        <div className="work-detail-body">
          <div className="work-detail-header">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <div className="work-detail-title">
                {hasLogo && (
                  <span className="work-logo" aria-hidden="true">
                    {logoSrc ? <img src={logoSrc} alt="" /> : <span>{logoText}</span>}
                  </span>
                )}
                <h2>{title}</h2>
              </div>
              {profile && <p className="work-profile">{profile}</p>}
              <p className="lead">{lead}</p>
              {note && <p className="work-note">{note}</p>}
            </div>
            <div className="work-meta">
              {metaItems.map((item) => (
                <div key={item.label}>
                  <span className="meta-label">{item.label}</span>
                  <span className="meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          {(summaryItems.length > 0 || roleItems.length > 0 || impactItems.length > 0) && (
            <div className="work-detail-highlights">
              {summaryItems.length > 0 && (
                <div className="work-highlight-card">
                  <h3>Quick summary</h3>
                  <ul className="work-highlight-list">
                    {summaryItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {roleItems.length > 0 && (
                <div className="work-highlight-card">
                  <h3>My role</h3>
                  <ul className="work-highlight-list">
                    {roleItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {impactItems.length > 0 && (
                <div className="work-highlight-card">
                  <h3>Impact</h3>
                  <ul className="work-highlight-list">
                    {impactItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          <details className="work-detail-collapsible">
            <summary>Process details</summary>
            <div className="work-detail-content">
              <div className="work-detail-grid">
                <div className="work-detail-card">
                  <h3>Challenge</h3>
                  <p>{challenge}</p>
                </div>
                <div className="work-detail-card">
                  <h3>Approach</h3>
                  <ul>
                    {approachItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-detail-card">
                  <h3>Outcome</h3>
                  <p>{outcome}</p>
                </div>
              </div>
            </div>
          </details>
          <div className="work-detail-cta">
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetail;
