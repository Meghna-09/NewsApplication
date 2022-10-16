import React from 'react'

export default function NewsItem(props) {
  return (
      <>
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 '>
      <div className="card">
  <img src={props.pic} height="200px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title " style={{height:"110px"}}>{props.title.slice(0,80)+"..."}</h5>
    <h6 style={{fontSize:"15px"}}>Source:{props.source}</h6>
    <h6 style={{fontSize:"15px"}}>Date:{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()+1}/${new Date(props.date).getFullYear()}`}</h6>
    <hr/>
    <p className="card-text" style={{height:"220px"}}>{props.description}</p>
    <a href={props.url} className="btn background text-light btn-sm mybtn">Read Full Article</a>
  </div>
</div>
      </div>

      
      </>
    )
  }

