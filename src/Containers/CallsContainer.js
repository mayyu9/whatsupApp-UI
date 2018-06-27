import React from 'react';
import { connect } from 'react-redux';
import CallsView from '../Component/CallsView';
import { loadCallsInfo } from '../Actions/CallsAction';

class Calls extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.loadCalls();
  }
  render(){
    const { calls } = this.props;
    return(
      <CallsView calls = {calls} />
    );

  }
};
const mapStateToProps = state => {
  console.log('statetoprops: '+JSON.stringify(state));
return ({
  calls: state.whatsAppState.calls,
});
}

const mapDispatchToProps = dispatch => ({
  loadCalls: () => {
    dispatch(loadCallsInfo());
  },
});

export default connect(mapStateToProps,mapDispatchToProps) (Calls);
