import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CountryDetails from '../components/CountryDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as api from '../api/ApiEndpoints';

jest.mock('../api/ApiEndpoints');

const mockCountry = {
    name: { common: 'Sri Lanka' },
    capital: ['Colombo'],
    flags: { svg: 'flag-url' },
    region: 'Asia',
};

describe('CountryDetails', () => {
    beforeEach(() => {
        api.getCountryByCode.mockResolvedValue({ data: [mockCountry] });
    });

    it('renders country details', async () => {
        render(
            <BrowserRouter initialEntries={['/country/LKA']}>
                <Routes>
                    <Route path="/country/:code" element={<CountryDetails />} />
                </Routes>
            </BrowserRouter>
        );

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
        expect(await screen.findByText(/sri lanka/i)).toBeInTheDocument();
    });
});
