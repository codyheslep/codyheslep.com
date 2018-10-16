import React from 'react'
import { Header, Divider, Icon, Grid, Card, Item } from 'semantic-ui-react'

const Experience = () => {
  return (
    <div className='wcontent'>
      <Header as='h2' icon textAlign='center'>
      <Icon name="rocket" size="huge" circular color="red" />
    </Header>
    <Divider horizontal section as="h2">My Resume</Divider>
    <Card.Group itemsPerRow={2} className='linkedcards'>
      <Card raised>
        <Card.Content>
          <Card.Description>
          <Icon name="linkedin" size="big"/>
          www.linkedin.com/in/clheslep
        </Card.Description>
        </Card.Content>
        </Card>
        <Card raised>
        <Card.Content>
          <Card.Description>
          <Icon name="github" size="big"/>
          www.github.com/codyheslep
        </Card.Description>
        </Card.Content>
        </Card>
      </Card.Group>
    <Header as='h2' icon textAlign='center'>
      <Icon name="code" size="huge" circular color="red" />
    </Header>
    <Divider horizontal section as="h2">My Skills</Divider>
    <Grid stackable>
    <Grid.Row columns={3}>
    <Grid.Column>
      <Item>
      <Header as='h3'>Technical Skills:</Header>
        <Item.Content verticalAlign='middle'>Javascript</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Node.js</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Express</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>React</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Redux</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>HTML&CSS</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Java</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>PHP</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Photoshop</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
    </Grid.Column>
    <Grid.Column>
    <Item>
      <Header as='h3'>Soft Skills:</Header>
        <Item.Content verticalAlign='middle'>Communication</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Interpersonal</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Leadership</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Problem Solving</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Work Ethic</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Creativity</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Time Management</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Attention to Detail</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Modesty</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
    </Grid.Column>
    <Grid.Column>
    <Item>
      <Header as='h3'>Other Skills:</Header>
        <Item.Content verticalAlign='middle'>Cookie Making</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Dog Sitting</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Drink Making</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Drink Consuming</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Magic the Gathering</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon  disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Fifa 16</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Running</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon  disabled name="child" size="big"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Frozen Pizza Making</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Sleeping</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon   name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
    </Grid.Column>
    </Grid.Row>
    </Grid>

    <Header as='h2' icon textAlign='center'>
      <Icon name="graduation cap" size="huge" circular color="red" />
    </Header>
    <Divider horizontal section as="h2">My Education</Divider>


    <Header as='h2' icon textAlign='center'>
      <Icon name="lemon" size="huge" circular color="red" />
    </Header>
    <Divider horizontal section as="h2">My Experience</Divider>

    </div>
  )
}

export default Experience

{/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vSqTp-nFDB4sxoB03JyCZ9qlUIKscyYP5dI_JxvketJq6xBoW_1gLANrs_y3yuTsaeujIqLJhlB8R9A/pub?embedded=true" className="resume"></iframe> */}