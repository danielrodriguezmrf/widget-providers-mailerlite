import React from 'react';
import { render } from '@testing-library/react';
import { useScript } from '@marfeel/widget-providers-hooks';
import MailerliteWidget from './index';

const SCRIPT_SRC = 'https://static.mailerlite.com/js/universal.js';
const globalAny: any = global;

globalAny.ml = jest.fn();

const props = {
	account: '1790482',
	form: 'w2v5j6v9z6',
	dataForm: '1654614:u3z6i7'
};

jest.mock('@marfeel/widget-providers-hooks');
const mockUseScript = useScript as jest.Mock;

beforeEach(() => {
	mockUseScript.mockImplementation((): [boolean, string] => [true, '']);
});


describe('MailerliteWidget', () => {
	test('should render the div element', () => {
		const { queryByTestId } = render(<MailerliteWidget { ...props } />);

		expect(queryByTestId('mailerlite-form')).toBeInTheDocument();
	});

	test('should create ml var', () => {
		render(<MailerliteWidget { ...props } />);
		expect(useScript).toHaveBeenCalledWith([{ script: SCRIPT_SRC }]);

		expect(window.ml).toHaveBeenCalledWith('accounts', '1790482', 'w2v5j6v9z6', 'load');
	});
});
