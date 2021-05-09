import {fireEvent, screen} from '@testing-library/react'

export function changeAndVerify(placeholderText, newValue){
    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, {target: {value: newValue}});
    expect(input.value).toBe(newValue);
}