const ValidateHousePage = (values) => {
  const errors = {};

  const tcknRegex = /^[1-9]{1}[0-9]{9}[02468]{1}$/;
  const nameAndSurnameRegex = /^[a-zA-Z_ğüşıöçĞÜŞİÖÇ ]*$/;
  const emailRegex = /^([A-Za-z]|[0-9])+$/;
  const phoneRegex = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/;

  if (!values.identityNumber) {
    errors.identityNumber = 'Zorunlu Alan!';
  } else if (
    values.identityNumber.length !== 11 ||
    !values.identityNumber.match(tcknRegex)
  ) {
    errors.identityNumber = 'T.C. Kimlik Numarası uygun formatta değildir.';
  }

  if (!values.firstName) {
    errors.firstName = 'Zorunlu Alan!';
  } else if (!values.firstName.match(nameAndSurnameRegex)) {
    errors.firstName = 'Adınız uygun formatta değildir.';
  }

  if (!values.lastName) {
    errors.lastName = 'Zorunlu Alan!';
  } else if (!values.lastName.match(nameAndSurnameRegex)) {
    errors.lastName = 'Soyadınız uygun formatta değildir.';
  }

  if (!values.email) {
    errors.email = 'Zorunlu Alan!';
  } else if (values.email.match(emailRegex)) {
    errors.email = 'Eposta adresi uygun formatta değildir.';
  }

  if (!values.phone) {
    errors.phone = 'Zorunlu Alan!';
  } else if (!values.phone.match(phoneRegex)) {
    errors.phone = 'Telefon numarası uygun formatta değildir.';
  }

  if (!values.guestCapacity) {
    errors.guestCapacity = 'Zorunlu Alan!';
  }

  return errors;
};

export default ValidateHousePage;
