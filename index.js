// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let myform = document.getElementById("bookmarkForm")

let siteName = document.getElementById("siteNameInput")
let siteNameErrMsg = document.getElementById("siteNameErrMsg")

let siteUrl = document.getElementById("siteUrlInput")
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg")

let submitBtn = document.getElementById("submitBtn")

let resBody = document.getElementById("bookmarksList")

let formData={
    name:"",
    url:""
}
siteName.addEventListener('blur',(event)=>{
    if(event.target.value===""){
        siteNameErrMsg.innerText="Required*"
    }
    else{
        siteNameErrMsg.innerText=""
    }
    formData.name=event.target.value
})
siteUrl.addEventListener('blur',(event)=>{
    if(event.target.value===""){
        siteUrlErrMsg.innerText="Required*"
    }
    else{
        siteUrlErrMsg.innerText=""
    }
    formData.url=event.target.value
})
function validate(formData){
    let{name,url}=formData
    if(name===""){
        siteNameErrMsg.innerText="Required*"
    }
    else{
         siteNameErrMsg.innerText=""
    }
    if(url===""){
        siteUrlErrMsg.innerText="Required*"
    }
    else{
        siteUrlErrMsg.innerText=""
    }
}
function createAndAppedBookmarks(){
     let listItems = document.createElement("li")
    resBody.appendChild(listItems)
    let {
        name,
        url
    } = formData
    if (name === "" || url === "") {
        resBody.removeChild(listItems)
    } else {
        listItems.classList.add("responseSty")
    }
    let sitehead = document.createElement("h5")
    sitehead.textContent = name
    listItems.appendChild(sitehead)
    let anchorLink = document.createElement("a")
    anchorLink.href = url
    anchorLink.textContent = url
    anchorLink.target = "_blank"
    listItems.appendChild(anchorLink)
}
myform.addEventListener('submit',(event)=>{
    // console.log('clicked')
    event.preventDefault()
   validate(formData)
   createAndAppedBookmarks(formData)
    
})