Demonstrates three different ways of defining dependency behaviour in different consuming contexts for a vue component. 


Example 1 - 

Direct module calls. Uses vi.mock to define the behaviour. 

The problem with this is that this works for vitest only, it won't work for storybook. 

Example 2 - 

Inject via vue's native dependency injection mechanism. 

Example 3 - 

Inject via tsyringe DI framework. 