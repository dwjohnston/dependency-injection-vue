import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TodoList from './TodoList.vue'
import { getTodosKey } from '@/injectionKeys'

const mockGetTodos = async () => [
  { id: 1, text: 'test test test' },

]

describe('TodoList', () => {
  it('renders todos from injected useTodos', async () => {
    const wrapper = mount(TodoList, {
      global: {
        provide: {
          [getTodosKey]: mockGetTodos
        }
      }
    })

    await flushPromises();

    const items = wrapper.findAll('li');

    expect(items).toHaveLength(1)
    expect(items[0].text()).toBe('test test test')
  })
})