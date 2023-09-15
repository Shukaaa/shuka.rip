import {Project} from "../types/projects";
import {ProjectTag} from "../enums/project-tag";
import {TechnologyTag} from "../enums/technology-tag";

export const pages = [
    "Home",
    "Projects",
    "Contact"
];

export const defaultAudioVolume = 30; // percent

export const contact = {
  email: "dev@shuka.rip",
  instagram: "https://www.instagram.com/speed.phnk/",
}

export const projects: Project[] = [
  {
    name: "Shukaaa's Portfolio",
    description: "This website. It's build with Angular and it is supposed to be the most fucked up and untrustworthy portfolio ever.",
    link: "#",
    repository: "Shukaaa/shuka.rip",
    image: "assets/img/projects/shuka.rip.png",
    tags: [ProjectTag.WebApp],
    technologies: [TechnologyTag.Angular, TechnologyTag.HTML, TechnologyTag.SCSS, TechnologyTag.TypeScript]
  },
  {
    name: "Anime Higher Lower Game",
    description: "A game where you guess which anime or manga is more popular. There are 5 different difficulties, and you can choose between anime or manga. The given Information is provided by the Jikan API.",
    link: "projects/anime-higher-lower-game",
    repository: "Shukaaa/anime-higher-lower",
    image: "assets/img/projects/anime-higher-lower.png",
    tags: [ProjectTag.WebApp],
    technologies: [TechnologyTag.Angular, TechnologyTag.TypeScript, TechnologyTag.HTML, TechnologyTag.SCSS],
  },
  {
    name: "Rapid TS",
    description: "A TypeScript / JavaScript library for generating light REST APIs really quick with a few configuration steps. It's build on top of Express.js.",
    link: "https://www.npmjs.com/package/@rapid-api/rapid-ts",
    repository: "Shukaaa/rapid-ts",
    image: "assets/img/projects/rapid-ts.png",
    tags: [ProjectTag.NPMLibrary, ProjectTag.RESTAPI],
    technologies: [TechnologyTag.TypeScript, TechnologyTag.JavaScript],
  },
  {
    name: "Docsi",
    description: "Write documentations easily with this template. It uses Markdown as its Markup language and is build with JavaScript. The template has predefined styles and highlighting. Auto-Reloading, Build Configuration and more is included. Docsi also have a CLI, to create the template even faster.",
    link: "https://www.npmjs.com/package/@docsi/cli",
    repository: "Shukaaa/docsi",
    image: "assets/img/projects/docsi.png",
    tags: [ProjectTag.Template, ProjectTag.CLI, ProjectTag.NPMLibrary],
    technologies: [TechnologyTag.HTML, TechnologyTag.CSS, TechnologyTag.JavaScript, TechnologyTag.Markdown],
  },
  {
    name: "paint.rip",
    description: "A Java application for applying filters, effects and distortion to images. It's build with a GUI and is easy to use. It's also possible to save the edited image in different file formats. The application creates unique images.",
    link: "",
    repository: "Shukaaa/paint.rip",
    image: "assets/img/projects/paint.rip.png",
    tags: [ProjectTag.ImageProcessing, ProjectTag.DesktopApp],
    technologies: [TechnologyTag.Java],
  },
  {
    name: "file-expluwuer",
    description: "A CLI file explorer that suddenly only support Linux because I'm a bad developer. It's build with Go and is easy to use. It's only possible to navigate between folder.",
    link: "",
    repository: "Shukaaa/file-expluwuer",
    image: "assets/img/projects/file-expluwuer.png",
    tags: [ProjectTag.CLI],
    technologies: [TechnologyTag.Go],
  },
  {
    name: "spotify-listener",
    description: "Very very very Simple JS Web-Scraping script that allows you to get the monthly listeners of an artist because the Spotify API doesn't provide this information. Maybe it's going to be a NPM library in the future.",
    link: "",
    repository: "Shukaaa/spotify-listener",
    image: "assets/img/projects/spotify-listener.png",
    tags: [ProjectTag.WebScraping],
    technologies: [TechnologyTag.JavaScript]
  },
  {
    name: "spotify-higher-lower",
    description: "A CLI game where you guess which artist has more popularity. It's build with Python and uses the Spotify API.",
    link: "",
    repository: "Shukaaa/spotify-higher-lower",
    image: "assets/img/projects/spotify-higher-lower.png",
    tags: [ProjectTag.CLI],
    technologies: [TechnologyTag.Python]
  },
  {
    name: "All-Biomes-Challenge",
    description: "A Minecraft Spigot Plugin for the All-Biomes-Challenge. It's build with Java and is easy to use. It showes a progress bar at the top of the screen with the current biome and the remaining biomes.",
    link: "https://www.spigotmc.org/resources/all-biomes-challenge.110835/",
    repository: "Shukaaa/All-Biomes-Challenge",
    image: "assets/img/projects/all-biomes-challenge.jpg",
    tags: [ProjectTag.Minecraft, ProjectTag.Plugin],
    technologies: [TechnologyTag.Java],
  }
]
