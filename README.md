# React Compiler

## What is the React Compiler?

It is a build-time only tool that automatically optimizes your React app. It works with plain JavaScript, and understands the [Rules of React](https://react.dev/reference/rules), so you don’t need to rewrite any code to use it.

The compiler also includes an eslint plugin that surfaces the analysis from the compiler right in your editor. The plugin runs independently of the compiler and can be used even if you aren’t using the compiler in your app.

## The "problem"

In React functional components, when props within a component change, the entire component re-renders by default. This also includes child components that have not had their values/props altered.

## With memoization

**Memoization** is an optimization technique used in computer science to improve the efficiency of algorithms by storing the results of expensive function calls and reusing them when the same inputs occur again. The key idea behind memoization is to avoid redundant calculations by caching the results of previously computed operations.

Dont use memoization blindly; it has a cost in form of memory. You should only use if for "expensive" functions.

### React.memo() vs useMemo()

**`React.memo()`** is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change.

**`useMemo()`** is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change

## With React Compiler

The introduction of the React Compiler in v19 lets you build more optimized code.
The compiler assumes that your code:

- Is valid semantic JavaScript
- Tests that nullable/optional values and properties are defined before accessing them
- Follows [The Rules of React](https://react.dev/reference/rules). The Rect compiler can verify many of the rules statically and will safely skip compilation when it detects an error.

React Devtools (v5.0+) has built-in support for React Compiler and will display a “Memo ✨” badge next to components that have been optimized by the compiler.

To get a better understanding of how the compiler works, check out the [React Compiler Playground](https://playground.react.dev/#N4Igzg9grgTgxgUxALhHCA7MAXABACQQEMATASwwHNcBeXACmFwAtjyqAaXbCbIgGwAKMCCShxsYXAF9kBNhUrCIABzABKWgD5cwADoZcudFgj8EAOn4RK9PSABKCDCQQwWCqvfUBuA0ZgEbFhDO0MjXAAeZgBGLX8Io2BWUkVpBmAePiERMQkwaU0AWl0AESJsSwwIAHd6dWkEo0iAelj48N8DaR8QaSA).

### Check code base compatability

Use this command to check compatibility with React Compiler:

```
npx react-compiler-healthcheck@experimental
```

### Use eslint plugin to identify code that wont be optimized

Use the eslint plugin `eslint-plugin-react-compiler` to help you catch uncompatable code.

The plugin can be used independently of the compiler, meaning you can use the eslint plugin even if you don’t use the compiler.

The eslint plugin will display any violations of the rules of React in your editor. When it does this, it means that the compiler has skipped over optimizing that component or hook. This is perfectly okay, and the compiler can recover and continue optimizing other components in your codebase.

```
npm install eslint-plugin-react-compiler@experimental
```

### Use the babel plugin to run the compiler in build pipeline

It is important that the compiler runs first in the build pipeline.

```
npm install babel-plugin-react-compiler@experimental
```

## Resources

- https://www.freecodecamp.org/news/react-compiler-complete-guide-react-19
- https://react.dev/learn/react-compiler
- https://blog.logrocket.com/react-memo-vs-usememo
- https://playground.react.dev
