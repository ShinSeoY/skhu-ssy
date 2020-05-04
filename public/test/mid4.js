
function sum (...a){
    let result=0;
    for(let i=0;i<a.length;++i)
    result+=a[i];
    return result;

}
let count=0;
function test_sum(){
    let A=[];
    count++;
    for(let i=0;i<5;i++){
        A[i]=Math.floor(Math.random()*11);  
    }
    console.log(A)
    for()
    console.log(sum(A));
     if(count==5)
    clearInterval(id);
}
let id =setInterval(test_sum,1000)