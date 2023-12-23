import React from "react";
import ItemCardDetail from "./ItemCardDetail";
import { Link } from "react-router-dom";
import {
    Card, CardHeader, CardBody, CardFooter,
    Image,
    Stack, HStack, VStack,
    Heading, 
    Text,
    Divider, 
    Button, ButtonGroup, Box
} from '@chakra-ui/react';

const ItemCard = ({product}) => {
        
    return (
        <div>
            <Box border="2px" borderColor="gray.200">
                <Card maxW='sm' display="flex" alignItems="center" justifyContent="space-between">
                    <CardBody>
                        <Heading size='md'>{product.title}</Heading>                   
                        <Image
                            src=''
                            alt={`imagen de ${product.title}`}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Text color='blue.600' fontSize='2xl'>
                            Precio: ${product.price}
                        </Text>
                        </Stack>
                    </CardBody>                
                    <CardFooter>
                        <ButtonGroup spacing='5'>
                        <Link to={`/product/${product.id}`}>
                            <Button variant='solid' colorScheme='blue'>
                                Detalles
                            </Button>
                        </Link>
                        
                        <Button variant='ghost' colorScheme='blue'>
                            Agregar al carrito
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                    <Divider />
                </Card>
            </Box> 
            
                                                   
        </div>
    )

}

export default ItemCard;