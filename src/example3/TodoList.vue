<template>
  <div>
    <h2>Todos Example 3</h2>
    <p>Injection via tsyringe</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type Todo } from '@/services/getTodos'
import { container } from 'tsyringe';
import { inject, onMounted, ref } from 'vue'
import { TodoService } from './Todo.service.ts';

const todoService = container.resolve(TodoService)
const todos = ref<Array<Todo>>([]);

onMounted(async () => {
    const gottenTodos = await todoService.getTodos(); 
    todos.value = gottenTodos;
}); 

</script>