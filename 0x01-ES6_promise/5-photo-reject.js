export default function uploadPhoto(str = 'fileName') {
  return new Promise((resolve, reject) => {
    reject(new Error(`${str} cannot be processed`));
  });
}
