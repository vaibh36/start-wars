import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import CharacterView from '../characterView';

jest.mock('axios');
jest.mock('@chakra-ui/react', () => ({
    ...jest.requireActual('@chakra-ui/react'),
    useBreakpointValue: jest.fn(),
}));

describe('CharacterView component', () => {
    it('renders character details after data fetching', async () => {
        const mockCharacterData = {
            name: 'Luke Skywalker',
            hair_color: 'blond',
            gender: 'male',
            films: ['A New Hope', 'The Empire Strikes Back'],
        };
        axios.get.mockResolvedValueOnce({ data: mockCharacterData });
        render(
            <BrowserRouter>
                <CharacterView />
            </BrowserRouter>
        );
        expect(screen.getByText('Character view of star wars')).toBeInTheDocument();
    });
});
