import Swal from 'sweetalert2';

export const fetchAPI = async (cepNumber) => {
  const numberLength = 8;
  try {
    if (!cepNumber || cepNumber.length < numberLength
      || cepNumber > numberLength) {
      throw new Error('Por favor, digite um número de CEP válido');
    }
    const response = await fetch(`https://viacep.com.br/ws/${cepNumber}/json/`);
    return response.json();
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};
