import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './Reservations';

beforeEach(() => {
  localStorage.clear();
});

test('loads booking data from localStorage on mount', () => {
  const mockData = [
    { name: 'Test', date: '2025-09-14', time: '12:00', guests: 2, occasion: 'Birthday' }
  ];
  localStorage.setItem('bookingData', JSON.stringify(mockData));
  render(<Reservations availableTimes={['12:00']} dispatchTimes={() => {}} submitForm={() => {}} />);
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('12:00')).toBeInTheDocument();
});

test('writes booking data to localStorage on submit', () => {
  render(<Reservations availableTimes={['12:00']} dispatchTimes={() => {}} submitForm={() => {}} />);
  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-09-14' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
  fireEvent.click(screen.getByDisplayValue(/Make Your reservation/i));
  const stored = JSON.parse(localStorage.getItem('bookingData'));
  expect(stored.length).toBeGreaterThan(0);
  expect(stored[0].date).toBe('2025-09-14');
});
