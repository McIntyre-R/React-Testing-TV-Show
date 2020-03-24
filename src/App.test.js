import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App'
import { mockData } from './MockData/mockData'
import { fetchShow as mockFetchShow } from './api/fetchShow'

jest.mock('./api/fetchShow')


test('App Renders', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData)
    const { getByTestId } = render(<App />)
    await waitFor(() => expect(getByTestId(/apptitle/i)).toBeTruthy())
})

test('dropdown can switch and render seasons', async () => {
    mockFetchShow.mockResolvedValueOnce(mockData)
    const { getByText, findByText } = render(<App />)
    const select = await findByText(/select a season/i)
    fireEvent.mouseDown(select)
    fireEvent.click(getByText(/season 1/i))
    expect(getByText(/episode 1/i)).toHaveTextContent(/season 1/i)

    fireEvent.mouseDown(select)
    fireEvent.click(getByText(/season 2/i))
    expect(getByText(/episode 1/i)).toHaveTextContent(/season 2/i)
})


