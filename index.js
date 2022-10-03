const fs = require('fs');
const request = require('request')
process.stdout.write('\n\n------------------- START ----------\n\n');

process.nextTick(()=>{
    process.stdout.write("NT1: "+ 'nextTick()\n');
})

fs.readFile('./abc.txt',function(err,res){
    if(err) throw err;
    process.stdout.write('1: Threadpoll polling')
})

request.get('https://google.com',function(err,res,body){
    process.stdout.write('2: System polling')
})


setImmediate(()=>{
    process.stdout.write('3: Set Immediate')
})

setTimeout(() => {
    process.stdout.write('4: Timers')
}, 0);

process.nextTick(()=>{
    process.stdout.write("NT2: "+ 'nextTick()\n');
})
