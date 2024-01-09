// FILEPATH: /Users/ladykerr/Documents/repos/mealmetrics-copilot/components/__tests__/Nutritionfacts.test.js
import { render, screen } from '@testing-library/react';
import Nutritionfacts from '../Nutritionfacts';

describe('Nutritionfacts', () => {
    test('renders null when data is not a string', () => {
        const { container } = render(<Nutritionfacts data={null} />);
        expect(container.firstChild).toBeNull();
    });

    test('renders null when data is not provided', () => {
        const { container } = render(<Nutritionfacts />);
        expect(container.firstChild).toBeNull();
    });

    test('renders correctly when data is a string', () => {
        const data = 'Fact 1\nFact 2\nFact 3';
        render(<Nutritionfacts data={data} />);
        
        expect(screen.getByText('Fact 1')).toBeInTheDocument();
        expect(screen.getByText('Fact 2')).toBeInTheDocument();
        expect(screen.getByText('Fact 3')).toBeInTheDocument();
    });

    test('splits data correctly when data contains consecutive newline characters', () => {
        const data = 'Fact 1\n\nFact 2\n\nFact 3';
        render(<Nutritionfacts data={data} />);
        
        expect(screen.getByText('Fact 1')).toBeInTheDocument();
        expect(screen.getByText('Fact 2')).toBeInTheDocument();
        expect(screen.getByText('Fact 3')).toBeInTheDocument();
    });
});