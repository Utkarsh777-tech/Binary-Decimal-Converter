let decInp=document.getElementById("dec-inp");
let binInp=document.getElementById("bin-inp");
let errorMsg=document.getElementById("error-msg");

decInp.addEventListener("input",() => {
let decvalue=parseInt(decInp.value);
binInp.value=decvalue.toString(2);
});
binInp.addEventListener("input",() =>{
let binvalue=binInp.value;
if (binvValidator(binvalue)){
    decInp.value=parseInt(binvalue,2);
    errorMsg.textContent="";

}
else{
errorMsg.textContent="Please Enter The Valid  Binary Input!!";
}
function binvValidator(num){
    for(let i=0;i<num.length;i++){
        if (num[i]!="0" && num[i]!="1"){
            return false;
        }
    }
    return true;
}
});