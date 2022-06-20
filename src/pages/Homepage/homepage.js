import React, { Component, } from 'react'
import { ButtonComp } from '../../components'


export default class Hompage extends Component {
  constructor(props) {
    super(props)
    this.state ={
      count : 0,
      handleClick : this.handleClick.bind(this)
    }
  }

  handleClick (count){
    this.setState({
      count : count + 1
    })
    localStorage.setItem('count', this.state.count + 1);
  }

  componentDidMount() {
    let valueCount = Number(localStorage.getItem('count'));
    this.setState({
      count : valueCount ? valueCount : 0
    })
    console.log('didMounted')
  }
  render() {
    return (
      <div>
        Counter App
        <p>
          {this.state.count}
        </p>
        <ButtonComp type="submit" title="+" name="increase" onClick={()=>{this.handleClick(this.state.count)}} />
      </div>
    )
  }
}
