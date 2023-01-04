
const toggleFavorite = (id:number)  => { 
       
        let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
        if(favorites.includes(id)){
            favorites = favorites.filter( movieId => movieId !== id)
        }else{
            favorites.push(id)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
 }

 const existMovieInFavorites = (id:number): boolean => { 
    if(typeof window === 'undefined') return false
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
  }

  const movies = (): number[] => {
        return JSON.parse(localStorage.getItem('favorites') || '[]')
  }


  const exportedFunctions = { 
    toggleFavorite, 
    existMovieInFavorites,
    movies
};
 
  export default exportedFunctions;
    