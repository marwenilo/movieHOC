import React, { Component } from 'react'
import CardList from './CardList'
import { movies } from "./data"
import NameFilter from './NameFilter.js'
import RatingFilter from './RatingFilter'
import Modal from './Modal'
import ShowLoading from './showLoading'

class CardContainer extends Component {
  state = {
    movies,
    nameFilter: '',
    minRatingFilter: 0,

  }

  // searchMovies = e => {
  //   this.setState({ nameFilter: e.target.value });
  // };
  //   onChangeName=(e)=>{
  //     this.setState({
  //         name:e.target.value
  //     })
  //     console.log(this.state.nom)
  //  }
  //  onChangeRating=(e)=>{
  //     this.setState({
  //         star:e.target.value
  //     })
  //  }
  //  onChangeImage=(e)=>{
  //    this.setState({
  //        img:e.target.value
  //    })
  //    console.log(this.state.nom)
  //  }
  //  addFilm=()=>{

  //    this.setState({
  //        movies:[...this.state.movies, {name:this.state.name,img:this.state.img,star:this.state.star}],
  //    })
  //   }
  addNewMovie = (name, img, star) => {
    this.setState({
      movies: this.state.movies.concat({ name, img, star })

    })
  }
  handleSearch = (input) => {
    this.setState({
      nameFilter: input
    })
  }

  render() {
    // const { nameFilter,movies } = this.state;
    const filtered = this.state.movies.filter(el => el.star >= this.state.minRatingFilter &&
      el.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()))
    return (
      <div className="cardContainer">
        <div className="header">
          <NameFilter
            handleSearch={this.handleSearch}
            b={this.searchMovies} />
          <Modal add={this.addNewMovie} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </div>
        <CardList movies={filtered} />

      </div>
    )
  }
};

// export default CardContainer;
export default ShowLoading(CardContainer);
