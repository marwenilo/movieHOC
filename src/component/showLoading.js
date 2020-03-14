import React, { Component } from 'react'



function ShowLoading(Component) {
  return function Loading(props) {
    return (props.loading) ? <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div> : <Component {...props} />
  }
}
export default ShowLoading