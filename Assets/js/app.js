//clear the console
console.clear();
//add event listener

document.getElementById('A').addEventListener('change',output);
document.getElementById('B').addEventListener('change',output);
document.getElementById('gate').addEventListener('change',output);

function output(){
    let a = document.getElementById('A').checked;
    let b = document.getElementById('B').checked;
    let logicgate=document.getElementById('gate').value;
    switch(logicgate){
        case 'Not': 
            document.querySelector('.logicimg').src="Assets/images/not.png";
            if(a)
                lightstatus(false);
            else
                lightstatus(true);
        break;
        case 'And':
            document.querySelector('.logicimg').src="Assets/images/and.png";
            if(a&&b)
            lightstatus(true)
            else
            lightstatus(false);
            break;
        case 'Or':
            document.querySelector('.logicimg').src="Assets/images/or.png";
            if(a || b)
            lightstatus(true)
            else
            lightstatus(false);
            break;
        case 'Nand':
            document.querySelector('.logicimg').src="Assets/images/nand.png";
            if(a&&b)
            lightstatus(false)
            else
            lightstatus(true);
            break;
        case 'Nor':
            document.querySelector('.logicimg').src="Assets/images/nor.png";
            if(a||b)
            lightstatus(false)
            else
            lightstatus(true);
            break;
        case 'Xor':
            document.querySelector('.logicimg').src="Assets/images/xor.png";
            if(a!=b)
            lightstatus(true)
            else
            lightstatus(false);
            break;
        case 'Xnor':
            document.querySelector('.logicimg').src="Assets/images/xnor.png";
            if(a==b)
            lightstatus(true)
            else
            lightstatus(false);
            break;
    }
}

//light off on
function lightstatus(status){
    if(status) {
        document.querySelector('img').src="Assets/images/on.png"
    } else{
        document.querySelector('img').src="Assets/images/off.png"
    }
}