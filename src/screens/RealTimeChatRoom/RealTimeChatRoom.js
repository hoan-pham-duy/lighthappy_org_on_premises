import React, { Component } from 'react'
import history from './../../test/history'
import ChatRoomTemplate from './components/ChatRoomTemplate'

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './../../aws-exports'
import * as mutations from './../../graphql/mutations'
import * as queries from './../../graphql/queries'
import * as subscriptions from './../../graphql/subscriptions'

import './css/RealTimeChatRoom.css'

Amplify.configure(awsconfig)

const ROOM_NAME_DEFAULT = 'ROOM_DEFAULT'
const USER_NAME_DEFAULT = 'Guess'

class RealTimeChatRoom extends Component {
  redirectToLogin (event) {
    window.open('/signin', '_blank')
  }

  handleInputChange (event) {
    console.log('Input is changed')
    this.setState({ messageToSend: event.target.value })
  }

  async getUserEmail () {
    try {
      const email = await Auth.currentAuthenticatedUser().then(function (user) {
        return user.attributes.email
      })
      return email
    } catch (error) {
      return USER_NAME_DEFAULT
    }
  }

  async handleButtonClick (event) {
    const userName = await this.getUserEmail()
    const item = {
      room_name: ROOM_NAME_DEFAULT,
      user_name: userName,
      content: this.state.messageToSend
    }
    console.log('item = ', item)
    API.graphql(graphqlOperation(mutations.createMessage, { input: item }))
      .then(d => console.log('message created :', d))
      .catch(err => {
        if (err.errors[0].data.id === this.id) {
          const d = err.errors[0].data.data
          this.canvas.loadSaveData(d)
        }
      })
    console.log('Send message Done')
  }

  async loadAllMessages () {
    const messageAll = []
    const models = await API.graphql(graphqlOperation(queries.messagesByDateCreated, { room_name: ROOM_NAME_DEFAULT, limit: 10, sortDirection: 'ASC' }))
    console.log('models = ', models)
    const items = models.data.MessagesByDateCreated.items
    for (const item of items) {
      messageAll.push(item)
    }
    const currentUserName = await this.getUserEmail()
    this.setState({ messageAll: messageAll, currentUserName: currentUserName })
    console.log("this.state['messageAll']")
    console.log(this.state.messageAll)
  }

  constructor (props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.loadAllMessages = this.loadAllMessages.bind(this)
    this.getUserEmail = this.getUserEmail.bind(this)
    this.redirectToLogin = this.redirectToLogin.bind(this)
  }

  state = {
    messageToSend: [],
    messageAll: [],
    currentUserName: USER_NAME_DEFAULT
  }

  async componentDidMount () {
    console.log('componentDidMount in RealTimeChatRoom is running')
    this.loadAllMessages()
    API.graphql(graphqlOperation(subscriptions.onCreateMessage))
      .subscribe({
        next: (event) => {
          console.log('New item is created')
          const item = event.value.data.onCreateMessage
          const updatedMessageAll = this.state.messageAll.concat(item)
          this.setState({ messageAll: updatedMessageAll })
        }
      })
  }

  render () {
    return (
      <div className="RealTimeChatRoom">
        <button onClick={this.redirectToLogin}>Click to SignIn/SignOut to Display your name in ChatRoom</button>
        <h1 className="Header">Realtime ChatRoom</h1>
        <h2 className="Greeting"> Hi, {this.state.currentUserName}</h2>
        <ChatRoomTemplate messageAll={this.state.messageAll} userId={this.state.currentUserName} />
        <div className="MessageAndSend">
          <input display="block" placeholder="Enter Message Here" onChange={this.handleInputChange}></input>
          <button onClick={this.handleButtonClick} id="SendAMessage"> Send A Message </button>
        </div>
        <button onClick={history.goBack} id="BackToHomePage" > Back To Homepage</button>
      </div>
    )
  }
}

export default RealTimeChatRoom
