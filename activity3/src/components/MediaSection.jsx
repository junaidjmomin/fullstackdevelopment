function MediaArticle({ card, rtl }) {
  return (
    <article className={`section_media home_media-horizontal${rtl ? " home_media-horizontal--rtl" : ""}`}>
      {/* Text block */}
      <div className="block_media-content">
        <div
          className="style-eyebrow is-style-eyebrow js-shuffle a-fadeinup"
          data-text={card.eyebrow}
        >
          {card.eyebrow}
        </div>
        <h2 className="block_media-subtitle a-fadeinup">
          {card.subtitle}
        </h2>
        <div className="block_media-text w-richtext">
          <p className="paragraph a-fadeinup">
            {card.text}
          </p>
        </div>
        <div className="block_media-actions">
          <a
            href={card.href}
            className="block_media-actions--secondary button button-link button-link-primary a-fadeinup w-inline-block"
          >
            <div>Learn more</div>
            <div>➜</div>
          </a>
        </div>
      </div>

      {/* Video / image block */}
      <div className="block_media-content">
        <div
          data-poster-url={card.posterUrl}
          data-video-urls={card.videoUrls}
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
          className={`block_media-image figure-video a-imagein ${card.imageClass} w-background-video w-background-video-atom`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
            preload="none"
            style={{ backgroundImage: `url("${card.posterUrl}")` }}
          >
            {card.sources.map((src, i) => (
              <source key={i} data-wf-ignore="true" data-src={src} />
            ))}
          </video>
        </div>
        <div className="figure_light-rainbowborder"></div>
      </div>
    </article>
  );
}

export default function MediaSection({ cards }) {
  return (
    <div className="is-bg-rainbow is-light">
      {cards.map((card, i) => (
        <MediaArticle key={card.eyebrow} card={card} rtl={i % 2 !== 0} />
      ))}
    </div>
  );
}
