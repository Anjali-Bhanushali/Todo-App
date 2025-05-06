
let todoList = [
    {
      item:'buy milk',
      dueDate:'4/10/11'
    },
    {
        item:'go to college',dueDate:'5/10/2025'
    }
    ];
    displayItems();
    
    function addTodo(){
        let inputElement = document.querySelector('#task');
    
        let dateElement = document.querySelector('#todo-date');
    
    
        let todoItem = inputElement.value;
    
        let todoDate = dateElement.value;
    
        todoList.push(
        { 
          item: todoItem,
          dueDate:todoDate 
        }
       );
    
        inputElement.value = '';
        dateElement.value = '';
    
        displayItems();
    }
    
    function displayItems(){  
       let containerElement = document.querySelector('.todo-container');
       let newHtml = '';
    
       for(let i=0;i<todoList.length;i++)
      {
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += 
        `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button  class="btn-delete" onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
        
        `;
      }
       containerElement.innerHTML = newHtml;
    }