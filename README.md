  // Reduz: Reduz é um gerenciador de estado complexo para React, e possui sua arquitetura denominada FLUX
    - Arquitetura FLUX: 
      - é a forma de alterar estados globais na aplicação
      
      Example: 
        - Em uma listagem de Products, é feita uma ação de adição de Products ao Carts que passa por Middlewares que verificam a validação dos dados (Redux-Saga).
          - Example of Middleware (Redux-Saga): faz requisição na API para checagem de estoque
          - Action: ADD_PRODUCT_TO_CART
        - A requisição é enviada ao Reducer de Cart que armazena no estado aquele Product selecionado
        - O Reducer ao terminar a Action se comunica atravez da conexão com a listagem de Product atualizando assim a listagem de Products, atualizando o estoque...