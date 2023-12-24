import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe("<Button/> Component Test", () => {
    test('Checks if the button contains the text equals to "Carregar novos posts"', () => {
        render(<Button id="buttonLoadMorePosts" />);
        
        expect(screen.getByRole('button', { title: /Carregar novos posts/i })).toBeInTheDocument();
    });

    test('Checks if the button was clicked (by your fn onClick)', () => {
        const fn = jest.fn();
        render(<Button id="buttonLoadMorePosts" onClick={fn} />);
        
        const button = screen.getByRole('button', { id: "buttonloadMorePosts" });

        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)
    });

    test("Checks if the button was disabled when disabled param is true", () => {
        render(<Button id="buttonLoadMorePosts" disabled="true" />);

        expect(screen.getByRole('button', { id: "buttonLoadMorePosts" })).not.toBeDisabled();
    })

});