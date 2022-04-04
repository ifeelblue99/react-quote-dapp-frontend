import Wallet from '../components/Wallet';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import reducer from '../redux/reducer';

test('Should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    walletAddress: 'no wallet',
    connected: false,
  });
});
