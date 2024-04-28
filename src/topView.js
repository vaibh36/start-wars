import React from 'react'
import { SimpleGrid, Flex, Text, Heading, Container } from '@chakra-ui/react'
import CharacterCard from './components/card'
import axios from 'axios'
import CardList from './components/cardList'

const TopView = () => {

    const [characterData, setCharacterData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get('https://swapi.py4e.com/api/people?page=1');
                setCharacterData(response.data.results);
                setIsLoading(false)
                setHasError(false)
            } catch (error) {
                console.error('Error fetching data: ', error);
                setIsLoading(false)
                setHasError(true)
            }
        };

        fetchData();
    }, []);

    return (
        <Container sx={{
            width: "100%",
            flexDirection: "column",
            padding: 8
        }} maxW='4xl'>
            <Heading marginBottom={8}>Star War Character List</Heading>
            {!isLoading && !hasError && <CardList data-testid="character-list" characterData={characterData} />}
        </Container>
    )

}

export default TopView