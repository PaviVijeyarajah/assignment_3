// Immidiate invoked function express

(function(){
    function Start(){
        console.log("App Started")
        //asks if you are sure when deleting database entries
        let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons){
        button.addEventListener('click',(event)=>{
            if(!confirm("Are you sure?")){
                event.preventDefault();
                window.location.assign('/itemlist');
            }
        });
    }
    }   
    window.addEventListener("load",Start);
})();