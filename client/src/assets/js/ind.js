class Card {
    constructor(opt){
        this.type = opt.type
    }
    delete(){
        console.log('Карта удалена')
    }
}

function timer(){
    const   date = new Date(),
            min = date%60,
            sec = date/60%60
    console.log(min, sec) 
}