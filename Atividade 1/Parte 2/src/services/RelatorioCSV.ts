import type { IEstrategiaRelatorio } from '../interfaces/IEstrategiaRelatorio.js';

export class RelatorioCSV implements IEstrategiaRelatorio {
  gerar(dados: string[]): string {
    const cabecalho = "DADO_RELATORIO\n";
    const linhas = dados.join(",\n");
    return cabecalho + linhas + ",";
  }
}