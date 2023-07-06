# Vim

# Go back to previous insert line

`gi`

# Moving in a line

`_` to go to the start of the line.
`I` to go to the start and enter insert mode.
`A` to go to the end and enter insert mode.

# Edit in visual block mode with the fighting one eyed kirby

Shift + V to select lines.

`:` to enter command mode. Then type `s/\(.*\)/ \1`.

The ' \1' is the first match group. Edit the regex to trim what you want to keep.

Search and replace is better than macro because you don't need to be pressured to type the correct macro.

# Mastering

Be good at W, T, and F.

Check Vim Be Good by Primeagent

`ya{` to yank everything including squirly braces.

`viw` to select and replace word. Or `viW` to select all words till white spaces. Works backward too!

`yiw` It's less mental overhead than `yt{`.


# Vim surround

`ysiw"` You Surround Inner Word With "

`ysf,)` You Surround Find , with Bracket

`ys$"` You Surround Till end of line with "

`ds"` Delete Surrounding "

`cs"'` Change Surrounding " to '

`ysap<li>` You Surround A Paragraph with <li>

# Remove line content without deleting line

`0D`

# Go to function definition

`gd` for local declaration
`gD` for global declaration

# Put cursor at top page

`zt` for top.
`zz` for center.
`zb` for bottom.

# Clear line content without deleting line

`0D`

# Show current function

`<C-g>`

# Git

Use `vim-fugitive` plugin.

To see difference on current file, use `:Gsplit` or `:Gvsplit`. For syncronous scrolling, use `:set scb` to enable and `:set scb!` to disable.

Other useful commands:
- `:Gcommit`
- `:Gpush`
- `:Gwrite` to add

# Find text under cursor

`*`

To find and replace, I use this mapping
```
" === Search & replace word under cursor === "
:nnoremap <Leader>s :%s/\<<C-r><C-w>\>//g<Left><Left>
```

Find and replace all files in working directory

# Python

Use plugin `vim-ipython-cell`
