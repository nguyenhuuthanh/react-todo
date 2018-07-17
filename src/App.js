import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {JobForm, JobList, Footer} from './components/job'
import {addJob, generateId, findById, toggleJob, updateJob, removeJob} from './lib/jobHelper'
import {partial, pipe} from './lib/util'

class App extends Component {
  
  state = {
    jobs: [
      {id:1, name: 'Car', isApprove: true},
      {id:2, name: 'Food', isApprove: false},
      {id:3, name: 'Tour', isApprove: false}
    ],
    currentJob: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedJobs = removeJob(this.state.jobs, id)
    this.setState({jobs: updatedJobs})
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newJob = {id: newId, name: this.state.currentJob, isApprove: false}
    const updateJobs = addJob(this.state.jobs, newJob)
    this.setState({
      jobs: updateJobs,
      currentJob: '',
      errorMessage: ''
    })
  }

  handleToggle = (id) => {
    const getUpdatedJobs = pipe(findById, toggleJob, partial(updateJob, this.state.jobs))
    const updatedJobs = getUpdatedJobs(id, this.state.jobs)
    this.setState({jobs: updatedJobs})
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a job name'
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentJob: evt.target.value
    })
  }

  render() {
    const submitHandler = this.state.currentJob ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jobs Board</h1>
        </header>
        <div className="App-Job">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <JobForm handleInputChange={this.handleInputChange}
            currentJob = {this.state.currentJob}
            handleSubmit = {submitHandler}/>
          <JobList handleToogle={this.handleToggle} 
            jobs={this.state.jobs}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
