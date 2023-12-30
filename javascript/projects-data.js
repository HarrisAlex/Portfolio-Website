export class Project {
    constructor(title, description, thumbnails) {
        this.title = title;
        this.description = description;
        this.thumbnails = thumbnails;
    }

    title = "Project Title";
    description = "Project description";
    thumbnails = [];
}

export const storyForge = new Project(
    "Story Forge",
    "I worked with a team to develop an AI-powered web application that leverages the capabilities of ChatGPT-4 to produce unique, interactive stories for its users. By integrating OpenAI's API, the application can generate JSON files that store both a response to the user and up to three choices for story progression. Additionally, I focused on user experience by designing an interface with UI components implemented through JavaScript, ensuring the application is responsive and adjusts seamlessly to different screen sizes.",
    ["images/projects/story-forge-preview.jpg", "images/projects/city-alley-preview.jpg"]
);

export const dungeonGenerator = new Project(
    "Procedural Dungeon Generator",
    "I designed a desktop application capable of generating intricate 3D dungeons using procedural generation techniques in C# and Unity3D. To achieve this, I implemented Dijkstra's and Kruskal's algorithms, allowing the application to generate complex 3D environments in under four seconds. Furthermore, I developed custom debugging tools using C# and Unity3D's API, which significantly streamlined the development process, reducing the overall time by two weeks.",
    []
);

export const shortcutManager = new Project(
    "Remote Shortcut Manager",
    "I developed an iOS and desktop application that enables users to remotely execute actions on their computer from their mobile device. This project involved utilizing project-management software effectively, leading to our team achieving 2nd place in a university-sponsored programming competition. A key feature of the application is the facilitation of data transfer between a user's phone and their computer, which I accomplished through the implementation of Node-based websockets.",
    ["images/projects/dequeue-preview.jpg"]
);

export const renderer = new Project(
    "DirectX 3D Renderer",
    "I leveraged the Windows API to design a custom 3D rendering application in C++, focusing on efficiently displaying 3D data. To enhance user interaction, I constructed an intuitive interface that allows users to view 3D objects, utilizing the DirectX API for high-quality rendering. Additionally, I integrated a custom 3D information converter into the application, enabling users to work with and import 3D data in three different formats, thereby increasing the versatility and user-friendliness of the tool.",
    []
);