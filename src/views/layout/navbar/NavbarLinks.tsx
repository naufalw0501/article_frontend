import { GoDotFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { MdInventory } from "react-icons/md"
import { FaRegListAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";


const NavBarLinks : any = [
    {
        title : "Dashboard",
        link : "/dashboard",
        icon : <MdDashboard />,
        child : []
    },
    {
        title : "Inbound",
        link : null,
        icon : <RiInboxArchiveFill />,
        child : [
            {
                title : "List Inbound",
                link : "/inbound/list_inbound",
                icon : <GoDotFill />,
            },
            {
                title : "Monitor Lokasi",
                link : "/inbound/print_lokasi",
                icon : <GoDotFill />,
            },
        ]
    },
    {
        title : "Inventory",
        link : "/inventory",
        icon : <MdInventory />,
        child : []
    },
    {
        title : "Outbound",
        link : "/outbound",
        icon : <RiInboxUnarchiveFill />,
        child : []
    },
    {
        title : "Report",
        link : null,
        icon : <FaClipboardList />,
        child : [
            // {
            //     title : "Report Material",
            //     link : "/report/material",
            //     icon : <GoDotFill />,
            // },
            {
                title : "Report Inbound",
                link : "/report_inbound",
                icon : <GoDotFill />,
            },
            {
                title : "Report Outbound",
                link : "/report_outbound",
                icon : <GoDotFill />,
            },
        ]
    },
    {
        title : "Master",
        link : null,
        icon : <FaRegListAlt />,
        child : [
            {
                title : "User",
                link : "/master/user",
                icon : <GoDotFill />,
            },
            {
                title : "Material",
                link : "/master/material",
                icon : <GoDotFill />,
            },
            {
                title : "Destination",
                link : "/master/destination",
                icon : <GoDotFill />,
            },
            {
                title : "Location",
                link : "/master/location",
                icon : <GoDotFill />,
            },
        ]
    },
]

export default NavBarLinks