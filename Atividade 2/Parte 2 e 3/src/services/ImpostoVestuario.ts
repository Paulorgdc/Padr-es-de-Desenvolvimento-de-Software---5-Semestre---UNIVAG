import type { CalculoImposto } from '../interfaces/CalculoImposto.js';

export class ImpostoVestuario implements CalculoImposto {
  calcular(preco: number, quantidade: number): number {
    const total = preco * quantidade;
    return total + (total * 0.10); // 10% de imposto
  }
}