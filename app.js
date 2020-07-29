var list =document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    //crate li tag with text node
    var li = document.createElement('li');
    var litext = document.createTextNode(todo_item.value);
    li.appendChild(litext);
    
    // create delete button 
    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("DELETE");
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext);

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delbtn);
    li.appendChild(editBtn); 

  list.appendChild(li);

    todo_item.value =""

} 

function deleteItem(e){
    e.parentNode.remove()

}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    var val =  e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit value", val);
    e.parentNode.firstChild.nodeValue = editValue
}

// function editItem(e){
//     // var val = e.parentNode.firstChild.nodeValue;
//     // var editValue  = prompt("Enter Edit value",val);
//     // e.parentNode.firstChild.nodeValue = editValue
// }