import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardMovie } from './FavoriteCardMovie';

interface Props{
  movies: number[]
}

export const FavoriteMovies: FC<Props> = ({movies}) => {
    // console.log(movies)
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
          {movies.map(id => (
              <FavoriteCardMovie movieId={id} key={id}/>
          ))}
    </Grid.Container>
  )
}
