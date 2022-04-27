import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { WidgetNameProps } from '.';

const Container = styled.div`
	color: #fff;
	font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 16px;
	font-weight: 300;
	padding: 2rem;
	text-align: center;
`;

export default function WidgetName(props: WidgetNameProps): ReactElement {
	return (
		<Container>
			AMP Version of the Widget.
		</Container>
	);
}
