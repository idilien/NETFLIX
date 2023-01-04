import { Card, Grid, Row, Text } from "@nextui-org/react"
import { FC } from "react"
import { useRouter } from 'next/router';
import { Result } from '../../interfaces/tmdb-list';

interface Props {
    movie: Result
}

export const MovieCard: FC<Props> = ({movie}) => {

    const router = useRouter()

    const onClick = () => { 
        router.push(`/movie/${movie.id}`)
     }

  return (
        <Grid
            xs={12}
            sm={6}
            md={4}
            xl={2}
            key={movie.id}
        >
                <Card
                    onClick={onClick}
                    isHoverable
                    isPressable  
                 >
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image css={{ margin: 0 }}
                            src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                            objectFit="cover"
                            width="100%"
                            height={250}
                            alt="img movie"
                        />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start"}}>
                        <Row wrap="wrap" justify="space-between" align="center">
                        <Text transform='capitalize'  b>{movie.original_title}</Text>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                        {movie.overview}
                        </Text>
                        <>{movie.release_date}</>
                        <>{movie.id}</>
                        </Row>
                    </Card.Footer>
                  </Card>   
        </Grid>
  )
}
