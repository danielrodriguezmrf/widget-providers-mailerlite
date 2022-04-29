import { withKnobs } from '@storybook/addon-knobs';
import decorator from '@marfeel/widget-providers-storybook-amp-decorator';
import React, { ReactElement } from 'react';

import Amp from './index.amp';
import Touch from './index';

const props = {
	account: '1790482',
	form: 'w2v5j6v9z6',
	dataForm: '1654614:u3z6i7'
};

export default {
	decorators: [decorator, withKnobs],
	title: 'Widget Name'
};

export const amp = (): ReactElement => (
	<Amp { ...props } />
);

export const touch = (): ReactElement => (
	<Touch { ...props } />
);
