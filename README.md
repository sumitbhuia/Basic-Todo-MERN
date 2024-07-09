# Full-Stack Todos APP
> I love todo apps , one of my favourite is google tasks . So though od designing one myself . [Here is my GIthub](https://github.com/sumitbhuia) . Do leave a star .
- **Frontend** - React

- **Backend**- express, jwt, zod

  

## Functions

- Different routes for

- /todos/signin

- /toods/signup

- /todos/create

- /todos/ - view all todos

- A button to mark them as done


## Flow chart 
<!-- Can change this flow chart to sequece diagram by changing graph LR to  sequenceDiagram  learn more about it in -->
[ Learn more about sequenceDiagram](https://stackedit.io/app)

```mermaid

graph LR
A[User]-- localhost/3000 --> B((/))
B --> C(Auth)
C --> D(/signin)
C --> E(/signup)
D --> F{/todos}
E --> F
F --> /ceate
F --> /mark
