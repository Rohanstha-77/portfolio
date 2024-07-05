// ----------------------about---------------------------------------
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
// -------------------end about---------------------------------------
// -------------------------------contact--------------------------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxC4dOBqPUW8ayUbnOfZAWmrT-sy-1qkdVN9e-wv9AKCkMAVaqn-7DNmHmt6g3QV8xH8A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML="";
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
//------------------------------endcontact----------------------------
// code to submit form on enter key press
const input=getElementById("enter-submit");
input.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById("submit").click();
    }
}
)
