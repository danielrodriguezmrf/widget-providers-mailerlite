import React from 'react';

import MailerliteWidget from './index.amp';

const props = {
	account: '1790482',
	form: 'w2v5j6v9z6',
	dataForm: '1654614:u3z6i7'
};

describe('AMP', () => {
	describe('MailerliteWidget', () => {
		test('should output markup that is valid in AMP', async() => {
			await expect(
				<MailerliteWidget { ...props } />
			).toBeValidAmp();
		});
	});
});
