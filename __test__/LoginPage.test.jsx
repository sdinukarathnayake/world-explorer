import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios');

describe('LoginPage', () => {
    it('renders login form', () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );
        expect(screen.getByText(/login to world explorer/i)).toBeInTheDocument();
    });

    it('submits login form successfully', async () => {
        axios.post.mockResolvedValue({
            data: {
                token: 'mocktoken',
                user: { id: '123', email: 'test@example.com' },
            },
        });

        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
            target: { value: 'password' },
        });

        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith(
                'http://localhost:5000/users/login',
                { email: 'test@example.com', password: 'password' }
            );
        });
    });

    it('shows error message if login fails', async () => {
        axios.post.mockRejectedValue({
            response: { data: { message: 'Invalid credentials' } },
        });

        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
            target: { value: 'test@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
            target: { value: 'wrongpassword' },
        });

        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
    });
});
