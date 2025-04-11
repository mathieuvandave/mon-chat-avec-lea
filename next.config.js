module.exports = {
  exportPathMap: async function () {
    const paths = {
      '/api/send-welcome-message': { page: '/api/send-welcome-message' },
    };
    return paths;
  },
};
