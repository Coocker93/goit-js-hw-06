const categories = document.querySelector('#categories');
const categoryEl = categories.querySelectorAll('.item');

console.log(`Number of categories ${categoryEl.length}`)

categoryEl.forEach((element) => {
  const category = element.querySelector('h2').textContent;
  const categorySum = element.querySelectorAll('li').length;
  console.log(`Category: ${category} \nElements: ${categorySum}`)
})