export const validateEmail = (email) => {
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return "Can`t be empty";
  if (!emailPattern.test(email)) return "Not a valid email";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Can`t be empty";
  if (password.length < 6) return "Password should be at least 6 characters";
  return "";
};

export const validateRepeatPassword = (password, repeatPassword) => {
  if (!repeatPassword) return "Can`t be empty";
  if (password !== repeatPassword) return "Passwords do not match";
  return "";
};

export const validateLoginPassword = (password) => {
  if (!password) return "Can`t be empty";
  return "";
};
