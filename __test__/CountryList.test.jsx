import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import CountryList from '../components/CountryList';
import { BrowserRouter } from 'react-router-dom';
import * as api from '../api/ApiEndpoints';

jest.mock('../api/ApiEndpoints');

const mockCountries = [
    {
        cca3: 'LKA',
        name: { common: 'Sri Lanka' },
        flags: { png: 'https://flagcdn.com/w320/lk.png' },
        region: 'Asia',
    },
    {
        cca3: 'FRA',
        name: { common: 'France' },
        flags: { png: 'https://flagcdn.com/w320/fr.png' },
        region: 'Europe',
    },
];

describe('CountryList', () => {
    beforeEach(() => {
        api.getAllCountries.mockResolvedValue({ data: mockCountries });
    });

    it('renders list of countries', async () => {
        render(
            <BrowserRouter>
                <CountryList />
            </BrowserRouter>
        );

        expect(await screen.findByText('Sri Lanka')).toBeInTheDocument();
        expect(screen.getByText('France')).toBeInTheDocument();
    });

    it('filters countries by region', async () => {
        render(
            <BrowserRouter>
                <CountryList />
            </BrowserRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
        });

        const filterSelect = screen.getByRole('combobox');
        fireEvent.change(filterSelect, { target: { value: 'Asia' } });

        expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
        expect(screen.queryByText('France')).not.toBeInTheDocument();
    });
});
