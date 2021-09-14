import routes from '../routes.json';
// import redirects from '../redirects.json';
import { entries, keys } from 'lodash';

export const ROUTE_HOME = 'home';

export const ROUTE_POSTS = 'posts';
export const ROUTE_POSTS_ID = 'posts/id';
export const ROUTE_POSTS_TITLE = 'posts/title';

export const ROUTE_CATEGORIES = 'categories';
export const ROUTE_CATEGORIES_LABEL = 'categories/label';

interface Route {
  path: string;
  routes?: Routes;
}

interface Routes {
  [key: string]: Route;
}

function flat(routes: Routes) {
  let root: Routes = JSON.parse(JSON.stringify(routes));
  let rootKeys = keys(root);

  while (rootKeys.length > 0) {
    const currentKey = rootKeys[0];
    const currentRoute: Route = root[currentKey];
    const currentPath = currentRoute.path;

    if (currentRoute.routes) {
      const routesEntries =
        entries(currentRoute.routes)
          .map(([key, route]) => {
            const modifiedKey = `${currentKey}/${key}`;

            const modifiedRoute: Route = {
              ...route,
              // TODO: Convert to URI valid path including leading slash
              path: `${currentPath}${route.path}`
            };

            return [modifiedKey, modifiedRoute];
          }) as [string, Route][];

      routesEntries.forEach(([key, route]) => {
        root[key] = route;
      });

      rootKeys = rootKeys.concat(
        routesEntries.map(([key, route]) => {
          return key;
        })
      );
    }

    rootKeys.shift();
  }

  return root;
}

const sitemap = flat(routes);

export function route(key: string, params?: { [key: string]: any }) {
  let path = sitemap[key].path
  if (params) {
    for (let param in params) {
      path = path.replace(`:${param}`, params[param]);
    }
  }
  return path;
}
