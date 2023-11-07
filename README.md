# ReactJS - Project 1

`WHAT DID I LEARN WHILE WORKING ON THIS PROJECT`

## 1. JSX

- In JSX we have to define inline styles using an object **'style={{color: 'red'}}'**.
- JSX produces a JavaScript expression.
- Statements are not allowed **(if/else, for, switch)**.

## 2. Components

- The components can have data, logic and appearance of the UI
- Here the Logic and UI are tightly coupled (HTML and JS are **colocated**).
- One Concern Per Component.

## 3. Props

- Props are used to pass data from **parent** component to **child** components (**down** the component tree).
- Communication channel betweeen a parent and a child component
- Passing props in component `<Pizza pizzaImg={data.photoName}
name={data.name}/>`.

## 4. Immutability

- Props are readonly or **immutable** (can't be changed).
- To mutate props we need state.
- Mutating props would affect parent, creating **side effects** (not pure).

## 5. What One-Way Data Flow Means

- Data can only be passed from parent to children.

# **BASIC INFO**

- `Data` : Made of **props** and **state**.
- `State` : Internal data that can be
  updated by the **component's** logic.
- `Props` : Data coming from the
  **outside**, and can only be updated by the **parent** component.
- `Side Effect` : It happens whenever there's change in data that's located outside of the
  current function.
