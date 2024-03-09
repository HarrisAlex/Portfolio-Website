const skills = [
    { skill: "C", level: 80, color: "00599c", icon: "../images/skill_icons/skill_c.svg", category: "Programming Languages" },
    { skill: "C++", level: 50, color: "00599c", icon: "../images/skill_icons/skill_cpp.svg", category: "Programming Languages" },
    { skill: "C#", level: 90, color: "390090", icon: "../images/skill_icons/skill_cs.svg", category: "Programming Languages" },
    { skill: "Java", level: 70, color: "f58219", icon: "../images/skill_icons/skill_java.svg", category: "Programming Languages" },
    { skill: "Python", level: 40, color: "ffda4b", icon: "../images/skill_icons/skill_python.svg", category: "Programming Languages" },
    { skill: "JavaScript", level: 80, color: "ffca28", icon: "../images/skill_icons/skill_js.svg", category: "Programming Languages" }, 
    { skill: "TypeScript", level: 60, color: "3178c6", icon: "../images/skill_icons/skill_ts.svg", category: "Programming Languages" },
    { skill: "PHP", level: 30, color: "6e81b6", icon: "../images/skill_icons/skill_php.svg", category: "Programming Languages" },
    { skill: "SQL", level: 30, color: "00bcf2", icon: "../images/skill_icons/skill_sql.svg", category: "Programming Languages" },
    { skill: "Go", level: 20, color: "00acd7", icon: "../images/skill_icons/skill_go.svg", category: "Programming Languages" },
    { skill: "HTML", level: 100, color: "f16529", icon: "../images/skill_icons/skill_html.svg", category: "Programming Languages" },
    { skill: "CSS", level: 100, color: "264de4", icon: "../images/skill_icons/skill_css.svg", category: "Programming Languages" },

    { skill: "Git", level: 80, color: "f05033", icon: "../images/skill_icons/skill_git.svg", category: "Technologies" },
    { skill: "Node.js", level: 70, color: "8bc500", category: "Technologies" },
    { skill: "React", level: 60, color: "61dafb", category: "Technologies" },
    { skill: "JQuery", level: 90, color: "131b28", category: "Technologies" },
    { skill: "Express", level: 40, color: "222222", category: "Technologies" },
    { skill: "MySQL", level: 40, color: "00618a", category: "Technologies" },
    { skill: "Electron", level: 60, color: "2b2e3a", category: "Technologies" },
    { skill: "Angular", level: 30, color: "e52a3a", category: "Technologies" },

    { skill: "Unity", level: 100, color: "808080", category: "Software" },
    { skill: "Unreal Engine", level: 40, color: "000000", category: "Software" },
    { skill: "Maya", level: 60, color: "38a6cc", category: "Software" },
    { skill: "Blender", level: 90, color: "f48b3c", category: "Software" },
    { skill: "Photoshop", level: 80, color: "001e36", category: "Software" },
    { skill: "Illustrator", level: 80, color: "330000", category: "Software" },
    { skill: "Premiere Pro", level: 80, color: "00005b", category: "Software" },

    { skill: "3D Modeling", level: 80, category: "Proficiencies" },
    { skill: "Interactive Simulations", level: 85, category: "Proficiencies" },
    { skill: "Game Development", level: 90, category: "Proficiencies" },
    { skill: "Web Development", level: 80, category: "Proficiencies" },
];

skills.map(s => {
    let container = $("<div class='skill-bar-container' skill='" + s.skill + "'></div>");

    $("<p>").text(s.skill).appendTo(container);

    let bar = $("<div class='skill-bar' aos='slide-right maximum slow'></div>").appendTo(container);
    $(bar).css("width", s.level + "%");
    $(bar).css("background-color", "#" + s.color);

    let iconContainer = $("<div class='skill-icon-container'></div>").appendTo(container);

    $("<img>").attr("src", s.icon).appendTo(iconContainer);

    switch (s.category) {
        case "Programming Languages":
            container.appendTo($("#programming-languages"));
            break;
        case "Technologies":
            container.appendTo($("#technologies"));
            break;
        case "Software":
            container.appendTo($("#software"));
            break;
        case "Proficiencies":
            container.appendTo($("#proficiencies"));
            break;
    }
});