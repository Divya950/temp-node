// for synchronous we need to provide a call back it means we run that callback when we are done
// when whatever functionality we are doing is done then we run the callback
// callback function : ()=>{}

const {readFile,writeFile}=require('fs')
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
   if(err){
    console.log(err)
    return

   }     
   const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        
           } 
           const second=result
           writeFile('./content/result-async.txt',`here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            
               } 
            console.log('done with the result')
           })
    })
})
console.log('starting next task')