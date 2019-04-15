import React from 'react';
import { readFileSync } from 'fs';

import { MjmlSection, MjmlColumn, MjmlButton } from 'mjml-react';

export const MailBody = () => {
	return (
		<React.Fragment>
			<MjmlSection>
				<MjmlColumn>
					<MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/">
						I like it!
					</MjmlButton>
				</MjmlColumn>
			</MjmlSection>
		</React.Fragment>
	);
};
