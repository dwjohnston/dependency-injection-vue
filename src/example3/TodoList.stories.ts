import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import TodoList from './TodoList.vue';
import { provide } from 'vue';
import { getTodos } from '@/services/getTodos';
import { TodoService } from './Todo.service';
import { container } from 'tsyringe';

const meta = {
  component: TodoList,
  tags: ['autodocs'],

  render: (args) => ({
    components: { TodoList },
    setup() {

      class FakeTodoService extends TodoService {
        async getTodos() {
          return [
            {
              id: 1,
              text: "test test test"
            }
          ]
        }
      }
      container.register(TodoService, FakeTodoService)


      return {}
    },

    template: `
          <div>
            <TodoList/>
          </div>
        `,
  }),

} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {

};

