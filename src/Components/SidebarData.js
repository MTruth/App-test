import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { Assessment } from '@material-ui/icons';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CategoryIcon from '@material-ui/icons/Category';
import GavelIcon from '@material-ui/icons/Gavel';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EvStationIcon from '@material-ui/icons/EvStation';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Projects",
        icon: <AccountTreeIcon />,
        link: "/projects"
    },
    {
        title: "Sources & Uses",
        icon: <CategoryIcon />,
        link: "/assets"
    },
    {
        title: "Power",
        icon: <EvStationIcon />,
        link: "/power"
    },

    {
        title: "Cashflows",
        icon: <MonetizationOnIcon />,
        link: "/cash"
    },
    {
        title: "Financial",
        icon: <LibraryBooksIcon />,
        link: "/financial"
    },
    {
        title: "Tax",
        icon: <GavelIcon />,
        link: "/tax"
    },
];
