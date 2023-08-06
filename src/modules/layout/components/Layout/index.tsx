import { type ReactNode } from 'react';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';

import s from './Layout.module.scss';

interface IChildrenProps {
	children: ReactNode;
}

const Layout = ({ children }: IChildrenProps) => {
	return (
		<main className={s.container}>
			<HeaderContextWrapper>
				<Header />
			</HeaderContextWrapper>
			<section className={s.content}>{children}</section>
			<Footer />
		</main>
	);
};

export default Layout;
