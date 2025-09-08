<script setup lang="ts">
import {provide} from "vue";
import TodoList from './example1/TodoList.vue';
import TodoList2 from './example2/TodoList.vue'
import TodoList3 from './example3/TodoList.vue';

;
import { getTodos } from "./services/getTodos";
import { container } from "tsyringe";
import { ProductionTodoService, TodoService } from "./example3/Todo.service";
import { getTodosKey } from "./injectionKeys";

// Native vue injection
provide(getTodosKey, getTodos )

// injection via tsyringe
container.register(TodoService, ProductionTodoService);


</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <TodoList/>
  <TodoList2/>
  <TodoList3/>
</template>

<style scoped></style>
