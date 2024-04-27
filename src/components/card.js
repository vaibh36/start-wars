import React from 'react'
import { Text } from '@chakra-ui/react'
import { Flex, chakra } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";



const CharacterCard = ({ character }) => {

    const url = React.useMemo(() => {
        const matches = character?.url.match(/\d+\/?$/)
        if (matches) {
            return parseInt(matches[0]); // Convert the matched string to an integer
        }


    }, [character?.url])

    return (
        <Flex flexDirection={"column"} sx={{
            border: "1px solid black",
            padding: 4
        }}>
            <Flex flexDirection={"row"}>
                <Text textAlign={"start"}><chakra.span sx={{
                    color: "purple"
                }}>Name:</chakra.span> <Link color='blue' to={`/character/${url}`}><chakra.span sx={{
                    fontWeight: "bold"
                }}>{character?.name}</chakra.span></Link></Text>
            </Flex>
            <Flex flexDirection={"row"}>
                <Text textAlign={"start"}><chakra.span sx={{
                    color: "purple"
                }}>Gender:</chakra.span> <chakra.span sx={{
                    fontWeight: "bold"
                }}>{character?.gender}</chakra.span></Text>
            </Flex>
            <Flex flexDirection={"row"}>
                <Text textAlign={"start"}><chakra.span sx={{
                    color: "purple"
                }}>Home Planet:</chakra.span> <chakra.span sx={{
                    fontWeight: "bold"
                }}>{character?.homeworld}</chakra.span></Text>
            </Flex>
        </Flex>
    )
}


CharacterCard.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string,
        gender: PropTypes.string,
        homeworld: PropTypes.string
    })
}

export default CharacterCard