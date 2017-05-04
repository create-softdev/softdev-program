
function showError (errorMessage) {
  const errorElement = document.querySelector('#error-message')
  errorElement.textContent = errorMessage

  errorElement.classList.remove('hidden')
  setTimeout(() => {
    errorElement.classList.add('hidden')
  }, 3000)
}

// eslint-disable-next-line
function ajaxCall (method, path, data, onSuccess, failureMessage) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, `https://create-softdev-items-server.now.sh/${path}`)
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) return showError(failureMessage)

    onSuccess(xhr.responseText)
  })
  xhr.addEventListener('error', () => showError(failureMessage))
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.send(data)
}

module.exports = {
  showError,
  ajaxCall
}
