import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import TopView from '../topView';

// Mock axios
jest.mock('axios');

jest.mock('@chakra-ui/react', () => ({
    ...jest.requireActual('@chakra-ui/react'),
    useBreakpointValue: jest.fn(),
}));

describe('TopView component', () => {
    it('renders loading state while fetching data', async () => {
        axios.get.mockResolvedValueOnce({ data: { results: [] } });
        render(<TopView />);
        expect(screen.getByText('Star War Character List')).toBeInTheDocument();
    });
});
