const mobi = /Mobi/.test(navigator.userAgent);

const config = {
  api: {
    baseURL: process.env.REACT_APP_API_BASEURL
  },

  device: {
    isMobile: !!mobi,
    isDesktop: !mobi
  }
};

export default config;
