// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const faturamentos = [
    { estado: "SP" , faturamento: 67836.43 },
    { estado: "RJ" , faturamento: 36678.66 },
    { estado: "MG" , faturamento: 29229.88 },
    { estado: "ES" , faturamento: 27165.48 },
    { estado: "Outros" , faturamento: 19849.53 }
]

let totalMensal = 0;

faturamentos.forEach(item => {
    totalMensal += item.faturamento
});

function percentualPorEstado(){
    faturamentos.forEach(item => {

        if( item.faturamento === 0) return;

        let percentual = (item.faturamento / totalMensal) * 100;
        item['percentual'] = percentual.toFixed(2);
        console.log(`o percentual de representação de ${item.estado} é de ${item.percentual}%`)
    });


}

percentualPorEstado();