import { Button, Grid, Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"
import { Input } from "@nextui-org/react";
import { useState } from 'react';

export const Navbar = () => {

  const [searhKey, setSearchKey] = useState('');

  

  const searchMovie = (e:any) => {
    e.preventDefault()
    console.log('buscando pelicula')
  }

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
      <Grid>
      </Grid>
      </NextLink>
          <Spacer />
          {/* <form onSubmit={searchMovie}>
              <Input 
                type="text"
                shadow
                css={{paddingRight:10}} 
                status="success" 
                placeholder="Buscar" 
                color="primary"
                onChange={(e) => setSearchKey(e.target.value)}
                />
                <Button
                ghost>
                  Buscar
                </Button>
              </form> */}
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
