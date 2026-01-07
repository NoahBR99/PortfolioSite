import './FigmaEmbed.css';

const FigmaEmbed = ({
  title,
  description,
  embedUrl,
  themeClassName = '',
  aspectRatio
}) => (
  <section className={`section figma-embed section-cream ${themeClassName}`.trim()}>
    <div className="container">
      <div className="figma-embed-head">
        <div>
          <p className="eyebrow">Prototype</p>
          <h2>{title}</h2>
          {description && <p className="lead">{description}</p>}
        </div>
        <span className="figma-embed-pill">Figma</span>
      </div>
      <div className="figma-embed-card">
        {embedUrl ? (
          <div
            className="figma-embed-frame"
            style={{ '--figma-aspect': aspectRatio || '16 / 9' }}
          >
            <iframe
              title={title}
              src={embedUrl}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ) : (
          <div className="figma-embed-empty">
            <p>Paste your Figma embed URL here to show the prototype.</p>
            <code>https://www.figma.com/embed?embed_host=share&url=...</code>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default FigmaEmbed;
