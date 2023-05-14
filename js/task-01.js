const categories = document.querySelector('#categories');
const categoryEl = categories.querySelectorAll('.item');

console.log(`Number of categories: ${categoryEl.length}`)

categoryEl.forEach((element) => {
  const category = element.firstElementChild.textContent;
  const categorySum = element.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${categorySum}`)
})