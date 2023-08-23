
// let benefits = document.getElementById("benefit")
// let basic_salary = document.getElementById("basic_salary")
// let grossSalary = document.getElementById("gross")
// let nssf_pay = document.getElementById("nssf")
// let nhdf_pay = document.getElementById("nhdf")
// let payee_pay = document.getElementById("payee")
// let nhif_pay = document.getElementById("nhif")
// let net_Pay = document.getElementById("net_pay")
// let result = document.getElementById("calculate")

document.getElementById("btn").addEventListener("click",
function(event){
event.preventDefault()
});
function get_gross(be,bsc) {
  console.log(be,bsc)
   grossSalary= be + bsc
   console.log(grossSalary)
   return grossSalary
}
function new_gross() {
  let gross = get_gross(Number(document.getElementById("basic_salary").value),
  Number(document.getElementById("benefit").value))
  document.getElementById("gross").innerText=gross
  
}
 
function get_nhif(calc_gross) 
{

  if (grossSalary == 0) {
    NHIF_contribution = 0
  }else  if (grossSalary <= 5999) {
      NHIF_contribution = 150
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    NHIF_contribution = 300
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    NHIF_contribution = 400
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    NHIF_contribution = 500
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    NHIF_contribution = 600
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    NHIF_contribution = 750
  }
  else if (grossSalary >= 25000 && grossSalary <= 29999) {
    NHIF_contribution = 850
  }
  else if (grossSalary >= 30000 && grossSalary <= 34999) {
    NHIF_contribution = 900
  }
  else if (grossSalary >= 35000 && grossSalary <= 39999) {
    NHIF_contribution = 950
  }
  else if (grossSalary >= 40000 && grossSalary <= 44999) {
    NHIF_contribution = 1000
  }
  else if (grossSalary >= 45000 && grossSalary <= 49999) {
    NHIF_contribution = 1100
  }
  else if (grossSalary >= 55000 && grossSalary <= 59999) {
    NHIF_contribution = 1200
  }
  else if (grossSalary >= 60000 && grossSalary <= 69999) {
    NHIF_contribution = 1300
  }
  else if (grossSalary >= 70000 && grossSalary <= 79999) {
    NHIF_contribution = 1400
  }
  else if (grossSalary >= 80000 && grossSalary <= 89999) {
    NHIF_contribution = 1500
  }
  else if (grossSalary >= 90000 && grossSalary <= 99999) {
    NHIF_contribution = 1600
  }
  else {
    NHIF_contribution = 1700
  }
  return NHIF_contribution
}

function new_nhif() {
  document.getElementById("nhif").innerText = get_nhif(
    document.getElementById("gross").value
  )
}

// finding NSSF
function get_nssf(gross, rate = 0.06) {
  nssf_contribution = 0
  if (grossSalary >=0 && grossSalary <= 18000) {
    nssf_contribution = (grossSalary * rate)
    alert (nssf_contribution)
  } else {
    nssf_contribution = 18000 * rate
  }
  return nssf_contribution
}
function new_nssf() {
  document.getElementById("nssf").innerText = get_nssf(
    document.getElementById("gross").value
  )
}

// finding NHDF
function get_nhdf(gross, nhdf_rate = 0.03) {
  if (gross <= 83334) {
    nhdf = gross * nhdf_rate;
  } else {
    nhdf = 2500
  }
  return nhdf;
}
function new_nhdf() {
  let gross = Number(document.getElementById("gross").innerText);
  let nhdf = get_nhdf(gross);
  document.getElementById("nhdf").innerText = nhdf;
}
 //taxable income
 
function get_taxI(gross,nssf,nhdf) {
  let total_income = gross-(nssf+nhdf);
  return total_income
}
function new_taxI() {
  let gross = Number(document.getElementById("gross").innerText);
  let nssf = Number(document.getElementById("nssf").innerText);
  let nhdf = Number(document.getElementById("nhdf").innerText);

  let total_income = get_taxI(gross,nssf,nhdf);
  document.getElementById("taxable_income").innerText = total_income;
}
// finding payee

function get_payee(taxable_income, personal_relief = 2400) {
  // netpayee = 0
  if (taxable_income <= 24000) {
    grosspayee = 24000 * 0.1
    netpayee = grosspayee - personal_relief
  } else if (taxable_income >24000 && taxable_income <=32333) {
    grosspayee = (taxable_income - 24000) * 0.25 + 2400
    netpayee = grosspayee - personal_relief
  } else if (taxable_income >32333 && taxable_income <= 500000) {
    grosspayee = (taxable_income - 32333) * 0.30 + 4483.25
    netpayee = grosspayee - personal_relief
  } else if (taxable_income > 500000) {
    grosspayee = ((144783.25 + (taxable_income - 500000) * 0.35) - 2400)
    netpayee = grosspayee - personal_relief
  } else {
    netpayee = 0
  }
  return netpayee
}
function new_payee() {
  let taxableIncome = Number(document.getElementById("taxable_income").innerText);
  document.getElementById("payee").innerText = get_payee(taxableIncome);
}

//  net_pay= gross_salary - (nhif + nhdf +  nssf + payee)
function get_net_pay(gross_salary, nhif, nhdf, nssf, netpayee) {
  let net_salary = gross_salary - (nhif + nhdf + nssf + netpayee)
  return net_salary
}
function new_net_pay() {
  document.getElementById("net_pay").innerText = get_net_pay(
    Number(document.getElementById("gross").innerText),
    Number(document.getElementById("nhif").innerText),
    Number(document.getElementById("nhdf").innerText),
    Number(document.getElementById("nssf").innerText),
    Number(document.getElementById("payee").innerText)
  );
}
console.log(get_taxI())
console.log(get_payee())
console.log(get_net_pay())