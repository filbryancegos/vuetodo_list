<template>
  <div>
      <form @submit="addTodo">
          <input type="text" v-model="title" name="title" placeholder="Add todo...">
          <input type="submit" value="submit" class="btn">
      </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name: 'AddTodo',
  data() {
      return {
          title: ''
      }
  },
  methods: {
      addTodo(e) {
          e.preventDefault();
          const newTodo = {
            // id: uuid.v4(),
            title: this.title,
            completed: false
          }
          // Send up to parent
          this.$emit('add-todo', newTodo);
          this.title = ''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    form {
        display: flex;
        margin-top: 3em;
    }
    input[type="text"] {
        flex: 10;  
    }
    input[type="submit"] {
        flex: 2;
        background: #000;
        color: #fff;
        cursor: pointer;
    }
    input {
        padding: 10px;
        font-size: 16px;
    }
</style>
