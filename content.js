"use strict";

function init(){

    const element = document.getElementsByClassName('fa fa-commenting')
    if(element.length > 1){
        let icon = "https://www.sicoob.com.br/o/sicoob-theme/images/favicon/android-icon-192x192.png"
        let body = "Olá! Você pode ter mensagens não lidas..."
        const notify = new Notification("Parceiro +",{body,icon})
        console.log(notify)
        notify.close()
    }
    else{
        console.log(`[Notificador +coop]: "Objeto não inicializado ${element.length}"`)
    }
       
}

function recursive_query(){
    init()
    setTimeout(recursive_query,20000)
}

recursive_query()