export const setLocalStorageItem = (userName: string, password: string) =>
  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      username: userName,
      password: password,
      isLogged: true,
    })
  );

export const getLocalStorageItem = () => {
  let access;
  const key = localStorage.getItem("currentUser");
  if (key != null) {
    access = JSON.parse(key);
  }
  return access;
};
