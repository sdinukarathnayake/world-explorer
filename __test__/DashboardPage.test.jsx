import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../pages/DashboardPage';
import { BrowserRouter } from 'react-router-dom';

describe('DashboardPage', () => {
    it('renders dashboard page', () => {

        localStorage.setItem('token', 'testtoken');

        render(
            <BrowserRouter>
                <DashboardPage />
            </BrowserRouter>
        );


        expect(
            screen.getByText(/dashboard/i)
        ).toBeInTheDocument();
    });
});
