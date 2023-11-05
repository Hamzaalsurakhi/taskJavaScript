function convertMarkToGrade() {
    
    const mark = parseFloat(document.getElementById('mark').value);

   
    let grade;
    if (mark < 50) {
        grade = 'FAIL';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'D';
    } else if (mark >= 60 && mark <= 69) {
        grade = 'C';
    } else if (mark >= 70 && mark <= 79) {
        grade = 'B';
    } else if (mark >= 80 && mark <= 89) {
        grade = 'A';
    } else if (mark >= 90 && mark <= 100) {
        grade = 'A+';
    } else {
        grade = 'Invalid mark';
    }

    
    document.getElementById('result').textContent = `Your grade is: ${grade}`;
}