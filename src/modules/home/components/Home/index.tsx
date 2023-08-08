import Image from 'next/image';

import CALENDAR_ICON from 'public/assets/calendar-icon.svg';
import EMAIL_ICON from 'public/assets/email-icon.svg';
import FIRST_SCREEN_IMAGE from 'public/assets/first-screen.jpg';
import MAP_ICON from 'public/assets/map-icon.svg';
import PHONE_ICON from 'public/assets/phone-icon.svg';

import { useMediaQuery } from '@modules/common/hooks';

import {
	COMPANY_ADDRESS,
	COMPANY_EDRPOU,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_NAME,
	COMPANY_PHONE,
	COMPANY_SCHEDULE,
	MOBILE_BREAKPOINT,
} from '@utils/const';
import messages from '@utils/messages';

import s from './Home.module.scss';

const Home = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return (
		<>
			<article className={s.intro}>
				<h1 className={s.mainTitle}>
					<span className={s.primaryText}>{messages.INNOVATION}</span>
					{messages.IN_EVERY_VOLT_IS_THE_DRIVING_FORCE_BEHIND_YOUR_PROGRESS}
				</h1>

				<p>{messages.WE_OFFER_INNOVATIVE_SOLUTIONS}</p>
			</article>

			<div className={s.poster}>
				<Image src={FIRST_SCREEN_IMAGE} alt="Image" />
			</div>

			<article className={s.aboutUs}>
				<h2 className={s.subTitle}>{messages.ABOUT_US}</h2>
				<h3 className={s.blockTitle}>
					<span className={s.primaryText}>{messages.WE_CARE}</span>
					{messages.ABOUT_YOUR_COMFORT_AND_SAVING_RESOURCES}
				</h3>

				<ul className={s[`aboutUs-desc`]}>
					<li>{COMPANY_NAME + messages.OUR_TEAM_OF_HIGHLY_QUALIFIED_EXPERTS}</li>
					<li>{messages.OUR_TEAM_IS_COMMITTED_TO_HIGH_QUALITY_SERVICE}</li>
				</ul>
			</article>

			<article className={s.contacts} id="contacts">
				<h2 className={s.subTitle}>{messages.CONTACTS}</h2>
				<h3 className={s.blockTitle}>
					<span className={s.primaryText}>{messages.CONTACT}</span>
					{messages.POINT_OF_ENERGY_WE_ARE_ALWAYS_THERE}
				</h3>

				<ul className={s[`contacts-list`]}>
					<li>{COMPANY_NAME + ', ' + COMPANY_EDRPOU}</li>

					{!isMobile && <li />}

					<li>
						<a className={s[`contacts-iconContainer`]} href={`tel:${COMPANY_PHONE}`}>
							<Image src={PHONE_ICON} alt={COMPANY_PHONE} />
							{COMPANY_PHONE}
						</a>
					</li>
					<li>
						<a
							className={s[`contacts-iconContainer`]}
							target="_blank"
							rel="noreferrer"
							href={`mailto:${COMPANY_EMAIL}`}
						>
							<Image src={EMAIL_ICON} alt={COMPANY_EMAIL} />
							{COMPANY_EMAIL}
						</a>
					</li>
					<li className={s[`contacts-iconContainer`]}>
						<Image src={CALENDAR_ICON} alt={COMPANY_SCHEDULE} />
						{COMPANY_SCHEDULE}
					</li>
					<li className={s[`contacts-iconContainer`]}>
						<Image src={MAP_ICON} alt={COMPANY_ADDRESS} />
						{COMPANY_ADDRESS}
					</li>
				</ul>

				<iframe
					className={s[`contacts-map`]}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</article>
		</>
	);
};

export default Home;
