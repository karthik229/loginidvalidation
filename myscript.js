function validate()
{
  var id=document.getElementById('loginid').value
  var regx=/^TCS/

  if (regx.test(id))
  {
    alert("valid data")
  }
  else
  {
      alert("Invalid")
  }
}
