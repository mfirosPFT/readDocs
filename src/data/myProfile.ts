import image4 from "../assets/images/small/img-4.jpg";
import avatar1 from "../assets/images/users/avatar-1.jpg";
import img1 from "../assets/images/small/img-1.jpg";
import img2 from "../assets/images/small/img-2.jpg";
import img4 from "../assets/images/small/img-4.jpg";

export interface BasicDetailsTypes {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  fullName: string;
  email: string;
  location: string;
  avatar: string;
  coverImage: string;
}

export interface MediaListItemTypes {
  id: number;
  url: string;
}
export interface MediaTypes {
  total: number;
  list: MediaListItemTypes[];
}

export interface AttachedfileTypes {
  total: number;
  list: AttachedfileItemTypes[];
}

export interface AttachedfileItemTypes {
  id: number;
  fileName: string;
  size: string;
  downloadUrl: string;
  icon: string;
}
export interface ProfileDetailsTypes {
  basicDetails: BasicDetailsTypes;
  media: MediaTypes;
  attachedFiles: AttachedfileTypes;
}

const profileDetails: ProfileDetailsTypes = {
  basicDetails: {
    firstName: "Kathryn",
    lastName: "Swarey",
    title: "Front end Developer",
    description:
      "If several languages coalesce, the grammar of the resulting language is more simple.",
    fullName: "Kathryn Swarey",
    email: "admin@themesbrand.com",
    location: "California, USA",
    avatar: avatar1,
    coverImage: image4,
  },
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
        url: img4,
      },
      {
        id: 4,
        url: img1,
      },
    ],
  },
  attachedFiles: {
    total: 4,
    list: [
    ],
  },
};

let user: any = localStorage.getItem("authUser");
user = JSON.parse(user);

const myData = {
  uid: user && user.uid ? user.uid : 1,
  username: "admin",
  role: "admin",
  password: "123456",
  email: profileDetails.basicDetails.email,
  profileImage: profileDetails.basicDetails.avatar,
};

export { profileDetails, myData };
