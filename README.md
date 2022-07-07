  // Reduz: Reduz é um gerenciador de estado complexo para React, e possui sua arquitetura denominada FLUX
    - Arquitetura FLUX: 
      - é a forma de alterar estados globais na aplicação
      
      Example: 
        - Em uma listagem de Products, é feita uma ação de adição de Products ao Carts que passa por Middlewares que verificam a validação dos dados (Redux-Saga).
          - Example of Middleware (Redux-Saga): faz requisição na API para checagem de estoque
          - Action: ADD_PRODUCT_TO_CART
        - A requisição é enviada ao Reducer de Cart que armazena no estado aquele Product selecionado
        - O Reducer ao terminar a Action se comunica atravez da conexão com a listagem de Product atualizando assim a listagem de Products, atualizando o estoque...

    - Para se criar um Estado no Redux é recomendado utilizar: 
      
      ... 
        import { configureStore } from '@reduxjs/toolkit'

        export const store = configureStore({
          reducer: () => []
        })
      ...
    
    - Para acessar o estado provido:

      - involver o componente a receber o estado com o Provider
        ...
          import { Provider } from 'react-redux'
          import { Catalog } from './components'
          import { store } from './store'

          <Provider store={store}>
            <Component />
          </Provider>
        ...

      - Acesso atraves do useStore():
      
      ...
        import { useStore } from "react-redux"

        const Component = () => {
          const store = useStore()
          const state = store.getState()

          ...
        }
      ...


      - Acesso atraves do useSelector():
      
      ...
        import { useSelector } from "react-redux"

        const Component = () => {
          const state = useSelector(state => state)

          ...
        }
      ...

      - Redux-Saga: 
        - é um middleware que intercepta a chamada da action vinda do redux
        - funções take: funções assincronas
          - takeLatest: se ação que entrou no Redux-saga entrou na requisição da API e ainda não terminou, e mesmo assim o cliente continua clicando varias vezes, a funçaõ takeLatest vai cancelar todas as chamadas anteriores e só executar a ultima 
          - takeEvery: executa todas as ações requisitadas pelo usuario!
          - takeLeading: se o cliente clicar 5 vezes, a função takeLeading vai descartar as 4 ultimas e só excutar a primeira e esperala terminar antes de seguir em frente
        - 


