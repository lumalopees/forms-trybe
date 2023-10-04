window.onload = () => {
  // CAPTURA DOS ELEMENTOS
  const form = document.getElementById('form');
  const weightMarmita = document.getElementById('tamanho');
  const eggs = document.getElementById('ovo');
  const ticket = document.querySelector('.ticket');
  const orderList = document.getElementById('orderList');

  // CRIA OPTIONS COM TODAS AS MARMITAS DISPONÍVEIS NO OBJETO FOODS
  const getItemsMarmita = (data) => {
    const weightMarmita = document.getElementById('tamanho');
    for (let element of data.items) {
        const sizeOption = document.createElement('option')
        sizeOption.innerText = element.name;
        weightMarmita.appendChild(sizeOption);
    }
  };

  // CAPTURA OS VALORES DOS INPUTS E MOSTRA A NOTA FISCAL.
  form.addEventListener('submit', (event) => {
    //   const checkBox = document.getElementById('termos-uso');
    //   if (!checkBox.checked) {
          event.preventDefault();
    //   }


      const allEaseinputs = document.querySelectorAll('.my-inputs');
      const options = ["Nome:", "E-mail:","Tam. Marmita:", "Qtd Ovos:", "Comentários:"];
      for (let index = 0; index < allEaseinputs.length; index += 1) {
          const element = allEaseinputs[index];
          if (options[index] === "Tam. Marmita:") {
              getOrderList(`${options[index]} ${findMarmita(foods)}`);
          } else {
              getOrderList(`${options[index]} ${element.value}`);
          }
      }
  });

  // EXIBE OS ITEMS DO PEDIDO MAIS O VALOR TOTAL
  const getOrderList = (inputValue) => {
      const newElement = document.createElement('li');
      newElement.innerText = inputValue;
      orderList.appendChild(newElement);
      // findMarmita(foods)
      ticket.style.display = 'block';
  };

  // ENCONTRA A MARMITA DE ACORDO COM A OPÇÃO DO SELECT PARA 
  // DESCOBRIR O PREÇO.
  const findMarmita = (data) => {
      let marmita;
      for (let index = 0; index < data.items.length; index += 1) {
          if (weightMarmita.value === data.items[index].name) {
              marmita = data.items[index].name;
              break;
          }
      }
      return marmita;
  };

  // CHAMA A FUNÇÃO PARA POPULAR O SELECT COM AS OPÇÕES DE MARMITA
  getItemsMarmita(foods);
};

// JSON
const foods = {
  items: [
      {
          name: 'Marmitinha - 500g',
          price: 19.90
      },
      {
          name: 'Marmita - 800g',
          price: 23.90
      },
      {
          name: 'Marmitão - 1Kg',
          price: 27.90
      },
      {
          name: 'Marmitãozão - 2Kg',
          price: 39.90
      },
  ]
};