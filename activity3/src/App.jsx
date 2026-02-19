import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogosSection from './components/LogosSection.jsx';
import AIStars from './components/AIStars.jsx';
import MediaSection from './components/MediaSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ForkSection from './components/ForkSection.jsx';
import Footer from './components/Footer.jsx';

// ─── Media Section Data (exact from activity2/index.html) ────────────────────
const mediaCards = [
  {
    eyebrow: "HackerRank Community",
    subtitle: "Prepare and apply for your dream job",
    text: "Over 26 million developers have joined the HackerRank community to certify their skills, practice interviewing, and discover relevant jobs. An AI Mock Interviewer can help you prepare, while our QuickApply agent puts your job search on autopilot.",
    href: "https://www.hackerrank.com/dashboard/",
    imageClass: "home_media-image--community",
    posterUrl: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fee19917cc8400fe361d_HackerRank%20Community%20Video-poster-00001.jpg",
    videoUrls: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fee19917cc8400fe361d_HackerRank%20Community%20Video-transcode.mp4,https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fee19917cc8400fe361d_HackerRank%20Community%20Video-transcode.webm",
    sources: [
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fee19917cc8400fe361d_HackerRank%20Community%20Video-transcode.mp4",
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fee19917cc8400fe361d_HackerRank%20Community%20Video-transcode.webm",
    ],
  },
  {
    eyebrow: "HackerRank engage",
    subtitle: "Showcase your tech brand",
    text: "Attract developers with hackathons that feature real-world challenges, and preview what it's like to work at your company. Our Al Assistant helps you set up a hackathon in minutes. Host it yourself or advertise and run a campaign through our developer community.",
    href: "/products/engage",
    imageClass: "home_media-image--engage",
    posterUrl: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F67abf3b87b35de0f7a554086_engageloop%20%281%29-poster-00001.jpg",
    videoUrls: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F67abf3b87b35de0f7a554086_engageloop%20%281%29-transcode.mp4,https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F67abf3b87b35de0f7a554086_engageloop%20%281%29-transcode.webm",
    sources: [
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F67abf3b87b35de0f7a554086_engageloop%20%281%29-transcode.mp4",
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F67abf3b87b35de0f7a554086_engageloop%20%281%29-transcode.webm",
    ],
  },
  {
    eyebrow: "HackerRank SCreen",
    subtitle: "Take-home assessments that ensure fairness and integrity",
    text: "Identify strong developers by administering a take-home assessment in a secure environment. Choose from a library of thousands of challenges across many roles designed by experts and validated by Industrial Psychologists for fairness.",
    href: "/products/screen-draft",
    imageClass: "home_media-image--screen",
    posterUrl: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef1ba10dbc08fa26cee_HackerRank%20Screen%20Transcode-poster-00001.jpg",
    videoUrls: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef1ba10dbc08fa26cee_HackerRank%20Screen%20Transcode-transcode.mp4,https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef1ba10dbc08fa26cee_HackerRank%20Screen%20Transcode-transcode.webm",
    sources: [
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef1ba10dbc08fa26cee_HackerRank%20Screen%20Transcode-transcode.mp4",
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef1ba10dbc08fa26cee_HackerRank%20Screen%20Transcode-transcode.webm",
    ],
  },
  {
    eyebrow: "HackerRank Interview",
    subtitle: "Pair-programming interviews on demand",
    text: "Get an accurate sense for what it would be like to work together by pair programming with candidates on real-world scenarios. Review code, fix bugs, build a feature, and see the result, all within an interview setting using pre-set repos or one of your own.",
    href: "/products/interview",
    imageClass: "home_media-image--interview",
    posterUrl: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef60ab73dfc01af6953_HackerRank%20Interview%20Transcode-poster-00001.jpg",
    videoUrls: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef60ab73dfc01af6953_HackerRank%20Interview%20Transcode-transcode.mp4,https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef60ab73dfc01af6953_HackerRank%20Interview%20Transcode-transcode.webm",
    sources: [
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef60ab73dfc01af6953_HackerRank%20Interview%20Transcode-transcode.mp4",
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741fef60ab73dfc01af6953_HackerRank%20Interview%20Transcode-transcode.webm",
    ],
  },
  {
    eyebrow: "HackerRank Skillup",
    subtitle: "Find skills inside your company",
    text: "Empower developers to showcase their skills, earn certifications, and gain recognition - while helping you strengthen your organization. Our Al Tutor helps developers learn as they go, while our advanced insights help you understand the skillsets of your organization.",
    href: "/products/skillup",
    imageClass: "home_media-image--skillup",
    posterUrl: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741feface5fde257eba2e92_HackerRank%20Skillup%20Transcode-poster-00001.jpg",
    videoUrls: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741feface5fde257eba2e92_HackerRank%20Skillup%20Transcode-transcode.mp4,https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741feface5fde257eba2e92_HackerRank%20Skillup%20Transcode-transcode.webm",
    sources: [
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741feface5fde257eba2e92_HackerRank%20Skillup%20Transcode-transcode.mp4",
      "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176%2F6741feface5fde257eba2e92_HackerRank%20Skillup%20Transcode-transcode.webm",
    ],
  },
];

