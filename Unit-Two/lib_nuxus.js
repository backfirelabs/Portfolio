class CustomClass {
    // Constructor method with 'client' as our parameter
    constructor(client) {
      this.name = client; // Assigns the 'client' parameter value to the 'name' property
    }
    logName() {
      console.log(this.name);
    }
    logClient() {
      console.log(this.client);
    }
  }