// THIS FILE IS USED WITH INDEX-2.js


const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974])
  }, 1500);
});

//recID gets passed in as ID for the setTimeout function
const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout((ID) => {
      const recipe = {title:'Fresh tomato pasta',
      publisher: 'Jonas'}

      resolve(`${ID}: ${recipe.title}`);    
    },1500, recID)    

  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout((pub) => {
      const recipe = {title: 'Italian Pizza', 
      publisher: 'Jonas'};
      
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher);

  })
};

async function getRecipesAW() {
  //if promised is resolved/successful then the value of the await expression is the resolved value of the promise which is then assigned to the IDs variable.
  //In each line with the await keyword is the execution stops and we wait until each of the promises get a result/resolved
  const IDs = await getIDs;
  console.log(IDs);
  let promiseOneArray = document.getElementById('promise-one-array');
  for (let i = 0; i < IDs.length; i++) {
    if (i != IDs.length - 1) {
      promiseOneArray.innerHTML += IDs[i] + ", ";
    } else {
      promiseOneArray.innerHTML += IDs[i]
    }
  }

  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  let promiseOne = document.getElementById('promise-one');
  promiseOne.innerHTML = promiseOne.innerHTML + recipe;

  const related = await getRelated('Jonas');
  console.log(related)
  document.getElementById('promise-two').innerHTML = "Related: " + related;

  return {IDs, recipe, related}
}

//async functions always returns a promise that we can consume. we use .then() here to consume the promise. That is how we can access the return of the async function.
getRecipesAW().then((result) => {
  console.log(`${result.IDs}`)
})
