import { Card, Grid, Text } from "@nextui-org/react"
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { tmdbApi } from "../../api";
import { GetStaticProps } from "next/types";
import { localFavorites } from "../../utils";
;


interface Props{
    movieId: number;
}



export const FavoriteCardMovie: FC<Props> = ({movieId}) => {
 

  
  
    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`movie/${movieId}`)
    }

  return (
    <Grid xs={6} sm={3}  md={2} xl={1} key={movieId} onClick= {onFavoriteClicked}>
            <Card isHoverable  isPressable   css={{ padding: 10}}>
                <Text>ID Pelicula: {movieId}</Text>
                
                <Card.Image
                    src={`/img/alien.webp`}
                    // src={`https://api.themoviedb.org/3/movie/76600/images?api_key=b56055aca31a6f81a3ce19e3ab8b58b3`}
                    width={'100%'}
                    height={140}
                    alt="img movie"
                />
            </Card>
    </Grid>
  )
}


export const getStaticProps: GetStaticProps = async ({params}) => {

console.log(params)

  const API_KEY = process.env.API_KEY
  const {id} = params as {id: string}
  const {data} = await tmdbApi.get(`/${id}?api_key=${API_KEY}`)
  
     
return {
    props: {
        movie: data,
        
  
    }
}
}
