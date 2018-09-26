function regexChecker() {
  try {
    let regexText = new RegExp(document.getElementById('regexText').value)
    let checkText = document.getElementById('checkText').value

    if (checkText === '') {
      document.body.style.backgroundColor = 'white'
    }
    else if (checkText.match(regexText)) {
      console.log('True!')
      document.body.style.backgroundColor = 'green'
    }
    else {
      document.body.style.backgroundColor = 'red'
    }
  }
  catch(e) {
    return false
  }
}
