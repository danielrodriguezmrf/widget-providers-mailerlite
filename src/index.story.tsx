import { withKnobs } from '@storybook/addon-knobs';
import decorator from '@marfeel/widget-providers-storybook-amp-decorator';
import React, { ReactElement } from 'react';

import Amp from './index.amp';
import Touch from './index';

export default {
	decorators: [decorator, withKnobs],
	title: 'Widget Name'
};

export const amp = (): ReactElement => (
	<Amp />
);

export const touch = (): ReactElement => (
	<Touch />
);
