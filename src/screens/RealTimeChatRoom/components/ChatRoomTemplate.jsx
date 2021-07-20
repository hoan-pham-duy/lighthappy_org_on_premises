import React from 'react'
import PropTypes from 'prop-types'

import './ChatRoom.css'
// import useChat from '../useChat'
function convertToDisplayMessage (messageAllRemote, userId) {
  const messages = []
  for (const messageRemote of messageAllRemote) {
    console.log('messageRemote = ', messageRemote)
    console.log('userId = ', userId)
    const message = {}
    if (messageRemote.user_name === userId) {
      message.ownedByCurrentUser = true
      console.log('message.ownedByCurrentUser = ', message.ownedByCurrentUser)
    }
    message.body = messageRemote.user_name + ':\t\t\t' + messageRemote.message
    messages.push(message)
  }
  return messages
}
const ChatRoomTemplate = (props) => {
  console.log('props of ChatRoomTemplate = ', props)
  // const { roomId } = props.match.params
  // const { messages, sendMessage } = useChat(roomId)
  const messageAllRemote = props.messageAll
  console.log('messageAllRemote = ', messageAllRemote)
  // const roomId = 'default'
  // const messages = [{ 'ownedByCurrentUser': true, 'body': 'helo from current user' },
  // { 'ownedByCurrentUser': false, 'body': 'helo from other user' },
  // { 'ownedByCurrentUser': false, 'body': 'helo from other user2' }]
  const messages = convertToDisplayMessage(messageAllRemote, props.userId)
  console.log('message = ', messages)

  // const sendMessage = 'zz'
  // const [newMessage, setNewMessage] = React.useState('')

  // const handleNewMessageChange = (event) => {
  //   setNewMessage(event.target.value)
  // }

  // const handleSendMessage = () => {
  //   sendMessage(newMessage)
  //   setNewMessage('')
  // }

  return (
    <div className='chat-room-container'>
      {/* <h1 className='room-name'>Room: {roomId}</h1> */}
      <div className='messages-container'>
        <ol className='messages-list'>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
                }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

ChatRoomTemplate.propTypes = {
  messageAll: PropTypes.any,
  userId: PropTypes.any
}

export default ChatRoomTemplate
