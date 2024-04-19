---
theme: ../
layout: cover
---

# Slidev Theme Starter

Presentation slides for developers in <span class="text-elysia-purple">ElysiaJS</span> documentation style

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

-   📝 **Text-based** - focus on the content with Markdown, and then style them later
-   🎨 **Themable** - theme can be shared and used with npm packages
-   🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
-   🤹 **Interactive** - embedding Vue components to enhance your expressions
-   🎥 **Recording** - built-in recording and camera view
-   📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
-   🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

-   📝 **Text-based** - focus on the content with Markdown, and then style them later
-   🎨 **Themable** - theme can be shared and used with npm packages
-   🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
-   🤹 **Interactive** - embedding Vue components to enhance your expressions
-   🎥 **Recording** - built-in recording and camera view
-   📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
-   🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
}

function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id);
    const newUser = { ...user, ...update };
    saveUser(id, newUser);
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: center
class: "text-center"
zoom: 5
---

<p class="text-elysia-indigo-purple"> ElysiaJS </p>

---
layout: center
class: "text-center"
zoom: 3
---

<p class="text-elysia-lime-cyan"> Made for Humans </p>

---

```typescript twoslash
// @errors: 2322 1003
// @filename: server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
    .patch(
        '/user/profile',
        ({ body, error }) => {
            if(body.age < 18) 
                return error(400, "Oh no")

            if(body.name === 'Nagisa')
                return error(418)

            return body
        },
        {
            body: t.Object({
                name: t.String(),
                age: t.Number()
            })
        }
    )
    .listen(80)

export type App = typeof app

// @filename: client.ts
// ---cut---
// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from './server'

const api = treaty<App>('localhost')

const { data, error } = await api.user.profile.patch({
    name: 'saltyaom',
    age: '21'
})

if(error)
    switch(error.status) {
        case 400:
            throw error.value
//                         ^?

        case 418:
            throw error.value
//                         ^?
}

data
// ^?
```