function calculateCircumference() {
   
    const radius = parseFloat(document.getElementById('radius').value);

   
    const circumference = 2 * Math.PI * radius;

  
    document.getElementById('result').textContent = `The circumference of the circle is: ${circumference}`;
}