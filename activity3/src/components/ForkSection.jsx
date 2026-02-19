export default function ForkSection() {
  return (
    <div className="home_fork">
      <section className="homefork_container flexcontainer_1-2">
        {/* For Developers */}
        <section id="FordCardL" className="homefork_card flexblock_1-2 homefork_card-first">
          <div className="homefork_textwrapper">
            <div className="homefork_textshim">
              <div className="forkcard_header">For Developers</div>
              <div className="forkcard_text">
                Over 26 millions developers have joined the HackerRank Community to learn and
                certify their skills, practice interviewing, and discover relevant jobs.
              </div>
            </div>
            <a href="https://www.hackerrank.com/signup/" className="button button-dark w-inline-block">
              <div className="homefork_buttontext">Join the Community</div>
            </a>
          </div>
          <div className="home_fork-bg"></div>
        </section>

        {/* For Companies */}
        <div className="homefork_card flexblock_1-2">
          <div className="homefork_textwrapper">
            <div className="homefork_textshim">
              <div className="forkcard_header">For Companies</div>
              <div className="forkcard_text">
                Thousands of companies have embraced the new way to hire and upskill developers
                across roles and throughout their careers.
              </div>
            </div>
            <a href="https://www.hackerrank.com/get-started/hire-now/" className="button button-dark w-inline-block">
              <div className="homefork_buttontext">Start a Free Trial</div>
            </a>
          </div>
          <div className="home_fork-bg"></div>
        </div>
      </section>
    </div>
  );
}
