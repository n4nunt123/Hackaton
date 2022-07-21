let buttonTest = () => {
  // event.preventDefault()
  let testButton = document.getElementsByClassName('create')
  // testButton[0].style.display = 'none'
  console.log(testButton)

  let inputData = {
    nama: '',
    gender: ''
  }
  
  let inputNama = document.getElementById("floatingTextarea").value
  let inputGender = document.getElementById("gender-user").value
  
  inputData.nama = inputNama
  inputData.gender = inputGender

  console.log(inputData)
}

// let inputData = {
//   nama: '',
//   gender: ''
// }

// let inputNama = document.getElementById("nama-user").value
// let inputGender = document.getElementById("gender-user").value

// inputData.nama = inputNama
// inputData.gender = inputGender