import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import TodoList from './TodoList.vue';
import { provide } from 'vue';
import { getTodos } from '@/services/getTodos';
import { getTodosKey } from '@/injectionKeys';

const meta = {
  component: TodoList,
  tags: ['autodocs'],

      render: (args) => ({
        components: {TodoList},
        setup() {
               provide(getTodosKey, getTodos )
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

