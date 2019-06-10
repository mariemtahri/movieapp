import React from 'react';
import MovieCard from './MovieCard';
const MovieList =({movies=[],onAddMovie=()=>{}},clsName)=>{
    return (
    <div className='movie-list'>
    <div className={clsName}></div>
       {
          movies.map( el =><MovieCard key={el.id} movie={el} />)
       }
      <div className='new-movie-card' onClick={()=>{onAddMovie({
                id:5,
                title: prompt('Titre of the movie: '),
                rating: Number(prompt('Rating movie: ')), 
                year: prompt('Year of movie: ')
               } )}}>+</div>
    </div>
   
    );
}
export default MovieList;