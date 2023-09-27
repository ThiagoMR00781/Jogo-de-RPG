function decisao(opcao){
    if(opcao == 1){
        cenario();
    }else if (opcao == 2){
        cenario();
    }
} 
let cenario = 0; 
let titulo = document.getElementById("titulo");
let texto = document.getElementById("texto");
let imagem = document.getElementById("imagem");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");

inicio();

function inicio(){
    cenario = 0;
    titulo.innerHTML = "O começo";
    texto.innerHTML = " Você é um estudante universitário estudando para as provas de fim de ano e devido a isso decide ir a biblioteca em busca dos livros que te ajudaram a ter o melhor desempenho nas provas. <br> Em meio as prateleiras um livro em específico chama sua atenção, a capa simples com palavras em dourado bordadas na capa são muito interessantes... <br> Você gostaria de levar com você?";
    botao1.innerHTML = "Não levar o livro"; //cenario 1
    botao2.innerHTML = "Levar o livro"; //cenario 2
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function resposta(opcao){
    switch(cenario){
        case 0: decisao0(opcao); break;
        case 1: decisao1(opcao); break;
        case 2: decisao2(opcao); break;
        case 3: decisao3(opcao); break;
        case 4: decisao4(opcao); break;
        case 5: decisao5(opcao); break;
        case 6: decisao6(opcao); break;
        case 7: decisao7(opcao); break;
        case 8: decisao8(opcao); break;
        case 9: decisao9(opcao); break;
        case 10: decisao10(opcao); break;
        case 11: decisao11(opcao); break;
        case 12: decisao12(opcao); break;
        case 13: decisao13(opcao); break;
        case 14: decisao14(opcao); break;
        case 15: decisao15(opcao); break;
        case 16: decisao16(opcao); break;
        case 17: decisao17(opcao); break;
        case 18: decisao18(opcao); break;
        case 19: decisao19(opcao); break;
    }
}

function decisao0(opcao){
    if(opcao == 1){
        cenario1();
    }else if(opcao == 2){
        cenario2();
    }
}

function cenario1(){
    cenario = 1;
    titulo.innerHTML = "FIM - Você perdeu";
    texto.innerHTML = "Você decide não levar o livro e continua com sua vida normalmente. <br> FIM DE JOGO - PARABÉNS VOCÊ ESTÁ EM SEU MUNDO.";
    botao1.innerHTML = "Voltar para o início!";
    botao2.innerHTML = "Voltar para o início!";
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao1(opcao){
   inicio();
}

function cenario2(){
    cenario =  2;
    titulo.innerHTML = "A magica acontece";
    texto.innerHTML = "Você decide levar para casa. Depois de um longo dia, voce se deita e decide ler o livro, ele tem uma historia medieval muito interessante. <br> De alguma forma algo acontece magicamente e você é puxado para dentro do livro. O cenário ao seu redor muda drasticamente. <br> Seu confortável apartamento se torna uma floresta gigantesca. Você pode ouvir o assovio dos pássaros ao seu redor e o farfalhar das folhas ao vento. <br> Muitas sensações e sentimentos passam por sua cabeça. <br> Você decide:";
    botao1.innerHTML = "Se desesperar"; //cenario 3
    botao2.innerHTML = "Manter a calma"; //cenario 4
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao2(opcao){
    if(opcao == 1){
        cenario3();
    }else if(opcao == 2){
        cenario4();
    }
}

function cenario3(){
    cenario = 3;
    titulo.innerHTML = "O caçador";
    texto.innerHTML = "Se desesperar. Aquilo não pode ser real, é impossível algo assim estar acontecendo. Você fica agitado e sai correndo. Você acaba caindo na armadilha de um caçador e fica preso. Você é capaz de pensar apenas no pior e seu desespero só aumenta. As amarras parecem ficar ainda mais apertadas. O caçador vai até você achando que é um animal, mas acaba te encontrando te liberando das amarras. Você assim como o homem diante de si se encontram confusos e desnorteados com a situação. <br> Você decide:";
    botao1.innerHTML = "Ser honesto"; //cenario 5
    botao2.innerHTML = "Mentir e inventar"; //cenario 6
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao3(opcao){
    if(opcao == 1){
        cenario5();
    }else if(opcao == 2){
        cenario6();
    }
}

function cenario4(){
    cenario = 4;
    titulo.innerHTML = "O vilareijo";
    texto.innerHTML = "Manter a calma e analisar a situação. Você se levanta e anda pela floresta analisando com atenção. Você acaba encontrando uma camponesa que está paseando por aquelas bandas, ela se assusta com sua presença e suas roupas diferentes. Mas você a conforta com palavras gentis. Ela te leva para o vilarejo onde vive e lá, você se estabelece. Você decide se vestir de maneira adequada para se misturar melhor com as pessoas daquele local. Explorando o vilareijo você encontra uma taberna e lá dentro sua visão é atraída rapidamente para uma grande guerreira. Ela fala alto e ri com uma caneca de bebida em mãos, mesmo com sua aparência ameaçadora ela não te passa uma energia ruim. <br> Você decide:";
    botao1.innerHTML = "Falar com a guerreira"; //cenario 7
    botao2.innerHTML = "Ignorá-la e ir buscar mais informações"; //cenario 8
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao4(opcao){
    if(opcao == 1){
        cenario7();
    }else if(opcao == 2){
        cenario8();
    }
}

function cenario5(){
    cenario = 5;
    titulo.innerHTML = "FIM - Você perdeu";
    texto.innerHTML = "Ser honesto e explicar a situação. Você em seu momento de confusão decide contar ao caçador tudo que ocorreu. Conta sobre a universidade, a biblioteca, o livro e sobre sua aparição repentina naquele lugar. A cada palavra que sai de sua boca a expressão facial do caçador se torna mais confusa e com desgosto. Ele pega sua espada e enfica em seu peito por achar que você era algum tipo de louco alucinando. <br> FIM DE JOGO";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao5(opcao){
    inicio();
}

function cenario6(){
    cenario = 6;
    titulo.innerHTML = "A guerreira";
    texto.innerHTML = "Mentir e inventar uma situação. Você fala que é de outro reino e estava vianjando quando parou para descansar e acabou caindo em sua armadilha. E agradece a ele por ter o ajudado. Ele acredita em suas palavras e lhe ajuda no vilarejo, lhe dando comida, roupa e armamento. Ele te leva para a taberna, onde você encontra a grande guerreira, e ele te explica que ela é alguém de sua confiança e que seria uma boa aliada em sua jornada. <br> Você decide:";
    botao1.innerHTML = "Ignora-la e continuar sua jornada"; //cenario 9
    botao2.innerHTML = "Falar com a guerreira"; //cenario 7
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao6(opcao){
    if(opcao == 1){
        cenario9();
    }else if(opcao == 2){
        cenario7();
    }
}

function cenario7(){
    cenario = 7;
    titulo.innerHTML = "A profecia";
    texto.innerHTML = "Você decide abordar a guerreira. Parece um movimento arriscado confiar toda a sua situação para alguém que você nem mesmo conhece, contudo, considerando a situação atual esse parece ser o menor de seus problemas. Com cuidado você começa a explicar sua situção. De como não faz ideia de como chegou até aquele lugar e que não sabe exatamente o que é aquele lugar. Suas palavras são ouvidas atentamente e em nenhum momento a mulher fala algo, ela parecia quere ouvir cada detalhe que você tinha a dizer. Você conta sobre o lugar que você veio e sobre a maneira que você veio lidando com a situação nas ultimas horas. Quando você termina de contar sua história os olhos da guerreira parecem se iluminar. Ela olha para você com surpresa e felicidade, fala coisas confusas sobre uma profecia e sobre destino, rapidamente ela se levanta e diz algo sobre ir até um bruxo. Seus movimentos bruscos te assustam. <br> Você decide";
    botao1.innerHTML = "Ir para a jornada"; //cenario 17
    botao2.innerHTML = "..."; //cenario 18
    botao2.style.display = "block";
    imagem.style.display = "none";

}

function decisao7(opcao){
    if(opcao == 1){
        cenario17();
    }else if(opcao == 2){
        cenario18();
    }
}

function cenario8(){
    cenario = 8;
    titulo.innerHTML = "Quem devo falar?";
    texto.innerHTML = "Ignorá-la e ir em busca de mais informações. Mesmo ela parecendo ser alguém que pudesse te auxiliar futuramente você decide não abordá-la e segue seu rumo dentro da taberna. Cercado de pessoas estranhas o ambiente parecia se tornar cada vez menos acolhedor para você. Os rostos desconhecidos iluminados apenas pela fraca luz de velas no ambiente eram aterrorizadores. Talvez seja melhor ir embora? Talvez seja a hora de conversar com alguém? <br> Você decide:";
    botao1.innerHTML = "Ir embora"; //cenario 10
    botao2.innerHTML = "Continuar observando"; //cenario 11
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao8(opcao){
    if(opcao == 1){
        cenario10();
    }else if(opcao == 2){
        cenario11();
    }
}

function cenario9(){
    cenario = 9;
    titulo.innerHTML = "FIM - Você perdeu";
    texto.innerHTML = "Você decide ignora-la e continuar sua jornada para sair daquele mundo. O caçador lhe ajuda, mas ele acaba descobrindo sobre suas mentiras . Desconfiado sobre suas verdadeiras intenções ele decide dar um fim logo aquilo te matando durante seu sono. <br> FIM DE JOGO ";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao9(opcao){
    inicio();
}

function cenario10(){
    cenario = 10;
    titulo.innerHTML = "A grande floresta";
    texto.innerHTML = "Você decide ir embora. Aquele ambiente já estava te sufocando. Do lado de fora o sol estava alto no céu, você só foi capaz de perceber o quão escuro estava lá dentro ao sair, sua vista queimava devido a forte luz. Andando pelo vilarejo você pode perceber o quão humilde o local era, crianças com roupas gastas brincavam pelas ruas de terra e vendedores cercavam as laterais da estrada parecendo querer vender seus produtos a todo custo. Por mais simples que aquela vida parecesse não aparentava ser ruim, transmitia uma sensação de paz em seu peito. Sem perceber você chega aos limites da cidade e diante de si há uma grande floresta, algo parecia te chamar lá pra dentro. <br> Você decide:";
    botao1.innerHTML = "Seguir voz desconhecida"; //cenario 13
    botao2.innerHTML = "Não ir atrás da voz"; //cenario 12
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao10(opcao){
    if(opcao == 1){
        cenario13();
    }else if(opcao == 2){
        cenario12();
    }
}

function cenario11(){
    cenario = 11;
    titulo.innerHTML = "O ultimato";
    texto.innerHTML = "Analisando as pessoas ao seu redor, todos passavam uma sensação de hostilidade. As opções não eram muitas. Contudo, dois em particular pareciam não serem tão ruins quanto os outros. De um lado estava a guerreira tomando algum líquido desconhecido direto da caneca, seu riso foi substituído por uma expressão pensativa. Do outro lado um homem de capuz batucava a mesa te olhando de relance, seus olhos seguiam cada movimento seu. <br> Você decide:";
    botao1.innerHTML = "Falar com a guerreira"; //cenario 7
    botao2.innerHTML = "Falar com o cara de capuz"; //cenario 16
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao11(opcao){
    if(opcao == 1){
        cenario7();
    }else if(opcao == 2){
        cenario16();
    }
}

function cenario12(){
    cenario = 12;
    titulo.innerHTML = "FIM - Parabéns você está de volta";
    texto.innerHTML = "Você não seguiu seus instintos e não encontrou ninguém disposto a ter ajudar. Os anos se passaram e você nunca encontrou uma forma de voltar pra casa, mas sendo honesto essa vida não te incomodava. Você não trocaria essa paz por nada. Com o passar do tempo as memórias de sua antiga vida foram sumindo, dia após dia você foi se esquecendo de quem era e de onde veio como um passe de mágica. Você viveu até seus ultimos dias naquele vilareijo. <br> FIM DE JOGO - PARABÉNS VOCÊ ESTÁ DE VOLTA AO SEU MUNDO.";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao12(opcao){
    inicio();
}

function cenario13(){
    cenario = 13;
    titulo.innerHTML = "Qual lado?";
    texto.innerHTML = "Algo dentro de si te manda seguir aquela voz. Parecia uma melodia te guiando por entre as árvores. Era como se os ventos quisessem te levar a algum lugar. Você ouve seu nome sendo sussurrado e segue sua intuição. Uma bifurcação se forma diante de si, de um lado, a luz do sol transpassava as folhas das arvóres e refletia no chão como um lindo desenho. Do outro, o caminho parecia se tornar cada vez mais estreito e escuro, você não sabia dizer exatamente o que havia no fundo devido tamanha escuridão. <br> Você decide:";
    botao1.innerHTML = "Caminho da luz"; //cenario 14
    botao2.innerHTML = "Caminho da escuridão"; //cenario 15
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao13(opcao){
    if(opcao == 1){
        cenario14();
    }else if(opcao == 2){
        cenario15();
    }
}

function cenario14(){
    cenario = 14;
    titulo.innerHTML = "FIM";
    texto.innerHTML = "Você decide seguir o caminho da luz. Entre as árvores você é capaz de ver jovens meninas com a pele esverdeada jogando algum tipo de jogo com uma bola feita de folhas, ao se aproximar delas as feições gentis rapidamente são substituídas por ameaçadoras. Seus doces sorrisos são substituídos por presas e seus olhos são preenchidos por uma coloração vermelha como sangue. Rapidamente o grupo investe em sua direção acarretando em um fim trágico para você. Infelizmente nem sempre as coisas são o que parecem. <br> FIM DO JOGO!! - INFELIZMENTE VOCÊ FOI ATRAÍDO PARA UMA ARMADILHA E ACABOU MORRENDO, BOA SORTE NA PRÓXIMA.";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao14(opcao){
    inicio();
}

function cenario15(){
    cenario = 15;
    titulo.innerHTML = "FIM";
    texto.innerHTML = "Você vai para o caminho da escuridão. As árvores retorcidas atrapalhavam sua visão e o caminho se tornava cada vez mais estreito, algo dentro de você te dizia que você havia tomado a decisão correta. No fim da trilha um homem de capuz batia seu cajado no chão e sussarrava seu nome. Por mais que apenas sussurros saissem da boca do homem, de alguma forma parecia que ele estava falando diretamente em seu ouvido. Lentamente você se aproxima dele, porém ao encostar em seu ombro o mundo rapidamente se torna branco. A floresta instantaneamente desaparece e você é capaz de ver apenas o nada. O homem suspeito que estava de costas agora se encontra em pé de frente a apenas algunas passos de distância de você, o capuz cobre quase completamente seu rosto e a ele lentamente diz:“Eu sei quem é você mas não sei quem ou o que te trouxe aqui. Você deve ir embora.” Com um estalar de dedos o mundo novamente se distorce e você acorda assustado em seu quarto como se tivesse tudo sido apenas um sonho, o livro está apoiado em seu peito com uma página marcada, assustado você apenas o fecha e decide ir embora. <br> FIM DO JOGO - PARABÉNS VOCÊ ESTÁ DE VOLTA AO SEU MUNDO.";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao15(opcao){
    inicio();
}

function cenario16(){
    cenario = 16;
    titulo.innerHTML = "FIM";
    texto.innerHTML = "Você tenta falar com o homem de capuz. Analisando-o de longe você acredita que ele é apenas mais um bebado do local. Contudo, decide dar uma chance. Lentamente você se aproxima dele, porém ao encostar em seu ombro o mundo rapidamente se torna branco. A taberna que se encontrava ao seu redor desaparece e um limbo é tudo que você vê, o silêncio reina em seus ouvidos e a conversa alta que te cercava já não está mais lá, apenas o silêncio. O homem suspeito se encontra em pé a algunas passos de distância de você, o capuz cobre quase completamente seu rosto e a ele lentamente diz: “não sei quem é você ou quem te trouxe aqui, mas você não deveria estar aqui.” Com um estalo de dedos o mundo novamente se distorce e você acorda assustado em seu quarto como se tivesse tudo sido apenas um sonho, o livro está apoiado em seu peito com uma página marcada, assustado você apenas o fecha e decide ir embora. <br> FIM DO JOGO - PARABÉNS VOCÊ ESTÁ DE VOLTA AO SEU MUNDO.";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao16(opcao){
    inicio();
}

function cenario17(){
    cenario = 17;
    titulo.innerHTML = "FIM";
    texto.innerHTML = "Você fica emocionado com aquela história toda e decide ajudar querendo uma aventura para enfim retornar para casa. Você concorda com ela e juntos se preparam na jornada em busca do bruxo. Após uma longa e trabalhosa aventura vocês encontram um mago que promete ajudar. Ao lado deles vocês libertam o vilareijo do mau que o cercava e enfim tem o merecido descanso. Você enfim vo,tou para casa e seu único desafio agora é formar na faculdade. <br> FIM DE JOGO";
    botao1.innerHTML = "Volta para o início"; 
    botao2.innerHTML = "Volta para o início"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao17(opcao){
    inicio();
}

function cenario18(){
    cenario = 18;
    titulo.innerHTML = "A ajuda";
    texto.innerHTML = "Assustado com toda aquele história de profecia, você acaba desmaiando na frente dela. Ao acordar você apenas espera que tudo aquilo tenha sido uma piada de mal gosto ou um sonho, contudo você é capaz de ver que o quarto ao seu redor não era o seu. Passeando pela casa você avista a guerreira que tinha encontrado na taberna e cobra explicações. Ela explica a situação e sobre a situação miserável que ela e seus companheiros se encontravam. Sobre clãs de bruxos suspeitos e algo sobre lavagem cerebral. Ela fala sobre uma profecia em que você era o personagem principal e de como ela precisava da sua ajuda. <br> Voce decide:";
    botao1.innerHTML = "Ir para a jornada"; //cenario 17
    botao2.innerHTML = "Se recusar a ajudar"; //cenario 19
    botao2.style.display = "block";
    imagem.style.display = "none";
}

function decisao18(opcao){
    if(opcao == 1){
        cenario17();
    }else if(opcao == 2){
        cenario19();
    }
}

function cenario19(){
    cenario = 19;
    titulo.innerHTML = "FIM";
    texto.innerHTML = "Você não seguiu seus instintos e se recusou a ajudar. Os anos se passaram e você nunca encontrou uma forma de voltar pra casa, mas sendo honesto essa vida não te incomodava. Você não trocaria essa paz por nada. Com o passar do tempo as memórias de sua antiga vida foram sumindo, dia após dia você foi se esquecendo de quem era e de onde veio como um passe de mágica. Você viveu até seus ultimos dias naquele vilareijo. <br> FIM DE JOGO - AS VEZES A MELHOR FORMA DE SAIR DE UMA SITUAÇÃO É CONTANDO COM A AJUDA DE ALIADOS.";
    botao1.innerHTML = "Voltar ao inicio"; 
    botao2.innerHTML = "Voltar ao inicio"; 
    botao2.style.display = "none";
    imagem.style.display = "none";
}

function decisao19(opcao){
    inicio();
}
