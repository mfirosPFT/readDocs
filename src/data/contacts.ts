// import avatar1 from "../assets/images/users/avatar-1.jpg";
// import avatar2 from "../assets/images/users/avatar-2.jpg";
// import avatar3 from "../assets/images/users/avatar-3.jpg";
// import avatar4 from "../assets/images/users/avatar-4.jpg";
// import avatar5 from "../assets/images/users/avatar-5.jpg";
// import avatar6 from "../assets/images/users/avatar-6.jpg";
// import avatar7 from "../assets/images/users/avatar-7.jpg";
// import avatar8 from "../assets/images/users/avatar-8.jpg";
// import avatar9 from "../assets/images/users/avatar-9.jpg";
// import avatar10 from "../assets/images/users/avatar-10.jpg";
// import img1 from "../assets/images/small/img-1.jpg";
// import img2 from "../assets/images/small/img-2.jpg";
// import img3 from "../assets/images/small/img-3.jpg";
// import img4 from "../assets/images/small/img-4.jpg";

// interfaces
import { ChannelTypes } from "./chat";
import { MediaTypes, AttachedfileTypes } from "./myProfile";
import { STATUS_TYPES } from "../constants";
export interface ContactTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  about?: string;
  email: string;
  location: string;
  channels?: Array<ChannelTypes>;
  media?: MediaTypes;
  attachedFiles?: AttachedfileTypes;
  status?: STATUS_TYPES;
  isFavourite?: boolean;
  isArchived?: boolean;
}
let contacts: ContactTypes[] =
 [
  {
    id: "qa",
    firstName: "Q&A",
    lastName: "",
    about: "Using text-davinci-003, most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    email: "4,000 tokens",
    location: "Up to Jun 2021",
    status: STATUS_TYPES.ACTIVE,
    channels: [],
    media: {
      total: 0,
      list: [
        
      ],
    },
    attachedFiles: {
      total: 0,
      list: [
      ],
    },
  },
  {
    id: "translate",
    firstName: "Translate",
    lastName: "",
    about: "Using text-davinci-003, most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    email: "4,000 tokens",
    location: "Up to Jun 2021",
    status: STATUS_TYPES.ACTIVE,
    channels: [],
    media: {
      total: 0,
      list: [
        
      ],
    },
    attachedFiles: {
      total: 0,
      list: [
      ],
    },
  },

  {
    id: "code",
    firstName: "Code Assistant",
    lastName: "",
    about: "Using code-davinci-003, most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    email: "4,000 tokens",
    location: "Up to Jun 2021",
    status: STATUS_TYPES.AWAY,
    channels: [],
    media: {
      total: 0,
      list: [
        
      ],
    },
    attachedFiles: {
      total: 0,
      list: [
      ],
    },
  },
{
    id: "explainCode",
    firstName: "Explain Code",
    lastName: "",
    about: "Using code-davinci-003, most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    email: "4,000 tokens",
    location: "Up to Jun 2021",
    status: STATUS_TYPES.AWAY,
    channels: [],
    media: {
      total: 0,
      list: [
        
      ],
    },
    attachedFiles: {
      total: 0,
      list: [
      ],
    },
  },
  {
    id: "chat",
    firstName: "ChatBot",
    lastName: "",
    about: "Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.",
    email: "8,000 tokens",
    location: "Up to Jun 2021",
    status: STATUS_TYPES.ACTIVE,
    channels: [],
    media: {
      total: 0,
      list: [
        
      ],
    },
    attachedFiles: {
      total: 0,
      list: [
      ],
    },
  },
  {
    id: "movieEmoji",
    firstName: "Movie Emoji",
    lastName: "",
    about: "Most capable Codex model. Particularly good at translating natural language to code. In addition to completing code, also supports inserting completions within code.",
    email: "8,000 tokens",
    location: "Up to Jun 2021",
    status: STATUS_TYPES.ACTIVE,
    channels: [],
    media: {
      total: 0,
      list: [
        
      ],
    },
    attachedFiles: {
      total: 0,
      list: [
      ],
    },
  },
  
 
  
];

const onChangeContacts = (newData: Array<ContactTypes>) => {
  contacts = newData;
};
export { contacts, onChangeContacts };
