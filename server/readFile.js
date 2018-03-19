const fs = require('fs');

const populateCategories = (req, res) => {
  let categoriesArray = [];
  fs.readFile('./assets/categories.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const categories = JSON.parse(data);
    categories.forEach(category => {
      Object.keys(category).forEach(key => {
        if (key === 'parents' && category[key][0] === 'food') {
          categoriesArray.push(category.title);
        }
      });
    });
    res.send(categoriesArray);
  });
};

module.exports = populateCategories;
