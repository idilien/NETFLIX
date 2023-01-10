import { Container, Image, Text } from "@nextui-org/react"


export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px )',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
       }}>
          <Text h1>Mi Lista Está Vacía</Text>
          <Image
            css={{opacity: 0.7}}
            src={'img/alien.webp'}
            width={250}
            height={250}
            alt='img alien'
          />
       </Container>
  )
}
