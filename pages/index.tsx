import { GetStaticProps } from 'next'
import { NextPage } from 'next'
import { Layout } from '../components/layout'
import { Result, TmdbListResponse } from '../interfaces';
import { Button, Card, Col, Container, Grid, Row, Text} from '@nextui-org/react';
import { tmdbApi } from '../api';
import { MovieCard } from '../components/Movie';



interface Props {
 movies: Result[];
}

const Home: NextPage<Props> =({movies}) => {



  return (
    
    <Layout title='NETFLIX - Populate Movies'>
        <Container lg>

              <Card css={{ w: "100%", h: "400px" }}>
                      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col css={{paddingTop:30}}>
                          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                            {/* {movie.release_date} */}
                          </Text>
                          <Text h1 color="black">
                            Avatar: The Way of Water
                          </Text>
                          <Row justify="flex-start">
                            
                          <Button
                                flat
                                auto
                                rounded
                                css={{ color: "#213d3b", bg: "#94f9f026" }}      
                                >
                                <Text
                                  css={{ padding:10, color: "inherit" }}
                                  size={12}
                                  weight="bold"
                                  transform="uppercase"
                                  >
                                    Ver Trailer
                                </Text>
                              </Button>
                                  </Row>
                        </Col>
                      </Card.Header>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={` https://image.tmdb.org/t/p/w500/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg`}
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          alt="Relaxing app background"
                        />
                      </Card.Body>            
              </Card>

          <Grid.Container gap={2} >
          {movies.map( (movie) => (
            <MovieCard
            key={movie.id}
            movie={movie}
            />
            ))}
        
          </Grid.Container>
      </Container>
      </Layout>
   
   )
  }
  

  
  export const getStaticProps: GetStaticProps = async (ctx) => {


    const API_KEY = process.env.API_KEY
    // Version Axios 5.0 No Actual Verison
    const {data} = await tmdbApi.get<TmdbListResponse>(`/popular?api_key=${API_KEY}`)
  
  const movies: Result[] = data.results.map( (movi, i) => ({
    ...movi,
    id: movi.id,
    title: movi.original_title,
    img: movi.poster_path
    
  }))
 

  return {
    props: {
      movies,
    
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