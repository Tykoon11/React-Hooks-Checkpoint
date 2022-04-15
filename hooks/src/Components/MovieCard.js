import React from 'react'

const MovieCard = ({movie}) => {
    const {title, description, posterURL, rating} = movie;
  return (
    <div style={{margin: "0 auto"}}>
      <div className="card" style={{width: '18rem'}}>
            <img src={posterURL} class="card-img-top" alt="hello"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Rating: {rating}/5</small>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
