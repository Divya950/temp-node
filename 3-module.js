//modules


const names=require('./4-names')// in this we need to write where the module is located like so where is the data coming from
const sayHi=require('./5-utils')
console.log(names)
const data=require('./6-alternative-flavor')
console.log(data)

require('./7-mind-grenade') // we are not putting this in any variable

// sayHi('susan')
// sayHi(names.john) // as john is the object sitting in the names so to require it
// sayHi(names.peter)

//to access the john and peter we ne to go with require and we  can assign it to a variable or simply require
