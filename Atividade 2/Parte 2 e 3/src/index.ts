import { PedidoService } from './services/PedidoService.js';
import { ImpostoEletronico } from './services/ImpostoEletronico.js';
import { ImpostoLivro } from './services/ImpostoLivro.js';
import { PagamentoPix } from './payments/PagamentoPix.js';
import { PagamentoCripto } from './payments/PagamentoCripto.js';

console.log("--- Executando Atividade Parte 2 (PW TechSphere) ---");
const impostoPadrao = new ImpostoEletronico();
const pagamentoPadrao = new PagamentoPix();
const servicePadrao = new PedidoService(impostoPadrao, pagamentoPadrao);

servicePadrao.processar(100.00, 2);

console.log("\n--- Executando Atividade Parte 3 (Extensão) ---");
const impostoLivro = new ImpostoLivro();
const pagamentoCripto = new PagamentoCripto();
const serviceExtensao = new PedidoService(impostoLivro, pagamentoCripto);

serviceExtensao.processar(50.00, 3);