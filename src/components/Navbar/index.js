import React from 'react'
import { Nav, NavLink, NavbarContainer,Mode, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import Switch from '@mui/material/Switch';
import { darkTheme, lightTheme } from '../../utils/Themes';

const Navbar = ({currentTheme, setTheme}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mode,setMode] = React.useState("Dark")
  const theme = useTheme();
  const switchResult = (e)=>{
    if(e.target.checked === true){
      setTheme(darkTheme);
      setMode("Dark");
    }
    else{
      setTheme(lightTheme);
      setMode("Light");
    }
  }
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href='/' style={{ display: "flex", alignItems: "center",marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <Switch name='switch' defaultChecked onChange={(e)=>switchResult(e)}/>
          <Mode>{mode}</Mode>
        </ButtonContainer>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            <MobileLink>
            <div className='flex'>
              <Switch name='switch' onChange={(e)=>switchResult(e)}/>
            </div>
            </MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar