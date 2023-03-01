const totalbalance=document.getElementById("totalBalance");
const income=document.getElementById("income");
const expense=document.getElementById("expense");
const newText=document.querySelector("#text");
const newDate=document.querySelector("#date");
const newAmount=document.querySelector("#amount");
const listOfTransactions=document.querySelector(".listOfTransactions");
const newButton=document.getElementById("buttonAdd");

newButton.addEventListener("click",function() {
    const emptyDiv=document.createElement("div");
    emptyDiv.classList.add("newEmptyTransaction");

    const date=document.createElement("p");
    date.innerHTML=newDate.value;
    date.id="transactionDate";

    const text=document.createElement("p");
    text.innerHTML=newText.value;
    text.id="transactionText";

    const amount=document.createElement("p");
    amount.innerHTML=newAmount.value;
    amount.id="amount";

    const remove=document.createElement("button");
    remove.innerHTML="X";
    remove.id="remove";

    if(newDate.value!="" && newAmount.value!="" && newText.value!="" && ((newAmount.value.startsWith("+"))||(newAmount.value.startsWith("-")))){
        emptyDiv.appendChild(date);
        emptyDiv.appendChild(text);
        emptyDiv.appendChild(amount);
        emptyDiv.appendChild(remove);
        listOfTransactions.appendChild(emptyDiv);

        const amountString=toString(newAmount.value);

        if(newAmount.value.startsWith("+")){
            amount.style.color="green";

            if(totalbalance.innerHTML.substring(1).startsWith("0")){
                totalbalance.innerHTML="$"+`${newAmount.value.substring(1)}`;
            }
            else if(totalbalance.innerHTML.substring(1).startsWith("-")){
                if((-parseFloat(totalbalance.innerHTML.substring(2))+parseFloat(newAmount.value.substring(1))<0)){
                    totalbalance.innerHTML="$"+`${-parseFloat(totalbalance.innerHTML.substring(2)).toFixed(3)+parseFloat(newAmount.value.substring(1)).toFixed(3)}`;
                }
                else{
                    totalbalance.innerHTML="$"+`${parseFloat(totalbalance.innerHTML.substring(1)).toFixed(3)+parseFloat(newAmount.value.substring(1)).toFixed(3)}`;
                }
            }
            else{
                totalbalance.innerHTML="$"+`${parseFloat(totalbalance.innerHTML.substring(1)).toFixed(3)+parseFloat(newAmount.value.substring(1).toFixed(3))}`;
            }

            if (income.innerHTML.substring(2).startsWith("0")) {
                income.innerHTML="+$"+`${newAmount.value.substring(1)}`;
            } 
            else {
                income.innerHTML="+$"+`${parseFloat(income.innerHTML.substring(2)).toFixed(3)+parseFloat(newAmount.value.substring(1).toFixed(3))}`;
            }
        }
        else{
            amount.style.color="red";

            if(totalbalance.innerHTML.substring(1).startsWith("0")){
                totalbalance.innerHTML="$"+`${newAmount.value}`;
            }
            else{
                totalbalance.innerHTML="$"+`${parseFloat(totalbalance.innerHTML.substring(1)).toFixed(3)-parseFloat(newAmount.value.substring(1)).toFixed(3)}`;
            }

            if(expense.innerHTML.substring(2).startsWith("0")){
                expense.innerHTML="-$"+`${newAmount.value.substring(1)}`;
            }
            else{
                expense.innerHTML="-$"+`${parseFloat(expense.innerHTML.substring(2)).toFixed(3)-parseFloat(newAmount.value).toFixed(3)}`;
            }
        }
        newText.value="";
        newDate.value="";
        newAmount.value="";
    }

    remove.addEventListener("click", function(){
        console.log(amount.value);
        listOfTransactions.removeChild(emptyDiv);
    });
});