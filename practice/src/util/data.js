//contains apps on the task bar
const TaskBarApps = [
    {
        name: "Instagram",
        logo: "./public/assets/Instagram.png",
        active: "off",
        position: "left"
    },
    {
        name: "File Explorer",
        logo: "./public/assets/rocket.png",
        active: "off",
        position: "left"
    }, 
    {
        name: "Github",
        logo: "./public/assets/star.png",
        link: "https://github.com/Josephkim0703",
        active: "off",
        position: "left"
    },
    {
        name: "Trash",
        logo: "./public/assets/star.png",
        link: "https://github.com/Josephkim0703",
        active: "off",
        position: "right"
    }
];

//socials media links
const main = [
    {
        name : "Instagram",
    },
    {
        name : "Github",
    },
    {
        name : "Linkdin",
    },
]

//photos videos, etc
const file = [
    {
        name : "Photos",
    },
    {
        name : "Documents",
    },
    {
        name : "Videos",
    },
]

const edit = [
    {
        name : "Dark mode",
    },
]

//contains my projects
const project = [
    {
        name : "One piece Encyclopedia",
    },   
    {
        name : "Domain Expansion Encyclopedia",
    },
    {
        name : "Fantasy Game",
    },
]

//has all my info
const about = [
    {
        name : "My Info",
    },
    {
        name : "Resume",
    },
    {
        name : "Email",
    },
]

//change wallpapers
const wallpaper = [
    {
        name : "Chrome Skull",
        img : "./public/assets/wallpaper/skull.jpg"
    },
    {  
        name : "Default",
        img : "./public/assets/wallpaper/default.png"
    },
    {   
        name : "Frutiger Aero",
        img : "./public/assets/wallpaper/frutiger.png"
    },
    {   
        name : "Windows XP",
        img : "./public/assets/wallpaper/windows.jpg"
    }
];

const help = [
    {
        name : "Search",
    },
];

export{TaskBarApps, wallpaper, help, about, project, edit, file, main}