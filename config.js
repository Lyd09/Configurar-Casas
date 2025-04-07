function copiarTexto() {
    var texto = document.getElementById("conteudo");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Valor copiado com sucesso");
}

function transformarTextoComPontuacao(texto) {
    if (texto != '') {
        var linhas = texto.split('\n');
        var textoFormatado = '';
        linhas.forEach(function (linha, index) {
            // Remove qualquer ícone ou texto entre o ✅ e o conteúdo
            var frase = linha.replace(/^[✅✔️-]*\s*/, '').trim(); // Remove ✅, ✔️, "-" e espaços extras
            frase = frase.replace(/[.;]$/, ''); // Remove qualquer pontuação no final da frase

            if (index === linhas.length - 1) {
                textoFormatado += '✅ ' + frase + '.'; // Última frase termina com ponto final
            } else {
                textoFormatado += '✅ ' + frase + ';\n'; // Demais frases terminam com ponto e vírgula
            }
        });
        return textoFormatado.trim(); // Remove espaçamentos extras no final
    }
    return '';
}

function generateValue() {
    let loc = document.getElementById('locinput').value.toUpperCase().trim(); // Remove espaços extras no início e no final
    let cod = document.getElementById('codinput').value;
    let desc = transformarTextoComPontuacao(document.getElementById('caracinput').value);
    let areatotal = document.getElementById('areatotalinput').value;
    let areaprivada = document.getElementById('areaprivadainput').value;
    let valor = document.getElementById('valorinput').value;

    // Identifica o município (última palavra) e formata a localização
    let locParts = loc.split(' '); // Divide a localização em partes
    let municipio = locParts.pop(); // Remove a última palavra como município
    let formattedLoc = `${locParts.join(' ')} - ${municipio}/MG`; // Junta o restante com o município formatado

    // Remove espaçamentos desnecessários
    let generate = `
${formattedLoc}

Código do imóvel: ${cod}

CARACTERÍSTICAS PRINCIPAIS:

${desc !== '' ? desc + '\n' : ''}
Área Total: ${areatotal} m²
Área Privada: ${areaprivada} m²
💰VALOR: R$ ${valor}

Agende uma visita hoje mesmo com nossa equipe:

📲(31) 9 9859 0590 / 3058-1600
Avenida Acadêmico Nilo Figueiredo, 3273, Santos Dumont II, Lagoa Santa/MG
    `.trim(); // Remove espaços extras no início e no final

    let area = document.getElementById('conteudo');
    area.value = generate;
}