import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ResumePdf from "../Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Main.css";
import { FaDownload } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

export const Main = () => {
      useEffect(() => {
        Aos.init({ duration: 1200, once: true });
      }, []);

  return (
    <div className='main-section'>
        <section>
             <Container>
                    <div className="row align-items-center">
                      {/* Left Side: Text */}
                      <div className="col-md-6" data-aos="fade-right">
                        <h1 className="hero-title">
                          Hi <h1 className="hithere">👋</h1>, I'm{" "}
                          <span className="typed-text">
                            <ReactTyped
                              strings={["Sarita"]}
                              typeSpeed={200}
                              backSpeed={50}
                              loop={false}
                              showCursor={false}
                              cursorChar="|"
                            />
                          </span>
                        </h1>
            
                        {/* ReactTyped Text  */}
                        <h2 className="hero-subtitle">
                          <span className="hero-subtitle">
                            <ReactTyped
                              strings={[
                                "💻 Front End Developer",
                                "⚛️ React.js Developer",
                                "🌐 MERN Stack Developer"
                              ]}
                              typeSpeed={100}
                              backSpeed={50}
                              fadeOut={true}
                              fadeOutDelay={500}
                              smartBackspace={false}
                              loop={true}
                              showCursor={true}
                              cursorChar="|"
                            />
                          </span>{" "}
                        </h2>
                        <p className="hero-description">
                          I build <span>modern, responsive</span> web experiences with
                          smooth animations, <span>clean UI</span>, and <span>scalable performance</span> —
                          bringing ideas to life with <span>clean code</span> and
                          <span> user-friendly design</span>. Let’s create something amazing together..
                        </p>
            
                        <div className="hero-buttons">
                          <a
                            href={ResumePdf}
                            download="Sarita-Resume"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                          >
                            <FaDownload /> Download Resume
                          </a>
                          <a
                            href="https://wa.me/917996748513"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary"
                          >
                            💬 Hire Me
                          </a>
                        </div>
                      </div>
            
                      {/* Right Side: Image */}
                      <div className="col-md-6 text-center" data-aos="fade-left">
                        <div className="image-wrapper">
                          <img
                            src="../Assets/developer-activity-1.svg"
                            alt="Laptop"
                            className="hero-img floating-img"
                          />
                          <div className="glow-circle"></div>
                        </div>
                      </div>
                    </div>
                  </Container>
        </section>
      
    </div>
  )
}
