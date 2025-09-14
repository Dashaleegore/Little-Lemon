import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(
        <BookingForm 
            date="" setDate={() => {}} 
            time="17:00" setTime={() => {}} 
            guests={1} setGuests={() => {}} 
            occasion="Birthday" setOccasion={() => {}} 
            availableTimes={['17:00', '18:00']} 
            dispatchTimes={() => {}} 
            onSubmit={() => {}} 
        />
    );
    const headingElement = screen.getByText(/Choose date/i);
    expect(headingElement).toBeInTheDocument();
});

test('BookingForm can be submitted by the user', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    render(
        <BookingForm 
            date="2025-09-14" setDate={() => {}} 
            time="17:00" setTime={() => {}} 
            guests={1} setGuests={() => {}} 
            occasion="Birthday" setOccasion={() => {}} 
            availableTimes={['17:00', '18:00']} 
            dispatchTimes={() => {}} 
            onSubmit={handleSubmit} 
        />
    );
    const submitButton = screen.getByDisplayValue(/Make Your reservation/i);
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
});
