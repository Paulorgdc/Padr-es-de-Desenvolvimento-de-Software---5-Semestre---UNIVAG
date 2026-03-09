export interface IEstrategiaRelatorio {
  gerar(dados: string[]): string;
}

export class RelatorioPDF implements IEstrategiaRelatorio {
  gerar(dados: string[]): string {
    let res = "--- PDF REPORT START ---\n";
    dados.forEach(d => res += `[CONTENT] ${d}\n`);
    res += "--- PDF REPORT END ---";
    return res;
  }
}

export class RelatorioCSV implements IEstrategiaRelatorio {
  gerar(dados: string[]): string {
    return "HEADER_CSV\n" + dados.join(";\n") + ";";
  }
}

export class RelatorioHTML implements IEstrategiaRelatorio {
  gerar(dados: string[]): string {
    return `<ul>\n${dados.map(d => `  <li>${d}</li>`).join("\n")}\n</ul>`;
  }
}

export class GeradorRelatorio {
  gerar(estrategia: IEstrategiaRelatorio, dados: string[]): string {
    if (!dados.length) return "Nenhum dado para processar.";
    return estrategia.gerar(dados);
  }
}

const executarRelatorios = () => {
  const dadosVendas = ["Venda 01 - R$ 150", "Venda 02 - R$ 300", "Venda 03 - R$ 90"];
  const gerador = new GeradorRelatorio();

  console.log("--- Atividade 1 (Refatoração) ---");

  console.log("\n[TESTE PDF]:");
  console.log(gerador.gerar(new RelatorioPDF(), dadosVendas));

  console.log("\n[TESTE CSV]:");
  console.log(gerador.gerar(new RelatorioCSV(), dadosVendas));

  class RelatorioXML implements IEstrategiaRelatorio {
    gerar(dados: string[]): string {
      return `<vendas>${dados.map(d => `<venda>${d}</venda>`).join("")}</vendas>`;
    }
  }

  console.log("\n[TESTE XML - NOVA EXTENSÃO]:");
  console.log(gerador.gerar(new RelatorioXML(), dadosVendas));
};

executarRelatorios();