# CSS Animation Documentation

This documentation provides an overview of how to use basic CSS animations in your project.

---

## Prerequisites

- Basic knowledge of HTML and CSS.

---

## How CSS Animation Works

CSS animations use `@keyframes` to define the changes in style and the `animation` property to apply them to elements.

### Example

```css
@keyframes ani-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

[data-anim="anim-spin"] {
  animation: anim-spin 1s ease-in-out;
}
```

Apply in HTML:

```html
<div data-anim="anim-spin" data-hover-anim="anim-hover-spin">Hello World</div>
```

---

## Animation Classes

| Animation Name     | Selector Example               | Duration | Description                                  |
| ------------------ | ------------------------------ | -------- | -------------------------------------------- |
| Spin               | `[data-anim="anim-spin"]`      | 1.5s     | Continuous rotation                          |
| Pulse              | `[data-anim="ani-pulse"]`      | 1.7s     | Rotational pulse (like spin)                 |
| Wrench             | `[data-anim="ani-wrench"]`     | 2.5s     | Repeated rotating swing, like using a wrench |
| Ring               | `[data-anim="ani-ring"]`       | 2s       | Rapid left-right shake (bell ring style)     |
| Vertical           | `[data-anim="ani-vertical"]`   | 2s       | Bouncing up and down                         |
| Horizontal         | `[data-anim="ani-horizontal"]` | 2s       | Shaking side to side                         |
| Flash              | `[data-anim="ani-flash"]`      | 2s       | Fading in and out repeatedly                 |
| Bounce             | `[data-anim="ani-bounce"]`     | 2s       | Bouncy vertical movement                     |
| Float              | `[data-anim="ani-float"]`      | 2s       | Smooth up and down floating                  |
| Heartbeat          | `[data-anim="ani-heartbeat"]`  | 2s       | Scales in and out to mimic heartbeat         |
| Shuttle            | `[data-anim="ani-shuttle"]`    | 2s       | Scales and rotates in shuttle motion         |
| Pass               | `[data-anim="ani-pass"]`       | 2s       | Moves left to right with fade in/out         |
| Ripple             | `[data-anim="ani-ripple"]`     | 2s       | Expands and fades like a ripple effect       |
| Shrink             | `[data-anim="ani-shrink"]`     | 2s       | Stays static, then shrinks suddenly          |
| Drop               | `[data-anim="ani-drop"]`       | 2s       | Falls from top to position                   |
| Drop2              | `[data-anim="ani-drop2"]`      | 2s       | Falls smoothly to position (slower midpoint) |
| Drop3              | `[data-anim="ani-drop3"]`      | 2s       | Longer drop time before settle               |
| Pre-Spin           | `[data-anim="ani-pre-spin"]`   | 2s       | Spins full circle clockwise                  |
| Background Stripes | `[data-anim="ani-bg-stripes"]` | 2s       | Moves background position for stripe effect  |
| Swinging           | `[data-anim="ani-swinging"]`   | 3s       | Gradual left-right pendulum motion           |

---

## Best Practices

- Keep animations short and purposeful.
- Respect user preferences (`prefers-reduced-motion`).
- Test performance on various devices.

---

## Resources

- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

---

This simple documentation helps you understand and implement CSS animations effectively.
