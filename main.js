const input = document.getElementById("entered-list");
const addBtn = document.querySelector('.add-list');
const tasks = document.querySelector('.tasks');
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");
const cancelBtn = document.getElementById("cancelBtn");
const doneBtn = document.getElementById("doneBtn");
const headDiv = document.getElementById("headDiv");
const parent = document.querySelector(".parent");


input.addEventListener('keyup', () => {
    if(input.value == ""){
        addBtn.classList.add('disabled')
    }else {
        addBtn.classList.remove('disabled')
    }

})

addBtn.addEventListener('click', () => {
    if(input.value !== ""){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `   <div class="item parent"> 
                                    <input value="${input.value} " disabled>  
                                        <div class="item-btn child-1">
                                            <i class="fa-regular fa-pen-to-square" id="editBtn" onclick="editItem(this)"></i>
                                            <i class="fa-sharp fa-solid fa-trash onclick ="deleteItem(this)"></i> 
                                        </div>
                                        <div class="item-btn d-none">
                                            <i class="fa-solid fa-xmark" id="cancelItem" onclick="cancelItem(this)"></i>
                                            <i class="fa-solid fa-check" onclick="saveItem(this)"></i>
                                        </div>
                                </div> `
                                
        tasks.appendChild(newItem);
        input.value = "";
    }else{("Please enter a task")}
})
tasks.addEventListener('click' , (e) =>{
    const message = "Are you sure you want to delete this item?"
if(e.target.classList.contains('fa-trash') && confirm(message) == true) {
    e.target.parentElement.parentElement.remove();
}

});


function getItemElements(itemElement) {
    const parentDiv = itemElement.parentElement.parentElement;
    
// itemelement edit iconudu
    return {
        input: parentDiv.children[0],
        editDelete: parentDiv.children[1],
        cancelSave: parentDiv.children[2],
    }
}

function editItem(element) {
    const {input, editDelete, cancelSave} = getItemElements(element);
    
    input.removeAttribute('disabled');
    input.setAttribute('old-value', input.value);
    editDelete.classList.add('d-none');
    cancelSave.classList.remove('d-none');
}


function cancelItem(element) {
    const {input, editDelete, cancelSave} = getItemElements(element);

    input.setAttribute('disabled', 'disabled');
    input.value = input.getAttribute('old-value');
    editDelete.classList.remove('d-none');
    cancelSave.classList.add('d-none');
   
}   

function saveItem(element) {
    const {input, editDelete, cancelSave} = getItemElements(element);

    input.setAttribute('disabled', 'disabled');
    editDelete.classList.remove('d-none');
    cancelSave.classList.add('d-none');

}

