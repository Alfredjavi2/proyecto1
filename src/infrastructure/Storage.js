const Storage = (function () {
  const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY;

  const get = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  const getStringify = () => JSON.stringify(get());

  const setItem = (key, value) => {
    const newStorage = { ...get(), [key]: value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStorage));
  };

  const emptyStorage = () =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify({}));

  return {
    get,
    getStringify,
    emptyStorage,
    setItem,
  };
})();

export default Storage;
