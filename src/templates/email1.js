import React from 'react';

import {
	MjmlTitle,
	MjmlPreview,
	MjmlSection,
	MjmlImage,
	MjmlText,
	MjmlAttributes,
	MjmlClass
} from 'mjml-react';

export const MailTest = () => {
	return (
		<React.Fragment>
			<MjmlTitle>Last Minute</MjmlTitle>
			<MjmlPreview>Last Minute Offer...</MjmlPreview>
			<MjmlAttributes>
				<MjmlClass name="tiret" color="green" />
				<MjmlSection padding="0" backgroundColor="" />
				<MjmlImage border="none" padding="0" />
				<MjmlText font-size="15px" font-family="arial" padding="0" line-height="1.1" />
			</MjmlAttributes>
		</React.Fragment>
	);
};
