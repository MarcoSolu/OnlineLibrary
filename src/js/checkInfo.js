import createElem from "./createElem";

async function checkInfo (book, card, btn) {
    try {
        let url = `https://openlibrary.org${book.key}.json`;

        let response = await fetch(url);

        if (response.status == 200) {
            let json = await response.json();
            let description = json.description;
            if (typeof description === 'object') {
                description = description.value
            }

            let infoDiv = createElem('div', 'info', description);
            infoDiv.style.display = 'none';
            card.append(infoDiv);

            btn.addEventListener('click', () => {
                infoDiv.style.display = (infoDiv.style.display == 'none') ? 'block': 'none';
            });
            
        }
        else {
            throw new Error(`HTTP Error, status: ${response.status}`);
        }
    }

    catch(err) {
        throw err;
    }
} 

export default checkInfo;