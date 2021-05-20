const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request) => {
            const {name} = request.params;
            const {lang} = request.query;
            return `About page ${name} and ${lang}`;
        },
    },
];

module.exports = routes;