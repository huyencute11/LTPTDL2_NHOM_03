
const GetLocalStorage = (items) => {
    const items = JSON.parse(localStorage.getItem(items)) || [];
    // localStorage.getItem(key) ? localStorage.getItem(key) : null
  
}

export default GetLocalStorage