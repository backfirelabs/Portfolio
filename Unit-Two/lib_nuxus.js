// class CustomClass {
//     // Constructor method with 'client' as our parameter
//     constructor(client) {
//       this.name = client; // Assigns the 'client' parameter value to the 'name' property
//     }
//     logName() {
//       console.log(this.name);
//     }
//     logClient() {
//       console.log(this.client);
//     }
//   }

class League {
    constructor(champion) {
        this.name = champion;
    }
    logName() {
        console.log(this.name);
    }
    logChampion() {
        console.log(this.name); // Changed this.champion to this.name
    }
}