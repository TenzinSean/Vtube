import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'VTube';
    res.locals.routes = routes;
    next();
};

