let a=[];
let max=100;
let min=1;
let sum=0;
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*(max-min+1)+min);
}
for(let i=0;i<a.length;i++){
    sum+=a[i];
}

console.log((sum/a.length).toFixed(1));