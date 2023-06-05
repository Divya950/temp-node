const {readFileSync,writeFileSync}=require('fs')
console.log('start')
// same as const fs=require('fs')
//fs.readFileSync

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',
`here is the result: ${first},${second}`,{flag:'a'}) // flag : a again writes the text without overwriting it , without flag it just overwrites the text

console.log('done with the task')
console.log('starting the next one ')