//Changing the menu and buttons
let menu = document.getElementsByClassName("btn-group-vertical")[0]
let menuButton = document.getElementsByClassName("btn btn-secondary")
function changeMenuAndButton(menu, button){
    menu.style.display = 'flex'
    menu.style.flexDirection = 'row'
    menu.style.gap = '5px'
    
    for(let btn in button){
        if(button[btn].style){
            button[btn].style.borderRadius = '5px'
        }    
    }
}
changeMenuAndButton(menu, menuButton)

//Changing the header and buttons colors
let header = document.getElementsByClassName('jumbotron')[0]
let headerButton = document.getElementsByClassName('btn btn-primary btn-lg')[0]
function changeHeaderAndColors(header, color, button){
    header.style.backgroundColor = '#6b757e'
    header.style.textAlign = 'end'
    header.style.color = color

    button.style.color = color
   /*  button.style.backgroundColor = 'var(--success)'
    button.style.border = 'none' */
    button.className = 'btn btn-success'
}
changeHeaderAndColors(header, '#F1F1F3', headerButton)

//Changing the cards order
let cards = document.getElementsByClassName('card')
const rightOrder = [
    {
        img: 'https://placeimg.com/300/180/nature',
        name: "Natureza"
    },
    {
        img: 'https://placeimg.com/300/180/animals',
        name: "Animais"
    },
    {
        img: 'https://placeimg.com/300/180/people',
        name: "Pessoas"
    },
    {
        img: 'https://placeimg.com/300/180/tech',
        name: "Tecnologia"
    }
]

function changeOrderCards(cards){
    let cardsArray = []
    for(let card in cards){
        if(typeof(cards[card]) === 'object'){
            cardsArray.push(cards[card])            
            cardsArray[card].children[0].setAttribute('src',rightOrder[card].img)
            cardsArray[card].children[1].getElementsByTagName('h5')[0].innerHTML  = rightOrder[card].name
        }
    }    
    cardsArray[2].children[1].getElementsByTagName('a')[0].className = 'btn btn-success'
}
changeOrderCards(cards)

//Appending List
let listGroup = document.getElementsByClassName('list-group')

function appendingListItem(list){
    let li4 = document.createElement('li')
    let li5 = document.createElement('li')
    li4.innerHTML = 'Quarto Item'
    li4.className = 'list-group-item active'

    li5.innerHTML = 'Quinto Item'
    li5.className = 'list-group-item'

    list.appendChild(li4)
    list.appendChild(li5)
}
//Remove Active from first children
listGroup[0].children[0].className = 'list-group-item'

appendingListItem(listGroup[0])