import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../components/card';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders with character data', () => {
    const character = {
        name: 'Luke Skywalker',
        gender: 'male',
        homeworld: 'Tatooine',
        url: 'https://swapi.dev/api/people/1/'
    };

    render(
        <Router>
            <CharacterCard character={character} />
        </Router>
    );

    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByText('Home Planet:')).toBeInTheDocument();
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
});
