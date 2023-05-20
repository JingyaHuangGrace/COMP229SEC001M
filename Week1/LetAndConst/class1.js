function reinitConst(){
    const me = 1;
    console.log(me);
   // me = 2; 
   // console.log(me);
   let me2 = 1;
   console.log(me2);
   me2 = 2;
   console.log(me2);
 }
 
 reinitConst();


 function iterateVar() {
    for(var i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i); // var has function or global scope
 }
 console.log('\niterateVar');
 iterateVar();

 function iterateLet() {
    for(let i = 0; i < 10; i++) {
       console.log(i);
    }
   // console.log(i); 
   //Both const and let have block scope, limited within{}
 }
 console.log('\niterateLet');
 iterateLet();
 
 
