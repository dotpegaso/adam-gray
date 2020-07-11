import React from 'react'
import {
  Container,
  Title,
  Content,
  ContentTitle,
  ContentDescription,
  ContentPreview,
  Wrapper,
} from './styles'
import IMAGES from '../../constants/images'

const ProjectIntrmodl = () => (
  <Container>
    <Title>The project</Title>
    <Content>
      <Wrapper>
        <ContentTitle>Mobile app</ContentTitle>
        <ContentDescription>
          Description of the project. Make metric security bolts. Our intended use and mission is to help keep components on your bicycle safe from opportunistic thievery. 
        </ContentDescription>
      </Wrapper>
      <ContentPreview src={IMAGES.PROJECT_INTRMODL_APP} alt="App preview" />
    </Content>
    <Content>
      <ContentPreview src={IMAGES.PROJECT_INTRMODL_WEB} alt="Web preview" small />
      <Wrapper>
        <ContentTitle>Web app</ContentTitle>
        <ContentDescription>
          Description of the project. Make metric security bolts. Our intended use and mission is to help keep components on your bicycle safe from opportunistic thievery.
        </ContentDescription>
      </Wrapper>
    </Content>
  </Container>
)

export default ProjectIntrmodl
