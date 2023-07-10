import checkBooks from './checkBooks';

let content = document.getElementById('content-div');

const checkData = async ()=> {
    try {
        content.textContent = '';
        let firstInput = document.getElementById('input').value;
        let input = firstInput.toLowerCase();
        if (input == '') {
            return
        }
        let url = `https://openlibrary.org/subjects/${input}.json`;

        let response = await fetch(url);

        if (response.status == 200) {
            let json = await response.json();
            let books = json.works;
            console.log(books);
            checkBooks(books, content);
        }
        else {
            throw new Error(`HTTP Error, status: ${response.status}`)
        }
    }

    catch(err) {
        throw err;
    }
}

export default checkData;