import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import * as api from '../api/ApiEndpoints';

jest.mock('../api/ApiEndpoints');

const mockCountries = [
    {
        cca3: 'LKA',
        name: { common: 'Sri Lanka' },
        flags: { png: 'https://flagcdn.com/w320/lk.png' },
    },
    {
        cca3: 'IND',
        name: { common: 'India' },
        flags: { png: 'https://flagcdn.com/w320/in.png' },
    },
];

describe('HomePage', () => {
    beforeEach(() => {
        api.getAllCountries.mockResolvedValue({ data: mockCountries });
    });

    it('renders homepage with header', async () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );

        expect(screen.getByText(/world explorer/i)).toBeInTheDocument();
        expect(await screen.findByText(/discover the world/i)).toBeInTheDocument();
    });

    it('shows countries when typing in search', async () => {
        render(
            <BrowserRouter>
                <HomePage />
            </BrowserRouter>
        );

        const input = screen.getByPlaceholderText(/type a country name/i);
        fireEvent.change(input, { target: { value: 'Sri' } });

        await waitFor(() => {
            expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
        });
    });
});
