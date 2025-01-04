import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Explore Wolkite",
      description: "A MERN stack project showcasing the cultural and traditional heritage of the Gurage Zone.",
      imgUrl: projImg1,
    },
    {
      title: "YouTube Clone",
      description: "A React-based application replicating core features of YouTube, including video management.",
      imgUrl: projImg2,
    },
    {
      title: "Grocery App",
      description: "An Python-powered app designed for seamless interaction with a backend API.",
      imgUrl: projImg3,
    },
    {
      title: "BMI Calculator",
      description: "A desktop application built for accurate BMI calculations using Java.",
      imgUrl: projImg1,
    },
    {
      title: "Temperature Converter",
      description: "A Java-based utility for converting between different temperature units.",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio built with React to showcase my skills and projects.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I've worked on, showcasing my skills in software development, web design, and UI/UX engineering. Each project highlights my dedication to creating functional and visually appealing solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This tab is reserved for showcasing additional ongoing or upcoming projects that highlight my expanding expertise.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Find more information about my collaborations and contributions to open-source projects here.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
