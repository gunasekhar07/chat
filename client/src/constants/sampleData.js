export const sampleChats = [
    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Doe",
      _id: "1",
      groupChat: false,
      members: ["1", "2"],
    },

    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Boi",
      _id: "2",
      groupChat: true,
      members: ["1", "2"],
    },
    
  ];


export const sampleUsers =[
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Boi",
    _id: "2",
  },
];


export const sampleNotifications =[
  {
    sender:{
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
  },
  _id: "1",
},

{
  sender:{
  avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  name: "John Boi",
  
},
_id: "2",
},

];

export const sampleMessage =[
  {
    attachments:[],
    content: "Pandu ka Message hai",
    _id:"pandey@7",
    sender:{
      _id:"user._id",
      name:"pandu",
    },
    chat:"chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },

  {
    attachments:[
      {
        public_id:"Guna Sekhar 2",
        url:"https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id:"pandey@7",
    sender:{
      _id:"pandu",
      name:"pandu 2",
    },
    chat:"chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];