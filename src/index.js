import './css/index.css'
// import addImg from '.IMGS/add.svg'
import './css/add.css'
import { Notes } from './add';

function handleMainPage() {
    const contentContainer = document.querySelector(".content")

    const heading = document.createElement('h2');
    heading.innerHTML = 'Your personal planner'
    heading.id = 'heading'


    let plusButton = document.createElement('button');
    plusButton.innerHTML = '+Add Task'

    plusButton.id = 'addSvg'
    let divquote = document.createElement('div')
    divquote.innerHTML = '"When in doubt go to a library" ~ Jk Rowling'
    divquote.id = 'divquote'



    contentContainer.append(heading, plusButton, divquote)

}

handleMainPage()

let plusButton = document.querySelector("#addSvg");


plusButton.addEventListener("click", () => {
    Notes.handleModal()
    Notes.appendingNote()
})



