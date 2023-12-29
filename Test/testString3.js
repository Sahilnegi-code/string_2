const string3 = (date)=>{
    if(typeof(date) !== "string"){
        return ;
    }
    const month = {
        1 : 'Jan',
        2 : 'Feb',
        3 : 'March',
        4 : 'April',
        5 : 'May',
        6 : 'June',
        7 : 'July',
        8 :'August',
        9 : 'September',
        10 : "October",
        11 : "November",
        12 : 'December'
    }
   const arr = date.split('/');
   return month[arr[1]];
   
   }
   module.exports = string3;