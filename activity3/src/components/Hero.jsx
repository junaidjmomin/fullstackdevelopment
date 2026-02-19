export default function Hero() {
  return (
    <div className="section_homeheader section">
      <div className="container_main container_homeheader">
        <div className="container_fluid">
          <div className="homeheader_container">
            <div className="homeheader_content flex-col16">
              <h1 className="home_pageheader--title">
                <span className="js-dynamic-word">H</span> the next{" "}
                <span className="is-text-block">generation developer </span>
              </h1>
              <p className="home_pageheader--text is-text-secondary line-height-160">
                We help thousands of companies hire and upskill the next generation of
                developers, and millions of developers to become one.<br />
              </p>
              <div className="pageheader_actions homeheader_actions">
                <a
                  href="https://www.hackerrank.com/get-started/hire-now"
                  className="button button-primary w-button"
                >
                  Start a free trial
                </a>
                <a
                  href="https://www.hackerrank.com/auth/signup"
                  className="button button-secondary w-button"
                >
                  For developers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
