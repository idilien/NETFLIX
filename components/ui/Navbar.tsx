import { Button, Grid, Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"


export const Navbar = () => {

  const {theme} = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:'10px 50px',
        backgroundColor: theme?.colors.gray200.value
    }}> 


      <NextLink href="/"passHref >
      <Grid css={{display: 'flex', alignItems: 'center'}}>
          {/* <Text color="red" h1>N</Text>  */}
          <Text color="red" h2>NETFLIX</Text> 
      </Grid>
     
      </NextLink>
          <Spacer css={{flex:1}}/>
          <NextLink href="/favorites" passHref>
          <Button
                color="gradient"
                ghost
                // onPress={}
                >
                  Mi Lista      
          </Button>   
        </NextLink>
    </div>
  )
}
