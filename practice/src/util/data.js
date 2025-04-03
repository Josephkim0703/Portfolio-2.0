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
        name : "Default",
        img : "./public/assets/wallpaper/default.png"
    },
    {   
        name : "Windows XP",
        img : "./public/assets/wallpaper/windows.jpg"
    },
    {
        name : "Aesthetic Chrome Skull",
        img : "./public/assets/wallpaper/skull.jpg"
    },
    {   
        name : "One piece Wano Edition",
        img : "./public/assets/wallpaper/WanoOP.jpg"
    },
    {   
        name : "One piece Nami Edition",
        img : "./public/assets/wallpaper/nami.jpg"
    },
    {   
        name : "Neon Genesis Evangelion",
        img : "./public/assets/wallpaper/neon.jpg"
    },
    {   
        name : "Neon Genesis Evangelion Windows XP Edition",
        img : "./public/assets/wallpaper/windowsneon.jpg"
    },
    {   
        name : "Pokemon Psyduck-at-the-Store",
        img : "./public/assets/wallpaper/psyduck.jpg"
    },
    {   
        name : "Subaru Impreza WRX STI",
        img : "./public/assets/wallpaper/subaru.jpg"
    },
   
];

const help = [
    {
        name : "Search",
    },
];

export{TaskBarApps, wallpaper, help, about, project, edit, file, main}