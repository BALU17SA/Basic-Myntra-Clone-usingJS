let todoList = [
    {
        item:"Milk",
        dueDate:"`10/10/2002",
    }
];
    displayitems();


function addTodo()
{
    let inputelement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoitem = inputelement.value;
    let tododate = dateElement.value
    if(todoitem!='')
    {
         todoList.push({item: todoitem,dueDate: tododate});
         inputelement.value='';
         dateElement.value='';
         displayitems();
    }
}

function displayitems()
{
    let containerElements = document.querySelector('.todo-container');
    let newHtml='';
    for(let i=0; i<todoList.length;i++)
    {
        let {item, dueDate} = todoList[i];
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);displayitems();">Delete</button>
        `;
    }
    containerElements.innerHTML=newHtml;
}
