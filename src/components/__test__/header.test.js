import { render, screen } from '@testing-library/react';
import Header from '../header';



it('render navbar header', async () => {
  render(<Header title="bulbasaur"/>)
  const containElement = screen.getByText(/"bulbasaur"/i)
  expect(containElement).toContainHTML("p")
});