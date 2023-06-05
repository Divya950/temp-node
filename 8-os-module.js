const os=require('os') //os the builtin module so we can just write it as os and also dont need to install but for external modules we need to install them
const user=os.userInfo()
console.log(user)
// we dont need always to put it in the variable

console.log(`the uptime is ${os.uptime()}`)

const currentOS={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),


}
console.log(currentOS)