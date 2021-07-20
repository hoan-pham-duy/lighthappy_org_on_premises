import React, { Component } from 'react'
import history from './../../test/history'
import ChatRoomTemplate from './components/ChatRoomTemplate'

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import awsconfig from './../../aws-exports'
import * as mutations from './../../graphql/mutations'
import * as queries from './../../graphql/queries'
import * as subscriptions from './../../graphql/subscriptions'

import './css/RealTimeChatRoom.css'

Amplify.configure(awsconfig)

const ROOM_NAME_DEFAULT = 'ROOM_DEFAULT'
const USER_NAME_DEFAULT = 'Guess'

class RealTimeChatRoom extends Component {
  handleInputChange (event) {
    console.log('Input is changed')
    this.setState({ messageToSend: event.target.value })
  }

  async getUserEmail () {
    const email = await Auth.currentAuthenticatedUser().then(function (user) {
      return user.attributes.email
    })
    return email
  }

  async handleButtonClick (event) {
    console.log('Button is clicked')
    const userName = await this.getUserEmail()
    console.log('userName = ', userName)
    const item = {
      room_name: ROOM_NAME_DEFAULT,
      user_name: userName,
      message: this.state.messageToSend
    }
    console.log('item = ', item)
    API.graphql(graphqlOperation(mutations.createChatRoom, { input: item }))
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
    const models = await API.graphql(graphqlOperation(queries.chatRoomsByDateCreated, { room_name: ROOM_NAME_DEFAULT, limit: 10, sortDirection: 'ASC' }))
    console.log('models = ', models)
    const items = models.data.ChatRoomsByDateCreated.items
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
  }

  state = {
    messageToSend: [],
    messageAll: [],
    currentUserName: USER_NAME_DEFAULT

  }

  async componentDidMount () {
    console.log('componentDidMount in RealTimeChatRoom is running')
    this.loadAllMessages()
    API.graphql(graphqlOperation(subscriptions.onCreateChatRoom))
      .subscribe({
        next: (event) => {
          console.log('New item is created')
          const item = event.value.data.onCreateChatRoom
          const updatedMessageAll = this.state.messageAll.concat(item)
          this.setState({ messageAll: updatedMessageAll })
        }
      })
  }

  render () {
    return (
      <div className="RealTimeChatRoom">
        <AmplifySignOut />
        <h1 className="Header">Realtime ChatRoom</h1>
        <ChatRoomTemplate messageAll={this.state.messageAll} userId={this.state.currentUserName} />
        {/* <TextArea data={this.state.messageAll} /> */}
        <div className="MessageAndSend">
          <input display="block" placeholder="Enter Message Here" onChange={this.handleInputChange}></input>
          <button onClick={this.handleButtonClick} id="SendAMessage"> Send A Message </button>
        </div>
        {/* <button onClick={this.handleClickGetMessage}> Get All Message</button> */}
        <button onClick={history.goBack} id="BackToHomePage" > Back To Homepage</button>
      </div>
    )
  }
}

export default withAuthenticator(RealTimeChatRoom)
