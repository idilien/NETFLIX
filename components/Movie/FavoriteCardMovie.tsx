import { Card, Grid, Text } from "@nextui-org/react"
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';





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
