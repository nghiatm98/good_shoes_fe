export const TOKEN = "accessToken";

export const setStateStorage = (data: any, key: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
  }
};

export const getStateStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key) || "";
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

export const deleteStateStorage = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
  }
};

export const clearStorage = () => {
  try {
    return localStorage.clear();
  } catch (error) {
  }
};

export const saveToken = (data: string) => setStateStorage(data, TOKEN);
export const getToken = () => getStateStorage(TOKEN);
export const removeToken = () => deleteStateStorage(TOKEN);
