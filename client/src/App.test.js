import { render, screen } from '@testing-library/react'
import App from './App'

test('renders try it now button', () => {
    render(<App />)
    const linkElement = screen.getByText(/try it now/i)
    expect(linkElement).toBeInTheDocument()
})
