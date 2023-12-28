const string2 = (Ipv4)=>{

 const arr = Ipv4.split('.');
let numArr = arr.map((curr)=> Number(curr));
return numArr;

}
module.exports = string2;