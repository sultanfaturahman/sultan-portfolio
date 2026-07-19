import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the targeted professional profile', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /building dependable web systems for real operations/i })).toBeInTheDocument();
  expect(screen.getAllByText(/full-stack web developer/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/3\.78 \/ 4\.00/i).length).toBeGreaterThan(0);
});

test('shows evidence-backed featured work', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /teelite club/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sinaik finance/i })).toBeInTheDocument();
  expect(screen.getByText(/payment callbacks and admin stock\/order flows remain documented as work in progress/i)).toBeInTheDocument();
});
