import React from 'react'
import PropTypes from 'prop-types'

import './ChatRoom.css'

function convertToDisplayMessage (remoteMessages, userId) {
  const messages = []
  for (const remoteMessage of remoteMessages) {
    const message = {}
    if (remoteMessage.user_name === userId) {
      message.ownedByCurrentUser = true
    }
    message.body = remoteMessage.updatedAt.slice(0, remoteMessage.updatedAt.length - 5) + ':\t\t\t' + remoteMessage.user_name + ':\t\t\t' + remoteMessage.content
    messages.push(message)
  }
  return messages
}

const ChatRoomTemplate = (props) => {
  const remoteMessages = props.messageAll
  console.log('remoteMessages = ', remoteMessages)
  const messages = convertToDisplayMessage(remoteMessages, props.userId)

  return (
    <div className='chat-room-container'>
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
