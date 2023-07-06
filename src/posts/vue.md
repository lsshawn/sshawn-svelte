# Vue

<!-- vim-markdown-toc GFM -->

* [Speed Up](#speed-up)
* [2020-03-25 v-model & prop sync](#2020-03-25-v-model--prop-sync)

<!-- vim-markdown-toc -->

# Speed Up

1. Use child components in list loop and pass primitive value instead of the whole object.
2. Eliminate duplicate renders

Be aware of the rendering dependencies. Any prop, data value, or computed value that changes can cause a re-render.

Pass `user.status` as a userStatus prop instead of using it in your component to prevent rerendering when `user` changes even if `user.status` didnt change.

Use Vue devtools. Then use the “Performance tab” to measure your Vue app’s performance. Press start and stop to run a performance check, ideally during the app load.

Check the updated events. If you have more updated events than created events, without an update in the actual values, it’s likely you have duplicate changes that lead to duplicate rendering.

3. Optimize event handling

Events like `@mouseover` or `window.scroll` can cause lags if occured multiple times. Use debounce function to limit how many times you process these events.

4. V-once

If you have a section in your app that requires that data does not change for the entire session. Use v-once directive to ensure this section is only rendered once.

5. Use virtual scroller

Use `vue-virtual-scroll-list` to optimize.

# 2020-03-25 v-model & prop sync

V-model used in child component, e.g.

```
<child-component v-model="searchText"/>
```

is just a shorter way of writing:

```
<child-component
  :value="searchText"
  @input="val => searchText = val"
/>
```

But this only allows one prop. Use `prop.sync` to allow more props:

```
<child-component :name.sync="username" :age.sync="userAge"/>
```

which expands to:

```
<child-component
  :name="username" @update:name="val => username = val"
  :age="userAge" @update:age="val => userAge = val"
/>
```

