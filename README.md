# Typescript deep dive

Here is a repo where I put everything I learned about Typescript including terminology, design patterns.

## 1. Why do we care about types 

- Types are used by Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what VALUES are flowing around our codebase.

## 2. Type Annotations and Type Inference

- Type Annotations -> Code we add to tell TS what type of value variable will refer to.

We developers tell TS the type.

- Type Inference -> TS tries to FIGURE OUT what type of value a variable refers to.

TS guesses the type for us.

### Understanding Type Inference

```js 
    const color =             "blue"

    Variable Declaration       Variable Initialization
```

If declaration and initialization are on the same line, Typescript will figure out the type of "Color" for us.

```js 
    let apples;
    apples = 5
    
    => Type inference will not work anymore. `apples` has type `any`
```
