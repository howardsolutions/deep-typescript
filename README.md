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

### Any Types

- a type, just like "boolean, or string".

- TS has NO idea what this is - CAN'T CHECK FOR CORRECT PROPERTY REFERENCES. 

- AVOID VARIABLES WITH ANY TYPE AT ALL COST.

## 3. Annotations with Functions and Objects

### Type annotations for functions

Code we add to tell TS what type of arguments a function will receive and what type of values it will return.

### Type inference for functions

TS TRIES to figure out what type of value a function will RETURN

## 4. Typed Arrays

Typed Arrays are arrays where each element is some consistent type of value.

### Why do we care? 

- TS can do type inference when extracting values from an array 

- TS can prevent us from adding INCOMPATIBLE values to the array

- We can get help with map, foreach, reduce functions

- Flexible - arrays can still contain multiple different types

### WHEN to use typed arrays?

- Any time we need to represent a COLLECTION OF RECORD with some arbitrary sort order.


## 5. Tuple

- LOOK similar to array, array-like structure where each element represents SOME PROPERTY OF A RECORD.
- The ORDER of type in tuple matter

- Is feature in TS but we're not widely use.

## 6. Interface

- Interfaces + Classes  = HOW we get really strong code reuse in TS.

### Interfaces 

Creates a new type, describing the property NAMES and VALUES types of an object.
