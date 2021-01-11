import { createStore } from 'vuex' ;

const store = createStore<any>({
    state() {
        return{
                todos: [
                    {
                        id: 1,
                        title: "work",
                        detail: "Write Article"
                    },

                    {
                        id: 2,
                        title: "selfcare",
                        detail: "Yoga"
                    },

                    {
                        id: 3,
                        title: "work",
                        detail: "Finish Home Page"
                    },

                    {
                        id: 4,
                        title: "selfcare",
                        detail: "Meditate"
                    }

                ],
           
        };
    },
    
    mutations: {
        addTodo(state, todoData) {
            const newTodo = {
                id: new Date().toISOString(),
                title: todoData.title,
                detail: todoData.detail
            };

            state.todos.unshift(newTodo);
        }
    },
    actions: {
        addTodo(context, todoData) {
            context.commit('addTodo', todoData);
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        },
        todo(state) {
            return (todoId: any) => {
              return state.todos.find((todo: any) => todo.id === todoId);
            };
          },
    },
   
});

export default store;