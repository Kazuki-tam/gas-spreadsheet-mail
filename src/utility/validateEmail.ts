function validateEmail(mail: string): boolean {
  const pattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  return pattern.test(mail);
}

export { validateEmail };
