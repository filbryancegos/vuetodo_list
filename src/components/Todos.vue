<template>
  <div>
      <p :key="todo.id" v-for="todo in todos">
         <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
      </p>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'Todos',
  components: {
      TodoItem
  },
  props: {
    todos: {
        type: Array,
        required: true
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
