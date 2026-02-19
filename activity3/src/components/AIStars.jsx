import { useEffect, useRef } from 'react';

/* Each word that should animate gets data-word="1" so we can select them below */
function W({ children }) {
  return <span data-word="1" style={{ color: 'rgba(255,255,255,0.4)' }}>{children}</span>;
}

export default function AIStars() {
  const textRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    let timeline;
    let cancelled = false;

    const tryInit = () => {
      if (cancelled) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      if (!gsap || !ScrollTrigger) {
        timeoutId = setTimeout(tryInit, 100);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const words = textRef.current?.querySelectorAll('[data-word]');
      const heading = textRef.current?.querySelector('.homeai_bold');
      if (!words) return;

      const wordCount = words.length || 0;
      const scrollDistance = Math.max(360, wordCount * 18);

      // Scrubbed word-by-word brightening across a longer scroll range
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 75%',
          end: `+=${scrollDistance}`,
          scrub: true,
        },
      });

      if (heading) {
        timeline.to(heading, { opacity: 1, duration: 0.2 }, 0);
      }

      timeline.to(words, { color: '#ffffff', duration: 1, stagger: 0.06 }, 0);
      ScrollTrigger.refresh();
    };

    tryInit();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
      timeline?.scrollTrigger?.kill();
      timeline?.kill();
    };
  }, []);

  return (
    <>
      <div
        data-wf--gradient-transition--variant="white-green-black"
        className="style_transition w-variant-dc6e9ab1-2eb6-be00-36b6-981ed3f8a620 is-dark"
      ></div>
      <div id="Home_AIStars" className="section_home_aistars section is-dark">
        <div className="container_main">
          <div className="container-fluid">
            <section className="homeai">
              <div className="home_aistars--text container_fluid" ref={textRef}>
                <div className="fade-in-text w-richtext">
                  <p>
                    <strong className="homeai_bold" style={{ opacity: 0.4 }}>
                      The future is human <em className="homeai_emphasis">plus</em> AI.
                      <br />
                    </strong>
                    <span>
                      <W>We've</W>{" "}
                      <W>entered</W>{" "}
                      <W>a</W>{" "}
                      <W>new</W>{" "}
                      <W>era</W>{" "}
                      <W>of</W>{" "}
                      <W>software</W>{" "}
                      <W>development</W>{" "}
                      <W>where</W>{" "}
                      <W>human</W>{" "}
                      <W>and</W>{" "}
                      <W>AI</W>{" "}
                      <W>build</W>{" "}
                      <W>together.</W>{" "}
                      <W>This</W>{" "}
                      <W>changes</W>{" "}
                      <W>the</W>{" "}
                      <W>skills</W>{" "}
                      <W>you</W>{" "}
                      <W>need</W>{" "}
                      <W>as</W>{" "}
                      <W>a</W>{" "}
                      <W>developer,</W>{" "}
                      <W>and</W>{" "}
                      <W>the</W>{" "}
                      <W>way</W>{" "}
                      <W>companies</W>{" "}
                      <W>engage,</W>{" "}
                      <W>hire,</W>{" "}
                      <W>and</W>{" "}
                      <W>upskill</W>{" "}
                      <W>technical</W>{" "}
                      <W>talent.</W>{" "}
                      <W>In</W>{" "}
                      <W>short,</W>{" "}
                      <W>this</W>{" "}
                      <W>changes</W>{" "}
                      <W>everything.</W>
                    </span>
                    <br /><br />
                    <span>
                      <W>We're</W>{" "}
                      <W>embracing</W>{" "}
                      <W>these</W>{" "}
                      <W>changes</W>{" "}
                      <W>with</W>{" "}
                      <W>you,</W>{" "}
                      <W>and</W>{" "}
                      <W>we've</W>{" "}
                      <W>reinvented</W>{" "}
                      <W>our</W>{" "}
                      <W>products</W>{" "}
                      <W>to</W>{" "}
                      <W>meet</W>{" "}
                      <W>the</W>{" "}
                      <W>moment.</W>
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div
        data-wf--gradient-transition--variant="black-to-white"
        className="style_transition is-dark"
      ></div>
    </>
  );
}
