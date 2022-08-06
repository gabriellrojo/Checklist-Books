# Sobre

Este projeto monolito e obedece a estrutura MVC e foi criado utilizando o NodeJs/Express, Handlebars e MySQL. Para a interação com o data base e aplicação da estrutura MVC, utilizei o sequelize. O nodemon foi utilizado como uma depedência de desenvolvimento pois atualiza sempre que o sistema sofre alguma alteração.

# Checklist Livros

<img width="1182" alt="Screen Shot 2022-08-06 at 05 11 54" src="https://user-images.githubusercontent.com/96317035/183259996-78c5c253-28ff-4401-a9a0-b898664bbe13.png">
<img width="1184" alt="Screen Shot 2022-08-06 at 05 12 12" src="https://user-images.githubusercontent.com/96317035/183260252-6346d6ea-2ca7-4484-8aa1-bdde9494dbe9.png">
<img width="920" alt="Screen Shot 2022-08-06 at 05 11 30" src="https://user-images.githubusercontent.com/96317035/183259997-7feac158-263f-45db-8ba9-20185a2223ce.png">

# O Desafio

O objetivo deste projeto consiste em alimentar uma tabela chamada "Books" que faz parte de um banco de dados criado no MySQL. O usuário insere o nome do livro e também o autor em um formulário apresentado a partir da criação de um porta (no caso desse projeto - host: localhost 3000).
Após a inserção, as obras são apresentadas ao usuário através rota "/books". O usuário pode editar, excluir ou marcar como lida cada obra apresentada. Se lida, o ícone referente a leitura se torna verde. O grande desafio deste projeto consiste em aplicar todas as operações de CRUD na pasta controllers do sistema.
