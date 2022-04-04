import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try {
  
          const localStorageTodosItem =  localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageTodosItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageTodosItem);
          }  
          
          setItem(parsedItem);
          setLoading(false);
  
        } catch (error) {
          
          setError(error);
  
        }
  
      }, 3000)
    });
  
  
    const saveItem = (newItem) => {
  
      try {
  
        const stringfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringfiedItem);
        setItem(newItem);
  
      } catch (error) {
        
        setError(error);
  
      }
     
    };
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  
  }

  export { useLocalStorage };