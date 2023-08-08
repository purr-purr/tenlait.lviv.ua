export interface IAppNavigation {
	title: string;
	path?: string;
	group?: {
		[key: string]: string;
	}[];
}

export interface IDocsList {
	title: string;
	path: string;
}

export interface IMessages {
	[key: string]: string;
}
