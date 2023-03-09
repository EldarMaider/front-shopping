import React, {useEffect} from 'react'
import './Message.css'
function Message({message,HideMessage}) {

 useEffect(() => {
  const timer = setTimeout(() => {
    HideMessage()
  }, 1500);
  return () => clearTimeout(timer);
}, []);

  return (
    <div className={`messageWrapper ${message.color}`}>
      <h3> {message.text} </h3>
      <button className="messageButton" onClick={()=>HideMessage()}> X </button>
    </div>
  )
}

export default Message
