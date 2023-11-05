function compareXandY() {
    
    const x = parseFloat(document.getElementById('xInput').value);
    const y = parseFloat(document.getElementById('yInput').value);

   
    if (x > y) {
       
        alert("Hello World");
      
        console.log("Hello World");
        
        document.getElementById('result').textContent = "Hello World";
    } else {
      
        alert("Goodbye");
      
        console.log("Goodbye");
       
        document.getElementById('result').textContent = "Goodbye";
    }
}
