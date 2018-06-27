import React from 'react';
import { connect } from 'react-redux';
import ChatView from '../Component/ChatsView';
import { loadChatInfo } from '../Actions/ChatsAction';

class Chats extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.loadChats();
  }
  render(){
    const { chats } = this.props;
    return(
      <ChatView chats = {chats} />
    );

  }
};
const mapStateToProps = state => {
return ({
  chats: state.whatsAppState.chats,
});
}

const mapDispatchToProps = dispatch => ({
  loadChats: () => {
    dispatch(loadChatInfo());
  },
});

//export default Chats;

export default connect(mapStateToProps,mapDispatchToProps) (Chats);
