import React from 'react'
import Rating from './Rating'

const RatingFilter = ({onChange, count}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Search by Rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)

export default RatingFilter