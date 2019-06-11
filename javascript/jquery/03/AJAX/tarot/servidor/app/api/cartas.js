var api = {};

var cartas = [
    {
        _id: 1,
        nome: "O Louco",
        tipo: "Arcano Maior",
        descricao:"O Louco simboliza novos começos, novas experiências, simboliza o início da jornada. Quando aparece em uma consulta, geralmente indica que está na hora de deixar para trás tudo que empata nossos objetivos, como medos, dúvidas e preocupações, para trilhar novos caminhos. O arquétipo do Louco diz: 'saia em sua jornada, esse é o propósito da vida!'. A  carta sugere que esse novo começo seja recebido de braços abertos, sem receios ou amarras.",
        imagem:"https://www.astrolink.com.br/data/tarot/o-louco.jpg",
        link:"https://www.astrolink.com.br/tarot/o-louco"
    },
    {
        _id: 2,
        nome: "O Mago",
        tipo: "Arcano Maior",
        descricao:"A carta O Mago traz a mensagem de que seus talentos e seus próprios dons são as chaves para o seu sucesso em qualquer situação questionada. É como se você tivesse todas as ferramentas que precisa bem na sua frente para garantir que o sucesso potencial se manifeste.É uma carta que está diretamente ligada ao seu instinto e intuição. Quando você está sentindo um impulso ou uma vontade grande de fazer alguma coisa e O Mago aparece em sua leitura, siga essa intuição e as coisas podem acontecer.Pode indicar também uma pessoa dominadora ou perspicaz, ou que a situação deve ser resolvida com inteligência, praticidade e racionalidade. Pode também anunciar o começo de uma relação amorosa, mas que pode ter traços de imaturidade ou impulsividade. A carta tem a ver com a materialização do seu próprio destino.",
        imagem:"https://www.astrolink.com.br/data/tarot/o-mago.jpg",
        link:"https://www.astrolink.com.br/tarot/o-mago"
    },
    {
        _id: 3,
        nome: "A Sacerdotisa",
        tipo: "Arcano Maior",
        descricao:"A Sacerdotisa é um lembrete de que não temos como saber de tudo acerca de uma situação. Indica que ou não recebemos todos os fatos, ou não enxergamos todos os fatos ou outras pessoas podem estar retendo informações importantes. Quando esta carta aparece, indica segredos e que é melhor procurar pelas respostas.Você deve ponderar sobre a situação e saber que pode haver alguns acontecimentos ocorrendo nos bastidores dos quais você não tem total conhecimento. A carta mostra que para sabermos toda a verdade sobre algo, temos que usar todos os recursos disponíveis, como nossa intuição, nosso poder de convencimento e a reflexão.A Sacerdotisa é um arcano altamente espiritual, mas não é limitada a isso. Ela lida com fatos e sugere que não temos acesso a todos eles no momento. Por isso ela não é uma carta que nos convida para a ação mas sim, de maneira sutil, nos convida para a reflexão. Quanto mais ponderamos sobre uma situação, mais temos chance de obter as respostas que buscamos.",
        imagem:"https://www.astrolink.com.br/data/tarot/a-sacerdotisa.jpg",
        link:"https://www.astrolink.com.br/tarot/a-sacerdotisa"
    },
    {
        _id: 4,
        nome: "A Imperatriz",
        tipo: "Arcano Maior",
        descricao:"Quando a Imperatriz aparece em uma consulta, geralmente indica que as coisas vão bem na situação questionada, como se cada coisa estivesse em seu devido lugar, exatamente como desejado.Este Arcano Maior também pode trazer informações sobre o tema 'mãe', seja sobre você no papel de mãe, sobre uma figura materna em sua vida ou na situação em questão. A Imperatriz é uma figura poderosa e muito segura de si. Sugere proteção e não questiona as decisões. Com a certeza de uma mãe cria bem seus filhos, ela não sugere dúvidas. Esta carta geralmente indica um bom presságio, assim como realização e sucesso.",
        imagem:"https://www.astrolink.com.br/data/tarot/a-imperatriz.jpg",
        link:"https://www.astrolink.com.br/tarot/a-imperatriz"
    },
    {
        _id: 5,
        nome: "O Imperador",
        tipo: "Arcano Maior",
        descricao:"Quando o imperador aparece em uma consulta, sugere que você está prestes a alcançar seus objetivos ou está no caminho certo. A conexão com Áries também tem a ver com liderança, controle e realização, ou seja, às vezes sugere que você assumirá um papel de líder ou controlará um problema.Pode indicar que este é um bom momento para iniciar um grande projeto, fazer orçamentos ou que novas oportunidades também podem surgir. De qualquer forma, pode ser importante procurar conselhos com uma figura de autoridade, como seu pai ou outra figura paterna antes de tomar decisões importantes.        ",
        imagem:"https://www.astrolink.com.br/data/tarot/o-imperador.jpg",
        link:"https://www.astrolink.com.br/tarot/o-imperador"
    },
    {
        _id: 6,
        nome: "O Papa",
        tipo: "Arcano Maior",
        descricao:"Quando o Papa aparece em uma consulta, as respostas remetem à busca de conselhos sábios. Esta carta também pode representar uma pessoa do signo de Touro relacionada à questão, em sua vida ou que está prestes a aparecer para interagir.Touro é um signo fixo muito familiarizado com rotina fixa e estrutura, coisas que trazem segurança, um sentimento primordial para o signo. O Papa encarna tudo isso e nos convida a voltar às nossas raízes e tradições. Sugere que você busque conhecimento ou conselhos sobre a situação em questão (um especialista ou um amigo sábio, por exemplo).A carta não indica que você deva tomar decisões importantes por conta própria. Pesquisa, estudo e aconselhamento, além de serem formas de fazer as coisas mais tradicionalmente, podem ser o caminho a seguir para resolver a situação em questão. A carta também representa melhora de status, mas que conselhos e assistência de pessoas ou instituições estruturadas são importantes para que isso aconteça.Por fim, pode significar também a busca por um poder superior, uma força maior que vem dentro de você e que em última análise, favorece uma nova chance de elevação espiritual.",
        imagem:"https://www.astrolink.com.br/data/tarot/o-papa.jpg",
        link:"https://www.astrolink.com.br/tarot/o-papa"
    },
    {
        _id: 7,
        nome: "Os Enamorados",
        tipo: "Arcano Maior",
        descricao:"Muitas vezes a carta Os Enamorados tem a ver com uma importante decisão que deve ser tomada. Quando a situação envolve trabalho ou amor, ela sugere que você siga sua intuição. Se o seu coração está mandando você seguir um caminho, confie em seus instintos. Só não faça as coisas pensando somente em você, pois o tiro pode sair pela culatra. Pense sempre em quem está envolvido, tente fazer o melhor para todos.É um casal, sugerindo que a decisão que tomamos influencia outras pessoas. Ou seja, o simbolismo é de que a questão em jogo pode alterar sua vida e a de outros. Em alguns casos, a carta pode indicar uma situação onde você tem que escolher entre determinada situação na questão, ou está sendo forçado a decidir entre dois empregos, um que trará dinheiro e um que trará felicidade, etc. A escolha feita só depende de você. O importante é seguir o que o seu coração mandar, como a carta sugere. Só pense nos envolvidos para evitar machucar alguém e assim, a paz e harmonia prevalecerão.",
        imagem:"https://www.astrolink.com.br/data/tarot/os-enamorados.jpg",
        link:"https://www.astrolink.com.br/tarot/os-enamorados"
    },
    {
        _id: 8,
        nome: "O Carro",
        tipo: "Arcano Maior",
        descricao:"Esta carta tende a anunciar vitórias e sucessos. Porém, diz que nada vem de bandeja. Mesmo com o sucesso batendo à porta, você deve batalhar por ele. Pode significar uma vitória, mas que deve ser merecida. Simboliza o trabalho duro e a dedicação a longo prazo. Indica que o sucesso não vem fácil, ele deve ser conquistado.Quando esta carta aparece em uma consulta, significa que você deve tomar as rédeas do seu destino e estar preparado para aproveitar as oportunidades que aparecem. Oportunidades estas que estão ligadas à questão perguntada ou de uma forma mais abrangente, uma promoção, um cargo de liderança em um projeto, um novo curso, um novo amor ou um grande passo no relacionamento atual.Porém, não tente dar um passo maior que a perna, você só deve assumir uma responsabilidade se souber que cumprirá. Por isso, não aceite cargos além de sua competência ou prazos que não conseguirá cumprir, caso contrário o sucesso poderá escapar entre os dedos.Câncer é o signo associado a esta carta, por isso ela também pode significar alguma pessoa do signo de Câncer em sua vida ou em torno da situação questionada. É um signo que trabalha duro e atinge o sucesso através de esforços longos e sustentados, e esta é a mensagem da carta: a vitória é quase certa, mas não virá de bandeja.",
        imagem:"https://www.astrolink.com.br/data/tarot/o-carro.jpg",
        link:"https://www.astrolink.com.br/tarot/o-carro"
    },
    {
        _id: 9,
        nome: "A Força",
        tipo: "Arcano Maior",
        descricao:"A Força representa as melhores características do signo de Leão, como coragem, determinação, resiliência e força, boas chaves para o sucesso. Porém, indica que para realizar seus objetivos, você também precisará de autocontrole para domar seus 'leões' interiores, que podem representar tanto seus conflitos internos quanto os obstáculos que a vida nos impõe.Em uma consulta ao Tarot, quando aparece tende a representar que algo superior nos ajudará a sobrepujar qualquer dificuldade pela qual estejamos passando ou envolvida na situação. Sugere proteção dos nossos objetivos, indicando mais foco e autocontrole em torno da situação.Geralmente indica que há um tipo de 'anjo da guarda' envolvido na questão, disposto a ajudar no seu caminho até a vitória ou a resolução bem-sucedida de alguma situação. Pode indicar também algo que resistiu ao teste do tempo por causa da lealdade e força de vontade.",
        imagem:"https://www.astrolink.com.br/data/tarot/a-forca.jpg",
        link:"https://www.astrolink.com.br/tarot/a-forca"
    },
    {
        _id: 10,
        nome: "O Eremita",
        tipo: "Arcano Maior",
        descricao:"Quando a carta do Eremita aparece em uma consulta, pode significar que precisamos refletir em relação à situação. Às vezes é preciso dar um tempo e se isolar para ponderar e analisar melhor uma questão. Esta pode ser a mensagem que O Eremita traz: a necessidade de dar uma pausa e refletir. Ou seja, este Arcano Maior anuncia que pode ser a hora de se afastar e analisar, mergulhar no seu interior em busca das respostas que você precisa no momento.Nunca pense no Eremita de forma negativa. Quando ele surgir, lembre-se que geralmente a carta mostra a necessidade de tirar um tempo para si, para poder pensar na vida e mergulhar no seu interior, procurando a verdade e as respostas certas advindas da sabedoria. Se a consulta é sobre relacionamentos, por exemplo, a carta pode sugerir que no momento é melhor se afastar e ver a situação de fora - ou parar para uma reflexão.A carta indica que não é hora de agir impulsivamente e sim de passar um tempo pensando nas coisas que estão acontecendo. Você precisa mergulhar no seu interior e, ao fazer isso, poderá iluminar seu caminho até o objetivo ou solução desejada. A carta sugere que você precisa desenvolver seu espírito através de uma profunda introspecção, encontrar sua própria luz e fazer seu próprio caminho. Fique sozinho ou associe-se apenas com aqueles que estão mais alinhados com o seu momento. Não desperdice tempo e energia com quem não está na mesma vibe que você.",
        imagem:"https://www.astrolink.com.br/data/tarot/o-eremita.jpg",
        link:"https://www.astrolink.com.br/tarot/o-eremita"
    },
    {
        _id: 11,
        nome: "A Roda da Fortuna",
        tipo: "Arcano Maior",
        descricao:"A Roda da Fortuna representa basicamente a colheita daquilo que plantamos. Apesar do seu significado otimista, ela não traz prosperidade, sorte e fortuna do nada. Tudo isso está relacionado às ações que você tomou até o momento. Se você preparou o terreno fazendo escolhas sensatas e tocando seus projetos com afinco, seus objetivos serão realizados. Você semeou e regou sua plantação, agora é hora de colher bons frutos.Porém, se você se acomodou ou agiu de forma imprudente, sua colheita pode não ser das melhores. Isso vale para o curso da vida ou para a situação questionada. Quando a oportunidade se apresentar, você deve estar bem preparado para agarrá-la.Júpiter, o planeta da sorte e expansão está associado a esta carta, por isso este Arcano Maior traz otimismo e anuncia que sua sorte pode estar prestes a mudar para melhor. Os signos fixos também influenciam a carta, assim, Escorpião, Leão, Aquário e Touro estão de alguma forma envolvidos na questão e podem trazer mensagens para a leitura.",
        imagem:"https://www.astrolink.com.br/data/tarot/a-roda-da-fortuna.jpg",
        link:"https://www.astrolink.com.br/tarot/a-roda-da-fortuna"
    },
    {
        _id: 12,
        nome: "A Justiça",
        tipo: "Arcano Maior",
        descricao:"Quando a carta da Justiça aparece em uma consulta, ela traz a mensagem de que a situação em questão tende a se resolver a seu favor, ou, pelo menos, da forma mais justa possível. Pode ser um assunto legal, o resultado final de uma situação específica, questões de relacionamento ou outras situações.O significado básico da carta muitas vezes fala sobre decisões equilibradas e justas. Pode ser uma decisão que você precisa tomar (ou que será tomada contra você), ou ainda documentos ou informações. Seja o que for, as decisões e ações tendem a ser a seu favor se estiver dentro do contexto normal. Representa a vitória através da lógica. Durante uma leitura com mais cartas, é importante observar as cartas juntas à da Justiça. Elas podem ajudar a entender o que está se passando e o que deve ser considerado para se tomar a decisão final.",
        imagem:"https://www.astrolink.com.br/data/tarot/a-justica.jpg",
        link:"https://www.astrolink.com.br/tarot/a-justica"
    },
    {
        _id: 13,
        nome: "O Enforcado",
        tipo: "Arcano Maior",
        descricao:"Quando o Enforcado aparece em uma consulta, quer dizer que você precisa se desapegar de algo e seguir em frente. Você pode estar se agarrando a algo que não traz satisfação na questão atual, como um amor não correspondido ou nocivo, um emprego que não te levará a lugar algum, uma promoção no trabalho que não sai, etc.Ao mesmo tempo em que é uma carta que sinaliza que você pode esperar um pouco, também é uma carta que sugere que você pode sair dessa inércia e agir, tentando acelerar ou mudar as coisas. É uma carta que representa um beco sem saída, algo que está estagnado e não dá para ver uma luz no fim do túnel. Parece que alguma força apertou o 'botão de pause' e está restringindo a situação mentalizada ou o atual momento.Há em jogo uma sensação de que você não consegue realizar algo por conta de uma incrível inércia. Muitas vezes o desapego pode exigir um sacrifício da sua parte, pode ser doloroso, mas depois que conseguir deixar o que quer que seja para trás, você se sentirá libertado das correntes que te prendiam.",
        imagem:"https://www.astrolink.com.br/data/tarot/o-enforcado.jpg",
        link:"https://www.astrolink.com.br/tarot/o-enforcado"
    }
    

];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(cartas[req.query.id]);

		res.json(cartas);
	},1500);

};

api.insere = function(req, res){
    db.remove({}, { multi: true }, function (err, numRemoved) {
    });

    db.insert(req.body.placar, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Sincronizado com sucesso: ' + newDoc._id);
        res.json({});
    });
}

module.exports = api;
