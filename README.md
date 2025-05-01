# week 1js training

## Day 2 learnings;

Day 2 is dedicated to CSS;

## box model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins

## CSS properties, values, selectors, pseudo selectors, media queries.

| Concept         | What it does                           | Example                       |
| --------------- | -------------------------------------- | ----------------------------- |
| Property        | What you're styling                    | `color`, `padding`, `display` |
| Value           | Setting for a property                 | `red`, `16px`, `flex`         |
| Selector        | Targets HTML elements                  | `p`, `.btn`, `#id`, `div > p` |
| Pseudo-selector | Target element state or part           | `:hover`, `::before`          |
| Media Query     | Conditional styling for responsiveness | `@media (max-width: 768px)`   |

## Inline css

1. Inline css is used to apply styles to a single html element;
2. it is done by using a `style` attribute of html element;

## Internal css

1. Internal css is generally used to define styles for a single webpage.
2. Internal css is defined in the <head></head> section within the <style> </style> element.
3. example

```css
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Fundamentals Demo</title>

    <!-- Internal CSS  -->
    <style>
      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f9f9fb;
      }

      header {
        background-color: #2c3e50;
        color: white;
        padding: 1.5rem;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      main {
        max-width: 1000px;
        margin: 2rem auto;
        padding: 0 1rem;
      }

      section {
        margin-bottom: 3rem;
        background: #fff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }

      h2 {
        color: #34495e;
        margin-bottom: 1rem;
        border-bottom: 2px solid #eee;
        padding-bottom: 0.5rem;
      }

    </style>

  </head>

```

## Flex box

1. Flex box (Flexible Box Layout) is a layout model in CSS3 that arranges elements in a row or column and distributes space dynamically based on their content and the container.
2. It is used by using ` display: flex;`
3. general term is flex container on which display flex property is applied and the flex items on which the property of flex is applied.

4. properties to be applied on containers are

| Property          | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `display: flex`   | Enables flex behavior on the container                                  |
| `flex-direction`  | Defines the direction: `row`, `row-reverse`, `column`, `column-reverse` |
| `flex-wrap`       | Allows wrapping: `nowrap`, `wrap`, `wrap-reverse`                       |
| `justify-content` | Aligns items **horizontally** (main axis)                               |
| `align-items`     | Aligns items **vertically** (cross axis)                                |
| `align-content`   | Aligns multiple rows (if wrapping occurs)                               |
| `gap`             | Sets space between items                                                |

5. properties to be applied on flex items are :

| Property      | Description                                         |
| ------------- | --------------------------------------------------- |
| `flex-grow`   | Defines how much an item grows relative to others   |
| `flex-shrink` | Defines how much an item shrinks relative to others |
| `flex-basis`  | Sets the initial size before growing or shrinking   |
| `flex`        | Shorthand for `flex-grow flex-shrink flex-basis`    |
| `align-self`  | Overrides `align-items` for individual items        |
| `order`       | Controls visual order of items                      |

## Grid layout

1. CSS Grid Layout is a powerful layout system that lets you build complex, responsive web designs by placing elements into rows and columns.

Unlike Flexbox (which handles 1D — either row or column), Grid handles 2D layouts: both row and column at once.

To use grid we do ` display:grid;`

2.  Grid terms that are commonly used :

    - Grid container: The parent element with display: grid;

    * Grid items: The direct children of the grid container

    * Grid tracks: Rows and columns

    * Grid lines: The dividing lines between rows/columns

    * Grid areas: Named areas in the grid

3.  properties on container

        | Property                | Description                                                       |

    |-------------------------|-------------------------------------------------------------------|
    | `display: grid` | Enables grid layout |
    | `grid-template-columns` | Defines the number & width of columns (e.g., `1fr 2fr 1fr`) |
    | `grid-template-rows` | Defines the height of rows (e.g., `100px auto`) |
    | `grid-template-areas` | Names areas in the layout for easier placement |
    | `gap` / `row-gap` / `column-gap` | Sets spacing between grid cells |
    | `justify-items` | Aligns items horizontally **within each cell** |
    | `align-items` | Aligns items vertically **within each cell** |
    | `place-items` | Shorthand for `align-items` + `justify-items` |

4.  properties on items

| Property       | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `grid-column`  | Controls how many columns an item spans (`grid-column: 1 / 3`) |
| `grid-row`     | Controls how many rows an item spans (`grid-row: 2 / 4`)       |
| `grid-area`    | Places item into a named area defined in `grid-template-areas` |
| `justify-self` | Aligns item horizontally **within its grid cell**              |
| `align-self`   | Aligns item vertically **within its grid cell**                |
| `place-self`   | Shorthand for `align-self` + `justify-self`                    |

## complex grid section

1. this layout creates a structure commonly seen in web pages;
2. It has a section Header which spans full top row ;
3. A Sidebar, Main Content, and Extra Content in the second row;
4. A footer that spans full bottom row.
5. It is done using the grid template areas which help us to provide meaningful name and define the structure of the layout.
6. ```css
   grid-template-areas:
     "header header header"
     "sidebar content extra"
     "footer footer footer";
   ```
