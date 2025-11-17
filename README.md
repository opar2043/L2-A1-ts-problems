## differences between interfaces and types in TypeScript
# Interface 
- Interface can be merged or redeclared
- Interface mainly uses object & classes
- use extends keywards to join two classes
# Type
- type can be redeclared
- it can be used primitives and do union (|)
- use (&) this

## What is the use of the keyof keyword in TypeScript? Provide an example

## Explain the difference between any, unknown, and never types in TypeScript.
# any
- it define the type can be any or no check
- Basically we turn of the Typescript power
- int x : any
# Unknown 
- when we dont know the type we use Unknown
- its safer than any. because we must check the type before using (type gaurd)
- int x = true;
- x = 'opar' : unknown
- if (typeof x === "string") {
  x.toUpperCase(); 

} 
# never
- its a type that never happen
- use when something will never return
## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
