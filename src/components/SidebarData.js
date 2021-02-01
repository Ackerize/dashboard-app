import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from 'react-icons/ri';

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
        title: 'Medidas',
        path: '/measurements',
        icon: <FaIcons.FaRulerCombined />,
        cName: 'nav-text'
    },
    {
        title: 'Materiales',
        path: '/materials',
        icon: <FaIcons.FaSwatchbook />,
        cName: 'nav-text'
    },
    {
        title: 'Temas',
        path: '/themes',
        icon: <FaIcons.FaPalette />,
        cName: 'nav-text'
    },
    {
        title: 'Zonas de entrega',
        path: '/delivery-zones',
        icon: <FaIcons.FaTruck />,
        cName: 'nav-text'
    },
    {
        title: 'Historial',
        path: '/history',
        icon: <AiIcons.AiOutlineHistory />,
        cName: 'nav-text'
    },
    {
        title: 'Cerrar sesión',
        path: '/logout',
        icon: <RiIcons.RiLogoutBoxLine />,
        cName: 'nav-text'
    }
]
