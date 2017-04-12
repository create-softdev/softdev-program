# Seven levels of stacking context

* **Background and borders** — of the element forming the stacking context. The lowest level
  in the stack.
* **Negative Z-Index** — the stacking contexts of descendants elements with negative z-index.
* **Block Level Boxes** — in-flow non-inline-level non-positioned descendants.
* **Floated Boxes** — non-positioned floats
* **Inline Boxes** — in-flow inline-level non-positioned descendants.
* **Z-index: 0** — positioned elements. These form new stacking contexts.
* **Positive Z-index** — positioned elements. The highest level in the stack.

The most important things to remember here are:

* `z-index` only works on `position: relative|absolute|fixed`.
* `z-index` is hierarchical: `z-index`-ed children of an element will always be
  lower than a `z-indexed` sibling of that element.
* Negative `z-index` enables you to go below "flow elements", while positive `z-index`
  goes above them.

![CSS Stacking Order](more/stacking-order1.png)

## Source

[What you may not know about the z index property](https://webdesign.tutsplus.com/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892)
