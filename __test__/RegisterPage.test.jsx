import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterPage from '../pages/RegisterPage';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

jest.mock('axios');

describe('RegisterPage', () => {
    it('renders register form', () => {
        render(
            <BrowserRouter>
                <RegisterPage />
            </BrowserRouter>
        );
        expect(screen.getByText(/register to world explorer/i)).toBeInTheDocument();
    });

    it('submits register form successfully', async () => {
        axios.post.mockResolvedValue({
            data: { message: 'User registered successfully' },
        });

        render(
            <BrowserRouter>
                <RegisterPage />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText(/enter your name/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(screen.getByPlaceholderText(/enter your email/i), {
            target: { value: 'john@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(/create a password/i), {
            target: { value: 'password123' },
        });

        fireEvent.click(screen.getByRole('button', { name: /register/i }));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalled();
        });
    });
});
