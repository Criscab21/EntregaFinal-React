import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/productos.json"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const ItemCardDetail = () => {
    const [product, setProducts] = useState([]);
    const {id} = useParams();
    
    const fetchDataId = (id) => {
        return new Promise ((resolve) => {
            const item = data.find((elem) => elem.id === id)

            if(item) {
                resolve(item)
            }
        })
    }

    useEffect(() => {
        fetchDataId(Number(id))
            .then((res) => {
                setProducts(res)
            })
    }, [id])

    
    return(
        <div>
            <Box border="2px" borderColor="gray.200">
                <Card maxW='sm' display="flex" alignItems="center" justifyContent="space-between">
                    <CardBody >
                        <Heading size='md'>{product.title}</Heading> 
                        <Image
                            src=''
                            alt={`imagen de ${product.title}`}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        
                        <Text color='blue.600' fontSize='2xl'>
                            Descripcion: ${product.description}
                        </Text>                  
                        <Text color='blue.600' fontSize='2xl'>
                            Precio: ${product.price}
                        </Text>
                        </Stack>
                    </CardBody>                
                    <CardFooter>             
                        <Button variant='ghost' colorScheme='blue'>
                            Agregar al carrito
                        </Button>                    
                    </CardFooter>
                    <Divider />
                </Card>

            </Box>

        </div>
        
    )
    
}

export default ItemCardDetail;