
import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '../../components/layout/Layout';
import { tmdbApi } from '../../api';
import { Movie, TmdbListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';
import { YoutubeMovie } from '../../utils/youtubeMovie';



// interface Props {
//   movie: Movie
// }


  
  const MoviePage: NextPage<any>= (movie) => {
  

  // console.log(movie);


  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existMovieInFavorites(movie.movie.id))
  const [playYoutube, setPlayYoutube] = useState(false)

  const onTogglePlay = () => {
    setPlayYoutube(!playYoutube)
  }

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(movie.movie.id)
    setIsInFavorites(!isInFavorites)
    if(isInFavorites) return
      confetti({
        zIndex: 999,
        particleCount: 200,
        spread:160,
        angle: -100,
        origin: {
          x: 0.5,
          y: 0.3
        }
      })
  }


  return(
    <Layout title={movie.movie.original_title}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>  
          <Card isHoverable   css={{padding: '30px'}}>
                  <Card.Body>
                    <Card.Image
                         src={`http://image.tmdb.org/t/p/w300/${movie.movie.poster_path}`}
                        //  objectFit="cover"
                         width="100%"
                         height={400}
                         alt="poster movie"
                    />
                  </Card.Body>
              </Card>  
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
            <Grid>
              <Text h3>
                  {movie.movie.original_title}
              </Text>
              <Text>
                  {movie.movie.overview}
              </Text>
              <Text>
                 Likes {movie.movie.vote_average} 
              </Text>
        </Grid>
              <Button
                color="gradient"         
                ghost={!isInFavorites}
                onPress={onToggleFavorite}
                >
                  {isInFavorites  ? 'Incluido en mi lista' : 'Añadir a mi lista'}
                
                </Button>
            </Card.Header>
          </Card>
        </Grid>
        <Grid.Container gap={2} justify='flex-start'>
                <Grid>
                {playYoutube ? (
                           <YoutubeMovie videoId={movie.trailer[0].key}/>
              
                  ): (
                    <Text h1></Text>
                    )}         
                </Grid>
                <Grid justify="flex-end">
                        <Button
                        color="gradient"         
                        ghost={!playYoutube}
                        onPress={onTogglePlay}
                        >
                          {playYoutube  ? 'X Cerrar' : 'Ver Trailer'}             
                        </Button>
                </Grid>
        </Grid.Container>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const API_KEY = process.env.API_KEY
  const {data} = await tmdbApi.get<TmdbListResponse>(`/popular?api_key=${API_KEY}`)
  const paths = data.results.map( ({id}) => ({
    params: {id: `${id}`}
  }))
 
  return {
    paths,
    fallback: false, 

  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const API_KEY = process.env.API_KEY
  const {id} = params as {id: string}
  const {data} = await tmdbApi.get<Movie>(`/${id}?api_key=b56055aca31a6f81a3ce19e3ab8b58b3`)
  const resp = await tmdbApi.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}` )

    const trailer = resp.data.results.filter(
      (video:any) => video.name === "Official Trailer"
      )
     
return {
    props: {
        movie: data,
        trailer: trailer      
    }
}
}
// export const getStaticProps: GetStaticProps = async ({params}) => {
//   const {data} = await axios(`https://api.themoviedb.org/3/movie/76600/videos?api_key=b56055aca31a6f81a3ce19e3ab8b58b3` )
//   const trailer = data.results.filter(
//     (video:any) => video.name === "Official Trailer"
//     )
  
// return {
//     props: {
//         trailer: trailer,
            
//     }
// }
// }

// const fetchMovie = async (setTrailer:any) => {
 
//   const movieTrailer = data.results.filter(
//     (video:any) => video.name === "Official Trailer"
//     )
    
//     return setTrailer( movieTrailer[0])
    
//   }
 





export default MoviePage