async function raceRunners() {
    // a. Creating two new variables called runner1 and runner2, both set to false.
    let runner1 = false;
    let runner2 = false;
  
    // b. Creating a loser variable set to an empty string.
    let loser = '';
  
    // c. Creating two new promises called runner1Go and runner2Go.
    const runner1Go = new Promise((resolve) => {
      // Using setTimeout() to set a timeout for an anonymous function.
      setTimeout(() => {
        // Setting the loser value to 'runner1' and resolving the value true.
        loser = 'runner1';
        resolve(true);
      }, Math.random() * 10000); // Timeout length chosen randomly under 10000.
    });
  
    const runner2Go = new Promise((resolve) => {
      // Using setTimeout() to set a timeout for an anonymous function.
      setTimeout(() => {
        // Setting the loser value to 'runner2' and resolving the value true.
        // Ensuring this happens after a random timeout under 10000.
        loser = 'runner2';
        resolve(true);
      }, Math.random() * 10000); // Timeout length chosen randomly under 10000.
    });
  
    // d. Returning an array with the awaited results of runner1Go, runner2Go, and the loser value.
    return [await runner1Go, await runner2Go, loser];
  }
  
// Calling raceRunners and using then clause to handle the returned promise.
raceRunners().then((result) => {
    // Logging the loser to the console. This is the last value in the array returned by raceRunners.
    console.log('The loser is:', result[2]);
  });