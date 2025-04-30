# Day 2 learnings;

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
