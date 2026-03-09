import type { ProcessadorPagamento } from '../interfaces/ProcessadorPagamento.js';

export class PagamentoPix implements ProcessadorPagamento {
  processar(valor: number): void {
    console.log(`[SISTEMA] Gerando QR Code PIX...`);
    console.log(`[PIX] Pagamento de R$ ${valor.toFixed(2)} aguardando confirmação.`);
  }
}