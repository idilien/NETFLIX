import { Card, Grid, Text } from "@nextui-org/react"
import { FC } from "react"
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
        <Text>Data Pelicula{movieId}</Text>
        <Card.Image
            src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`}
            width={'100%'}
            height={140}
            alt="img movie"
        />
    </Card>
</Grid>
  )
}
