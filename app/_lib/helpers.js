export function isValidNationalID(nationalID) {
  const regex = /^[a-zA-Z0-9]{6,12}$/;
  return regex.test(nationalID);
}
