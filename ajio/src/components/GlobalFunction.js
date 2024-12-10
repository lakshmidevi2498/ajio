


export function handleRecentView(item) {
    // alert("dfghj")
    console.log("item in handleRecentView",item)
    const storedProducts = JSON.parse(sessionStorage.getItem("recentlyViewed"));
    const updatedList = storedProducts
      ? [...storedProducts, item].slice(-5) 
      : [item];
  
    sessionStorage.setItem("recentlyViewed", JSON.stringify(updatedList));
  
}