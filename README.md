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


