const images = [
  "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669218057916-7f80c191bd2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_640.jpg",
  "https://cdn.pixabay.com/photo/2016/05/02/10/13/ship-1366926_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/17/01/39/mystery-1599527_640.jpg",
  "https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_640.jpg",
  "https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_640.jpg",
  "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2086621/pexels-photo-2086621.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export const avetars = [
  "https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1580271/pexels-photo-1580271.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://www.pexels.com/@olly/",
  "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?cs=srgb&dl=pexels-samarth-singhai-1193942.jpg&fm=jpg&_gl=1*1lhlykl*_ga*MTUzODIyNTg0My4xNzA4MzYyNTYy*_ga_8JE65Q40S6*MTcwODQzNDU4Mi4zLjEuMTcwODQzNDg5Ny4wLjAuMA..",
  "https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3007759/pexels-photo-3007759.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
];

const data = [...Array(images.length).keys()].map((i) => {
  return {
    key: i.toString(),
    src: images[i],
    title: "Post Title as a dummy test!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste veritatis nihil ab quos dolorem, nam pariatur dolore eaque tenetur minima laboriosam aperiam molestias repellat deleniti et non! Id incidunt magnam consequatur suscipit? Aspernatur, assumenda illum. Accusamus harum suscipit nam tenetur, delectus aut corporis, labore voluptatibus eveniet, error dolor blanditiis.",
    createAt: 0,
  };
});

export default data;
