import Image from 'next/image';

import CALENDAR_ICON from 'public/assets/calendar-icon.svg';
import EMAIL_ICON from 'public/assets/email-icon.svg';
import FIRST_SCREEN_IMAGE from 'public/assets/first-screen.jpg';
import MAP_ICON from 'public/assets/map-icon.svg';
import PHONE_ICON from 'public/assets/phone-icon.svg';

import {useMediaQuery} from '@modules/common/hooks';

import {
	COMPANY_ADDRESS,
	COMPANY_EDRPOU,
	COMPANY_EMAIL,
	COMPANY_EMAIL_SECOND,
	COMPANY_MAP_LINK,
	COMPANY_NAME,
	COMPANY_PHONE,
	COMPANY_SCHEDULE,
	MOBILE_BREAKPOINT,
} from '@utils/const';

import s from './Home.module.scss';

const Home = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return (
		<>
			<article className={s.intro}>
				<h1 className={s.mainTitle}>
					<span className={s.primaryText}>Інновації </span>у кожному вольті -
					рушійна
					сила вашого прогресу
				</h1>

				<p>
					Ми пропонуємо інноваційні рішення та аналіз ринку, щоб ви могли
					зробити
					вигідний вибір для вашого бізнесу чи побутових потреб.
				</p>
			</article>

			<div className={s.poster}>
				<Image src={FIRST_SCREEN_IMAGE} alt="Image"/>
			</div>

			<article className={s.aboutUs}>
				<h2 className={s.subTitle}>Про нас</h2>
				<h3 className={s.blockTitle}>
					<span className={s.primaryText}>Ми дбаємо </span>
					про ваш комфорт та економію ресурсів
				</h3>

				<ul className={s[`aboutUs-desc`]}>
					<li>
						{COMPANY_NAME} - команда висококваліфікованих експертів, які з метою
						забезпечити ваш бізнес та побутові потреби, працюють над постійним
						розвитком та оптимізацією послуг з постачання електроенергії. Наші
						експерти готові допомогти вам у виборі оптимальних енергетичних
						рішень та
						впровадженні енергоефективних технологій.
					</li>
					<li>
						Наша команда прагне до високої якості обслуговування та постійного
						розвитку, щоб задовольнити ваші потреби навіть у найскладніших
						умовах. Ми
						дбаємо про ваш комфорт та економію ресурсів, тому оберіть нас - ваш
						надійний партнер у світі енергетики.
					</li>
				</ul>
			</article>

			<article className={s.contacts} id="contacts">
				<h2 className={s.subTitle}>Контакти</h2>
				<h3 className={s.blockTitle}>
					<span className={s.primaryText}>Контактна </span>
					точка енергії - ми завжди поруч!
				</h3>

				<ul className={s[`contacts-list`]}>
					<li>{COMPANY_NAME + ', ' + COMPANY_EDRPOU}</li>

					{!isMobile && <li/>}

					<li>
						<a className={s[`contacts-iconContainer`]}
						   href={`tel:${COMPANY_PHONE}`}>
							<Image src={PHONE_ICON} alt={COMPANY_PHONE}/>
							{COMPANY_PHONE}
						</a>
					</li>

					{!isMobile && <li/>}

					<li>
						<a
							className={s[`contacts-iconContainer`]}
							target="_blank"
							rel="noreferrer"
							href={`mailto:${COMPANY_EMAIL_SECOND}`}
						>
							<Image src={EMAIL_ICON} alt={COMPANY_EMAIL_SECOND}/>
							{COMPANY_EMAIL_SECOND}
						</a>
					</li>
					<li>
						<a
							className={s[`contacts-iconContainer`]}
							target="_blank"
							rel="noreferrer"
							href={`mailto:${COMPANY_EMAIL}`}
						>
							<Image src={EMAIL_ICON} alt={COMPANY_EMAIL}/>
							{COMPANY_EMAIL}
						</a>
					</li>

					<li className={s[`contacts-iconContainer`]}>
						<Image src={CALENDAR_ICON} alt={COMPANY_SCHEDULE}/>
						{COMPANY_SCHEDULE}
					</li>
					<li className={s[`contacts-iconContainer`]}>
						<Image src={MAP_ICON} alt={COMPANY_ADDRESS}/>
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
