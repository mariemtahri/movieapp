import React, { Component , Prototypes} from 'react';
import './App.css';
import FilterName from './components/FilterName';
import MovieList from './components/MovieList';
import RatingFilter from './components/RaintingFilter';
const inception = {
                    id:1,
                    title: 'Inception', 
                    rating: 5, 
                    image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', 
                    year: 2010
                  }

const shawshank = {
                    id:2,
                    title: 'Shawshank Redeption',
                    year: 1994,
                    rating: 5
                  }
const wahtever = {
                   id:3,
                   title: 'Whatever',
                   rating: 2, 
                   year: 1900
                  }
const wahtever1 = {
                    id:4,
                    title: 'Whatever2',
                    rating: 5, 
                    year: 2009
                   }                               

const moviesToDisplay = [inception, shawshank,wahtever,wahtever1]
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
                  minRatingFilter:2,
                  movies: moviesToDisplay,
                  titleFilter:''
                 };
                }     
  addNewMovie (newMovie){
    return this.setState({
      movies:this.state.movies.concat(newMovie)
    });
  }
  getVisibleMovies(){
    return  this.state.movies.filter(el =>
                                          el.rating >= this.state.minRatingFilter &&
                                          el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim()))
  }

  render() {
    return (
      <div className='movie-app'>
        <header className='movie-app-header'>
        <FilterName 
                  value={this.state.titleFilter}
                  onChange={(newTitleFilter) => {
                    this.setState({
                       titleFilter:newTitleFilter
                    });
                  }}/>
        <RatingFilter 
                    count={this.state.minRatingFilter}
                    onChange={(newRaiting)=>{this.setState({minRatingFilter: newRaiting });
            }}/>
        </header>
        <main className='movie-app-main'>
           <MovieList 
              movies={this.getVisibleMovies()}
              onAddMovie={(newMovie)=>{this.addNewMovie(newMovie)}} 
              clsName="loader"/>
        </main>
      </div>
    );
  }
}

export default App;
