export function render(layout, destination){
  const main = document.querySelector(destination);
  main.innerHTML = layout;
}