// ─── Testimonials Data (exact from activity2/index.html) ─────────────────────
const testimonials = [
  {
    company: "Akamai",
    logoSrc: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67a3c4ba164ea5fb40ccc3b1_Akamai_logo.svg.avif",
    quote: "The proctoring features of HackerRank have a profound impact on the candidate experience. It reassures them that their skills and potential are what truly matter to us.",
    name: "K. Thomas",
    title: "Head of Talent Acquisition",
  },
  {
    company: "Atlassian",
    logoSrc: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67a3c832ff33bda63211a329_Atlassian-Logo.avif",
    quote: "HackerRank helped us go beyond traditional universities. We've scaled up our college hiring from zero to 200.",
    name: "A. Viswanathan",
    title: "Head of Engineering",
  },
  {
    company: "Vanguard",
    logoSrc: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67a3c94f6ce966cdaf0dd554_Vanguard.avif",
    quote: "We have seen a significant reduction in the number of interviews needed in order to hire the same number of high-quality candidates.",
    name: "N. Alexandro",
    title: "IT Director",
  },
  {
    company: "UKG",
    logoSrc: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67a3c6910e25833997cd1fd3_UKG_(Ultimate_Kronos_Group)_logo.svg.avif",
    quote: "The platform effectively replicates a real-world office environment, providing candidates with a glimpse of what they would encounter on the job.",
    name: "M. Teolis",
    title: "Talent Acquisition Manager",
  },
  {
    company: "DOORDASH",
    logoSrc: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67a3c592605cf915e1e7d018_doordash-logo-500.avif",
    quote: "We cut down hiring time by months, which was huge for us. We owe that to HackerRank.",
    name: "M. Patino",
    title: "University Recruiting",
  },
  {
    company: "Deliveroo",
    logoSrc: "https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/67a3c5d2bd0ab0278d5d627d_DeliverooLogo.avif",
    quote: "HackerRank SkillUp received rave reviews. We started with our junior team and have now extended it to our mid-level.",
    name: "A. Coleman",
    title: "Senior Recruiting Manager",
  },
];

// ─── Interstitial section ─────────────────────────────────────────────────────
function DeveloperSkillsPlatform() {
  return (
    <div className="home_prestory">
      <div className="home_prestorygrad">
        <div
          data-wf--gradient-transition--variant="white-to-purple"
          className="style_transition w-variant-3fce9363-4490-44b2-3da4-411560dcff35 is-dark"
        ></div>
      </div>
      <div className="section_interstitial section is-light margin-bottom-80">
        <div className="container_main interstitial-loud-2rem-2">
          <div className="section_interstitial--wrapper container-fluid interstitial-loud-2rem-3">
            <div className="section_interstitial-header green-emphasis w-richtext">
              <h2 className="heading heading56">The Developer Skills Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosSection />
      <AIStars />
      <DeveloperSkillsPlatform />
      <MediaSection cards={mediaCards} />
      <TestimonialsSection slides={testimonials} />
      <ForkSection />
      <Footer />
    </>
  );
}
