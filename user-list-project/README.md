# User-List project

> This is a small project that I have used `contextAPI` and made it enable to add or remove users toa list.

## What were provided:

- nothing

## What I did:

- I have 2 components inside of the `App.js`. At the first rendering we are seeing just one user. We can add more users to the list or we can delete users from the list that we want.
- We are just mapping through the list and returning other component inside of that parent component. So we can add and delete users just settin some state variables.

- so basically with `useState` we are adding users and deleting them.

```
src
    ├── App.css
    ├── App.js
    ├── components
    │   ├── AddUser.js
    │   ├── User.js
    │   └── UserList.js
    ├── context.js
    └── index.js
```
