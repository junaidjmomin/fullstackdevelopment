export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="homefooter is-dark">
      <div className="container_main container_sitefooter">
        <div className="container_fluid">
          <div className="homefooter_columns">
            {/* Products */}
            <div className="homefooter_column">
              <a href="/products/developer-skills-platform" className="homefooter_header">Products</a>
              <a href="/products/screen" className="homefooter_link">Screen</a>
              <a href="/products/interview" className="homefooter_link">Interview</a>
              <a href="/products/engage" className="homefooter_link">Engage</a>
              <a href="/products/skillup" className="homefooter_link">SkillUp</a>
              <a href="/features/certified-assessments" className="homefooter_link">Certified assessments</a>
              <a href="/features/plagiarism-detection" className="homefooter_link">Plagiarism detection</a>
              <a href="/features/real-world-questions" className="homefooter_link">Real-world questions</a>
            </div>

            {/* Solutions */}
            <div className="homefooter_column">
              <a href="/products/developer-skills-platform" className="homefooter_header">Solutions</a>
              <a href="/solutions/skills-strategy" className="homefooter_link">Set up your skills strategy</a>
              <a href="https://www.hackerrank.com/solutions/talent-brand/" className="homefooter_link">Showcase your tech brand</a>
              <a href="https://www.hackerrank.com/solutions/optimize-hiring/" className="homefooter_link">Optimize your hiring process</a>
              <a href="https://www.hackerrank.com/solutions/internal-mobility/" className="homefooter_link">Mobilize your internal talent</a>
            </div>

            {/* Resources */}
            <div className="homefooter_column">
              <div className="homefooter_header">Resources</div>
              <a href="https://www.hackerrank.com/blog/" className="homefooter_link">Blog</a>
              <a href="https://www.hackerrank.com/customers/" className="homefooter_link">Customer stories</a>
              <a href="https://www.hackerrank.com/roles-directory/" className="homefooter_link">Roles directory</a>
              <a href="https://www.hackerrank.com/partners/" className="homefooter_link">Partners</a>
              <a href="/features/integrations" className="homefooter_link">Integrations</a>
              <a href="https://www.hackerrank.com/whats-new/" className="homefooter_link">What's new</a>
              <a href="https://www.hackerrank.com/writing/" className="homefooter_link">Writing</a>
            </div>

            {/* About us */}
            <div className="homefooter_column">
              <div className="homefooter_header">About us</div>
              <a href="https://www.hackerrank.com/careers/" className="homefooter_link">Careers</a>
              <a href="https://status.hackerrank.com/" className="homefooter_link">Status</a>
              <a href="https://www.hackerrank.com/trust/" className="homefooter_link">Trust</a>
            </div>

            {/* Get started */}
            <div className="homefooter_column">
              <div className="homefooter_header">Get started</div>
              <a href="https://www.hackerrank.com/pricing/" className="homefooter_link">Pricing</a>
              <a href="https://www.hackerrank.com/get-started/hire-now/" className="homefooter_link">Free Trial</a>
              <a href="https://www.hackerrank.com/request-demo/" className="homefooter_link">Request a demo</a>
              <a href="https://support.hackerrank.com/hc/en-us" className="homefooter_link">Product support</a>
              <a href="https://www.hackerrank.com/dashboard" className="homefooter_link">For developers</a>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="footer_sub-wrap">
            <div className="homefooter_anchor">
              <a href="https://www.hackerrank.com" className="homefooter_brand w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/670ee06a416476e6459b791a_LogoDark.svg"
                  loading="lazy"
                  width="120"
                  alt="HackerRank"
                  className="homefooter_logo"
                />
              </a>
              <div className="homefooter_social">
                <a href="https://www.facebook.com/hackerrank/" className="social w-inline-block">
                  <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/670ee20e74c9824dfb285d8a_Social_Facebook.svg" loading="lazy" alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/company/hackerrank" className="social w-inline-block">
                  <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/670ee20f9c44c17605f188d4_Social_LinkedIn.svg" loading="lazy" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/hackerrank" className="social w-inline-block">
                  <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/670ee20efb2f13eeab008b87_Social_X.svg" loading="lazy" alt="X (Twitter)" />
                </a>
                <a href="https://www.instagram.com/hackerrank/" className="social w-inline-block">
                  <img src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/670ee20e18f31ead7eaab026_Social_Insta.svg" loading="lazy" alt="Instagram" />
                </a>
              </div>
            </div>
            <div className="subfooter_wrap">
              <div>© HackerRank <span data="year">{year}</span> All Rights Reserved.</div>
              <div className="subfooter_link-wrap">
                <a href="/about-us/privacy" className="subfooter_link">Privacy Policy</a>
                <a href="/about-us/terms-of-service" className="subfooter_link">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
