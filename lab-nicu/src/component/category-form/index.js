import React from 'react'



class CategoryForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name ? props.name : '',
      budget: props.budget ? props.budget : 0,
    }
    this.onHandleChange = this.onHandleChange.bind(this)
    this.onHandleComplete = this.onHandleComplete.bind(this)
  }
  
  onHandleChange(event){
    console.log(`${event.target.name} : ${event.target.value}`)
    this.setState({ [event.target.name]: event.target.value})
  }
  
  onHandleComplete(event){
    event.preventDefault()
    this.props.onComplete(Object.assign({}, this.state))
  }
  //Render
  render() {
    return (
      <form onSubmit={this.onHandleComplete}>
        <input
          name='name'
          type='text'
          value={this.state.name}
          onChange={this.onHandleChange}
          placeholder='Enter Name'
        />
        <input
          name='budget'
          type='number'
          value={this.state.budget}
          onChange={this.onHandleChange}
          placeholder='300'
        />
        <button type='submit'>
          {this.props.title}
        </button>
      </form>
    )
  }
}

export default CategoryForm