import PostQuote from '../components/PostQuote';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Form tag testing', () => {
  it('Should render the form ', () => {
    render(<PostQuote />);
    expect(screen.getByTestId('form-test').toBeInTheDocument());
  });
});
