function addnumbers(a,b){
    return(a+b);

}
   let sum=addnumbers(5, 6);
    console.log(sum)
    
document.getElementById('todo-form').addEventListener('submit')
function(e){
        e.preventdefault();
        const tasktext = document.getElementById('todo-input').value;
    if(tasktext=== '')return;
    const li= document.createElement('li');


    const span = document.createElement('span');
    span.className ='task-text';
    span.textContent=tasktext;
    

    const nanabdiv=document.createElement('div')
    nanabdiv.className ='nanab';


    const completebtn = document.createElement('button')
    completebtn.className = 'complete-btn';
    completebtn.textContent= 'complete';
    span.classList.toggle('complete');
    li.classList.toggle('completed');
    


    
}