const event = require('events');

eventEmitter = new event();

class Random extends event{
    constructor(name) {
        super();
        this._name = name;
    }
    

    get name(){
        return this._name;
    }
}

let dhrumil = new Random('Dhrumil');

dhrumil.on("call", () => {
    console.log("My name is "+dhrumil.name);
})

dhrumil.emit('call');