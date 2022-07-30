const formCollector = document.getElementById("formCollector")
const updatedHtml = document.getElementById("mainContent")

formCollector.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)
    let userFirstName = ourFormData.get("fName")
    let userEmailAddress = ourFormData.get("eMail")

    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>`

    updatedHtml.innerHTML = updatedHtmlContent
})
