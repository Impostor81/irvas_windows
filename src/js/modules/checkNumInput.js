const checkNumInput = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  // проверка, чтобы в полях телефона были только цифры, а если нет, любые символы нецифры заменяет на пустую строку, т.е. удаляет их, оставляя только цифры в строке
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  })
}

export default checkNumInput;