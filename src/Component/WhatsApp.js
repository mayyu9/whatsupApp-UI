import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chats from '../Containers/ChatsContainer';
import Calls from '../Containers/CallsContainer';
import Status from '../Containers/StatusContainer';

class TabComponent extends React.Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    console.log('comp: '+this.state.tabIndex);
    return (
      <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab>CAMERA</Tab>
          <Tab>CHATS</Tab>
          <Tab>STATUS</Tab>
          <Tab>CALL</Tab>
        </TabList>
        <TabPanel> CAMERA </TabPanel>
        <TabPanel> <Chats /> </TabPanel>
        <TabPanel> <Status /> </TabPanel>
        <TabPanel> <Calls /> </TabPanel>
      </Tabs>
    );
  }
}




export default TabComponent
