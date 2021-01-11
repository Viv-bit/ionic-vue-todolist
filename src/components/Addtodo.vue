<template>
  <todo-form  @save-todo="saveTodo"></todo-form>
</template>

<script>
import TodoForm from './TodoForm.vue';


export default {
  emits: ["save-todo"],
  components: {
    TodoForm
    
  },
  
  methods: {
    // addTodo(newTodo) {
    //   this.$store.dispatch('addTodo', newTodo);
    // },

    saveTodo(todoData) {
      console.log('saveTodo',todoData);
      this.$store.dispatch('addTodo', todoData);
      this.$router.replace('/todos');
    },
    
    
  },
  
  
}
</script>

<style>

</style>