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

// Color Blind Test
function colorBlindTest() {

  let test = [
    {
      question: image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
    {
      question: Image,
      answer: ''
    },
  ]

  let colorBlindTest = '';
  for (let i=0; i<test,length; i++) {
    colorBlindTest = test[i]
  }

  let questionElement = document.getElementById('question')
  questionElement.innerHTML = colorBlindTest.question

  return colorBlindTest
}

let generatedQuestion = colorBlindTest()

let counter = 0
let answerElement = document.getElementById('answer')

if ()

