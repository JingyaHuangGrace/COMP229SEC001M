function parent2() {
    const message2 = 'Hello World';
 
    function child2() {
       alert (message2);
    }
 
    return child2;
 }
 
 const childFN = parent2();
 childFN();
