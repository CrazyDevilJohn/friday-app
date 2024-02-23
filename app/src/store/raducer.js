const initialState = {
  isOpen: false,
  user: {
    displayName: "friday john",
    photoURL:
      "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    email: "devfriday@gmail.com",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1669218057916-7f80c191bd2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
};

const raducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_DRAWER_OPEN":
      return {
        ...state,
        isDrawerOpen: action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_FEEDS":
      return {
        ...state,
        feeds: action.payload,
      };

    default:
      return state;
  }
};

export default raducer;
