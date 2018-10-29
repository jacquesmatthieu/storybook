import config from '@arborescence/config/app';

class UrlResolver {
  constructor() {
    this.routes = new Map();
  }

  get(name, params = {}) {
    const route = this.routes.get(name);
    return (route ? route.path : '')
      .replace(/:\w+\??/g, match => params[match.replace(/[:?]/g, '')] || '')
      .replace(/\/$/, '');
  }

  set(name, route) {
    this.routes.set(name, route.path ? {
      ...route,
      regex: new RegExp(`^${route.path.replace(/\/:\w+\?/g, '/?([\\w_-]*)').replace(/:\w+/g, '([\\w_-]+)')}\\/?$`),
    } : route);
    return this;
  }

  match(pathname) {
    return Array.from(this.routes.values())
      .find(route => route.regex && route.regex.test(pathname));
  }

  registerRoutes(routes, parents = []) {
    routes.forEach((route) => {
      if (route.routes) {
        this.registerRoutes(route.routes, route.name ? [...parents, route.name] : parents);
      }

      if (!route.name && route.path) {
        throw new Error(`Route ${route.path} has no name`);
      }

      if (!route.name) {
        return;
      }

      const existingRoute = this.routes.get(route.name);
      if (existingRoute) {
        // eslint-disable-next-line no-console
        console.warn(`Duplicate definition for route ${route.name}:\n- ${existingRoute.path}\n- ${route.path}`);
      }

      this.set(route.name, { ...route, parents });
    });
    return this;
  }

  getCurrentApp(pathname) {
    const match = this.match(pathname);
    return match ? config.apps.find(app => app.route === match.parents[0]) : null;
  }
}

export default new UrlResolver();
