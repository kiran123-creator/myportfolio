import React, { Component } from 'react';
import Portfolio from './Portfolio/Portfolio';
import './App.css'
import {about} from '../Constant/About';
import {skills} from '../Constant/Skills';
import {projects} from '../Constant/Projects'
import {experience} from '../Constant/Experiences';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      selectedSection:'',
      selectedHeading:'',
      selectedQuote:'',
      about:null,
      skills:null,
      projects:null,
      experience:null
    }
  }

  componentDidMount(){
    this.setState({
      selectedSection:'about',
      about,skills,projects,experience,
      selectedHeading:about.heading,
      selectedQuote:about.quote
    })
  }

  handleSelectionClick=(sectionName)=>{
    this.setState({
      selectedSection:sectionName,
      selectedHeading:this.state[sectionName].heading,
      selectedQuote:this.state[sectionName].quote
    })
  }
  render(){
    return(
      <div className='App'>
        <Portfolio
        about={this.state.about}
        skills={this.state.skills}
        projects={this.state.projects}
        experience={this.state.experience}
        selectedHeading={this.state.selectedHeading}
        selectedSection={this.state.selectedSection}
        selectedQuote={this.state.selectedQuote}
        handleSelectionClick={this.handleSelectionClick}
        />
      </div>
    )
  }
}
