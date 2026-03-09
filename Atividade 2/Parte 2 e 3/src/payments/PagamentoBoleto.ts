import type { ProcessadorPagamento } from '../interfaces/ProcessadorPagamento.js';

export class PagamentoBoleto implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Gerando boleto bancário no valor de: R$ ${valor.toFixed(2)}`);
  }
}