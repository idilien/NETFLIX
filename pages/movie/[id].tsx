
import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Grid, Text, Link, Row, Col } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '../../components/layout/Layout';
import { tmdbApi } from '../../api';
import { Movie, TmdbListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';
import { YoutubeMovie } from '../../utils/youtubeMovie';
import  axios  from "axios"

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
      
              <Grid.Container gap={5} css={{marginTop: '5px'}} justify="space-around" >
              <Grid  sm={12} md={8} >  
                  <Card isHoverable >     
                  <Card.Body>
                          <Card.Image 
                              src={`http://image.tmdb.org/t/p/w300/${movie.movie.poster_path}`}
                              objectFit='contain'
                              width="100%"
                              height="100%"
                              alt="poster movie"
                              />                              
                              </Card.Body>       
                    </Card>         
              <Grid  css={{marginTop: '50px'}}>
                    <Text h2   css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
                        {movie.movie.original_title}
                    </Text>
                    <Text h5 css={{marginTop: '30px'}}>
                        {movie.movie.overview}
                    </Text>
                    <Text h5 size={20} css={{marginTop: '30px'}}>
                        Fecha Estreno: {movie.movie.release_date} 
                    </Text >
                    {/* <Text h5 size={20} css={{marginTop: '30px', marginBottom:'0'}}>
                        Productoras: 
                        </Text>
                        <Text>                 
                        {movie.movie.production_companies[0].name} 
                    </Text >
                          {movie.movie.production_companies[1].name}  */}

            
                    <Text h5 size={20} css={{marginTop: '30px', marginBottom:'0'}}>
                            Web Oficial:
                    </Text>
                    <Text>
                            <Link color="success" href= {movie.movie.homepage} >
                              {movie.movie.homepage} 
                              </Link>                 
                    </Text>
                </Grid> 
              </Grid>
              </Grid.Container>

              <Grid.Container gap={2} justify="space-around" alignItems='center'>
                      <Grid >
                              <Grid>
                              {playYoutube && 
                                <YoutubeMovie videoId={movie.trailer[0].key}/>
                              }
                                        
                              </Grid>
                              <Grid>
                                      <Button
                                      color="gradient"         
                                      ghost={!playYoutube}
                                      onPress={onTogglePlay}
                                      >
                                        {playYoutube  ? 'X Cerrar' : 'Ver Trailer'}             
                                      </Button>
                              </Grid>

                      </Grid>
                       <Grid>
                            <Button
                                  color="gradient"         
                                  ghost={!isInFavorites}
                                  onPress={onToggleFavorite}
                                  >
                                    {isInFavorites  ? 'Incluido en mi lista' : 'Añadir a mi lista'}      
                              </Button>
                      </Grid>                         
              </Grid.Container>

            
        <Grid.Container gap={2} css={{maxWidth:'1220px', margin:'auto', marginTop: '5px'}} justify="space-around" >
          {movie.credits.map((credit:any) => (
              <Grid
              xs={8}
              sm={4}
              md={3}
              xl={2}
              key={credit.id}
          >

          <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {/* {movie.release_date} */}
          </Text>
          {/* <Text h2 color="white">
            {movie.original_title}
          </Text> */}
          </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
          <Card.Image
              src={`http://image.tmdb.org/t/p/w300/${credit.profile_path}`}
              objectFit="contain"
              width="100%"
              height="100%"
              alt="Relaxing app background"
          />
          </Card.Body>
          <Card.Footer
          isBlurred
          css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
          }}
          >
          <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#d1d1d1" size={20} css={{ margin: 'auto',
                      textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold">
                {credit.character}
                </Text>
                <Text color="#d1d1d1" size={20}>
                {credit.name}
                </Text>
              </Col>
            </Row>
          </Col>

          </Row>
          </Card.Footer>
          </Card>
          </Grid>

          ))}
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
  const {data} = await tmdbApi.get<Movie>(`/${id}?api_key=${API_KEY}`)
  const resp = await tmdbApi.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}` )
  const creditDB = await tmdbApi.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
  const credits = creditDB.data.cast
  // console.log(credits);
    const trailer = resp.data.results.filter(
      (video:any) => video.name === "Official Trailer"
      )
     
return {
    props: {
        movie: data,
        trailer: trailer,
        credits: credits
  
    }
}
}

export default MoviePage