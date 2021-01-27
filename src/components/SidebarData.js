import React from 'react';
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Cuadros',
        path: '/paintings',
        icon: <AiIcons.AiFillPicture />,
        cName: 'nav-text'
    },
    {
        title: 'Historial',
        path: '/history',
        icon: <AiIcons.AiOutlineHistory />,
        cName: 'nav-text'
    },
]
