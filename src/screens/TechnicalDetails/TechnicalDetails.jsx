import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import history from '../../test/history'

import './assets/css/TechnicalDetails.css'

export default class TechnicalDetails extends Component {
  state = {
    data: [
      {
        usage: 'Framework',
        tools: 'AWS Amplify',
        note: 'https://aws.amazon.com/amplify/'
      },
      {
        usage: 'Front-end',
        tools: 'ReactJS',
        note: ''
      },
      {
        usage: 'Back-end',
        tools: 'AWS Lambda',
        note: 'Coding in Python'
      },
      {
        usage: '',
        tools: 'AWS AppSync',
        note: 'DynamoDB with GraphQL with realtime subscription'
      },
      {
        usage: '',
        tools: 'AWS Cognito',
        note: 'Authenitication'
      },
      {
        usage: 'Configuration Management',
        tools: 'AWS CloudFormation',
        note: 'Infrastructure as Code (IaC)'
      },
      {
        usage: 'CI/CD',
        tools: 'Bitbucket Pipelines',
        note: 'Run Testing and Deploy to AWS'
      },
      {
        usage: 'Micro Services',
        tools: 'AWS Lambda',
        note: 'Run Testing and Deploy to AWS'
      },
      {
        usage: 'Collabration / Agile Scrum',
        tools: 'JIRA Software',
        note: ''
      },
      {
        usage: 'Monitoring',
        tools: 'AWS CloudWatch',
        note: ''
      },
      {
        usage: 'Project Management',
        tools: 'JIRA',
        note: ''
      },
      {
        usage: 'Git Repository',
        tools: 'Bitbucket',
        note: ''
      }
    ]
  }

  render () {
    return (
      <div className="ts-container">
        <div className="ts-header">Technical Stack of HappyDev.tk</div>
        <div className="ts-content">
        <BootstrapTable data={this.state.data}>
          <TableHeaderColumn dataField="usage" isKey>Usage</TableHeaderColumn>
          <TableHeaderColumn dataField="tools" >Tools</TableHeaderColumn>
          <TableHeaderColumn dataField="note">Note</TableHeaderColumn>
        </BootstrapTable>
        </div>
        <div className="ts-footer">
          <button className="ts-buttonBack" onClick={history.goBack}> Back To Homepage</button>
        </div>
      </div>
    )
  }
}
