let a=[];
let max=100;
let min=1;
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*(max-min+1)+min);
}
a.sort((a,b)=>b-a);
for(let i=0;i<a.length;i++){
    console.log(a[i])
}