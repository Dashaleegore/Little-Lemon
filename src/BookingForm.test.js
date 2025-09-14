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

describe('BookingForm HTML5 validation', () => {
  test('date input has required attribute', () => {
    render(<BookingForm date="" setDate={() => {}} time="17:00" setTime={() => {}} guests={1} setGuests={() => {}} occasion="Birthday" setOccasion={() => {}} availableTimes={["17:00"]} dispatchTimes={() => {}} onSubmit={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('time select has required attribute', () => {
    render(<BookingForm date="2025-09-14" setDate={() => {}} time="17:00" setTime={() => {}} guests={1} setGuests={() => {}} occasion="Birthday" setOccasion={() => {}} availableTimes={["17:00"]} dispatchTimes={() => {}} onSubmit={() => {}} submitForm={() => {}} />);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('guests input has required, min, and max attributes', () => {
    render(<BookingForm date="2025-09-14" setDate={() => {}} time="17:00" setTime={() => {}} guests={1} setGuests={() => {}} occasion="Birthday" setOccasion={() => {}} availableTimes={["17:00"]} dispatchTimes={() => {}} onSubmit={() => {}} submitForm={() => {}} />);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('type', 'number');
  });

  test('occasion select has required attribute', () => {
    render(<BookingForm date="2025-09-14" setDate={() => {}} time="17:00" setTime={() => {}} guests={1} setGuests={() => {}} occasion="Birthday" setOccasion={() => {}} availableTimes={["17:00"]} dispatchTimes={() => {}} onSubmit={() => {}} submitForm={() => {}} />);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });
});

describe('BookingForm JavaScript validation', () => {
  test('submit button is disabled for invalid form', () => {
    render(<BookingForm date="" setDate={() => {}} time="" setTime={() => {}} guests={0} setGuests={() => {}} occasion="" setOccasion={() => {}} availableTimes={["17:00"]} dispatchTimes={() => {}} onSubmit={() => {}} submitForm={() => {}} />);
    const submitButton = screen.getByDisplayValue(/Make Your reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled for valid form', () => {
    render(<BookingForm date="2025-09-14" setDate={() => {}} time="17:00" setTime={() => {}} guests={2} setGuests={() => {}} occasion="Birthday" setOccasion={() => {}} availableTimes={["17:00"]} dispatchTimes={() => {}} onSubmit={() => {}} submitForm={() => {}} />);
    const submitButton = screen.getByDisplayValue(/Make Your reservation/i);
    expect(submitButton).not.toBeDisabled();
  });
});
