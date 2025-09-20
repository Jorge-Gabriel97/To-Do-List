## JG To-Do List

Este é um projeto de desenvolvimento de uma aplicação de lista de tarefas (To-Do List), criada para demonstrar habilidades em tecnologias front-end.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Contato](#contato)

## Visão Geral

O projeto **JG To-Do List** é uma aplicação web interativa desenvolvida para ajudar na organização de tarefas diárias. O objetivo foi criar uma interface limpa, intuitiva e funcional, onde o usuário pode gerenciar seus afazeres de forma simples e direta. A aplicação salva os dados no navegador, garantindo que as tarefas não sejam perdidas ao recarregar a página. O design responsivo assegura uma ótima experiência de uso em qualquer dispositivo, seja desktop, tablet ou celular.

**Link para o projeto:** [jg-todo-list.netlify.app](https://jg-todo-list.netlify.app/)

## Funcionalidades

- **Adicionar Tarefas:** Permite que os usuários insiram novas tarefas em sua lista de forma rápida e prática.
- **Marcar como Concluída:** Um clique é suficiente para marcar uma tarefa como finalizada, alterando seu estado visualmente.
- **Remover Tarefas:** Funcionalidade para excluir tarefas que já foram concluídas ou não são mais necessárias.
- **Persistência de Dados:** As tarefas são salvas no *Local Storage* do navegador, garantindo que a lista permaneça intacta entre as sessões.
- **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, proporcionando uma experiência consistente em todos os dispositivos.

## Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas no desenvolvimento do projeto foram:

1.  **HTML5:** Para a estruturação semântica e organização do conteúdo da página.
2.  **CSS3:** Para a estilização completa, layout e garantia de responsividade, criando uma interface agradável e moderna.
3.  **JavaScript:** Utilizado para toda a lógica de programação e interatividade da aplicação, como adicionar, remover e gerenciar o estado das tarefas.
4.  **Git e GitHub:** Para o controle de versão do código, permitindo o rastreamento de alterações e o armazenamento do projeto.
5.  **Netlify:** Plataforma de hospedagem utilizada para o deploy contínuo da aplicação, tornando-a acessível na web.

## Instalação

Para executar este projeto localmente no seu ambiente de desenvolvimento, siga os passos abaixo:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/Jorge-Gabriel97/To-Do-List.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd jg-todo-list
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.

## Contato

**Jorge Gabriel**

- GitHub: https://github.com/Jorge-Gabriel97
- LinkedIn: https://www.linkedin.com/in/jorge-gabriel-579605228/

## Erros Bugs enfrentados

Tínhamos um problema no código que fazia com que, ao tentar remover apenas as tarefas concluídas, a lista inteira fosse apagada.
Isso acontecia porque, quando clicávamos na caixinha para marcar ou desmarcar uma tarefa, o programa se confundia com os números de identificação (IDs). Se uma tarefa tinha o ID "12", por exemplo, o programa lia apenas o primeiro dígito, o "1", e acabava atualizando a tarefa errada.
Isso criava uma bagunça nos dados salvos, e quando pedíamos para apagar as tarefas marcadas, o programa se perdia e apagava tudo.

**Descrição da correção**

Ajustamos a Leitura do ID: Primeiro, consertamos a parte do código que lia o número de identificação da tarefa. Agora, quando clicamos na tarefa de ID "12", ele entende o número "12" por completo, e não apenas "1". Isso garante que a tarefa certa seja marcada como concluída.
Centralizamos a Exibição: Para evitar futuras confusões, criamos uma função única responsável por desenhar a lista na tela. Agora, sempre que adicionamos, removemos ou alteramos uma tarefa, essa função redesenha a lista inteira a partir dos dados salvos, garantindo que o que vemos na tela é sempre um reflexo fiel do que está guardado na memória.
Com isso, o sistema agora consegue identificar corretamente quais tarefas estão concluídas e apaga apenas elas, como esperado.
