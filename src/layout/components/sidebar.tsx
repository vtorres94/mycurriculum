import React, { useState, useEffect } from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

export interface ISideBarProps {
    visible: boolean;
}
const SidebarExampleDimmed = (props: ISideBarProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
      setVisible(props.visible);
  }, [props.visible]);
  return (
    <Sidebar.Pushable as={Segment} atached={'top'} style={{ height: '150px', width: '150px', position: 'relative' }}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
        style={{ height: '150px', width: '150px', position: 'relative' }}
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
  )
}

export default SidebarExampleDimmed