export function payKorapay() {
    const refKey = `key${Math.random()}`
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm",
      reference: refKey,
      amount: 100000,
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com"
      },
      onClose: function () {
        // Handle when modal is closed
      },
      onSuccess: function (data) {
        // Handle when payment is successful
      },
      onFailed: function (data) {
        // Handle when payment fails
      }

    });
  }