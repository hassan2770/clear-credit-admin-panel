import { BiSolidTachometer, BiSolidPlaneAlt } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiBankFill } from "react-icons/ri";
import {
  FaRegFileAlt,
  FaUser,
  FaFileInvoiceDollar,
  FaShoppingBag,
} from "react-icons/fa";
import { TbHanger2 } from "react-icons/tb";
import {
  MdTrolley,
  MdOutlineDataset,
  MdFileOpen,
  MdMail,
} from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const menuItems = [
    {
      title: "Overview",
      list: [
        {
          title: "App",
          path: "/dashboard",
          icon: <BiSolidTachometer />,
        },
        {
          title: "Analytics",
          path: "/dashboard/analytics",
          icon: <TbDeviceAnalytics />,
        },
        {
          title: "Banking",
          path: "/dashboard/banking",
          icon: <RiBankFill />,
        },
        {
          title: "Booking",
          path: "/dashboard/booking",
          icon: <BiSolidPlaneAlt />,
        },
        {
          title: "File",
          path: "/dashboard/file",
          icon: <FaRegFileAlt />,
        },
      ],
    },
    {
      title: "Management",
      list: [
        {
          title: "User",
          path: "/dashboard/user",
          icon: <FaUser />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "Hotels",
          path: "/dashboard/hotels",
          icon: <TbHanger2 />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "Order",
          path: "/dashboard/order",
          icon: <MdTrolley />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "Invoice",
          path: "/dashboard/invoice",
          icon: <FaFileInvoiceDollar />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "Blog",
          path: "/dashboard/blog",
          icon: <MdOutlineDataset />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "Job",
          path: "/dashboard/job",
          icon: <FaShoppingBag />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "Holiday",
          path: "/dashboard/holiday",
          icon: <BsFillFlagFill />,
          icon2: <IoIosArrowForward />,
        },
        {
          title: "File Manager",
          path: "/dashboard/filemanager",
          icon: <MdFileOpen />,
        },
        {
          title: "Mail",
          path: "/dashboard/mail",
          icon: <MdMail />,
        },
        {
          title: "Chat",
          path: "/dashboard/chat",
          icon: <IoLogoWechat />,
        },
      ],
    },
  ];

export default menuItems;