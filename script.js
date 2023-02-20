function buttonClicked(variant) {
  ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark", "bg-light"].map(function(cl) {
    document.body.classList.remove(cl);
  })
  document.body.classList.add(`bg-${variant}`)

  let button = document.getElementById('changeTheme').children
  for (i = 0; i < button.length; i++) {
    button[i].classList.remove("active")
    console.log(button[i].classList)
  }
  event.target.classList.add("active")
}

const fetchJokes = async () => {
  let x = 'await fetch("https://api.publicapis.org/entries")';
  let a = await x.json()
  console.log(a.entries)
  return a.entries
}
setInterval(async function() {
  console.log(await fetchJokes())
}, 100000000)


function toggleBulb() {
  let a = document.getElementById("lightBulb").children
  for (let i = 0; i < a.length; i++) {
    a[i].classList == "d-none" ? (a[i].classList.remove("d-none")) : (a[i].classList.add("d-none"))

  }
}