import { render, screen } from '@testing-library/react';
import Dog from './Dog';
import { MemoryRouter, Route } from 'react-router-dom';

test('renders each dog', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/10']}>
      <Route path="/dogs/:id" component={Dog} />
    </MemoryRouter>
  );
  await screen.findByText('My Name is Barton');

  expect(container).toMatchSnapshot();
});
