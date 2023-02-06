function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) { // O uso de KeyCode está preterido
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => { // Arrow function do método
    document.addEventListener('click', event => {
      const el = event.target; // Captura o evento e associa a el
      if (el.classList.contains('btn-num')) this.addNumDisplay(el); // Se for num executa esse método
      if (el.classList.contains('btn-clear')) this.clear(); // Se for clear esse método...
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus(); /* Mantém o foco no display pra evitar que a tecla enter 
                          selecione o ultimo botão clicado do telcado virtual    */
  }; 
  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();
