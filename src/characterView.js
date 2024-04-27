import { Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, chakra } from '@chakra-ui/react'

const CharacterView = () => {
    const { id } = useParams()
    const [characterDetail, setCharacterDetail] = React.useState({})

    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://swapi.py4e.com/api/people/${id}`);
                setCharacterDetail(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();

    }, [id])


    return (
        <Container sx={{
            width: "100%",
            flexDirection: "column",
            padding: 8
        }} maxW='4xl'>
            <Flex flexDirection={"column"}>
                <Heading marginBottom={8}>Character view of star wars</Heading>
                <Flex flexDirection={"column"}>
                    <Text><chakra.span sx={{
                        fontWeight: "bold"
                    }}>Name:</chakra.span> {characterDetail?.name}</Text>
                    <Text><chakra.span sx={{
                        fontWeight: "bold"
                    }}>Hair Color:</chakra.span> {characterDetail?.hair_color}</Text>
                    <Text><chakra.span sx={{
                        fontWeight: "bold"
                    }}>Gender:</chakra.span> {characterDetail?.gender}</Text>
                    <Flex flexDirection={"column"}>
                        <Text><chakra.span sx={{
                            fontWeight: "bold"
                        }}>Films List:-</chakra.span></Text>
                        {
                            characterDetail?.films?.map((film) => {
                                return <Text key={film}>{film}</Text>
                            })
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    )

}

export default CharacterView