import { GetStaticProps } from 'next'
import { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Result, TmdbListResponse } from '../interfaces';
import { Grid} from '@nextui-org/react';
import { tmdbApi } from '../api';
import { MovieCard } from '../components/Movie';



interface Props {
 movies: Result[];
}

const Home: NextPage<Props> =({movies}) => {

// console.log(movies)

  return (
    
      <Layout title='NETFLIX - List Movies'>
          <Grid.Container gap={2} justify='flex-start'>
          {movies.map( (movie) => (
            <MovieCard
                  key={movie.id}
                  movie={movie}
            />
            ))}
        
          </Grid.Container>
      </Layout>
   
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
// With Fetch
  // const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=b56055aca31a6f81a3ce19e3ab8b58b3')
  // const data = await response.json()
  // console.log(data)

  // Version Axios 5.0 No Actual Verison
  const {data} = await tmdbApi.get<TmdbListResponse>('/popular?api_key=b56055aca31a6f81a3ce19e3ab8b58b3')
  
  const movies: Result[] = data.results.map( (movi, i) => ({
    ...movi,
    id: movi.id,
    title: movi.original_title,
    img: movi.backdrop_path
    // img: `https://api.themoviedb.org/3/movie/${movi.id}/images?api_key=b56055aca31a6f81a3ce19e3ab8b58b3&language=en-US`
  }))
 

  return {
    props: {
      movies
    }
  }




  //ORIGINAL
  // Version Axios 5.0 No Actual Verison
  // const {data}= await pokeApi.get<Pokemon>('/pokemon?limit=151')
  // const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
  //   ...poke,
  //   id: i+1,
  //   img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  // }))

  // return {
  //   props: {
  //     pokemons: pokemons
  //   }
  // }

  // return{
  //   props:{

  //   }
  }


export default Home


//API KEY
// b56055aca31a6f81a3ce19e3ab8b58b3



// API TOKEN
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTYwNTVhY2EzMWE2ZjgxYTNjZTE5ZTNhYjhiNThiMyIsInN1YiI6IjYzYjI4N2VhNTc1MzBlMDA4NTAyMzM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bsrcT-vC1ogHnuVAW-Jtg2WI1cGKM5H2mrV2PG3DIG8