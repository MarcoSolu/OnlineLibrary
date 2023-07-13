import checkBooks from './checkBooks';

let content = document.getElementById('content-div');
let errorText = document.getElementById('error');

const checkData = async ()=> {
    try {
        content.textContent = '';
        let firstInput = document.getElementById('input').value;
        let input = firstInput.toLowerCase();
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const numbers = /[0-9]/;
        if (input == '') {
            throw new Error('You have to write a subject');
        }

        if (numbers.test(input) == true) {
            throw new Error('Numbers are not allowed');
        }
        
        if (specialChars.test(input) == true) {
            throw Error('Special characters are not allowed');
        }
        
        let url = `https://openlibrary.org/subjects/${input}.json`;

        let response = await fetch(url);

        if (response.status == 200) {
            let json = await response.json();
            let books = json.works;
            checkBooks(books, content);

            if (books.length === 0) {
                throw new Error('Subject not found');
            }
        }
        else {
            throw new Error(`HTTP Error, status: ${response.status}`)
        }
        errorText.style.display = 'none';
    }

    catch(err) {
        errorText.textContent = err.message;
        errorText.style.display = 'block'
    }

    finally {
        document.getElementById('input').value = '';
        document.getElementById('input').focus();
    }
}

export default checkData;