// Show modal
const addData = document.querySelector(".container button");
const modal = document.querySelector(".modal-container");

const showModal = () => {
  modal.classList.add("active");
};

addData.onclick = showModal;

// close modal
const closeButton = document.querySelector(".buttons button:first-child");

const closeModal = () => {
  modal.classList.remove("active");
};

closeButton.onclick = closeModal;





// get gender value
const getGenderValue = () => {
  const radioButtons = document.getElementsByName('gender');
  let selectedValue;

  for(let radioButton of radioButtons) {
    if(radioButton.checked) {
      selectedValue = radioButton.value;
      break;
    }
  }

  return selectedValue
}

// get input value
const getInputValue = () =>{
  const nama = document.querySelector('input.nama');
  const umur = document.querySelector('input.umur');



  const person = {
    nama : nama.value,
    umur : umur.value,
    gender : getGenderValue()
  }

  return person

}



// membuat element 
const newData = (objPerson) => {
  const table = document.querySelector('table');
  const newtBody = document.createElement('tbody');
  newtBody.innerHTML = `
  <td>${objPerson.nama}</td>
  <td>${objPerson.umur}</td>
  <td>${objPerson.gender}</td>
  `

  table.append(newtBody)
}




// check kondisi
const checkInput = () => {
  const inputNama = document.querySelector('input.nama')
  const inputUmur = document.querySelector('input.umur')

  
  if(inputNama.value == '' && inputUmur.value == '' ) {
    alert('Harap Di Isi!');
  } else if(inputNama.value == '') {
    alert('Nama harus di isi');
  } else if(inputUmur.value == '') {
    alert('Umur harus di isi');
  } else {
    newData(getInputValue())
    closeModal()
  }
5

 

}


const submit = document.querySelector(".buttons button:last-child");

    submit.addEventListener("click", () => {
      
      checkInput(getInputValue())
    });


