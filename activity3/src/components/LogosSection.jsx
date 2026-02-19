const logos = [
  { alt: "Airbnb",        src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b22208f1a1fefa8a2_AirBnB-BW.svg" },
  { alt: "Stripe",        src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b22208f1a1fefa817_Stripe-BW.svg" },
  { alt: "Linkedin",      src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f6f4bb18a3ca707ac771_linkedin.svg" },
  { alt: "Atlassian",     src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6bae7ad199a36794eb_Atlassian-BW.svg" },
  { alt: "IBM",           src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f76721b5766b2190fe7d_ibm.svg" },
  { alt: "Snap Inc.",     src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6a9a5cd6110dc622db_Snap-color.svg" },
  { alt: "Doordash",      src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6bc5556b277d750a69_Doordash-BW.svg" },
  { alt: "Adobe",         src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f815d46542504f9cee31_adobe.svg" },
  { alt: "Paypal",        src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f95eb1c857f73c0ec226_paypal.svg" },
  { alt: "Goldman Sachs", src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6787f9e10d903ef8395e299a_goldmansachs.svg" },
  { alt: "Canva",         src: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/673d7a6b45d72f82c00180d2_Canva-BW.svg" },
];

export default function LogosSection() {
  return (
    <section
      className="section section_logostatic is-light min-height"
    >
      <div className="container_main is-no-padding">
        <div className="container_fluid logos-header-3">
          <div className="logo-static-wrapper">
            {logos.map((logo) => (
              <div key={logo.alt} className="logosstatic_logo">
                <img loading="lazy" height="Auto" alt={logo.alt} src={logo.src} className="logosstatic_logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
