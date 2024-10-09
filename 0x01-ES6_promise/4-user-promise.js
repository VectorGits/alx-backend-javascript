export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve(
      {
        firstName,
        lastName,
      },
    ).catch(() => new Error('Signup system offline'));
  });
}
