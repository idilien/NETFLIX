import { useEffect, useState } from 'react';
import { Layout } from "../../components/layout"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from '../../utils';;
import { FavoriteMovies } from '../../components/Movie';


const movies = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

const FavoritesPage= () => {
  const [favoriteMovies, setFavoriteMovies] = useState<number[]>([])
  
  useEffect(() => {
      setFavoriteMovies(localFavorites.movies() )
  }, [])



  return (
        <Layout title="NETFLIX - Mi Lista">
          {favoriteMovies.length === 0
           ? (<NoFavorites/>)
           :(<FavoriteMovies movies={favoriteMovies}/>)}
        </Layout>
)
}



export default FavoritesPage
