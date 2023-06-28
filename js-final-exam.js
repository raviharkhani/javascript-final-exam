function add(){
    let box = document.getElementById("ravi");

    let inputValue = document.getElementById("input-value");

    if (inputValue.value != 0) {
        box.innerHTML = parseInt(box.innerHTML) + parseInt(inputValue.value); 
        document.getElementById("input-value").value = "";

    }else{
    box.innerHTML = parseInt(box.innerHTML)  + 0;
    }          
}