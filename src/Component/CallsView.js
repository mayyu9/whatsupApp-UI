import React from 'react';
import '../App.css';

const CallsView = (props) => {
  const finalCalls = props.calls;
  return(
    <div>
    {finalCalls ? finalCalls.map(data => {return<ul><li>{data}</li></ul>}): 'calls'}
    </div>
  );
};

export default CallsView;
