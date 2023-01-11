import { ContactTypes } from "./contacts";
// import { contacts } from "./contacts";
import { myData } from "./myProfile";
// import img1 from "../assets/images/small/img-1.jpg";
// import img2 from "../assets/images/small/img-2.jpg";

export interface AttachmentTypes {
  id: number;
  name: string;
  downloadLink: string;
  desc: string;
}

export interface ImageTypes {
  id: number;
  downloadLink: string;
}
export interface MessagesTypes {
  mId: number;
  text?: string;
  time: string;
  meta: {
    receiver: string | number;
    sender: string | number;
    userData?: ContactTypes;
    sent: boolean;
    received: boolean;
    read: boolean;
    isForwarded?: boolean;
  };
  attachments?: AttachmentTypes[];
  image?: ImageTypes[];
  replyOf?: MessagesTypes;
}
export interface ConversationTypes {
  conversationId: string | number;
  userId: string;
  isGroupConversation?: boolean;
  typingUser?: string | number;
  messages: MessagesTypes[];
}

export const myId = myData.uid;
let conversations: ConversationTypes[] = [
];

const onChangeConversations = (newData: ConversationTypes[]) => {
  conversations = newData;
  // console.log("conversations", conversations);
  // const conversationExample = {
//   conversationId: 1,
//   userId: "614ecab4ac946a9bdafa4e3b",
//   messages: [
//     {
//       mId: 1,
//       text: "dsds",
//       time: "",
//       meta: {
//         receiver: directMessages[0].id,
//         sender: directMessages[1].id,
//         sent: true,
//         received: true,
//         read: true,
//       },
//       attachments: [
//         {
//           id: 1,
//           name: "",
//           downloadLink: "",
//           desc: "",
//         },
//       ],
//       image: [
//         {
//           id: 1,
//           downloadLink: "",
//         },
//       ],
//     },
//   ],
// };
};

// const conversationExample = {
//   conversationId: 1,
//   userId: "614ecab4ac946a9bdafa4e3b",
//   messages: [
//     {
//       mId: 1,
//       text: "dsds",
//       time: "",
//       meta: {
//         receiver: directMessages[0].id,
//         sender: directMessages[1].id,
//         sent: true,
//         received: true,
//         read: true,
//       },
//       attachments: [
//         {
//           id: 1,
//           name: "",
//           downloadLink: "",
//           desc: "",
//         },
//       ],
//       image: [
//         {
//           id: 1,
//           downloadLink: "",
//         },
//       ],
//     },
//   ],
// };
export { conversations, onChangeConversations };
