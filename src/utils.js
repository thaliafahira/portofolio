export const getImageUrl = (path) => {
    const baseUrl = new URL('/', window.location.href).href;
    return new URL(`${baseUrl}assets/${path}`, window.location.href).href;
  };