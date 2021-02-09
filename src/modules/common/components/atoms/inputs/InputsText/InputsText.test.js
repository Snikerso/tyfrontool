import React from 'react';
import { getByPlaceholderText, render } from '@testing-library/react';
import { InputText } from './InputsText';

describe('InputText components', () => {
  it('renders "InputText" element', () => {
    const { getByTestId } = render(<InputText />);
    expect(getByTestId('input-text')).toBeInTheDocument();
  });

  it('renders placeholder "InputText" element', () => {
    let placeholderText = 'np: Jacek';

    const { getByPlaceholderText } = render(
      <InputText placeholder={placeholderText} />
    );

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('renders name "InputText" element', () => {
    const { getByRole } = render(<InputText name={'code'} />);

    expect(getByRole('textbox', { name: 'code' }));
  });
});
