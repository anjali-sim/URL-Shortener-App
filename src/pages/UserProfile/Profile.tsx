import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container, SideBar, MainContent, Image, Name, Email } from './Profile.style'

const Profile:React.FC = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <SideBar>
          <Image />
          <Name>jjj</Name>
          <Email>hhh</Email>
          
          <h1>he;oob kdbm</h1>
        </SideBar>
        <MainContent>
        <h1>he;oob kdbm</h1>
        </MainContent>
      </Container>
    </div>
  )
}

export default Profile


