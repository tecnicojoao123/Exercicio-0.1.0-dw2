function calcularValorFinal(valor, temConvenio, temCartaoLoja) {
    let desconto = 0;
    
    if (temCartaoLoja && temConvenio) {
      desconto = 0.15;
    } else if (temConvenio || temCartaoLoja) {
      desconto = 0.1;
    }
    
    const valorFinal = valor - (valor * desconto);
    
    return valorFinal;
  }