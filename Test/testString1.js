const string1 = (value) =>{

if( !isNumeric(value) ) return ;


let str = "";
Array.from(value).forEach(element => {
    if(element !== '$'){
        str += element;
    }
});
console.log(str);
return str;

}
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && !isNaN(parseFloat(str)) 
  }
module.exports = string1;