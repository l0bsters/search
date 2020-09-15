const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "Code",
            [
                ["github", "https://github.com/l0bsters"],
                ["w3s", "https://www.w3schools.com"]
            ]
        ],
        [
            ".Nix",
            [
                ["r/unix", "https://www.reddit.com/r/unixporn/"],
                ["d0tshareit", "http://www.dotshare.it"]
            ]
        ],
        [
            "Media",
            [
                ["vimeo", "https://www.vimeo.com"],
                ["youtube", "https://www.youtube.com"],
                ["TPB", "https://www.thepiratebay.org"]
            ]
        ],
        [
            "Misc",
            [
                ["digitalOcean", "https://www.digitalocean.com"],
                ["underd0g", "http://www.underd0g.co"],
                ["l0bster", "https://www.l0bster.ru"],
                ["2f30", "https://www.2f30.org"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
