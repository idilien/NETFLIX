import { Card, Grid, Row, Text,Col,  Button } from "@nextui-org/react"
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


   return(
    <Grid
                xs={12}
                sm={6}
                md={4}
                xl={3}
                key={movie.id}
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
            src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
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
                 <Col span={3}>
                   {/* <Card.Image
                     src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                     css={{ bg: "black", br: "50%" }}
                     height={40}
                     width={40}
                     alt="Breathing app icon"
                   /> */}
                 </Col>
                 <Col>
                   <Text color="#d1d1d1" size={15}>
                     {movie.original_title}
                   </Text>
                   <Text color="#d1d1d1" size={20}>
                  {movie.vote_average}
                   </Text>
                 </Col>
               </Row>
             </Col>
             <Col>
               <Row justify="flex-end">
                 <Button
                   flat
                   auto
                   rounded
                   css={{ color: "#94f9f0", bg: "#94f9f026" }}
                   onPress={onClick}
                 >
                   <Text
                     css={{ color: "inherit" }}
                     size={12}
                     weight="bold"
                     transform="uppercase"
                   >
                      Ver más
                   </Text>
                 </Button>
               </Row>
             </Col>
           </Row>
         </Card.Footer>
       </Card>
       </Grid>
     );
     





//   return (
//         <Grid
//             xs={12}
//             sm={6}
//             md={4}
//             xl={3}
//             key={movie.id}
//         >
//                 <Card
//                     onClick={onClick}
//                     isHoverable
//                     isPressable  
//                  >
//                     <Card.Body css={{ p: 0 }}>
//                         <Card.Image css={{ margin: 0 }}
//                             src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
//                             // objectFit="cover"
//                             width="100%"
//                             height={300}
//                             alt="img movie"
//                         />
//                     </Card.Body>
//                     <Card.Footer>
//                         <Row wrap="wrap" justify="space-between" align="center">
//                         <Text transform='capitalize'  b>{movie.original_title}</Text>
//                         {/* <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
//                         {movie.overview}
//                         </Text> */}
//                         {/* <>{movie.release_date}</>
//                         <>{movie.id}</> */}
//                         </Row>
//                     </Card.Footer>
//                   </Card>   
//         </Grid>
//   )
}
