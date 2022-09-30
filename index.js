// test
//document.querySelector("#fiveH").innerHTML="Hello 500"

let billInput=document.querySelector("#bill")
let cashInput=document.querySelector("#cash")

let billvalue
let cashvalue

billInput.addEventListener('input',function bill(){
  billvalue=billInput.value
})

cashInput.addEventListener('input',function cash(){
  cashvalue=cashInput.value
})

// check

let check=document.querySelector("button")

check.addEventListener("click", function change(){
if(cashvalue >= billvalue)
{
  let give=cashvalue-billvalue

  if(give%2000 > 0)
  {
    document.querySelector("#2000").innerHTML=give%2000

    give-=2000*(give%2000)
  }

  if(give%500 > 0)
  {
    document.querySelector("#500").innerHTML=give%500
    give-=500*(give%500)
  }

  if(give%100 > 0)
  {
    document.querySelector("#100").innerHTML=give%100
    give-=100*(give%100)
  }

  if(give%20 > 0)
  {
    document.querySelector("#20").innerHTML=give%20
    give-=20*(give%20)
  }

  if(give%10 > 0)
  {
    document.querySelector("#10").innerHTML=give%10
    give-=10*(give%10)
  }

  if(give%1 > 0)
  {
    document.querySelector("#1").innerHTML=give%1
    give-=1*(give%1)
  }
}

}

)
