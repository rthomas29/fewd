const fs = require('fs');

const parseJSON = () => {
  const categoryData = fs.readFile('./assets/categories.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const foodCategories = [];
    const categories = JSON.parse(data);
    categories.map(category => {
      Object.keys(category).forEach(key => {
        if (key === 'parents' && category[key][0] === 'food') {
          foodCategories.push(category.title);
        }
      });
    });
    return foodCategories;
  });
};

module.exports = parseJSON;
