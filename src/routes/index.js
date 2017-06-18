import App from '../containers/App';

const home= (nextState, cb)=> {
  require.ensure([], (require) => {
    cb(null, require("../containers/Home").default )
  }, 'home')
}

const music= (nextState, cb)=> {
  require.ensure([], (require) => {
    cb(null, require("../containers/Music").default )
  }, 'music')
}


const collection= (nextState, cb)=> {
  require.ensure([], (require) => {
    cb(null, require("../containers/Collection").default )
  }, 'collection')
}

export const RouterConfig = [
	{
		path: '/',
		component: App,
		indexRoute:{ getComponent: home },
    childRoutes: [
        {path: 'home', getComponent: home},
				{path: 'music', getComponent: music},
				{path: 'collection', getComponent: collection},
		]
	}
];
