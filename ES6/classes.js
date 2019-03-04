// jshint esnext:true


  class Marvel{
       
    constructor(name){
        // console.log('constructor being called')
        this.name = name
    }

      superpower(){
          console.log('Here is your super power' + this.name)
      }
  }

  let superman = new Marvel('Clark Kent')
  superman.superpower()
  console.log(superman.name)

  let batman = new Marvel('Bruce Wayne')
  batman.superpower()
  console.log(batman.name)