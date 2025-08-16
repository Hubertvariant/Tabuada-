function inicia(){
    let num = window.document.querySelector('input#txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('digite um numero')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = window.document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}