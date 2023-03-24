const input1 =document.getElementById("input1"); 
const input2 =document.getElementById("input2"); 
const input3 =document.getElementById("input3"); 
const input4 =document.getElementById("input4"); 
const input5 =document.getElementById("input5"); 
const btn = document.getElementById("btn");
const para1 =document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");
btn.addEventListener("click",()=>{
    let input1val =input1.value;
    let input2val =input2.value;
    let input3val =input3.value;
    let input4val =input4.value;
    let input5val =input5.value;
    if(input1val >100|| input2val >100 || input3val >100 || input4val >100 || input5val >100){
        alert("Please enter marks in range of 100")
    }
    if(input1val ==""){
        input1val = 0
    }else if(input2val==""){
        input2val =0
    }else if(input3val==""){
        input3val =0
    }else if(input4val==""){
        input4val =0
    }else if(input5val==""){
        input5val=0
    }
    const TotalMarks = parseInt(input1val)+parseInt(input2val)+parseInt(input3val)+parseInt(input4val)+parseInt(input5val);
    para1.innerText =`Total Marks:${TotalMarks}`;
    const AverageMarks = (parseInt(TotalMarks)/500)*100;
    para2.innerText =`Your Average Marks are ${AverageMarks}`;
    if(AverageMarks>90){
        para3.innerHTML =`<h1>You got A Grade<h1/>`
    }else if(AverageMarks >=80 && AverageMarks<=89){
        para3.innerText =`You got B Grade`
    }else if(AverageMarks >=70 && AverageMarks<=79){
        para3.innerText =`You got C Grade`
    }else if(AverageMarks >=60 && AverageMarks<=69){
        para3.innerText =`You got D Grade`
    }else if(AverageMarks <=60){
        para3.innerText =`You got F Grade`
    }
    if(input1val <=35|| input2val <=35 || input3val <=35 || input4val <=35 || input5val <=35){
        para3.innerText =`You got F Grade`  
    }
})