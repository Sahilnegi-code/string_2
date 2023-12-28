const string4 = (obj) =>{
   
    const values = Object.values(obj);

      let arr =   values.map((curr)=>{
            return  curr[0].toUpperCase() + curr.slice(1 , curr.length).toLowerCase();
         })
    let result = arr.join(' ');
       return result;
}

module.exports = string4;