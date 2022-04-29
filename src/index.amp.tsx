import React, { ReactElement } from 'react';
import { AmpFrame } from '@marfeel/widget-providers-frame';
import { MailerliteProps } from '.';

export default function Twitch(props: MailerliteProps): ReactElement {
	return (
		<AmpFrame component="widget-providers-mailerlite" props={ props } />
	);
}
