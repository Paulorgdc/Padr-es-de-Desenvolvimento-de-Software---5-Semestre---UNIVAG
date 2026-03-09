import type { CalculoImposto } from '../interfaces/CalculoImposto.js';

export class ImpostoEletronico implements CalculoImposto {
  calcular(preco: number, quantidade: number): number {
    const total = preco * quantidade;
    const taxa = 0.15;
    return total + (total * taxa);
  }
}