import type { IEstrategiaRelatorio } from '../interfaces/IEstrategiaRelatorio.js';

export class GeradorRelatorio {
  gerar(estrategia: IEstrategiaRelatorio, dados: string[]): string {
    if (!dados || dados.length === 0) {
      return "Nenhum dado disponível para o relatório.";
    }
    
    return estrategia.gerar(dados);
  }
}