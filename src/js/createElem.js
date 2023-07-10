let createElem  = (tag, id, contentCard) => {
    let elemTag = document.createElement(tag);
    elemTag.id = id;
    elemTag.textContent = contentCard;
    return elemTag;
}

export default createElem;