import React from "react";
import "./HeroSection.css"; // external CSS for custom styles

const HeroSection = () => {
  return (
    <div>
    <div className="hero-section">
      

      {/* Hero Content */}
      <div className="container-fluid hero-content d-flex align-items-center justify-content-between px-5">

        <div className="containt">
          {/* <p className="fst-italic fs-3 text-secondary mb-2">I am</p> */}
          <h1 >
            START<br></br> YOUR<br></br> JOURNEY<br></br> HERE...
          </h1>
        </div>
      </div>
    </div>



    {/* // help section */}
    <section className="help-section py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">How can we help you?</h2>
        <p className="text-muted mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo.
          Praesent mattis commodo augue.
        </p>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="service-card p-4 h-100">
              <div className="icon mb-3">
                <i className="bi bi-pencil-square"></i>
              </div>
              <h5 className="fw-bold">Graphic Design</h5>
              <p>
                Designs that don't just catch eyes — they capture hearts. Let us turn your ideas
                into unforgettable visuals.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="service-card p-4 h-100">
              <div className="icon mb-3">
                <i className="bi bi-laptop"></i>
              </div>
              <h5 className="fw-bold">Web Development</h5>
              <p>
                We specialize in building responsive, fast-loading websites tailored to your brand’s
                unique identity and goals.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="service-card p-4 h-100">
              <div className="icon mb-3">
                <i className="bi bi-send"></i>
              </div>
              <h5 className="fw-bold">Social Media Marketing</h5>
              <p>
                From content to conversions — social media marketing that fuels your brand’s growth.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4">
            <div className="service-card p-4 h-100">
              <div className="icon mb-3">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h5 className="fw-bold">Meme Marketing</h5>
              <p>
                Boost your brand with viral-worthy memes that engage, entertain, and convert.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div className="service-card p-4 h-100">
              <div className="icon mb-3">
                <i className="bi bi-cart"></i>
              </div>
              <h5 className="fw-bold">eCommerce</h5>
              <p>
                Boost your brand with expert eCommerce solutions — engaging content, targeted ads,
                and seamless sales growth.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4">
            <div className="service-card p-4 h-100">
              <div className="icon mb-3">
                <i className="bi bi-headset"></i>
              </div>
              <h5 className="fw-bold">Help & Support</h5>
              <p>
                Get instant assistance and expert support — we’re here to resolve your queries
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* leadership */}

    <section className="leadership-section">
    <div className="container">
      <h2 className="section-title">Meet Our Leadership</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
      </p>
      <div className="team-grid">
        <div className="team-member">
          <div className="member-photo">
            <img src="https://via.placeholder.com/300x300/464857/ffffff?text=Joanne" alt="Joanne Williams" />
          </div>
          <h3 className="member-name">Joanne Williams</h3>
          <p className="member-title">Founder</p>
        </div>
        <div className="team-member">
          <div className="member-photo">
            <img src="https://via.placeholder.com/300x300/464857/ffffff?text=Fred" alt="Fred Buster" />
          </div>
          <h3 className="member-name">Fred Buster</h3>
          <p className="member-title">Director OPS</p>
        </div>
        <div className="team-member">
          <div className="member-photo">
            <img src="https://via.placeholder.com/300x300/464857/ffffff?text=Lisa" alt="Lisa Hoffman" />
          </div>
          <h3 className="member-name">Lisa Hoffman</h3>
          <p className="member-title">Director HR</p>
        </div>
      </div>
    </div>
  </section>

</div>
  );
};

export default HeroSection;
