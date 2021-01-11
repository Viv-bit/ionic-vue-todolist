import { createStore } from 'vuex' ;

const store = createStore<any>({
    state() {
        return{
                todo: [
                    {
                        id: "a1",
                        title: "work",
                        detail: "Write Article"
                    },

                    {
                        id: "a2",
                        title: "selfcare",
                        detail: "Yoga"
                    },

                    {
                        id: "a3",
                        title: "work",
                        detail: "Finish Home Page"
                    },

                    {
                        id: "a4",
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
        }
    }
});

export default store;