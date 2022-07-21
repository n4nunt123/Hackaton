let buttonTest = () => {
  let testButton = document.getElementsByClassName('container')
  testButton[0].style.display = 'none'

  let testButton2 = document.getElementsByClassName("test")
  testButton2[0].style.display = 'block'

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

let answerButton = (num) => {
  // let theAnswer = document.getElementsByClassName("btn-1")
  console.log(num)
  return num
}