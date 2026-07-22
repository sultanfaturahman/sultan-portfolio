import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the targeted professional profile', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /building dependable web systems for real operations/i })).toBeInTheDocument();
  expect(screen.getAllByText(/full-stack web developer/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/3\.78 \/ 4\.00/i).length).toBeGreaterThan(0);
});

test('keeps education in About instead of the Hero', () => {
  render(<App />);
  const hero = document.querySelector('#home');
  const about = document.querySelector('#about');

  expect(hero).not.toBeNull();
  expect(about).not.toBeNull();
  expect(within(hero as HTMLElement).queryByText(/education|informatics graduate|bachelor of informatics/i)).not.toBeInTheDocument();
  expect(within(about as HTMLElement).getByText(/bachelor of informatics/i)).toBeInTheDocument();
});

test('shows evidence-backed featured work', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /teelite club/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sinaik finance/i })).toBeInTheDocument();
  expect(screen.getAllByRole('group', { name: /browser preview/i })).toHaveLength(3);
  expect(screen.getByText(/payment callbacks and admin stock\/order flows remain documented as work in progress/i)).toBeInTheDocument();
});
