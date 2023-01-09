import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";
import img3 from "../assets/images/small/img-3.jpg";
import img4 from "../assets/images/small/img-4.jpg";

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
    id: "614ecab426f59ce2863e106e",
    firstName: "Sanford",
    lastName: "Phelps",
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "adc@123.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
      {
        id: "61665bcb9a41b4e8352ba610",
        name: "Design Phase 2",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: img1,
        },
        {
          id: 2,
          url: img2,
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
        {
          id: 3,
          fileName: "Image-2.jpg",
          size: "3.1 MB",
          downloadUrl: "#",
          icon: "bx bx-image",
        },
        {
          id: 4,
          fileName: "Landing-A.zip",
          size: "6.7 MB",
          downloadUrl: "#",
          icon: "bx bx-file",
        },
      ],
    },
  },
  {
    id: "614ecab426f59ce2863e106f",
    firstName: "text-davinci-003",
    lastName: "",
    about: "Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
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
    id: "614ecab426f59ce28ddd06f",
    firstName: "code-davinci-002",
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
    id: "614ecab4ac946a9bdafa4e3b",
    isFavourite: true,
    firstName: "Marguerite",
    lastName: "Campbell",
    profileImage: avatar4,
    about: "If several languages coalesce, the grammar of the resulting.",
    email: "Marguerite@Campbell.com",
    location: "California, USA",
    status: STATUS_TYPES.ACTIVE,
    channels: [
      {
        id: "61665bcb9a456823e282afa7",
        name: "Landing Design",
      },
    ],
    media: {
      total: 17,
      list: [
        {
          id: 1,
          url: img1,
        },
        {
          id: 2,
          url: img2,
        },
        {
          id: 3,
          url: img3,
        },
        {
          id: 4,
          url: img4,
        },
      ],
    },
    attachedFiles: {
      total: 4,
      list: [
      ],
    },
  },
  
 
  
];

const onChangeContacts = (newData: Array<ContactTypes>) => {
  contacts = newData;
};
export { contacts, onChangeContacts };
