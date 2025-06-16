//contains apps on the task bar
const TaskBarApps = [
     {
        name: "Finder",
        logo: "./public/assets/icons/finder.png",
        active: "off",
        position: "left"
    },
    {
        name: "Mail",
        logo: "./public/assets/icons/email.png",
        active: "off",
        position: "left"
    },
    {
        name: "iTunes",
        logo: "./public/assets/icons/music.png",
        active: "off",
        position: "left"
    },
    {
        name: "Calendar",
        logo: "./public/assets/icons/calender.png",
        active: "off",
        position: "left"
    }, 
    {
        name: "QuickTime Player",
        logo: "./public/assets/icons/q.png",
        active: "off",
        position: "left"
    },    
    {
        name: "System Preferences",
        logo: "./public/assets/icons/setting.png",
        active: "off",
        position: "left"
    },
    {
        name: "Trash",
        logo: "./public/assets/icons/trashcan_empty.png",
        link: "https://github.com/Josephkim0703",
        active: "off",
        position: "right"
    }
];

//socials media links
const main = [
    {
        name : "Instagram",
        link : "https://www.instagram.com/josephkim_/"
    },
    {
        name : "Github",
        link : "https://github.com/Josephkim0703"
    },
    {
        name : "Linkdin",
        link : "https://www.linkedin.com/in/josephkim0703/"
    },
    {
        name : "MyAnimeList",
        link : "https://myanimelist.net/animelist/Senpai_EFS"
    }
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
        link: "https://josephkim0703.github.io/devil-fruit-encyclopedia/"
    },   
    {
        name : "Domain Expansion Encyclopedia",
        link: "https://josephkim0703.github.io/Domain-Expansion/"
    },
    {
        name : "Fantasy Game",
        link: ""
    },
]

//has all my info
const about = [
    {
        name : "How to Navigate",
        index : 0,
        info: `<div style="font-family: 'Arial', sans-serif; line-height: 1.2; color: #333; text-align: center; padding: 5px">
          <h1 style="color: #4A90E2; margin: 5px;">🚀 Welcome to Joseph's Portfolio!</h1>
          <p style="text-align: left;">
            This website is designed to be more than just a collection of my projects, it's an <b>experience</b>.<br /><br />
            Inspired by the <b>vintage Mac OS</b> user interface, you'll find not just my main projects, but also mini projects creatively integrated throughout the site.<br /><br />
            Think of this portfolio as an actual Mac desktop: 📂 folders to open, 🎨 wallpapers to discover, 🎮 mini-games to play, and a file system filled with 📸 photos, 🎥 videos, and pieces of my journey.<br /><br />
            I invite you to dive in, explore, and maybe even find a few surprises along the way! ✨
          </p>
          <h2 style="margin: 10px 0px 0px 0px; color: #4A90E2;">🗺️ How to Get Around:</h2>
          <ul style="list-style: none; padding: 0; text-align: left; display: inline-block;">
            <li><b>🖱️ Explore Freely:</b> Click around the windows, folders, and icons to uncover different parts of the site.</li><br />
            <li><b>📎 Footer Shortcuts:</b> For quick access to my info, like contact details, social links, and important files, just head to the footer.</li>
          </ul>
        
        </div>
        `
    },
    {
        name : "About Me",
        index : 2,
        info: `<div style="font-family: 'Arial', sans-serif; line-height: 1.2; color: #333; padding: 5px;">

  <h1 style="text-align: center; color: #4A90E2;">👋 About Me</h1>

  <p>
    Hey there! I'm <b>Joseph Kim</b>, a 20-year-old passionate creator born on <b>July 3rd, 2004</b>. Originally from <b>Barrie, Ontario</b>, but raised in the beautiful province of <b>British Columbia</b>, Canada.
  </p>

  <p>
    I’m someone who’s always chasing new experiences — whether it's coding up cool projects 💻, collecting Pokémon cards 🎴, diving deep into anime 📺, or even trying my luck in the world of stocks 📈 and a little bit of gambling 🎰.
  </p>

  <p>
    One of my biggest passions is <b>learning new things</b>. There’s nothing more exciting to me than trying something completely new and eventually becoming great at it. That feeling of leveling up is something I constantly chase 🔥.
  </p>

  <p>
    I also love extreme sports 🛹 and adventurous activities, and one of my life goals is to complete my personal "<b>Things To Do Before I Die</b>" list — a bucket list filled with challenges, dreams, and unforgettable experiences 🌍.
  </p>

  <h2 style="margin: 10px 0px 0px 0px; text-align: center; color: #4A90E2;">🎯 Fun Facts About Me</h2>
 <center>
  <ul style="list-style: none; padding: 0; text-align: left; display: inline-block;">
    <li>🎯 I used to be part of a Fortnite organization as a trickshotter.</li><br />
    <li>🛹 I skateboarded seriously for 3 years.</li><br />
    <li>🌎 I have watched over 300+ animes.</li>
  </ul>
</center>
</div>`
    },
    {
        name : "Resume",
        index : 3,
        info:   "./public/assets/Documents/Resume.docx"
    },
    {
        name : "Contact",
        index : 4,
        info: "Email: josephkim0703@gmail.com \nPhone Number: 236-513-3280" ,
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
        img : "./public/assets/wallpaper/subaru.png"
    },
   
];

const help = [
    {
        name : "Tutorial",
    },
    {
        name : "Search",
    },
];

export{TaskBarApps, wallpaper, help, about, project, edit, file, main}


//myanimelist top 10 anime and link to myanimelist
//my 100 things to before i die list
//trickshot insta
