import { useContext, useEffect } from 'react';

import { HeaderContext } from '@modules/layout/context/HeaderContext';
import NavGroup from '@modules/nav/components/NavGroup';
import NavItem from '@modules/nav/components/NavItem';
import cn from 'classnames';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import { NAVIGATION, type INavigation } from '@utils/data';

import s from './Nav.module.scss';

const Nav = () => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const { isMobileNavMode, handleMobileNavMode } = useContext(HeaderContext);

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isMobile) {
			handleMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isMobile]);

	return (
		<nav className={cn(s.container, isMobileNavMode && s.active)}>
			{NAVIGATION.map((item: INavigation) =>
				item.path ? (
					<NavItem key={item.title} title={item.title} path={item.path} />
				) : item.group ? (
					<NavGroup key={item.title} title={item.title} group={item.group} />
				) : null,
			)}
		</nav>
	);
};

export default Nav;
