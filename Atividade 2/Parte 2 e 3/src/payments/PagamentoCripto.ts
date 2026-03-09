import type { ProcessadorPagamento } from '../interfaces/ProcessadorPagamento.js';

export class PagamentoCripto implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`[CRIPTOMOEDA] Processando pagamento em BTC/ETH no valor de R$ ${valor.toFixed(2)}`);
  }
}