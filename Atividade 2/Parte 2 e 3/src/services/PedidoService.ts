// Usamos 'import type' porque CalculoImposto é uma interface e o tsconfig exige isto
import type { CalculoImposto } from '../interfaces/CalculoImposto.js';
import type { ProcessadorPagamento } from '../interfaces/ProcessadorPagamento.js';

export class PedidoService {
  constructor(
    private imposto: CalculoImposto,
    private pagamento: ProcessadorPagamento
  ) {}

  processar(preco: number, quantidade: number): void {
    const totalComImposto = this.imposto.calcular(preco, quantidade);
    this.pagamento.processar(totalComImposto);
    console.log("Confirmação: Pedido processado e e-mail enviado!");
  }
}