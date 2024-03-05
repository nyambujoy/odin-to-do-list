function handleAdd() {
    const card = document.createElement('dialog')
    card.id = 'card'
    const title = document.createElement('h2');
    title.setAttribute('contenteditable', 'true');

    title.id = title

    const desc = document.createElement('p');
    desc.setAttribute('contenteditable', 'true');

    card.append(title, desc)


}

export { handleAdd }