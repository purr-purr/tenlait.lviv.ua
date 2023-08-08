import Logo from '@modules/common/components/Logo';

import { APP_AUTHOR_SIGNATURE, APP_AUTHOR_WEBSITE } from '@utils/const';
import messages from '@utils/messages';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={s.container}>
			<Logo />
			<article className={s.signature}>
				<p>{messages.ALL_RIGHTS_RESERVED + currentYear}</p>
				<p>
					Created by{' '}
					<a target="_blank" rel="noreferrer" href={APP_AUTHOR_WEBSITE}>
						{APP_AUTHOR_SIGNATURE}
					</a>
				</p>
			</article>
		</footer>
	);
};

export default Footer;
