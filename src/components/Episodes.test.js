import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes'
import { mockData } from '../MockData/mockData'


test('Episodes Render', ()=> {
    const { queryByTestId, queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)
    expect(queryByTestId(/episode-list/i)).toBeNull();
    rerender(<Episodes episodes={mockData.data._embedded.episodes} />);
    expect(queryAllByTestId(/episode-list/i)).toHaveLength(26)
})


