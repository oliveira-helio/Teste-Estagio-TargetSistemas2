// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoMensal = require('./dados.json');



function analizarFaturamento(faturamento) {
	let menorValor = Infinity;
	let maiorValor =0;
	let diasFaturados = 0;
	let totalfaturado = 0;

	faturamento.forEach(dia => {
		if (dia.valor > 0) {
			diasFaturados++;
		}
		
		if (dia.valor < menorValor && dia.valor !== 0) {
			menorValor = dia.valor;
		}

		if (dia.valor > maiorValor) {
			maiorValor = dia.valor;
		}

		totalfaturado += dia.valor;
	});

	const mediaFaturamento = totalfaturado / diasFaturados;

	const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaFaturamento).length;

	return {
		menorValor,
		maiorValor,
		diasAcimaDaMedia,
		mediaFaturamento
	}
}

const resultado = analizarFaturamento(faturamentoMensal);

console.log(`A média de faturamento foi de R$${resultado.mediaFaturamento.toFixed(2)}`);
console.log(`O menor valor faturado em um dia foi de R$${resultado.menorValor.toFixed(2)}`);
console.log(`O maior valor faturado em um dia foi de R$${resultado.maiorValor.toFixed(2)}`);
console.log(`Houveram ${resultado.diasAcimaDaMedia} dias com faturamento superior à média`);