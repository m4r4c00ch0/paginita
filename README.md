# Paginita

Este es el repositorio en el que subo mi pagina web.

## Serve

Execute `make` to... make the app.

## Architecture

### Building

There are many steps to building this site. Below you will find the components of the application that "burns" HTML files to then be served using Netlify—or any other hosting provider that you want.

### Style

We use TailwindCSS to build the design of the site. We import the whole library when developing the site. But, we have to minimize the final CSS so that the page loads fast.

## Twitch

a veces programo en directo en https://twitch.tv/dieguitoelhacker los cambios a esta pagina. los commits que empiezan por `streaming: ...` suelen ser hechos en directo

## TODO

- [x] Integrate TailwindCSS with Eleventy
- [x] Take into account CSS file when using Hot Module Reload
- [ ] Tree-shake css files
 - for example, by deleting all the unused tailwindcss classes.
- [ ] Minimize the CSS file, e.g. `postcss-clean`.
