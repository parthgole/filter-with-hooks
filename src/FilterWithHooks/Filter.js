import React from 'react'
import { useState } from 'react'

const listItemSubject=['HTML','CSS','REACTJS','PHP']
function Filter() {
    const[searchValue,setSearchValue]=useState('');
    const[listItem,setSetListItem]=useState(listItemSubject);

    const onSearch=(e)=>{
        const updateList=[...listItem];
        if(e!==''){
        // console.log(searchValue,e)
        const newUpdateList= updateList.filter(function(value,index){
            return value.includes(e);
        })
        // console.log(newUpdateList)
        setSetListItem(newUpdateList)
    }else{
        setSetListItem(listItemSubject)

    }
    }
    
  return (
    <>
     <input type="text"  value={searchValue} onChange={(e)=>setSearchValue(e.target.value.toUpperCase())}
     onKeyUp={(e)=>onSearch(e.target.value)}
     />
     <ul>
     {listItem.map((value,index)=>
        <li key={index}>{value}</li>
     )}
     </ul> 
    </>
  )
}

export default Filter
