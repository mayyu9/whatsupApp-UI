import React from 'react';
import '../App.css';

const ChatView = (props) => {
  const finalChats = props.chats;
  return(
    <div>
    {finalChats ? finalChats.map(data => {return<ul><li>{data}</li></ul>}): 'chats'}
    </div>
  );
};

export default ChatView;
