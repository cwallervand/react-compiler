# React Compiler

In React functional components, when props within a component change, the entire component re-renders by default. In other words, if any value within a component updates, the entire component will re-render, including functions/components that have not had their values/props altered.

## With memoization

**Memoization** is an optimization technique used in computer science to improve the efficiency of algorithms by storing the results of expensive function calls and reusing them when the same inputs occur again. The key idea behind memoization is to avoid redundant calculations by caching the results of previously computed operations.

Dont use memoization blindly; it has a cost in form of memory. You should only use if for "expensive" functions.

### React.memo() vs useMemo()

**`React.memo()`** is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change.

**`useMemo()`** is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change

## With React Compiler

The introduction of the React Compiler in v19 lets React do more of the optimization work.

Use this command to check compatibility with React Compiler:

```
npx react-compiler-healthcheck@experimental
```

````
npm install eslint-plugin-react-compiler@experimental```
````

```
npm install babel-plugin-react-compiler@experimental
```

React Devtools (v5.0+) has built-in support for React Compiler and will display a “Memo ✨” badge next to components that have been optimized by the compiler.

Memoization uses up memory space on the machine it’s being run on and, as such, may lead to unintended effects.
