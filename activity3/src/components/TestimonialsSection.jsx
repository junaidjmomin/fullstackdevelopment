import { useState } from 'react';

export default function TestimonialsSection({ slides }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const next = () => setActive((a) => (a + 1) % slides.length);

  const slide = slides[active];

  return (
    <>
      <div
        data-wf--gradient-transition--variant="blue-to-black"
        className="style_transition w-variant-19501c28-2ada-b82e-7545-c324251b3141 is-dark"
      ></div>
      <div className="section_oldhomequotes section is-dark">
        <div className="container_main flex-col80">
        <h3 className="heading heading48 is-mw-standard is-text-centered is-block-centered">
          Loved by companies of all sizes and developers from all backgrounds
        </h3>

        <div
          className="homeslider is-block-centered is-text-balanced w-slider"
          role="region"
          aria-label="carousel"
        >
          <div className="w-slider-mask">
            <div className="w-slide" role="group" aria-label={`${active + 1} of ${slides.length}`}>
              <div className="flex-col8 is-text-centered">
                <img
                  height="80"
                  alt={slide.company}
                  loading="lazy"
                  src={slide.logoSrc}
                  className="block_quote-logo a-fadeinup"
                />
                <div className="flex-col12 flex-center">
                  <p className="quotetext">{slide.quote}</p>
                  <div className="block_quote-byline a-fadeinup">
                    <div className="block_quote_byline-name">{slide.name}</div>
                    <div className="block_quote_byline-title">{slide.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div
            className="left-arrow w-slider-arrow-left"
            role="button"
            tabIndex="0"
            aria-label="previous slide"
            onClick={prev}
            onKeyDown={(e) => e.key === 'Enter' && prev()}
          >
            <div className="w-icon-slider-left"></div>
          </div>
          <div
            className="right-arrow w-slider-arrow-right"
            role="button"
            tabIndex="0"
            aria-label="next slide"
            onClick={next}
            onKeyDown={(e) => e.key === 'Enter' && next()}
          >
            <div className="w-icon-slider-right"></div>
          </div>

          {/* Dots */}
          <div className="homequote_slidedots w-slider-nav w-round">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-slider-dot${i === active ? " w-active" : ""}`}
                role="button"
                tabIndex={i === active ? 0 : -1}
                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                style={{ marginLeft: 3, marginRight: 3 }}
              ></div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
