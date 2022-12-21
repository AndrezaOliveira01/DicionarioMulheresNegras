function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "Marielle Franco",
            imagem: "https://i.postimg.cc/8fS8KSGX/marielle-franco.png",
            descricao: "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma soci�loga, feminista, militante dos direitos humanos e pol�tica brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a elei��o municipal de 2016, com a quinta maior vota��o. Cr�tica da interven��o federal no Rio de Janeiro e da Pol�cia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de mar�o de 2018, foi assassinada a tiros.",
            citacao: "Quantos mais v�o precisar morrer para que essa guerra aos pobres acabe?",
        },
        bio02: {
            nome: "L�lia Gonzalez",
            imagem: "https://i.postimg.cc/2q1f3GTG/lelia-gonzalez.png",
            descricao: "L�lia Gonzalez foi uma intelectual, pol�tica, professora e antrop�loga brasileira.Ajudou a fundar institui��es como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua milit�ncia em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas elei��es seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente",
            citacao: "A gente n�o nasce negro, a gente se torna negro. � uma conquista dura, cruel e que se desenvolve pela vida da gente afora.",
        },
        bio03: {
            nome: "Angela Davis",
            imagem: "https://i.postimg.cc/LJ6SF21r/angela-davis.png",
            descricao: "Angela Yvonne Davis � uma professora e fil�sofa socialista estado-unidense que alcan�ou notoriedade mundial na d�cada de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua milit�ncia pelos direitos das mulheres e contra a discrimina��o social e racial nos Estados Unidos e por ser personagem de um dos mais pol�micos e famosos julgamentos criminais da recente hist�ria dos Estados Unidos.",
            citacao: "N�o aceito mais as coisas que n�o posso mudar, estou mudando as coisas que n�o posso aceitar.",
        },
        bio04: {
            nome: "Concei��o Evaristo",
            imagem: "https://i.postimg.cc/Z9XzNNMS/conceicao-evaristo.png",
            descricao: "Maria da Concei��o Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na d�cada de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede p�blica de ensino da capital fluminense. � Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a disserta��o Literatura Negra: uma po�tica de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, c�nticos irm�os (2011), na qual estuda as obras po�ticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
            citacao: "O importante n�o � ser o primeiro ou primeira, o importante � abrir caminhos.",
        },
        bio05: {
            nome: "Carolina de Jesus",
            imagem: "https://i.postimg.cc/Fdc5VKMJ/carolina-de-jesus.png",
            descricao: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Di�rio de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canind�, na zona norte de S�o Paulo, sustentando a si mesma e seus tr�s filhos como catadora de pap�is. Em 1958 tem seu di�rio publicado sob o nome Quarto de Despejo, com aux�lio do jornalista Aud�lio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze l�nguas.",
            citacao: "Ah, comigo o mundo vai modificar-se. N�o gosto do mundo como ele �",
        },
        bio06: {
            nome: "Rosa Parks",
            imagem: "https://i.postimg.cc/K1q2Zw74/rosa-parks.png",
            descricao: "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, s�mbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1� de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no �nibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos �nibus de Montgomery e posteriormente viria a marcar o in�cio da luta antissegregacionista.",
            citacao: "Voc� nunca deve ter medo do que est� fazendo quando est� certo.",
        }
    }

    var content = document.getElementById("content")

    for (var bio in biografias) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' +
            biografias[bio].imagem +
            '" />' + 
            "<details>" + 
            "<summary>" + 
            biografias[bio].nome +
            "</summary>" +
            "<p>" +
            biografias[bio].descricao +
            "</p>" + 
            "<blockquote>" + 
            "<q>" + 
            biografias[bio].citacao +
            "</q>" +
            "</blockquote>" +
            "</details>" +
            "</div>"
    }
}

carregaDicionario();
