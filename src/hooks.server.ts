export const handle = async ({ event, resolve }) => {
    let lang = event.route.id?.indexOf('en') !== -1 ? 'en-US' : 'ar-SA';

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang)
    });

    return response;
};
