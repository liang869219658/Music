import { App, Home, Music } from '../containers';

export const RouterConfig = [
	{
		path: '/',
		component: App,
		indexRoute:{ component: Home },
    childRoutes: [
        {path: 'home', component: Home},
				{path: 'music', component: Music},
		]
	}
];
