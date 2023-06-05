//npa-global command,comes with node
//npm --version
//locla dependency-use it only in this partiuclar project 
//npm i <pakckageName>

//g;pbal dependency - use it in any project
//npm install -g <packageName>

// package json- maifest file(stores important info about project/package)
//manual approach(create package.json  in the root,create properties etc)
//npm init (step by step,press enter to step)
//npm init -y(everything  default)

// we generally dont use the manual appraoch 

const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flatMapDeep(items)
console.log(newItems)
