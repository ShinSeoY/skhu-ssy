let result=0;
let A=[];
function sum (...a){
    for(let i=0;i<a.length;i++){
    result+=a[i];}
    
    return result;
}
let count=0;
function test_sum(){
    let A=[];
    count++;
    for(let i=0;i<5;i++){
        A[i]=Math.floor(Math.random()*11);  
    }
    if(count==5)
    clearInterval(id);
    console.log(A)
    console.log(sum(A));
    
}
let id =setInterval(test_sum,1000)