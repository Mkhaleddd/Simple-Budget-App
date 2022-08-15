// element selectiom
const balanceEl=document.querySelector(".balance .Amount");
const IncomeTotalEl=document.querySelector(".income-total");
const  OutcomeTotalEl=document.querySelector(".outcome-total");
const incomeEl=document.querySelector("#income");
const expenseEl=document.querySelector("#expense");
const allEl=document.querySelector("#all");
const incomeList=document.querySelector("#income .list");
const expenseList=document.querySelector("#expense .list");
const allList=document.querySelector("#all .list");



/// selecting btns for toggling
const expenseBtn=document.querySelector("tab1");
const incomeBtn=document.querySelector("tab2");
const allBtn=document.querySelector("tab3");

// select input btn
const addExpense=document.querySelector(".add-expense");
const addExpenseTitel=document.querySelector("#expense-titel-input");
const addExpenseAmount=document.querySelector("#expense-amount-input");

const addIncome=document.querySelector(".add-income");
const addIncomeTitel=document.querySelector("#income-titel-input");
const addIncomeAmount=document.querySelector("#income-amount-input");

//variables
let entry_list=[];
let balance=0,income=0,outcome=0;

const Delete="delete",Edit="edit";

// Event listeners
expenseBtn.addEventListener("click",function () {
    active(expenseBtn);
    inactive([allBtn,incomeBtn]);
    show(expenseEl);
    hide([incomeEl,allEl]);
})
incomeBtn.addEventListener("click",function () {
    active(incomeBtn);
    inactive([allBtn,expenseBtn]);
    show(incomeEl);
    hide([allEl,expenseEl]);
})
allBtn.addEventListener("click",function () {
    active(allBtn);
    inactive([expenseBtn,incomeBtn]);
    show(allEl);
    hide({incomeEl,expenseEl});
})



//helpers
 function show(element) {
    
    
 }
