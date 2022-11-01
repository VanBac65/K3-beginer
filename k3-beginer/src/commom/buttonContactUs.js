import React, { Component } from 'react'
import '../style/commom/button.css'

export default class buttonContactUs extends Component {
  constructor() {
    super()
    this.state = {
      name: 'CONTACT US', check: true
    }
    this.btnClick = this.btnClick.bind(this)
  }

  btnClick() {
    this.setState({ name: 'DONE!!', check: false })
  }



  componentDidUpdate() {
    alert('DONE UP DATE!!')
  }

  componentDidMount() {
    console.log('Component DidMount')
  }

  render() {
    console.log('abc')
    console.log(this.state.check)

    let dom

    if (this.state.check) {
      dom = <ButtonContactUs2 />
    }

    return (
      
      <div className='btn-contact'>
        {console.log(123)}
        {dom}
        <button onClick={this.btnClick}>{this.state.name}</button>
      </div>

    )
  }
}

export class ButtonContactUs2 extends Component {
  componentWillUnmount() {
    alert('DONE UNMOUNT!!')
  }

  render() {
    return (
      <div>buttonContactUs</div>
    )
  }
}


