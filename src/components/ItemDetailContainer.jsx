import React, { useContext, useEffect, useState } from "react";
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


const ItemDetailContainer = ({productById}) => {
    
   
    return(
        <div>
            <Heading size='md'>{productById.name}</Heading> 
                <Image
                    src=''
                    alt={`imagen de ${productById.name}`}
                    borderRadius='lg'
                />
            <Stack mt='6' spacing='3'>
                        
                <Text color='blue.600' fontSize='2xl'>
                    Descripcion: {productById.description}
                </Text>                  
                <Text color='blue.600' fontSize='2xl'>
                    Precio: ${productById.price}
                </Text>
            </Stack>

        </div>
        
    )
    
}

export default ItemDetailContainer;