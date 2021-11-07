import { render, screen } from '@testing-library/react';
import AppHeader from '../navbar';


test('render navbar header', async () => {
  render(<AppHeader title="pokemon" />);
  const linkElement = screen.getByText(/pokemon/i);
  expect(linkElement).toBeInTheDocument();
});

// test('render navbar header', async () => {
//   render(<AppHeader title="pokemon" />);
//   const linkElement = screen.getByRole('heading', {name: "pokemon"});
//   expect(linkElement).toBeInTheDocument();
// });

// it('render by title', async ()=>{
//   render (<AppHeader title="pokemon" />)
//   const linkElement = screen.getAllByTitle('pokemon')
//   expect(linkElement).toBeInTheDocument();
// })