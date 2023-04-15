import React, { Component } from 'react'
import axios from 'axios'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import history from './../../test/history'
import './css/PdfTools.css'

const PDF_TOOLS_URL = process.env.REACT_APP_PDF_TOOLS_URL

const styleButtonBackHomepage = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

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
    console.log('PDF_TOOLS_URL = ', PDF_TOOLS_URL)
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
      <div style={{ background: '#ffffff', padding: 20 }}>
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
        <div style={{ padding: 10 }}>
          <button onClick={history.goBack} style={ styleButtonBackHomepage }> Back To Homepage</button>
        </div>
      </div>
    )
  }
}