7. the above is the structure defined using the gird;
8. the grid-template-columns: 1fr 2fr 1fr; sets the ratios of three columns;
9. grid-template-rows: auto 300px auto; sets the ratio of the rows ;
10. later each names are targeted using the selectors to give specific background colours;

## Day 3 : JS basics and understanding DOM

### understanding var, let, const

1. variables are containers used to store data in js.
2. there are three ways to define it var, let and const.
3. On creation all of the three are hoisted but var is initialed with undefined and the let and const are in uninitialized state.
4. var is a global scope variable where the let and const are scoped variables.

### Data Types in js

1. primitive data types :

| Type        | Example                 | Description                                     |
| ----------- | ----------------------- | ----------------------------------------------- |
| `String`    | `"hello"`               | Sequence of characters                          |
| `Number`    | `42`, `3.14`, `-7`      | Integers or floats                              |
| `BigInt`    | `12345678901234567890n` | Large integers beyond `Number.MAX_SAFE_INTEGER` |
| `Boolean`   | `true`, `false`         | Logical values                                  |
| `undefined` | `let x;`                | Declared but not assigned                       |
| `null`      | `let x = null;`         | Empty or unknown value (intentional)            |
| `Symbol`    | `Symbol('id')`          | Unique and immutable values (for keys)          |

2. non primitive data

| Type           | Example                     | Description                                                                                                                                                                              |
| -------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Object`**   | `{ name: "Neha", age: 28 }` | A collection of **key-value pairs** used to store structured data. Keys are usually strings (or symbols), and values can be of any type.                                                 |
| **`Array`**    | `[1, 2, 3]`                 | A **list-like object** that stores values in an **ordered** sequence, accessible via index. Arrays are technically objects with special methods like `.push()`, `.pop()`, `.map()`, etc. |
| **`Function`** | `function greet() {}`       | A **block of reusable code** that can be called/invoked. Functions are objects too and can be assigned to variables or passed as arguments (first-class citizens).                       |
| **`Date`**     | `new Date()`                | Represents **date and time**. Useful for working with timestamps, formatting, and manipulating dates.                                                                                    |
| **`RegExp`**   | `/[a-z]/gi`                 | Regular expressions used for **pattern matching** within strings (e.g., search/replace).                                                                                                 |
| **`Map`**      | `new Map()`                 | A collection of **key-value pairs** where keys can be of **any type** (not just strings). Maintains insertion order.                                                                     |
| **`Set`**      | `new Set([1, 2, 3])`        | A collection of **unique values**. Useful for removing duplicates or testing membership.                                                                                                 |

### loops

Loops lets you repeat a block of code multiple times
| Loop | Example | Description |
|-------------|----------------------------------|-------------------------------------------|
| `for` | `for (let i = 0; i < 5; i++)` | Runs a block a specific number of times. |
| `while` | `while (condition)` | Runs **while** a condition is true. |
| `do...while`| `do { ... } while (condition)` | Runs **at least once**, then checks. |
| `for...of` | `for (let item of array)` | Loops through **values** of an iterable. |
| `for...in` | `for (let key in object)` | Loops through **keys** of an object. |

```js
for (let i = 1; i <= 3; i++) {
  console.log("Loop number:", i);
}
```

### Events

Events are actions or occurrences that happen in the browser (e.g., click, hover, keypress), and you can respond to them with functions.
| Event | Triggered When... |
|---------------|-----------------------------------|
| `click` | An element is clicked |
| `mouseover` | Mouse hovers over an element |
| `keydown` | A key is pressed |
| `submit` | A form is submitted |

```js

<button onclick="sayHi()">Click me</button>

<script>
  function sayHi() {
    alert("Hi there!");
  }
</script>

// or using js
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});



```

## Understanding DOM Manipulation in JavaScript

---

### What is the DOM?

**DOM (Document Object Model)** is a tree-like structure created by the browser from your HTML.

- Every HTML tag becomes a **node**.
- You can **select**, **create**, **modify**, or **remove** these nodes using JavaScript.

---

### Accessing Elements (Selectors)

| Method                          | Description                          |
| ------------------------------- | ------------------------------------ |
| `getElementById("id")`          | Selects one element by ID            |
| `getElementsByClassName("cls")` | Returns all elements with that class |
| `getElementsByTagName("tag")`   | Returns all elements with that tag   |
| `querySelector("css")`          | Selects **first** matching element   |
| `querySelectorAll("css")`       | Selects **all** matching elements    |

```js
const title = document.getElementById("mainTitle");
const buttons = document.querySelectorAll(".btn");


element.textContent = "New text";           // Changes only the text
element.innerHTML = "<b>Bold text</b>";     // Allows HTML inside
element.value = "Input value";              // For form elements

element.style.color = "red";
element.style.backgroundColor = "#000";

//example

<h2 id="title">Hello</h2>
<button onclick="changeText()">Click me</button>

<script>
  function changeText() {
    const t = document.getElementById("title");
    t.textContent = "You clicked!";
    t.style.color = "blue";
  }
</script>

```

## Day 4 :

Made an interactive contact form with html css and js with proper validations.

## Day 5 :

Integrated everything from day 1 to day 4 and made day 5 project. compleated a mini project which show case day 1 to tay 5 task a portfolio and a blog .
