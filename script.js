let balance = 0;
let income = 0;
let expense = 0;

function addTransaction(){

    let desc = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if(desc === "" || amount <= 0){
        alert("Enter valid details");
        return;
    }

    let list = document.getElementById("list");

    let li = document.createElement("li");

    li.innerHTML = desc + " - ₹" + amount + 
    " (" + type + ")";

    list.appendChild(li);


    if(type === "income"){
        income += amount;
        balance += amount;
    }
    else{
        expense += amount;
        balance -= amount;
    }


    document.getElementById("balance").innerText = balance;
    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = expense;


    document.getElementById("desc").value="";
    document.getElementById("amount").value="";
}