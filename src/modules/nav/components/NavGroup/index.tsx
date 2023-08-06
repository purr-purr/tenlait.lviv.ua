import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ARROW_ICON from 'public/assets/arrow-icon.svg';

import s from './NavGroup.module.scss';

const NavGroup: FC<{
	title: string;
	group: { [key: string]: string }[];
}> = ({ title, group }) => {
	return (
		<details className={s.container}>
			<summary>
				{title}
				<Image src={ARROW_ICON} alt="icon" />
			</summary>
			<ul className={s.list}>
				{group.map((item) => (
					<li key={item.path}>
						<Link href={item.path}>{item.title}</Link>
					</li>
				))}
			</ul>
		</details>
	);
};

export default NavGroup;
