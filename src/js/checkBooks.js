import createElem from "./createElem"
import checkInfo from "./checkInfo"

function checkBooks(books, content) {
    for (let item of books) {
        const card = createElem('div', 'card');
        content.append(card);
        card.classList.add('col', 'text-center');

        let img = createElem('img');
        let cover_id = item.cover_id;
        let coverImg = `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`;
        img.setAttribute('src', coverImg);
        card.appendChild(img);
        img.classList.add('img-style');



        let title = createElem('h2', 'title', item.title)
        card.append(title);

        let author = createElem('p', 'author', item.authors[0].name)
        card.append(author);

        let btn = createElem('button', 'infoBtn', 'More Info');
        card.append(btn);
        btn.classList.add('btn', 'btn-secondary');

        checkInfo(item, card, btn);
        
    }
}

export default checkBooks;