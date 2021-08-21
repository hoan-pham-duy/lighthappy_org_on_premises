import React, { Component } from 'react'

import Amplify from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsconfig from './../../aws-exports'

Amplify.configure(awsconfig)
class SignIn extends Component {
  redirectToRealTimeChatRoom (event) {
    window.location.href = '/real-time-chat-room'
  }

  constructor (props) {
    super(props)
    this.redirectToRealTimeChatRoom = this.redirectToRealTimeChatRoom.bind(this)
  }

  render () {
    return (
      <div>
        <AmplifySignOut />
        <button onClick={this.redirectToRealTimeChatRoom}> Comeback to Realtime ChatRoom</button>
      </div>
    )
  }
}

export default withAuthenticator(SignIn)
