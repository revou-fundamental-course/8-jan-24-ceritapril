var inputLuas = document.getElementById("s");
    var buttonLuas = document.getElementById("countButton");
    var resetLuas = document.getElementById("resetButton");
    var tampilLuas = document.getElementById("luas");

    buttonLuas.addEventListener('click',function(){
        var hitungLuas = parseInt(inputLuas.value)*parseInt(inputLuas.value);
        tampilLuas.innerHTML=hitungLuas;
    })
    resetLuas.addEventListener('click',function(){
    inputLuas.value="";
    tampilLuas.innerHTML="";
    })

var inputkeliling = document.getElementById("s2");
    var buttonkeliling = document.getElementById("button2"); 
    var resetkeliling = document.getElementById("reset2");
    var tampilkeliling = document.getElementById("keliling");

    buttonkeliling.addEventListener('click',function(){  
    var keliling = 4*parseInt(inputkeliling.value); 
    tampilkeliling.innerHTML=keliling;
    })
    resetkeliling.addEventListener('click',function(){
        inputkeliling.value="";
        tampilkeliling.innerHTML="";
        })