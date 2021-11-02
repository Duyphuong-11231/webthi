const inputSearch = document.querySelector(".input-search")
const autoBox = document.querySelector(".autobox")
inputSearch.onkeyup = (e)=> {
    let checkData = e.target.value
    let dataArray = []
    if(checkData) {
        dataArray=recomentlist.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
        })
        dataArray=dataArray.map((data)=>{
            return data = '<li>'+data+'</li>'
        })
        autoBox.classList.add('active')
        showAdress(dataArray)
        let liItem = autoBox.querySelectorAll('li')
        for (let i=0; i<liItem.length; i++){
            liItem[i].addEventListener("click",function(){
                inputSearch.value = liItem[i].innerHTML
                autoBox.classList.remove('active')
            })
        }
    }
    else {
        autoBox.classList.remove('active')
    }
}
function showAdress(list){
    let listData
    if (!list.length) {
        listData = '<li>'+inputSearch.value+'</li>'
    }
    else {
        listData = list.join('')
    }
    autoBox.innerHTML = listData
}
















let recomentlist = [
    "ハノイ",
    "ハイフォン",
    "ハジャン",
    "ハイドゥオン",
    "ハティン",
    "ハナム",
    "ホーチミン",
    "ゲアン",
    "フーナショナル",
    "フート",
    "ニャチャン",
    "クアンビン",
    "クアンナム",
    "ダナン",
    "ダラット",
];