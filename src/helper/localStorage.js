export const setUsers = (user) => {
  let users = getUser();
  if (users) {
    users.push(user);
  } else {
    users = [];
    users.push(user);
  }
  if (users != null) {
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
  return null;
};

export const getUsers = () => {
  let obj = localStorage.getItem("users");
  if (obj != null) {
    let users = JSON.parse(obj);
    return users;
  }
  return null;
};

export const setUser = (user) => {
  if (user != null) {
    localStorage.setItem("user", JSON.stringify(user));
    return true;
  }
  return null;
};

export const getUser = () => {
  let obj = localStorage.getItem("user");
  if (obj != null) {
    let user = JSON.parse(obj);
    return user;
  }
  return null;
};

export const clearUser = () => {
  localStorage.setItem("user", JSON.stringify(null));
  return true;
};
