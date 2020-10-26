module.exports = {

    author: "@OkayX6",
    siteTitle: "Denis Ok's Portfolio",
    siteShortTitle: "Denis Ok", // Used as logo text in header, footer, and splash screen
    siteDescription: "Denis Ok's portfolio",
    siteUrl: "https://okayx6.github.io/Portfolio/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/denisok"
        },
        {
            name: "Github",
            url: "https://github.com/OkayX6"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        // {
        //     name: "Imprint",
        //     url: "/imprint"
        // }
    ]
}