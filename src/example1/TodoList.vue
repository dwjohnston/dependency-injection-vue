<template>
  <div>
    <h2>Todos Example 1</h2>
    <p>Direct module use</p>

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodos } from './useTodos.ts'
const todos = useTodos()
</script>