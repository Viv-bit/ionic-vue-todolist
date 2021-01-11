<template>
  <form>
    <ion-item >
      <ion-label position="floating"> Add Task Title: </ion-label>
      <ion-input type="text" required />
    </ion-item>

    <ion-item >
      <ion-label position="floating"> Add Task Detail: </ion-label>
      <ion-input type="text" required />
    </ion-item>
    <ion-button>Add</ion-button>
  </form>
</template>

<script>
import { IonInput, IonLabel, IonItem, IonButton } from '@ionic/vue'

export default {
  
  components: {
    IonInput,
    IonLabel,
    IonItem,
    IonButton
  },
  methods: {
    addTodo(newTodo) {
      this.$store.dispatch('addTodo', newTodo);
    },

    saveTodo(todoData) {
      this.$store.dispatch('addTodo', todoData);
      this.$router.replace('/todos');
    }
  },
  
  
}
</script>

<style>

</style>