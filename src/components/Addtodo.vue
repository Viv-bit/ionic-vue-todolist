<template>
  <ion-page>
    <todo-form  @save-todo="saveTodo"></todo-form>
    <ion-button page-default-back-link="/todolist" expand="block">Back to List</ion-button>
  </ion-page>
</template>

<script>
import TodoForm from './TodoForm.vue';


export default {
  emits: ["save-todo"],
  components: {
    TodoForm
    
  },
  
  methods: {
    addTodo(newTodo) {
      this.$store.dispatch('addTodo', newTodo);
    },

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