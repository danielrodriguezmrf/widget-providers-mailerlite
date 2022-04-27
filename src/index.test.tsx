import React from 'react';
import { render } from '@testing-library/react';

import WidgetName from './index';

describe('WidgetName', () => {
	test('should render the element', () => {
		const { queryByText } = render(<WidgetName />);

		expect(queryByText('Touch Version of the Widget.')).toBeInTheDocument();
		expect(queryByText('Touch Version of the Widget.')).toBeDefined();
	});
});
