import { Stack, Heading } from '@chakra-ui/react'
import React from 'react'

function NewHero() {
    return (
        <Stack minH={'100vh'} alignItems='center' justifyContent={'center'}>
            <Heading fontSize={['50px', '90px', '160px']}>FULL STACK</Heading>
            <Heading fontSize={['50px', '90px', '160px']}>DEVELOPER</Heading>
        </Stack>
    )
}

export default NewHero