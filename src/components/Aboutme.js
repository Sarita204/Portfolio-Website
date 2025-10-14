import React, { useState, useEffect } from 'react';
import '../styles/Aboutme.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaBriefcase, FaCheckCircle, FaArrowCircleDown } from 'react-icons/fa';
import { PiFileHtmlBold } from "react-icons/pi";
import { SiJavascript, SiMongodb, SiRedux, SiExpress, SiVisualstudiocode, SiTypescript, SiGithub, SiPostman, SiNetlify, SiVercel, SiNpm, SiMicrosoftword, SiMicrosoftexcel } from 'react-icons/si';
import { BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";
import Aos from "aos";
import { IoLogoWhatsapp } from 'react-icons/io';


const AboutMe = () => {

    // Aos Animation 
    useEffect(() => {
        Aos.init();
    }, [])

    //Scroll to Top
    const [visible, setVisible] = useState(false);
    const [atBottom, setAtBottom] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
        if (scrolled > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        if (scrolled >= maxScroll) {
            setAtBottom(true);
        } else {
            setAtBottom(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);


    return (
        <div>
            <section className="aboutme-section">
                <div>
                    <a href="https://wa.me/917996748513" target="_blank" className='whatsapp-img ' rel="noreferrer">
                        <IoLogoWhatsapp className="about-whatsp-hithere" />
                    </a>
                </div>

                <div
                    className="scrool-up-icon"
                    style={{ display: visible ? "inline" : "none" }}
                >
                    <div className="scrool mb-2" onClick={scrollToTop}>
                        <FaCircleArrowUp className='scrool-icon' />
                    </div>

                    <div className="scrool" onClick={scrollToBottom}>
                        <FaCircleArrowDown rcleDown className='scrool-icon' />
                    </div>
                </div>
                <Container>

                    {/* About Me Section */}
                    <Row >
                        {/* Text Column */}
                        <Col md={7} className="mb-4 mb-md-0" data-aos="fade-up" data-aos-duration="2000">
                            <div className="text-start">
                                <h1 className="section-title">About Me</h1>
                                <p className="bio-text">
                                    Hi! I'm <span className="highlight">Sarita Patagar</span>, a passionate <strong>Front-End Developer</strong> with over
                                    <span className="highlight"> 5.3 years</span> of experience building dynamic, high-performance web applications.
                                    I focus on creating responsive, scalable, and visually appealing solutions while following UI/UX best practices.
                                </p>
                                <p className="bio-text">
                                    I enjoy transforming ideas into real-world digital experiences and continuously learning new technologies to stay ahead in the ever-evolving web landscape. I believe great design and clean code go hand in hand, and I take pride in crafting interfaces that not only look good but also feel intuitive and purposeful.
                                </p>
                                <Button className="btn-modern" href="/myprojects">View Projects</Button>
                            </div>
                        </Col>

                        {/* Image Column */}
                        <Col md={5} data-aos="fade-down" data-aos-duration="2000">
                            <div className="text-start">
                                <div className="profile-wrapper">
                                    <div className="profile-border">
                                        <img src="../Assets/profile-img1.JPEG" alt="Sarita" className="profile-img" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Tech Skills Section  */}
                    <section className="techskills-section">
                        <Container>
                            <h2 className="section-title text-center mb-5">Tech Skills</h2>
                            <Row className="justify-content-center">
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <PiFileHtmlBold className="skill-icon html" />
                                        <h5>HTML</h5>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <FaHtml5 className="skill-icon html5" />
                                        <h5>HTML5</h5>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <BsFiletypeCss className="skill-icon css" />
                                        <h5>CSS</h5>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <FaCss3Alt className="skill-icon css3" />
                                        <h5>CSS3</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <BsFiletypeScss className="skill-icon scss" />
                                        <h5>SCSS</h5>
                                    </div>
                                </Col>


                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <FaBootstrap className="skill-icon bootstrap" />
                                        <h5>Bootstrap</h5>
                                    </div>
                                </Col>


                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <span className="skill-icon bootstrap">📦</span>
                                        <h5>Material UI</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <FaReact className="skill-icon react" />
                                        <h5>React.js</h5>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <SiJavascript className="skill-icon js" />
                                        <h5>JavaScript</h5>
                                    </div>
                                </Col>
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <FaNodeJs className="skill-icon node" />
                                        <h5>Node.js</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <SiMongodb className="skill-icon mongo" />
                                        <h5>MongoDB</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <SiExpress className="skill-icon express" />
                                        <h5>Express.js</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <SiTypescript className="skill-icon typescript" />
                                        <h5>TypeScript</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="skill-card">
                                        <SiRedux className="skill-icon redux" />
                                        <h5>Redux</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Tools Section  */}
                    <section className="tools-section">
                        <Container>
                            <h2 className="section-title mb-5">Tools I Use</h2>
                            <Row className="justify-content-center">
                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiVisualstudiocode className="tool-icon vscode" />
                                        <h5>VS Code</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiGithub className="tool-icon github" />
                                        <h5>GitHub</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiPostman className="tool-icon postman" />
                                        <h5>Postman</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiNpm className="tool-icon npm" />
                                        <h5>NPM</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiMicrosoftword className="tool-icon msword" />
                                        <h5>Microsoft Word</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiMicrosoftexcel className="tool-icon excel" />
                                        <h5>Microsoft Excel</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiNetlify className="tool-icon netlify" />
                                        <h5>Netlify</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <SiVercel className="tool-icon vercel" />
                                        <h5>Vercel</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <img src="../Assets/cpanel.png" alt="cPanel" className="tool-img" />
                                        <h5>cPanel</h5>
                                    </div>
                                </Col>

                                <Col md={3} sm={6} className="mb-4">
                                    <div className="tool-card">
                                        <img src="../Assets/ovipanel.png" alt="Ovipanel" className="tool-img" />
                                        <h5>OVIpanel</h5>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>

                    {/* Experience Section  */}
                    <section id="experience" className="experience-section ">
                        <Container>
                            <h2 className="section-title text-center mb-5">Experience</h2>
                            <Row>
                                {/* Card 1 */}
                                <Col md={12} className="mb-4">
                                    <div className="experience-card">
                                        <div className="experience-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="experience-content">
                                            <h4>Software Developer</h4>
                                            <h6 className="company">ParNets Software India Pvt. Ltd. | Bangalore</h6>
                                            <span className="duration">Dec 2022 – Nov 2024</span>
                                            <h6 className="responsibility-title">Responsibilities: -</h6>
                                            <ul className="responsibilities">
                                                <li><FaCheckCircle className="point-icon" /> Built scalable and high-performing web applications using React.js with state management and REST API integration.</li>
                                                <li><FaCheckCircle className="point-icon" /> Partnered with UI/UX designers to deliver pixel-perfect, responsive interfaces.</li>
                                                <li><FaCheckCircle className="point-icon" /> Designed and implemented backend features with Node.js and MongoDB for full-stack functionality.</li>
                                                <li><FaCheckCircle className="point-icon" /> Optimized applications for performance, accessibility, and mobile-first design.</li>
                                                <li><FaCheckCircle className="point-icon" /> Collaborated with cross-functional teams to ensure seamless deployment and delivery.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                {/* Card 2 */}
                                <Col md={12} className="mb-4">
                                    <div className="experience-card">
                                        <div className="experience-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="experience-content">
                                            <h4>Junior Software Developer</h4>
                                            <h6 className="company">Canara Tech Labs Pvt. Ltd. | Kumta, Uttara Kannada</h6>
                                            <span className="duration">June 2022 – April 2023</span>
                                            <h6 className="responsibility-title">Responsibilities: -</h6>
                                            <ul className="responsibilities">
                                                <li><FaCheckCircle className="point-icon" /> Developed interactive web applications with HTML5, CSS3, Bootstrap, JavaScript, and React.js.</li>
                                                <li><FaCheckCircle className="point-icon" /> Coordinated with designers and QA teams to build responsive, user-centric designs.</li>
                                                <li><FaCheckCircle className="point-icon" /> Delivered enhancements, bug fixes, and feature updates aligned with client requirements.</li>
                                                <li><FaCheckCircle className="point-icon" /> Maintained Git-based version control for smooth team collaboration.</li>
                                                <li><FaCheckCircle className="point-icon" /> Prepared structured work plans and algorithms to improve project efficiency.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                {/* Card 3 */}
                                <Col md={12} className="mb-4">
                                    <div className="experience-card">
                                        <div className="experience-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="experience-content">
                                            <h4>Web Developer</h4>
                                            <h6 className="company">Veda Info systems | Kumta, Uttara Kannada</h6>
                                            <span className="duration">Jan 2020 – April 2022</span>
                                            <h6 className="responsibility-title">Responsibilities: -</h6>
                                            <ul className="responsibilities">
                                                <li><FaCheckCircle className="point-icon" /> Built modular, reusable UI components with React.js, JavaScript, HTML5, CSS3, and Bootstrap, improving development efficiency and consistency.</li>
                                                <li><FaCheckCircle className="point-icon" /> Enhanced website performance by reducing load time and optimizing client-side code.</li>
                                                <li><FaCheckCircle className="point-icon" /> Ensured seamless user experience across devices and browsers.</li>
                                                <li><FaCheckCircle className="point-icon" /> Partnered with QA teams to identify and resolve UI/UX issues before production release.</li>
                                                <li><FaCheckCircle className="point-icon" /> Incorporated client feedback to deliver tailored and user-friendly solutions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>

                                {/* Card 4 */}
                                <Col md={12} className="mb-4">
                                    <div className="experience-card">
                                        <div className="experience-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="experience-content">
                                            <h4>Junior Web Developer</h4>
                                            <h6 className="company">Electrob Technologies Pvt. Ltd. | Bangalore</h6>
                                            <span className="duration">Sep 2018 – Dec 2019</span>
                                            <h6 className="responsibility-title">Responsibilities: -</h6>
                                            <ul className="responsibilities">
                                                <li><FaCheckCircle className="point-icon" /> Developed static and mobile-responsive websites using HTML5, CSS3, and Bootstrap.</li>
                                                <li><FaCheckCircle className="point-icon" /> Assisted in delivering academic projects for college students and institutions.</li>
                                                <li><FaCheckCircle className="point-icon" /> Guided and supported internship students in completing their project assignments.</li>
                                                <li><FaCheckCircle className="point-icon" /> Performed cross-browser testing to maintain consistency across multiple platforms.</li>
                                                <li><FaCheckCircle className="point-icon" /> Built layouts and UI elements based on client and academic requirements.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Education Section  */}
                    <section id="experience" className="experience-section ">
                        <Container>
                            <h2 className="section-title text-center mb-5">Education</h2>
                            <Row>
                                {/* SSLC */}
                                <Col md={12} className="mb-4">
                                    <div className="education-card">
                                        <div className="education-icon">
                                            📘
                                        </div>
                                        <div className="education-content">
                                            <h4>S.S.L.C (Secondary School Leaving Certificate)</h4>
                                            <h6 className="institute">Government High School Bargi, Kumta, Uttara Kannada</h6>
                                            <span className="duration">2014 – 2015</span>
                                            <h6 className='grade'>63.52%</h6>
                                            <p>Successfully completed SSLC with strong academic performance.</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* Diploma */}
                                <Col md={12} className="mb-4">
                                    <div className="education-card">
                                        <div className="education-icon">
                                            💻
                                        </div>
                                        <div className="education-content">
                                            <h4>Diploma in Computer Science & Engineering</h4>
                                            <h6 className="institute">Government Polytechnic College Siddapura, Uttara Kannada</h6>
                                            <span className="duration">2015 – 2018</span>
                                            <h6 className='grade'>80%</h6>
                                            <p>Specialized in Computer Science fundamentals, programming, and web technologies.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>


                    </section>

                    {/* Certifications */}
                    <section>
                       <section id="certificates" className="certificates-section">
  <Container>
    <h2 className="section-title text-center mb-5">Certificates</h2>
    <Row>
      {/* Certificate 1 */}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
             📜
          </div>
          <div className="certificate-content">
            <h4>Certificate of Excellence in JavaScript OOP Master </h4>
            <h6 className="issuer">TechGig</h6>
            <span className="duration">July 2025</span>
            <p>
              <a href="https://drive.google.com/file/d/1ZyTEpqVMD-xvJiel0yWY2fyhyArhXflm/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

      {/* Certificate 2 */}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Containerized Applications on AWS </h4>
            <h6 className="issuer">Coursera</h6>
            <span className="duration">August 2023</span>
            <p>
              <a href="https://www.coursera.org/account/accomplishments/certificate/C7WJX44HYZLF" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

       {/* Certificate 3 */}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Certificate of Achievement </h4>
            <h6 className="issuer">Newton School</h6>
            <span className="duration">June 2023</span>
            <p>
              <a href="https://my.newtonschool.co/course/a75hx7fteu/certificate/ito7wej528jz/verify" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

      {/* Certificate 4*/}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Particpated in the coding challenge.</h4>
            <h6 className="issuer">Skillyst Techtopia</h6>
            <span className="duration">March 2023</span>
            <p>
              <a href="https://drive.google.com/file/d/1ZyTEpqVMD-xvJiel0yWY2fyhyArhXflm/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

      {/* Certificate 5*/}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Skill Validation Certification for HTML/CSS</h4>
            <h6 className="issuer">CutShort</h6>
            <span className="duration">Feb 2023</span>
            <p>
              <a href="https://drive.google.com/file/d/1Lg7fvXpis7z5Ok2sXpX_A1E_Zf4tg4zR/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

      {/* Certificate 6*/}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Skill Validation Certification for React.js</h4>
            <h6 className="issuer">CutShort</h6>
            <span className="duration">Feb 2023</span>
            <p>
              <a href="https://drive.google.com/file/d/1e8IxLMc18cso8CeOanCq9c3noFwaR1aG/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

      {/* Certificate 7*/}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Completion Certificate of Responsive Web Design</h4>
            <h6 className="issuer">freeCodeCamp</h6>
            <span className="duration">June 2023</span>
            <p>
              <a href="https://www.freecodecamp.org/certification/fcc94b763ae-700f-4806-8d5c-3be3560d72da/responsive-web-design" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

       {/* Certificate 8*/}
      <Col md={12} className="mb-4">
        <div className="certificate-card">
          <div className="certificate-icon">
            📜
          </div>
          <div className="certificate-content">
            <h4>Completing 7 days Free Bootcamp on Netfix Clone using HTML, CSS and JavaScript</h4>
            <h6 className="issuer">DevTown</h6>
            <span className="duration">Sep 2023</span>
            <p>
              <a href="https://drive.google.com/file/d/17yOTM_9ky5kSqaf5z1iG6uLLt5LfCzwT/view?usp=drive_link" target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      </Col>

      {/* Add more certificates similarly */}
    </Row>
  </Container>
</section>


                    </section>
                </Container>
            </section>
        </div>
    );
};

export default AboutMe;





