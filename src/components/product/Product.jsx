import React from 'react'

export default function Product(props) {
  return (
    <div className="col-md-4">
    <div className="card">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  )
}
