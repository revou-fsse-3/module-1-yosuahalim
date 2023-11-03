function handleClick() {
  window.alert("Hello, world!");
}
function handleSubmit(e, test) {
  // e.preventDefault();
  const name = document.getElementById("name").value;
  if (name) {
    window.alert(`Hello, ${test}!`);
  }
}
