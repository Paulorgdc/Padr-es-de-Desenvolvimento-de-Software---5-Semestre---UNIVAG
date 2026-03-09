import type { ProcessadorPagamento } from '../interfaces/ProcessadorPagamento.js';

export class PagamentoCartao implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`Processando cartão de crédito no valor de: R$ ${valor.toFixed(2)}`);
  }
}