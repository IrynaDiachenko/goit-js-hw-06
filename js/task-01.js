const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

const CategoryAllElements = document.querySelector('.item');
totalCategories.forEach(title => {
  console.log(`Category: ${title.firstElementChild.textContent}
  Elements: ${title.lastElementChild.childElementCount}`);
});
