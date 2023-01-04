
import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '../../components/layout/Layout';
import { tmdbApi } from '../../api';
import { Movie, TmdbListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';

interface Props {
  movie: Movie
}


const MoviePage: NextPage<Props>= ({movie}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existMovieInFavorites(movie.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(movie.id)
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
    <Layout title={movie.original_title}>
      <Grid.Container css={{marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>  
          <Card isHoverable   css={{padding: '30px'}}>
                  <Card.Body>
                    <Card.Image
                         src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        //  objectFit="cover"
                         width="100%"
                         height={300}
                         alt="poster movie"
                    />
                  </Card.Body>
              </Card>  
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1>
                  {movie.original_title}
              </Text>
              <Text>
                  {movie.homepage}
              </Text>
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

      </Grid.Container>
    
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const {data} = await tmdbApi.get<TmdbListResponse>('/popular?api_key=b56055aca31a6f81a3ce19e3ab8b58b3')
  const paths = data.results.map( ({id}) => ({
    params: {id: `${id}`}
  }))
 
  return {
    paths,
    fallback: false, 

  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const {id} = params as {id: string}
  const {data} = await tmdbApi.get<Movie>(`/${id}?api_key=b56055aca31a6f81a3ce19e3ab8b58b3`)
 
return {
    props: {
        movie: data
    }
}
}

export default MoviePage