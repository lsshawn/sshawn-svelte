# CSS

# Pointer events to stop selecting item

Useful for animating text in without ugly selecting text.

```
pointer-events: none;
opacity: 0;
```

# Object fit

```
.box {
  width: 25rem;
  height: 40rem;
}

.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

# Text Gradient

```
background: linear-gradient(to right, rgb(67, 124, 205), rgb())
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```


# Read more truncate

```
display: --webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
```

# Resize anything

```
overflow: auto;
resize: both;
```

# Carousel Scroll snapping

```
.container {
  scroll-snap-type: x mandatory;
}

.container div {
  scroll-snap-align: center;
}
```

# Smooth scrolling

```
html {
  scroll-behavior: smooth;
}
```

# Vertical text

`writing-mode: vertical-lr;`

# Flip image

`transform: scaleX(-1);`
