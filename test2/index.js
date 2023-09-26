// it's cool puzzle

export const decode = (input)=> (
  input.replace(/(\.[0-9]{1,})|(-[0-9]{1,})/g, x => {
    const length = Number(x.substring(1))+1;
    return `${(x[0]==="." ? Array(length).join('1') : Array(length).join('0'))}`;
  }).split('').map((i)=>Number(i))
  .reduce((cur,next, index, arr)=>{
    if (typeof cur === "number") return cur[1];
    if( next === arr[index+1] ){
      const d = Number(cur[cur.length-1]);
      const inc = d+1;
      cur[cur.length-1] = inc;
    } else if(arr[index+1]!==undefined){
        cur.push(1);
    }    
    return cur;
  },[1]).map((item)=>(item===1)?".":String((item-2)/2))
  .join("")
  .split(".").map(i=>Number(i))
  .reduce((cur, next, index)=>{
    if(index%2==0){
      cur.push([]);
    }
    cur[cur.length-1].push(next);
    return cur;
  },[])
  .sort((a,b)=>(a[1] > b[1]) ? 1: -1)
  .map(([a])=> String.fromCharCode(a)).join(''));

