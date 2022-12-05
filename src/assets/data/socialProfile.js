import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";

import openseaIcon from "../images/icon/opensea.svg";
import mediumIcon from "../images/icon/med.svg";

const data = [
  {
    thumb: openseaIcon,
    url: "https://opensea.io/collection/ohmiobox",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/OhmioBroadcast",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/radioadviceus",
  },
  {
    icon: <FaFacebook />,
    url: "https://m.facebook.com/people/Ohmio-Broadcast/",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/OhmioBroadcast",
  },
];

export default data;
