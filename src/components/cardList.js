import React from 'react'
import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import CharacterCard from './card'
import PropTypes from "prop-types";


const CardList = ({ characterData }) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        <SimpleGrid columns={isMobileView ? 1 : 2} spacing={10} sx={{
            width: "100%"
        }}>
            {
                characterData?.map((character) => {
                    return (
                        <CharacterCard key={character?.name} character={character} />
                    )
                })
            }
        </SimpleGrid>
    )

}

CardList.propTypes = {
    characterData: PropTypes.arrayOf({
    })
}

export default CardList