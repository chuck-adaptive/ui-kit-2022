import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import LogoText from './LogoText';

jest.mock('../branding', () => ({
  __esModule: true,
  LogoText: ({ sx: { height, width } }: { sx: { height: number; width: number } }) => {
    return (
      <div data-testid={'logo-text'}>
        <p>{height}</p>
        <p>{width}</p>
      </div>
    );
  },
}));

describe('LogoText component tests', () => {
  describe('Given a default LogoText', () => {
    beforeEach(() => {
      render(<LogoText />);
    });

    it('Then should be the same as the snapshots', () => {
      expect(screen.getByTestId('logo-text')).toMatchSnapshot();
    });

    it('Then should render the LogoText component correctly', () => {
      expect(screen.getByTestId('logo-text')).toBeInTheDocument();
    });

    it('Then should get the width 272 in the document text', () => {
      const element = screen.getByTestId('logo-text');

      expect(element).toHaveTextContent('272');
    });

    it('Then should get the height 90 in the document text', () => {
      const element = screen.getByTestId('logo-text');

      expect(element).toHaveTextContent('90');
    });
  });

  describe('Given a LogoText with customized size', () => {
    describe('When pass the width 50 and height 100', () => {
      beforeEach(() => {
        render(<LogoText width={50} height={100} />);
      });

      it('Then should get the width 50 in the document text', () => {
        const element = screen.getByTestId('logo-text');

        expect(element).toHaveTextContent('50');
      });

      it('Then should get the height 100 in the document text', () => {
        const element = screen.getByTestId('logo-text');

        expect(element).toHaveTextContent('100');
      });
    });
  });
});
