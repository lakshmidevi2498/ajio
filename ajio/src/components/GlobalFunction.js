

export const handleRecentView = (item) => {
    console.log("item in handleRecentView", item);

    const storedProducts = JSON.parse(sessionStorage.getItem("recentlyViewed")) || [];
    const filteredProducts = storedProducts.filter(product => product._id !== item._id);
    const updatedList = [...filteredProducts, item].slice(-5);

    sessionStorage.setItem("recentlyViewed", JSON.stringify(updatedList));
};




export const getUserId = () => {
  const socialUserId = sessionStorage.getItem("socialUserId");
  const mobileUser = sessionStorage.getItem("mobileUser");
  const signinUserId = sessionStorage.getItem("signinUserId");
  
  if (socialUserId !== null && socialUserId !== "null") {
      return socialUserId;
  } else if (mobileUser !== null && mobileUser !== undefined) {
      return mobileUser;
  } else if (signinUserId !== null) {
      return signinUserId;
  } else {
      return null;
  }
};

export const getToken = () => {
  const token = sessionStorage.getItem("token");
  const googleToken = sessionStorage.getItem("googleToken"); 
  
  if (token !== null && token !== undefined ) {
      return token;
  } else if (googleToken !== null) {
      return googleToken;
  }  else {
      return null;
  }
};

export const getUserName = () => {
    const socialUserName = sessionStorage.getItem("username");
    const mobileUserName = sessionStorage.getItem("number");
    
    if (socialUserName !== null ) {
        return socialUserName;
    } else if (mobileUserName !== null ) {
        return mobileUserName;
    }  else {
        return null;
    }
  };
