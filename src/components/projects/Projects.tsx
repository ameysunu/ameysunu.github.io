import React, { useState, useEffect } from "react";
import Fadeup from "../../models/fadeup";
import Head from "./Head";
import "./Projects.css";
import { Col, Container, Row, Spinner } from "react-bootstrap";
// @ts-ignore
import Footer from "./Footer";
import { retrieveGitProjects, projectImagesFromFirebase } from "./GitProjects";
import { SiGithub } from "react-icons/si";


function Projects() {

  interface Project {
    id: number;
    name: string;
    description: string;
    language: string;
    svn_url: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  useEffect(() => {
    const username = 'ameysunu';

    retrieveGitProjects(username)
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false);
      });

    async function fetchImage() {
      const promises = Array.from({ length: 30 }, (_, index) => index + 1)
        .map(async (randomNumber) => {
          const imageNumber = `${randomNumber}`;
          const url = await projectImagesFromFirebase(imageNumber);
          return url;
        });

      const urls = await Promise.all(promises);
      setImageUrl(urls);

    }

    fetchImage();

  }, []);



  return (
    <div>
      <Head />
      <Fadeup>
        <div className="project-container">
          <Container>
            <Row>
              <Col md="auto">
                <div className="title" style={{ fontSize: "80px" }}>
                  Projects.
                </div>
              </Col>
              <Col>
                <div className="project-content ">
                  <p style={{ fontFamily: "Sans-Bold", fontSize: "30px" }}>
                    Idea Creation
                  </p>
                  An idle brain is the devil’s workshop. Here are my workshop items:
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="auto"></Col>
            </Row>
          </Container>

          {loading ? (
            <Spinner animation="grow" />
          ) : (
            <Container>
              <Row>
                {imageUrl.length > 0 ? (
                  projects.map((project, index) => (
                    <Col key={project.id} className="project-box mb-3 mx-2">
                      <img src={imageUrl[index]} alt={project.name} width="auto" height="150" className="center-img-proj" />
                      <br />
                      <p style={{ fontSize: "25px", fontFamily: "Sans-Bold" }}>
                        {project.name}
                      </p>
                      {project.language}
                      <br />
                      <a href={project.svn_url}>
                        <SiGithub className="img-size" />
                      </a>
                      <br />
                    </Col>
                  ))
                ) : (
                  <p>Loading...</p>
                )}

                <br />
              </Row>
            </Container>
          )}
        </div>
      </Fadeup>
      <Footer />
    </div>
  );
}

export default Projects;
