import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Software, Signal Processing, AWS DevOps Engineer/i)
  expect(linkElement).toBeInTheDocument()
})
