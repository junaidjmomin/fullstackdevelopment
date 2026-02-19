const ARROW_ICON = "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/676216fdf4d5b27a5bf2368d_arrow-narrow-right.svg";

function NavLink({ href, name, sub }) {
  return (
    <a href={href} className="pagenav_link w-inline-block">
      <div className="pagenav_link-header">
        <div className="pagenav_link-icon">
          <img src={ARROW_ICON} loading="lazy" alt="Arrow" height="20" className="pagenav_link-icon--image" />
        </div>
        <div className="pagenav_link-name">{name}</div>
      </div>
      {sub && <div className="pagenav_link-subname">{sub}</div>}
    </a>
  );
}

export default function Navbar() {
  return (
    <div className="global_nav-w-banner">
      <section
        id="LandingHeaderNav"
        data-wf--global-header--variant="light"
        className="nav_pagenav is-relative"
        style={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(255,255,255,0)" }}
      >
        <div className="w-layout-blockcontainer pagenav_container w-container">
          {/* Left: Logo + nav links */}
          <div className="pagenav_left">
            <a id="PageNav-logo-sm" href="/" className="pagenav_logosm w-inline-block">
              <img loading="lazy" height="40" alt="HI"
                src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/66f9706316a3f2ee8f86283a_logoSm.svg"
                className="js-logoimg" />
            </a>
            <a id="PageNav-logo-lg" href="/" className="pagenav_logolg w-inline-block">
              <img loading="lazy" height="16" alt="HackerRank"
                src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6765dc51a13e31531996cef3_logo-dark.svg"
                className="js-logoimg pagenav-logo-dark" />
              <img loading="lazy" height="16" alt="HackerRank"
                src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67411f0efc1c2cc21fbe84d9_logo%20light.svg"
                className="js-logoimg pagenav-logo-light" />
            </a>

            {/* Wide nav links */}
            <div className="pagenav-links-wide">
              {/* Products */}
              <div className="pagenav_linksection">
                <div className="pagenav_linktext">Products</div>
                <div className="pagenav_dropdown" style={{ display: "none" }}>
                  <div className="pagenav_column">
                    <div className="pagenav_header">Products</div>
                    <NavLink href="/products/screen/" name="Screen" sub="Save time and accelerate your hiring" />
                    <NavLink href="/products/interview/" name="Interview" sub="Conduct stellar technical interviews" />
                    <NavLink href="/products/engage/" name="Engage" sub="Promote your tech brand" />
                    <NavLink href="/products/skillup/" name="SkillUp" sub="Mobilize your tech talent" />
                  </div>
                  <div className="pagenav_column">
                    <div className="pagenav_header">Features</div>
                    <NavLink href="/features/certified-assessments/" name="Certified Assessments" sub="Launch standardized, role-based tests in minutes" />
                    <NavLink href="/features/plagiarism-detection/" name="Plagiarism Detection" sub="Ensure fairness with AI-powered plagiarism detection" />
                    <NavLink href="/features/real-world-questions/" name="Real-World Questions" sub="Assess technical hires with real-world coding questions" />
                    <NavLink href="/integrations/" name="Integrations" sub="Seamlessly connect with your favorite tools" />
                    <NavLink href="/features/hiring/ai-add-on" name="AI Add-on" sub="Redefine hiring with integrity, depth and speed." />
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="pagenav_linksection">
                <div className="pagenav_linktext">Solutions</div>
                <div className="pagenav_dropdown" style={{ display: "none" }}>
                  <div className="pagenav_column">
                    <div className="pagenav_header">What We Do</div>
                    <NavLink href="/solutions/skills-strategy/" name="Set Up Your Skills Strategy" />
                    <NavLink href="/solutions/talent-brand/" name="Showcase Your Tech Brand" />
                    <NavLink href="/solutions/optimize-hiring/" name="Optimize Your Hiring Process" />
                    <NavLink href="/solutions/internal-mobility/" name="Mobilize Your Internal Talent" />
                    <NavLink href="/ai/services" name="AI Data Services" />
                  </div>
                  <div className="pagenav_column">
                    <div className="pagenav_header">Use Cases</div>
                    <NavLink href="/solutions/remote-hiring/" name="Remote Hiring" />
                    <NavLink href="/solutions/university-hiring/" name="University Hiring" />
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="pagenav_linksection">
                <div className="pagenav_linktext">Resources</div>
                <div className="pagenav_dropdown" style={{ display: "none" }}>
                  <div className="pagenav_column">
                    <div className="pagenav_header">Learn</div>
                    <NavLink href="https://www.hackerrank.com/blog/" name="Blog" sub="Hiring best practices and industry insights" />
                    <NavLink href="https://www.hackerrank.com/roles-directory/" name="Roles Directory" sub="Explore the definitive directory of tech roles" />
                    <NavLink href="https://www.hackerrank.com/resources/" name="Resource Library" sub="Guides, datasheets, and data-driven content" />
                    <NavLink href="https://www.hackerrank.com/customers/" name="Customer Stories" sub="How leading companies use HackerRank" />
                    <NavLink href="/reports/developer-skills-report-2025" name="Developer Skills Report" sub="Key trends and forecasts for 2025" />
                  </div>
                  <div className="pagenav_column">
                    <div className="pagenav_header">Product Help</div>
                    <NavLink href="https://www.hackerrank.com/whats-new/" name="What's New" sub="Get the latest product news and updates" />
                    <NavLink href="https://www.hackerrank.com/partners/" name="Partners" sub="Learn more about the HackerRank Partner Network" />
                    <NavLink href="https://support.hackerrank.com/hc/en-us" name="Support" sub="Everything you need to know to get started" />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="pagenav_linksection">
                <a href="https://www.hackerrank.com/pricing/" className="pagenav_linktext w-inline-block">
                  <div>Pricing</div>
                </a>
              </div>

              {/* Human Data */}
              <div className="pagenav_linksection">
                <a href="https://astra.hackerrank.com/arena" className="pagenav_linktext w-inline-block">
                  <div>Human Data</div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="pagenav_right">
            <div className="pagenav_dropdown--actions">
              <a href="https://www.hackerrank.com/access-account" className="button button-text button-small w-button">Log In</a>
              <a href="https://www.hackerrank.com/request-demo/" className="button button-secondary button-small w-button">Request Demo</a>
              <a href="https://www.hackerrank.com/get-started" className="button button-primary button-small w-button">Create a free account</a>
            </div>

            {/* Narrow mobile menu */}
            <div className="pagenav-links-narrow">
              <div className="pagenav_menu-narrow w-dropdown">
                <div className="menu-button w-dropdown-toggle" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                  <div className="menuicon">
                    <div className="menuicon-bar menuicon_top"></div>
                    <div className="menuicon-bar menuicon_middle"></div>
                    <div className="menuicon-bar menuicon_bottom"></div>
                  </div>
                </div>
                <nav className="pagenav_dropdown-narrow w-dropdown-list">
                  <div className="pagenav_narrowtrigger w-dropdown">
                    <div className="pagenav_narrowtriggertext w-dropdown-toggle" role="button" tabIndex="0">
                      <div className="pagenav_narrow_arrowicon w-icon-dropdown-toggle" aria-hidden="true"></div>
                      <div>Products</div>
                    </div>
                    <nav className="pagenav_list w-dropdown-list">
                      <a href="/products/screen/" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Screen</div><div className="pagenav_link-subname">Save time and accelerate your hiring</div></a>
                      <a href="/products/interview/" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Interview</div><div className="pagenav_link-subname">Conduct stellar technical interviews</div></a>
                      <a href="/products/engage" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Engage</div><div className="pagenav_link-subname">Promote your tech brand</div></a>
                      <a href="/products/skillup" className="pagenav_link w-inline-block"><div className="pagenav_link-name">SkillUp</div><div className="pagenav_link-subname">Mobilize your tech talent</div></a>
                    </nav>
                  </div>
                  <div className="pagenav_narrowtrigger w-dropdown">
                    <div className="pagenav_narrowtriggertext w-dropdown-toggle" role="button" tabIndex="0">
                      <div className="pagenav_narrow_arrowicon w-icon-dropdown-toggle" aria-hidden="true"></div>
                      <div>Solutions</div>
                    </div>
                    <nav className="pagenav_list w-dropdown-list">
                      <div className="pagenav_header">What We Do</div>
                      <a href="/solutions/talent-brand" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Showcase Your Tech Brand</div></a>
                      <a href="/solutions/skills-strategy" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Set Up Your Skills Strategy</div></a>
                      <a href="/solutions/optimize-hiring" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Optimize Your Hiring Process</div></a>
                      <a href="/solutions/internal-mobility" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Mobilize Your Internal Talent</div></a>
                    </nav>
                  </div>
                  <div className="pagenav_narrowtrigger w-dropdown">
                    <div className="pagenav_narrowtriggertext w-dropdown-toggle" role="button" tabIndex="0">
                      <div className="pagenav_narrow_arrowicon w-icon-dropdown-toggle" aria-hidden="true"></div>
                      <div>Resources</div>
                    </div>
                    <nav className="pagenav_list w-dropdown-list">
                      <div className="pagenav_header">Learn</div>
                      <a href="https://www.hackerrank.com/blog/" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Blog</div><div className="pagenav_link-subname">Hiring best practices and industry insights</div></a>
                      <a href="https://www.hackerrank.com/customers/" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Customer Stories</div><div className="pagenav_link-subname">How leading companies use HackerRank</div></a>
                      <a href="https://www.hackerrank.com/partners/" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Partners</div></a>
                      <a href="https://support.hackerrank.com/hc/en-us" className="pagenav_link w-inline-block"><div className="pagenav_link-name">Support</div></a>
                    </nav>
                  </div>
                  <div className="pagenav_narrowtrigger">
                    <a href="https://www.hackerrank.com/pricing/" className="pagenav_narrowtriggertext w-inline-block" tabIndex="0">
                      <div>Pricing</div>
                    </a>
                  </div>
                  <div className="pagenav_dropdown-narrow--actions">
                    <a href="https://www.hackerrank.com/access-account" className="button button-text button-small w-button" tabIndex="0">Log in</a>
                    <a href="/request-demo" className="button button-primary button-small w-button" tabIndex="0">Request Demo</a>
                    <a href="/get-started" className="button button-primary button-small w-button" tabIndex="0">Create a Free Account</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
