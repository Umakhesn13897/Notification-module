

const Messege = document.getElementById('messege');

Messege.style.maxHeight = '0px'; 

function togglemessege(){

    if(Messege.style.maxHeight == '0px'){
        Messege.style.maxHeight = '200px';
    }
    else{
        Messege.style.maxHeight = '0px';
    }
}

