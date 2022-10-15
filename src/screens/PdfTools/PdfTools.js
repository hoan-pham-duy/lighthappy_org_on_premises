import React, { Component } from 'react'
import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import history from './../../test/history'
import './css/PdfTools.css'

const PDF_TOOLS_URL = 'https://r65qoto7x5.execute-api.ap-southeast-1.amazonaws.com/dev/mergepdf'

export default class FilesUploadComponent extends Component {
  componentDidMount () {
    loadProgressBar()
  }

  constructor (props) {
    super(props)

    this.onFileChange = this.onFileChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      imgCollection: ''
    }
  }

  onFileChange (e) {
    this.setState({ imgCollection: e.target.files })
  }

  onSubmit (e) {
    e.preventDefault()
    console.log('Start submit files')
    const formData = new FormData()
    for (const key of Object.keys(this.state.imgCollection)) {
      formData.append(key, this.state.imgCollection[key])
    }
    axios.post(PDF_TOOLS_URL, formData, { responseType: 'arraybuffer', mode: 'cors' })
      .then(response => {
        console.log('respose from axios = ', response)
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'Merged.pdf'
        link.click()
      })
  }

  render () {
    return (
      <div className="container">
        <h1 className="intro"> Merge Your PDF Files - As a gift for Light </h1>
        <div className="row merge">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit"> Merge Your Files!</button>
            </div>
          </form>
        </div>
        <button onClick={history.goBack}> Back To Homepage</button>
      </div>
    )
  }
}
