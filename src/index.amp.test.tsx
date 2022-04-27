import React from 'react';

import WidgetName from './index.amp';

describe('AMP', () => {
	describe('WidgetName', () => {
		test('should output markup that is valid in AMP', async() => {
			await expect(
				<WidgetName />
			).toBeValidAmp();
		});
	});
});
