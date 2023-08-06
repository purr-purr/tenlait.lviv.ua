import { FC } from 'react';
import Link from 'next/link';

import s from './NavGroup.module.scss';

const NavGroup: FC<{
	title: string;
	group: { [key: string]: string }[];
}> = ({ title, group }) => {
	return (
		<details className={s.container}>
			<summary>{title}</summary>
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
