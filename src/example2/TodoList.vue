<template>
  <div>
    <h2>Todos Example 2</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getTodosKey } from '@/injectionKeys';
import { type  Todo } from '@/services/getTodos'
import { inject, onMounted, ref } from 'vue'

const getTodos = inject(getTodosKey)
const todos = ref<Array<Todo>>([]);

onMounted(async () => {
    if(getTodos){
        const gottenTodos = await getTodos(); 
        todos.value = gottenTodos;
    }

}); 

</script>