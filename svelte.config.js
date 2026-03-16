import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),
    paths: {
      base: '/portfolio'
    },
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (path.includes('favicon')) return;
        throw new Error(message);
      }
    }
  }
};

export default config;