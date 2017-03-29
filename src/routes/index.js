import { App, Home, Music, Collection } from '../containers';

export const RouterConfig = [
	{
		path: '/',
		component: App,
		indexRoute:{ component: Home },
    childRoutes: [
        {path: 'home', component: Home},
				{path: 'music', component: Music},
				{path: 'collection', component: Collection},
		]
	}
];
