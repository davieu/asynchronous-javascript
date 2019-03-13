
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

 /*
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
      }, 1500, recipe.publisher, recipe.title) //third 4secs
    }, 1000, recipeID[2]); //second 2.5secs
  }, 1500); //this ones first 1.5sec
}

getRecipe();
// console.log(recipeID);
*/


/****************************************************************
 * 123 PROMISES - object that keeps track about weather certain events 
 * have happerned or not. 
 * Determines what happens after the event
 * implementss the concept of a future value that we're expecting
 */

  //resolve if promise was successful or reject if promise was rejected
  //pseudo api call
  //after 1.5sec is finished we say the promise is successful and we want to return the data in the resolve;
  //then() and catch() mwthods for resolved or rejected promises
  //then() method allows to add an eventhandler for the case that the promise is fulfilled
  //the argument will be the result of the successful promise 'IDs'
  // prints [523, 883, 432, 974]
  //.catch() is for errors
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {

    resolve([523, 883, 432, 974]);
  }, 1500)
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = {title: 'Fresh tomato pasta', 
      publisher: 'Jonas'};
      
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID)
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout((pub) => {
      const recipe = {title: 'Italian Pizza', 
                      publisher: 'Jonas'};
      
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher);
  });
};

//chaining thens()
getIDs
.then(IDs => {
  console.log(IDs)
  return getRecipe(IDs[2]);
})
.then(recipe => {
  console.log(recipe);
  return getRelated('Jonas Umana');
})
.then(recipe => {
  console.log(recipe);
})
.catch(error => {
  console.log(error);
})




/*
//This one has a reject() and a catch that says 'error'. will fail because of reject.
const getIDs2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject([523, 883, 432, 974]);
  }, 1500)
});

getIDs2.then(IDs => {
  console.log(IDs)
}).catch(error => {
  console.log('error');
})
*/