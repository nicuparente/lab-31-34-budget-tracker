import React from 'react'
import { connect } from 'react-redux'

import CategoryForm from '../category-form'

import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy,
} from '../../action/category-actions.js'


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>My Dashboard</h1>
        <CategoryForm title='Submit' onComplete={this.props.categoryCreate}/>
      </div>
    )
  }
}

//Mapstate
const mapStateToProps = (state) => {
  return {
    categories: state,
  }
}
//MapActions
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDestroy: (category) => dispatch(categoryDestroy(category)),
  }
}


//return connect
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)