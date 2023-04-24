const fillTag = document.querySelector('p');

export const fillCEP = (data) => {
  const { cep, logradouro, bairro, localidade, uf } = data;
  fillTag.innerHTML = `CEP: ${cep} - Logradouro: ${logradouro} -
  Bairro: ${bairro} - Localidade: ${localidade} - UF: ${uf}`;
};
