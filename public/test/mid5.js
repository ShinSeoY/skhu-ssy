let a=[];
let max=100;
let min=1;

for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*(max-min+1)+min);
}
let b=a.filter((e)=>e%2==0);
let result = b.reduce((a,b)=>a+b);
console.log(result);