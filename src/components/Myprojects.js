import React, { useState, useEffect } from "react";
import "../styles/Myprojects.css"
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { TbBrandGithub } from "react-icons/tb";
import Aos from "aos";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Myprojects = () => {

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


  // Daily Dish 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Shuttle Smsh 
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // Roomyy Interior 
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // Student Database 
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // Instabuy Computers 
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  // Nestway Interiors 
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  // Tripgraam 
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  // Value pro 
  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  // Tecar2 
  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  // Unique square 
  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  // UI SOLUTION 
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);

  // Career Sprint 
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  // Motor Driving School 
  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);

  // Pandith Application 
  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const handleShow13 = () => setShow13(true);

  // ALX-Mart Application 
  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const handleShow14 = () => setShow14(true);

  // Apton Works Application 
  const [show15, setShow15] = useState(false);
  const handleClose15 = () => setShow15(false);
  const handleShow15 = () => setShow15(true);

  // Apton Works Application 
  const [show16, setShow16] = useState(false);
  const handleClose16 = () => setShow16(false);
  const handleShow16 = () => setShow16(true);

  // Golden Property Application 
  const [show17, setShow17] = useState(false);
  const handleClose17 = () => setShow17(false);
  const handleShow17 = () => setShow17(true);

  return (
    <div>
      <section className="project-section">
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

          <h2 className="section-title mb-4 fw-bold">My Projects</h2>

          {/* Project Cards Start */}
          <Row>

            {/* Daily Dish Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/dailydish-img1.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Daily Dish Web Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://dailydish.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Daily Dish is a Food Delivery Web Application designed to provide users...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Dailydish-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Shuttle Smash Championship Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/shuttlesmash-img.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Shuttle Smash Championship.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://shuttlesmash.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Shuttle Smash Championship is a Badminton Tournament Managemen...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow1()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Shuttle-smash-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Roomyy Interior Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/roomyy.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Roomyy Interior Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="http://roomyy.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Roomyy Interior Designing Application is designed to transform living spaces...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow2()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Roomyy-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Student Database Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/studentdatabse.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Student Database Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://students-database.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    This Student Database Web Application provides comprehensive...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow3()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Student-Database-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Instabuy Computers Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/instabuy.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Instabuy Computer Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://instabuycomputers.com/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    This is a Computers / Laptop Service Provider Web Application designed...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow4()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Insta-buy-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Nestway Interior Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/nestway.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Nestway Interior Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://nestwayinteriors.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    This is a Nestway Interiors Web Application Designed to Rede..
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow5()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Nestway-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Tripgraam Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/tripgraam.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Tripgraam Tourism Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://www.tripgraam.com/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Tripgraam is a Dedicated Tourism Platform designed to simplify the...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow6()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Tripgraam-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Value Pro Services Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/valuepro.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Value Pro Services Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://valueproservice.com/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    At Value Pro, we are committed to providing top-notch online computer...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow7()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/UC-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Techar2 Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/techar.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >TechAR² Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="http://techar2.com/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    TechAR² Technologies is a technology driven organization that is committed...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow8()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Techar2" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Unique Square Application Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/uniquesquare.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Unique Square Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://uniquesquare.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Unique Square is a dynamic and innovative solutions provider specia...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow9()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Unique-Square-website" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Unique Industrial Solutions Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/uisolution.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Unique Industrial Solutions.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="http://www.uisolutions.co.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Unique Industrial Solutions (UIS) is a trusted leader in the packaging indus...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow10()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/UI-Solution" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Career Sprint Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/careersprint.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Career Sprint Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <span className="live-dot flash"></span>
                      <span className="live-text">Live </span>
                    </div>
                    <div>
                      <a href="https://careersprint.in/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Career Sprint is an educational platform that provides guidance for st...
                  </div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <Button className="mt-2 mb-2" onClick={() => handleShow11()}>
                        Read More
                      </Button>
                    </div>
                    <div className="git-icon">
                      <a href="https://github.com/Sarita204/Career-Sprint" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Motor Driving School Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/driving-school.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >VM Driving School Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://dancing-melba-621995.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Driving-School-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    This application designed to streamline the operations of a motor driving sch...
                  </div>
                  <div className="d-flex w-100 mt-1 mb-2">
                    <Button
                      className="mt-2 mb-2 w-100 custom-width"
                      style={{ width: "-webkit-fill-available" }}
                      onClick={() => handleShow12()}
                    >
                      Read More
                    </Button>
                  </div>

                </div>
              </div>
            </Col>

            {/* Pandith Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/pooja-pandith.png"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Sri Pandith Ji Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://starlit-douhua-a91dda.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Pandith-website-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    A complete digital platform for booking and managing traditional Hin...
                  </div>
                  <div className="d-flex w-100 mt-1 mb-2">
                    <Button
                      className="mt-2 mb-2 w-100 custom-width"
                      style={{ width: "-webkit-fill-available" }}
                      onClick={() => handleShow13()}
                    >
                      Read More
                    </Button>
                  </div>

                </div>
              </div>
            </Col>

            {/* ALX-Mart Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/alx-mart.png"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >ALX-Mart Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://calm-beijinho-bcd77f.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/ALXMart-Frontend" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    A feature-rich e-commerce platform designed to provide a seamless on...
                  </div>
                  <div className="d-flex w-100 mt-1 mb-2">
                    <Button
                      className="mt-2 mb-2 w-100 custom-width"
                      style={{ width: "-webkit-fill-available" }}
                      onClick={() => handleShow14()}
                    >
                      Read More
                    </Button>
                  </div>

                </div>
              </div>
            </Col>

            {/* Apton Works Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/Apton.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Apton Works Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://apton-works.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Apton-Works-Project" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Apton Works is a trusted Web3 and Blockchain development company h...
                  </div>
                  <div className="d-flex w-100 mt-1 mb-2">
                    <Button
                      className="mt-2 mb-2 w-100 custom-width"
                      style={{ width: "-webkit-fill-available" }}
                      onClick={() => handleShow15()}
                    >
                      Read More
                    </Button>
                  </div>

                </div>
              </div>
            </Col>

            {/* Baladi Builders & Developers Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/baladi.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Baladi Builders & Developers.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://baladi-builder-and-construction.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Baladi-Project" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Baladi is a modern construction and architecture platform that showcase...
                  </div>
                  <div className="d-flex w-100 mt-1 mb-2">
                    <Button
                      className="mt-2 mb-2 w-100 custom-width"
                      style={{ width: "-webkit-fill-available" }}
                      onClick={() => handleShow16()}
                    >
                      Read More
                    </Button>
                  </div>

                </div>
              </div>
            </Col>

            {/* Golden Properties Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/goldenproperty.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Golden & Daksha Property.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://golden-and-daksha-property.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site fade-in-left" />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Golden-Property-Project" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    Golden Property Castle by CANH Infrastructure Ltd. offers residential pl...
                  </div>
                  <div className="d-flex w-100 mt-1 mb-2">
                    <Button
                      className="mt-2 mb-2 w-100 custom-width"
                      style={{ width: "-webkit-fill-available" }}
                      onClick={() => handleShow17()}
                    >
                      Read More
                    </Button>
                  </div>

                </div>
              </div>
            </Col>

          </Row>

          <hr style={{ backgroundColor: "#ccc", height: "2px", border: "none" }} />

          {/* Exercise projects Cards */}
          <div>
            <h2 className="section-title text-center mb-4 fw-bold">Exercise Projects</h2>
          </div>
          <Row>

            {/* React Calculator Application. Project Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/reactcalculatr.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >React Calculator Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://react-calculatr.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/React-calculator" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} React.js, JavaScript, Bootstrap, and CSS.
                  </div>
                </div>
              </div>
            </Col>

            {/* Redux To Do Application */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/Reduxtodoapp.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Redux To Do Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://reactredux-to-do-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Redux-ToDo-App" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} Redux, JavaScript, Bootstrap, and CSS.
                  </div>
                </div>
              </div>
            </Col>

            {/* Drag and Drop Application */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/draganddrop.png"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Drag and Drop Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://drag-and-drop-html-css-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Drag-and-Drop" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} HTML, CSS and JavaScript.
                  </div>
                </div>
              </div>

            </Col>

            {/* Text to Speech Converter. */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/texttovoice.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Text-To-Voice-Converter.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://text-to-voice-apps.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Text-to-Voice-Converter" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} HTML, CSS and JavaScript.
                  </div>
                </div>
              </div>
            </Col>

            {/* Netflix Clone Application */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/netflix.png"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Netflix Clone Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://movie-streaming-ui-clone.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Netflix_Clone" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} HTML, CSS and JavaScript.
                  </div>
                </div>
              </div>
            </Col>

            {/* Smoke Effect Text. */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/smokeeffect.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Smoke Effect Text.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://smoke-effect-text.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Smoke-Effect" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} HTML, CSS and JavaScript.
                  </div>
                </div>
              </div>
            </Col>

            {/* Analog Clock Application. */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/Analogclock.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Analog Clock Application.</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://analog-clockss.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Analog-Clock" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} HTML, CSS and JavaScript.
                  </div>
                </div>
              </div>
            </Col>

            {/* Hotel Welcome Card */}
            <Col md={3} sm={6} className="mb-4">
              <div className="project-card"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="3000">
                <img
                  src="../Assets/Anandhotel.jpg"
                  alt="Card"
                  className="card-img-top hover-zoom"
                />
                <div className="projects-body">
                  <div className="project-name" >Hotel Welcome Card</div>
                  <div className="d-flex justify-content-between mt-1 mb-2">
                    <div>
                      <a href="https://hotelmenu-card.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="navigate-to-site " style={{ fontSize: "22px" }} />
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Sarita204/Hotel_menu_card" target="_blank" rel="noopener noreferrer">
                        <TbBrandGithub className="navigate-to-github hithere" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="Project-details">
                    <span
                      style={{
                        backgroundColor: "#222",
                        color: "#00bcd4",
                        padding: "2px 6px",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Technologies Used:
                    </span>{" "} HTML, CSS and JavaScript.
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>

      </section>


      {/* Daily Dish modal  */}
      <Modal show={show} onHide={handleClose} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Daily Dish Web Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>Daily Dish is a Food Delivery Web Application designed to provide users with a seamless experience of browsing menus, placing orders, and getting their favorite meals delivered fresh and fast.</span> </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Shuttle Smash modal  */}
      <Modal show={show1} onHide={handleClose1} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Shuttle Smash Championship</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Shuttle Smash Championship is a Badminton Tournament Management Web Application designed to streamline the process of organizing and managing tournaments effortlessly. Whether you’re a player, organizer, or enthusiast, the platform provides a seamless experience tailored to your needs.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose1()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Roomyy Interior modal  */}
      <Modal show={show2} onHide={handleClose2} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Roomyy Interior Designing Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>Roomyy Interior Designing Web Application is designed to transform living spaces into stunning works of art with ease and convenience. Whether you’re revamping a single room or designing an entire home, the platform provides tailored solutions to match your style and needs. </span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose2()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Student Database modal  */}
      <Modal show={show3} onHide={handleClose3} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Student Database Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>This Student Database Web Application provides comprehensive course data and streamlined management solutions. Designed to simplify academic workflows, the platform serves as a one-stop solution for both students and administrators.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose3()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Instabuy Computers modal  */}
      <Modal show={show4} onHide={handleClose4} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Instabuy Computer Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>This is a Computers / Laptop Service Provider Web Application designed to offer hassle-free repair and maintenance solutions for all your computing needs. Whether it's a hardware issue, software troubleshooting, or routine maintenance, this platform connects you with expert technicians quickly and efficiently.</span> </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose4()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Nestway Interior Modal  */}
      <Modal show={show5} onHide={handleClose5} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Nestway Interior Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>This is a Nestway Interiors Web Application designed to redefine your living spaces with modern, elegant, and functional interior design solutions. Whether you're furnishing a new home or renovating your existing one, this platform simplifies the process from concept to completion.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose5()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Tripgraam Modal  */}
      <Modal show={show6} onHide={handleClose6} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Tripgraam Tourism Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Tripgraam is a dedicated tourism platform designed to simplify the travel experience for customers exploring India, with a special focus on the lush, picturesque landscapes of Munnar and Wayanad. The platform enables users to book curated travel packages, ensuring a seamless journey to these renowned destinations.</span> </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose6()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Value Pro Service Modal  */}
      <Modal show={show7} onHide={handleClose7} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Value Pro Services Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>  At Value Pro, we are committed to providing top-notch online computer services to individuals and businesses alike. With a team of skilled technicians and IT experts, we offer a comprehensive range of solutions tailored to address all your computer-related needs.</span> </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose7()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Techar2 Modal  */}
      <Modal show={show8} onHide={handleClose8} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>TechAR² Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> TechAR² Technologies is a technology driven organization that is committed to providing solutions to industries and enterprises. With a focus on utilizing future-ready technologies. We aim to deliver future-ready and forward-thinking digital solutions to our clients. The company follows the vision of delivering smart ideas with the advantage of AI/ML, Server, Networking Cloud technologies.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose8()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Unique Square Modal  */}
      <Modal show={show9} onHide={handleClose9} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Unique Square Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Unique Square is a dynamic and innovative solutions provider specializing in interior design, construction services, and real estate projects. With a focus on quality, precision, and client satisfaction, Unique Square transforms spaces into masterpieces and dreams into reality..</span> </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose9()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Unique Industrial Solutions Modal  */}
      <Modal show={show10} onHide={handleClose10} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Unique Industrial Solutions</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Unique Industrial Solutions (UIS) is a trusted leader in the packaging industry with over a decade of unparalleled expertise. Specializing in both domestic and export-oriented solutions, UIS is recognized as a dependable partner delivering end-to-end packaging solutions tailored to diverse industry needs.
                Our commitment to quality, innovation, and customer satisfaction has made UIS the preferred choice for businesses seeking reliable and customized packaging solutions. </span> </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose10()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Career Sprint Modal  */}
      <Modal show={show11} onHide={handleClose11} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Career Sprint Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> HTML5. CSS, Bootstrap and JavaScript </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Career Sprint is an educational platform that provides guidance for students seeking to pursue courses in fields such as Medical, Pharmacy, Nursing, Paramedical, Engineering, Management, and Law. The platform helps students identify suitable colleges and courses tailored to their academic profiles, career aspirations, and financial capabilities. Additionally, it offers resources for studying in India or abroad, with services including counseling, course and university selection, financial assistance, and pre-departure support. </span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose11()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Sri Venkateshwara Motor Driving School Modal  */}
      <Modal show={show12} onHide={handleClose12} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>VM Driving School Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>This application designed to streamline the operations of a motor driving school. The system allows students to register online, book driving classes, and track their progress. Admins can manage student records, schedule classes, assign instructors, and maintain payment details efficiently. the application ensures a smooth user experience for both students and administrators.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose12()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Pandith Application Modal  */}
      <Modal show={show13} onHide={handleClose13} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Sri Pandith Ji Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>A complete digital platform for booking and managing traditional Hindu services. The application helps devotees connect with pandits for ceremonies, homas, rituals, and poojas. Users can easily schedule events, view available services, and receive guidance for all types of spiritual needs. The system streamlines service management for pandits while offering devotees a smooth and reliable experience.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose13()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/*ALX-Mart Application Modal  */}
      <Modal show={show14} onHide={handleClose14} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>ALX-Mart Ecommerce Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details">
              <div> <b>Backend : -</b> Node.js </div>
            </div>

            <div className="project-details">
              <div> <b>Database : -</b> MongoDB </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span>A feature-rich e-commerce platform designed to provide a seamless online shopping experience. The application allows customers to browse products, add items to the cart, place secure orders, and make payments online. It includes product search, category filters, and personalized recommendations to enhance usability. Admins can manage product listings, track inventory, process orders, and handle customer queries efficiently. Built with a modern tech stack, ALX-Mart ensures scalability, responsive design, and smooth performance across devices.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose14()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Apton Works Modal  */}
      <Modal show={show15} onHide={handleClose15} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Apton Works Application</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Apton Works is a trusted Web3 and Blockchain development company, helping startups and enterprises unlock new potential with next-generation technologies. We specialize in smart contract development, blockchain solutions, cloud data analytics, and end-to-end production support across diverse sectors worldwide. </span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose15()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Baladi Builders and Construction Modal  */}
      <Modal show={show16} onHide={handleClose16} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Baladi Builders and Construction</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Baladi is a modern construction and architecture platform that showcases innovative building designs, spaces, and environments tailored for human occupancy and use.
                The website highlights ongoing projects, working processes, and scheduling features, making it easy for clients to connect and collaborate. Baladi emphasizes trust, quality, and efficiency.
                It features sections like Working Process, Best Quality, Advanced Equipment, and Modern Tools, demonstrating a professional approach to construction.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose16()}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Golden and Daksha Property Modal  */}
      <Modal show={show17} onHide={handleClose17} style={{ zIndex: "99999" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>Golden and Daksha Property</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="project-details">
              <div> <b>Frontend : -</b> React.js </div>
            </div>

            <div className="project-details mt-2">
              <div> <b>Description : -</b> <span> Golden Property Castle by CANH Infrastructure Ltd. offers residential plots near Mysuru–Hunsur NH 275, designed to meet modern lifestyle needs. The project is strategically located near Manuganahalli Checkpost, making it a preferred choice for Mysuru residents and investors With property values rapidly rising, Golden Property ensures profitable investment opportunities for buyers. Plots are DTCP & RERA approved, ensuring transparency and legal compliance. The website highlights features like smart layouts, future-ready planning, and excellent connectivity. Golden & Daksha Property focus on trust, top-notch services, and customer satisfaction as their core values.</span> </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose17()}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Myprojects
