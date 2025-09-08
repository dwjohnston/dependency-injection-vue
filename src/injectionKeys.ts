import type { InjectionKey } from "vue";
import type { getTodos, Todo } from "./services/getTodos";

export const getTodosKey = Symbol() as InjectionKey<typeof getTodos>
