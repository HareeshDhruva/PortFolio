import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('Websites');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
       
          {toggle === 'Websites' ?
            <ToggleButton value="web app" onClick={() => setToggle('')}>Hide Projects</ToggleButton>
            :
            <ToggleButton active value="Websites" onClick={() => setToggle('Websites')}>Show Projects</ToggleButton>
          }
         
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'Websites' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects