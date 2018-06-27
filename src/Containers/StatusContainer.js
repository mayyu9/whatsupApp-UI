import React from 'react';
import { connect } from 'react-redux';
import StatusView from '../Component/StatusView';
import { loadStatusInfo } from '../Actions/StatusAction';

class Status extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.loadChats();
  }
  render(){
    const { status } = this.props;
    return(
      <StatusView status = {status} />
    );

  }
};
const mapStateToProps = state => {
return ({
  status: state.whatsAppState.status,
});
}

const mapDispatchToProps = dispatch => ({
  loadChats: () => {
    dispatch(loadStatusInfo());
  },
});

//export default Chats;

export default connect(mapStateToProps,mapDispatchToProps) (Status);
