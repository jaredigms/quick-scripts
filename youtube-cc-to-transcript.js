Array.from(
  document.querySelectorAll('.ytd-transcript-body-renderer:last-child')
).map(item => item.innerText)
.filter(item => item !== "")
.reduce(
  (x, y) => x + (x[x.length - 1] === '.' ? "\n" : ' ') + y
)
