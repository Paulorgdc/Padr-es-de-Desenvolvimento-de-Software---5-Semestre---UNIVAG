import type { CalculoImposto } from '../interfaces/CalculoImposto.js';

export class ImpostoLivro implements CalculoImposto {
  calcular(preco: number, quantidade: number): number {
    return preco * quantidade;
  }
}