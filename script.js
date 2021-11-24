const global = document.getElementById('global')
const tdInput = document.getElementById('first')
const tdList = document.getElementById('third')

global.addEventListener('click', (a) => {
    let target = a.target
    if (target.type === 'submit') {
        a.preventDefault()
        if(tdInput.value.length === 0) {
            tdInput.value = 'Empty'
        } else {
            createTodoItem(tdInput, tdList)
        }
    }
})

function creator(i, l) {
    let block = document.createElement('div');
    block.classList = 'block';
    let elem = document.createElement('li');
    elem.innerText = i.value;
    elem.classList = 'block_elem';
    block.append(elem);
    let yes = document.createElement('button');
    yes.innerHTML = 'Сделано';
    yes.classList = 'yes';
    block.append(yes);
    let delet = document.createElement('button');
    delet.innerHTML = 'Удалить';
    delet.classList = 'delet';
    block.append(delet);
    l.append(block);
    i.value = '';
}

tdList.addEventListener('click', function (a) {
    let c = a.target
    if(c.classList[0] === 'yes') {
        toggler(c)
    } else if (c.classList[0] === 'delet') {
        deleteBlock(c)
        //[0] key-обращ
    }
})
const toggler = (c) => {
    const o = c.parentElement
    if(o) {
        o.classList.toggle('green')
    } else if(o.classList = 'green') {
        o.classList.toggle('green')
    } 
}
const deleteBlock = (c) => {
    const o = c.parentElement
    o.classList = 'null'
    o.remove()
}