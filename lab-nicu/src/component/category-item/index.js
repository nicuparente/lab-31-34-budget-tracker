import React from 'react'
import { connect } from 'react-redux'

import { categoryUpdate, categoryDestroy } from '../../action/category-actions'
import CategoryForm from '../category-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)
    this.onHandleDelete = this.onHandleDelete.bind(this)
  }

  onHandleDelete(e) {
    e.preventDefault()
    this.props.onDelete(this.props.category)
  }

  componentWillReceiveProps(props) {
    if (props.category)
      this.setState(props.category)
  }
  
  render() {
    console.log('__ITEM__', this.props)
    let { category } = this.props
    return (
      <div>
        <h1>{category.name}</h1>
        <h2>Budget: {category.budget}</h2>
        <button onClick={this.onHandleDelete}>Delete</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)