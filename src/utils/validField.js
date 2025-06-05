export const checkInput = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/
      .password;
  if (!emailRegex) return "Please enter a valid email";
  if (!passwordRegex) return "Please put minimum 8 character";
  return null;
};
