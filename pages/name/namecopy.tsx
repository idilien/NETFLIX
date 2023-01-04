

// import { useState } from 'react';
// import { GetStaticProps, NextPage, GetStaticPaths  } from 'next';
// import Image from 'next/image';

// import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
// import confetti from 'canvas-confetti'
// import { pokeApi } from '../../api';
// import { Layout } from "../../components/layout"
// import { PokemonFull, Pokemon } from '../../interfaces';
// import { getPokemonInfo, localFavorites } from '../../utils';


// interface Props {
// pokemon: PokemonFull
// }

// const PokemonByName: NextPage<Props> = ({pokemon}) => {

   
//     const [isInFavorites,setIsInFavorites] =  useState(localFavorites.existPokemonInFavorites(pokemon.id))

//      const onToggleFavorite = () => {
//         localFavorites.toggleFavorite(pokemon.id)
//         setIsInFavorites(!isInFavorites)
//         if(isInFavorites)return

//             confetti({
//             particleCount: 100,
//             spread: 70,
//             origin: { x:0.8,y: 0.3 }
//             });
//   }

//   return (
//     <Layout title={pokemon.name}>
//         <Grid.Container css={{marginTop: '5px'}} gap={2}>
//           <Grid xs={12} sm={4} >
//               <Card isHoverable   css={{padding: '30px'}}>
//                   <Card.Body>
//                     <Card.Image
//                          src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
//                         //  objectFit="cover"
//                          width="100%"
//                          height={200}
//                          alt="img pokemon"
//                     />
//                   </Card.Body>
//               </Card>
//           </Grid>
//           <Grid xs={12} sm={8} >
//             <Card>
//               <Card.Header css={{display: 'flex', justifyContent:'space-between'}}>
//                 <Text h1 transform='capitalize'>
//                   {pokemon.name}
//                 </Text>
//                 <Button
//                 color="gradient"
//                 ghost={!isInFavorites}
//                 onPress={onToggleFavorite}
//                 >
//                   {isInFavorites  ? 'Lo Tengo en Favoritos' : 'Guardar en Favoritos'}
                 
//                 </Button>
//               </Card.Header>
//               <Card.Body>
//                 <Text size={30}>Sprites:</Text>
//                 <Container css={{display: 'flex', justifyContent:'space-between'}}>
//                   <Image
//                       src={pokemon.sprites.front_default}
//                       alt="img pokemon"
//                       width={100}
//                       height={100}
//                   />
//                   <Image
//                     src={pokemon.sprites.back_default}
//                     alt="img pokemon"
//                     width={100}
//                     height={100}
//                   />
//                   <Image
//                     src={pokemon.sprites.front_shiny}
//                     alt="img pokemon"
//                     width={100}
//                     height={100}
//                   />
//                   <Image
//                     src={pokemon.sprites.back_shiny}
//                     alt="img pokemon"
//                     width={100}
//                     height={100}
//                   />
//                 </Container>
//               </Card.Body>
//             </Card>
//           </Grid>
//         </Grid.Container>
   
//     </Layout>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async (ctx) => {

//   const {data} = await pokeApi.get<Pokemon>(`/pokemon?limit=151`)
//   const pokemonName: string[] = data.results.map( pokemon => pokemon.name)

//   return {
//     paths: pokemonName.map(name => ({
//       params: {name}
//     })),
//     fallback: false
//   }
// }
// export const getStaticProps: GetStaticProps = async ({params}) => {

// const {name} = params as {name: string};

//   return {
//         props: {
//             pokemon: await getPokemonInfo(name)
//         }
//   }
// }

// export default PokemonByName

