# TypeScript 

Typed superset of JavaScript that adds strong, static typing.

- Adds helpful and productive features without changing JavaScript
- built for large applications, but great for applications of any-size

TypeScript is a transpiler, use future javascript features today.

## Dynamic Typing 

- variables may be assigned (and reassigned) to any type of value
- fields may be added to objects simply by assigning them 

## Static Typing

- variables are assigned a type, and type never changes
- fields must be predefined and can't be added manually

### Strong, Static Typing

- catch errors at compile time vs. runtime
- better tooling (refactoring, autocomplete, and so on)
  - avoid several classes of errors for free
- explicitly express intent
- write code for humans, not for computers

`npm install -g typescript`

## Add typescript to your project 

- Create  `tsconfig.json` file to add configurations
- run this command in the terminal => `tsc -w`
- create .ts file and and it will be appeared on dist file, and it will compile to old javascript

## Basic JavaScript Types

String, number, boolean, bigInt, null, undefined,symbol, object