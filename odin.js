const form = document.getElementById("dataForm");

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let transactionFormData = new FormData(form);
  let myBook = Book(transactionFormData);
  addBookToLibrary(myBook)
  insertRowInTable(myBook);
  
})

function Book(transactionFormData) {
  let formTitle = transactionFormData.get("formTitle");
  let formAuthor = transactionFormData.get("formAuthor");
  let formPages = transactionFormData.get("formPages");
  let formCheck = transactionFormData.get("formCheck");

  return {
    "formTitle": formTitle,
    "formAuthor": formAuthor,
    "formPages": formPages,
    "formCheck": formCheck
  }
}

function insertRowInTable(myBook) {
  let transactionTableRef = document.getElementById("formTable");
  
  let newTransactionRowRef = transactionTableRef.insertRow(-1);

  let newTypeCellRef = newTransactionRowRef.insertCell(0)
  newTypeCellRef.textContent = myBook["formTitle"];

  newTypeCellRef = newTransactionRowRef.insertCell(1)
  newTypeCellRef.textContent = myBook["formAuthor"];

  newTypeCellRef = newTransactionRowRef.insertCell(2)
  newTypeCellRef.textContent = myBook["formPages"];

  newTypeCellRef = newTransactionRowRef.insertCell(3)
  newTypeCellRef.textContent = myBook["formCheck"];
}

function addBookToLibrary(myBook) {
  let newBook = JSON.parse(localStorage.getItem("dataBook"));
  newBook.push(myBook);
  let myBookJSON = JSON.stringify(newBook);
  localStorage.setItem("dataBook", myBookJSON)
}






