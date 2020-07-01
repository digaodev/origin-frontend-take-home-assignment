import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('should render the Header component', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render the Header with an image logo', () => {
    const { getByAltText } = render(<Header />);
    const img = getByAltText('Origin logo');

    expect(img).toBeTruthy();
  });
});
