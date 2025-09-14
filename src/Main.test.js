import { initializeTimes, updateTimes } from './Main';

global.fetchAPI = jest.fn(() => [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
]);

describe('initializeTimes', () => {
  it('returns the available times from fetchAPI', () => {
    const expected = [
      '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
    ];
    expect(initializeTimes()).toEqual(expected);
  });
});

describe('updateTimes', () => {
  it('returns the available times from fetchAPI for a selected date', () => {
    const state = [];
    const action = { type: 'update', date: '2025-09-14' };
    const expected = [
      '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
    ];
    expect(updateTimes(state, action)).toEqual(expected);
  });
});
