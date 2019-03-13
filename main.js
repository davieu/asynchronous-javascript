
/********************************************************
 * 120 asynchronous js
 */

 /*
//synchronous all the instructions are printed out in order
const second = () => {
//is a function that we can use a callback and also a time
setTimeout(() => {
  console.log('Async here');
}, 2000);
}

const first = () => {
  console.log('Hey there');
  second();
  console.log('The end')
}

first();
*/


/*********************************************************
 * 122 asynchronous js the old way
 */

function getRecipe() {
  setTimeout(() => {
    let recipeID = [523, 883, 432, 974];
    console.log(recipeID);

    setTimeout((id) => {
      const recipe = {title: 'Fresh tomato pasta', 
                      publisher: 'Jonas'}
      console.log(`${id}: ${recipe.title}`)

      setTimeout((publisher, food) => {
        const recipe2 = {title: 'Italian Pizza', 
                        publisher: 'Jonas'}
        console.log(recipe)
        console.log(`${publisher}`)
        console.log(food);
        console.log(recipe2);
      }, 1500, recipe.publisher, recipe.title)
    }, 1000, recipeID[2]);
  }, 1500);
}

getRecipe();
// console.log(recipeID);