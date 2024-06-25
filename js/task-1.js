const mainListItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${mainListItems.length}`);

mainListItems.forEach((item) => {
  console.log(`Categories: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
