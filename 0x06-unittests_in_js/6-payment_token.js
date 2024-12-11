function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successul response from the API' });
    }
  });
}

module.exports = getPaymentTokenFromAPI;
