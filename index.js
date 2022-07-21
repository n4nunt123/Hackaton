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
  return inputData
}

let count = 0
let answerButton = (num) => {
  count++
  if (count === 10) {
    let hideTest = document.getElementsByClassName("test")
    hideTest[0].style.display = 'none'

    let showResult = document.getElementsByClassName("result")
    showResult[0].style.display = 'block'
  }
  console.log(num,count)
  return num
}