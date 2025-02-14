![Image example of variable](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables/boxes.png)

# Variable

A variable is a container where you can store values .One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things.

# TypesOfVariable

**To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the var, let, or const keywords.**

- **Var-** The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

- **let-** The let declaration declares a block-scoped local variable, optionally initializing it to a value.
- **const-** Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can’t be changed through reassignment (i.e. by using the assignment operator), and it can’t be re-declared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

# Hoisting

Hoisting means that variable and function declarations are moved to the top of their scope before code execution. However, only declarations are hoisted, not initializations.

### Example of Hoisting with var

- ![Hoisting with var](./Screenshot%20from%202025-02-06%2014-47-22.png)

### How let and const Are Hoisted

- ![Hoisting with var](./Screenshot%20from%202025-02-06%2014-59-16.png)

## Example of Hoisting with const

- ![Hoisting with const](./Screenshot%20from%202025-02-06%2015-02-14.png)

## Temporal Dead Zone

- ![](./Screenshot%20from%202025-02-06%2015-08-58.png)
- ![](./Screenshot%20from%202025-02-06%2015-10-51.png)
