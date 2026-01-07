import { useEffect, useState } from 'react';
import './Lightbox.css';

const Lightbox = ({ lightbox, onClose, backdropRef, contentRef }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [lightbox]);

  if (!lightbox) {
    return null;
  }

  const canZoom = Boolean(lightbox.allowZoom && lightbox.src && !lightbox.images);

  const toggleZoom = () => {
    if (!canZoom) {
      return;
    }
    setIsZoomed((prev) => !prev);
  };

  const handleZoomKey = (event) => {
    if (!canZoom) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleZoom();
    }
  };

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
      <div
        className="lightbox-backdrop"
        ref={backdropRef}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        className={`lightbox-content ${canZoom ? 'is-zoomable' : ''} ${
          isZoomed ? 'is-zoomed' : ''
        }`}
        ref={contentRef}
        role="document"
      >
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close">
          <span className="lightbox-close-icon" aria-hidden="true"></span>
        </button>
        <div
          className={`lightbox-media ${lightbox.tone ? `tone-${lightbox.tone}` : ''} ${
            canZoom ? 'is-zoomable' : ''
          } ${isZoomed ? 'is-zoomed' : ''}`}
        >
          {lightbox.images && lightbox.images.length > 0 ? (
            <div className="lightbox-gallery">
              {lightbox.images.map((image) => (
                <img
                  key={image.src || image.alt}
                  src={image.src}
                  alt={image.alt || lightbox.title}
                  className={image.className}
                />
              ))}
            </div>
          ) : lightbox.src ? (
            <img
              src={lightbox.src}
              alt={lightbox.alt || lightbox.title}
              onClick={toggleZoom}
              onKeyDown={handleZoomKey}
              role={canZoom ? 'button' : undefined}
              tabIndex={canZoom ? 0 : undefined}
              aria-pressed={canZoom ? isZoomed : undefined}
              aria-label={canZoom ? (isZoomed ? 'Zoom out image' : 'Zoom in image') : undefined}
            />
          ) : (
            <div className="lightbox-placeholder">{lightbox.title}</div>
          )}
        </div>
        <div className="lightbox-meta">
          <h3 id="lightbox-title">{lightbox.title}</h3>
          {lightbox.summary && <p className="lead">{lightbox.summary}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
