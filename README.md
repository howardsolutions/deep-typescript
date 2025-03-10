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

- Interfaces + Classes = HOW we get really strong code reuse in TS.

### Interfaces

Creates a new type, describing the property NAMES and VALUES types of an object.

We could use the SINGLE interface to describe the shape of multiple objects.

### General Strategy for REUSABLE code in TS

- Create functions that accept ARGUMENTS that are TYPED with INTERFACES.

- Objects / Classes can decide to IMPLEMENT a GIVEN interface to Work with a function.

## 7. CLASSES

Blueprint to Create an object with some fields (value) and methods (functions) to represent a THING.

### Instance METHOD MODIFIER

- Different methods are PUBLIC, PRIVATE, PROTECTED.

THE GOAL of modifier: RESTRICT ACCESS TO different functions or different variables.

1. PUBLIC -> DEFAULT, This method can be called ANY WHERE, ANY TIME

2. PRIVATE -> This method CAN only be called by OTHER methods in this class.

3. PROTECTED -> This method CAN BE CALLED by OTHER METHODS IN THIS CLASS OR by other methods IN CHILD CLASSES.

### Type Guards Notes

- Use `typeof`: Narrow type of a value to a PRIMITIVE TYPE

- Use `instanceof`: Narrow down every OTHER type of value that is created with a CONSTRUCTOR function.

### More on design pattern notes.

- Interfaces are useful NOT BECAUSE we can describe a type, IT'S BECAUSE we can SETUP a CONTRACT between ONE class and OTHER CLASS, hey if you're doing XYZ, imagine all functionality I gonna give you

- Interface ONLY specify the PROPERTY Name and respective type of some classs or other object, interface doesn't make any claim that these methods will do correct things

- Typescript can't guarentee those methods will do correct things all the time, it just can make sure these methods exist and have appropriate types 

## Abstract Classes

- CAN'T be used to CREATE an object DIRECTLY

- ONLY used as a PARENT CLASS

- Can contain REAL implementation for some methods.

- The implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)

- CAN make child classes promise to implement some other method.

## INTERFACES vs ABSTRACT CLASSES

### INTERFACES (ALWAYS PREFER FOR CODE REUSE)

- Set up a CONTRACT between different classes.

- Use when we have VERY different objects that we want to WORK together.

- Promotes loose COUPLING

### INHERITANCE / ABSTRACT CLASSES (Unless in a scenario where we have some differeent objects that are VERY CLOSED RELATED)

- Set up a CONTRACT between different classes.

- Use when we're trying to build up a definition of an OBJECT.

- STRONGLY COUPLES CLASSES TOGETHER!!!!!!

## Enums 

- Follow near-identical syntax rules as normal objects

- Creates an Object with the same keys and values when converted from TS to JS

- Primary goal is to SIGNAL to other engineers that these are all closely related values.

- Use whenever we have a small FIXED set of values that are all closely related and known at comile time.