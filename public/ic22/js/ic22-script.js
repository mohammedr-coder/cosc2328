// 1. The difference between db.all() and db.get() is that db.get() returns a single row, while db.all() returns an array of rows. You would use db.get() when you want a single row, and db.all() when you want the array of rows.
// 2. The thing that is wrong with that is that it will treat things as excutable code, and if someone sent the value one then the table would be gone.
// 3. The naming convention is meaningful because, it shows that db.get() only gets one row, while db.all() gets multiple rows.
// 4. The express handles it, since the route definition handles any ID by setting it using req.params.id.


// IC22 – COSC 2328 – Professor McCurry
// Implemented by: Mohammed Rehaan


// Step 5 - load every student when the page opens
async function loadStudents() {

    const response = await fetch('/ic22/students');
    const student = await response.json();


    const list = document.getElementById('student-list');
    list.innerHTML = '';

    student.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.first_name} ${student.last_name} - ${student.classification}, ${student.major}`;
        list.appendChild(li);
    });

    // Step 6 - look up one student by ID
    document.getElementById('lookup-btn').addEventListener('click', async () => {
        const id = document.getElementById('student-id').value;
        const result = document.getElementById('student-result');

        const response = await fetch(`/ic22/students/${id}`);
        const student = await response.json();

        if (student.message) {
            result.textContent = student.message;
        } else {
            result.textContent = `${student.first_name} ${student.last_name} - ${student.classification}, ${student.major}`;
        }
    });

}







loadStudents();

