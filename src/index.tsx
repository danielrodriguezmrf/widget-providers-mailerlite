import React, { ReactElement, useEffect } from 'react';
import { ScriptProps, useScript } from '@marfeel/widget-providers-hooks';
/* eslint-disable @typescript-eslint/camelcase */

export interface MailerliteProps {
	account: string;
	form: string;
	dataForm: string;
}

declare global {
	interface Window {
		ml: (accounts: string, account: string, forms: string, load: string) => void;
		ml_account: void;
	}
}

export default function MailerliteWidget({ account, form, dataForm }: MailerliteProps): ReactElement {
	const scriptSrc: ScriptProps = { script: 'https://static.mailerlite.com/js/universal.js' };
	const [scriptLoaded] = useScript([scriptSrc]);

	useEffect(() => {
		if (scriptLoaded) {
			window.ml_account = window.ml('accounts', account, form, 'load');
		}

	}, [scriptLoaded]);

	return (
		<div
			data-testid="mailerlite-form"
			className="ml-form-embed"
			data-account={ `${account}:${form}` }
			data-form={ dataForm }
		/>
	);
}
