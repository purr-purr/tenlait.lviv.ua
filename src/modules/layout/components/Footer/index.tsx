import Logo from '@modules/common/components/Logo';

import messages from '@utils/messages';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={s.container}>
			<Logo />
			<p>{messages.ALL_RIGHTS_RESERVED + currentYear}</p>
		</footer>
	);
};

export default Footer;
