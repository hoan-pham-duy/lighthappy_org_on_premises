import React from 'react'
import TextArea from './TextArea'

class FileInputTextArea extends React.Component {
  state = { data: '' }
  constructor (props) {
    super(props)
    this.changeState = this.changeState.bind(this)
    this.fileInput = React.createRef()
  }

  changeState = () => {
    let fileNames = ''
    const files = this.fileInput.current.files
    for (let i = 0; i < files.length; i++) {
      fileNames += files[i].name + '\n'
    }
    this.setState({
      data: fileNames
    })
  };

  render () {
    return (
      <div>
        <input type="file" ref={this.fileInput} onChange={this.changeState} multiple />
        <TextArea data={this.state.data} />
      </div>
    )
  }
}

export default FileInputTextArea
