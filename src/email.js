import React from 'react';
import { MailTest } from './templates/email1';
import { MailBody } from './templates/email2';
import { Mjml, MjmlHead, MjmlTitle, MjmlPreview, MjmlBody } from 'mjml-react';

export const generate = () => {
	return (
		<Mjml>
			<MjmlHead>
				<MailTest />
			</MjmlHead>
			<MjmlBody width={500}>
				<MailBody />
			</MjmlBody>
		</Mjml>
	);
};
