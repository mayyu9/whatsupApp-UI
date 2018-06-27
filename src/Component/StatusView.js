import React from 'react';
import '../App.css';

const StatusView = (props) => {
  //const finalChats = createList(props.chats);
  const finalStatus = props.status;
  //debugger;
  console.log('status: '+JSON.stringify(finalStatus)+' '+Array.isArray(props.status));
  // console.log(finalChats.map(x => x));
  return(
    <div>
    {finalStatus ? finalStatus.map(data => {return<ul><li>{data}</li></ul>}): 'Status'}
    </div>
  );
};

export default StatusView;
