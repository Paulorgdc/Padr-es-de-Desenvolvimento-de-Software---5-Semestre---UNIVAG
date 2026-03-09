import type { IEstrategiaRelatorio } from '../interfaces/IEstrategiaRelatorio.js';

export class RelatorioPDF implements IEstrategiaRelatorio {
  gerar(dados: string[]): string {
    let resultado = "--- RELATÓRIO PDF ---\n";
    dados.forEach(dado => {
      resultado += `| [ITEM]: ${dado} |\n`;
    });
    resultado += "---------------------";
    return resultado;
  }
}