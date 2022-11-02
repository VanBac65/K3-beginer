import React, { Component } from 'react'
import '../style/commom/button.css'

export default class buttonContactUs extends Component {
  constructor() {
    super()
    this.state = {
      name: 'CONTACT US', 
      check: true
    }
    this.btnClick = this.btnClick.bind(this)
  }
  btnClick() {
    this.setState({ name: 'DONE!!', check: false })
  }
  render() {
    return (
      
      <div className='btn-contact'>
        <button onClick={this.btnClick}>{this.state.name}</button>
      </div>

    )
  }
}