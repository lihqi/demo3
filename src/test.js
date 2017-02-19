let ctrList = [{
    id:0,
    name:'ch'
},{
    id:1,
    name:'en'
}];
let provinceList = [{
    id:0,
    parentId:0,
    name:'hlj'
},{
    id:1,
    parentId:1,
    name:'???'
}];
let cityList=[{
    id:0,
    parentId:0,
    name:'c1'
},{
    id:0,
    parentId:1,
    name:'c2'
}];

function formatList(ctrl,pl,cl){
    //写三个方法
    //第一个:遍历countryList,返回[{id:0,label:'ch',children:[]},{id:1,label:'en',children:[]}]
    //第二个:遍历countryList同时遍历provinceList,

}
function commonFormat(id,pid){

}
console.log(formatList(ctrList,provinceList,cityList));
console.log()