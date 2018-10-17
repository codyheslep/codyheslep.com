import React from 'react'
import { Menu, Image, Button, Sticky, Segment, Header,  Icon, Sidebar, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    state = {
      visible: false
    }

  handleButtonclick () {
    console.log("click", this.state.visible)
    this.setState({visible: !this.state.visible})
    console.log("click", this.state.visible)
  }

  handleSidebarHide = () => this.setState({visible: false})

  render() {
    return (
      <div>
        <Button className="menubutton" onClick={this.handleButtonClick}>Menu</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={this.state.visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Navbar

// <Sidebar.Pushable as={Segment}>
//       <Sidebar as={Menu} animation='overlay' icon='labeled' vertical visible width='wide'>
//       <Menu icon vertical>
//           <Menu.Menu>
//             < Menu.Item
//               as={Link}
//               name="home"
//               to="/"
//               //content="my story"
//             >
//             <Icon name="home" size="huge" color="yellow" />
//             </Menu.Item>
//             < Menu.Item
//               as={Link}
//               name="projects"
//               to="/media"
//               //content="projects"
//             >
//             <Icon name="lightbulb" size="huge" color="yellow" />
//             </Menu.Item>
//             < Menu.Item
//               as={Link}
//               name="experience"
//               to="/experience"
//               //content="experience"
//             >
//             <Icon name="rocket" size="huge" color="yellow" />
//             </Menu.Item>
//             < Menu.Item
//               as={Link}
//               name="contact"
//               to="/contact"
//               //content="contact"
//             >
//             <Icon name="pencil" size="huge" color="yellow" />
//             </Menu.Item>
//           </Menu.Menu>
//         </Menu>
//         </Sidebar>
//         </Sidebar.Pushable>
//         <Divider hidden />
