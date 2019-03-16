//jshint esnext:true
// class uber{
//     static sayHi(){
//         console.log('I am a static function')
//     }
    
    
// }

// uber.sayHi()

class Driver{
    constructor(name){
        this._name = name;
    }
    get myname(){
        return this._name
    }
    set myname(val){
       if(val.length > 6) {this._name = val}
    }
}

let drive = new Driver('John')
console.log(drive.myname)

drive.myname = "Johnny Singh"
console.log(drive.myname)