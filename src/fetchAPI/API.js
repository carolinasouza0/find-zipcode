import Swal from 'sweetalert2';

export const fetchAPI = async (cepNumber) => {
  try {
    if (!cepNumber) {
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
