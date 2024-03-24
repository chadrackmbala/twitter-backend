const router = require("express").Router();
const fs = require("fs");
// const initialData = require("../assets/initial-data.json");

// CREATING DATA FILE

if (!fs.existsSync('.assets/data.json')) {
    const initialData = JSON.parse(fs.readFileSync('./assets/initial-data.json', 'utf-8'));

    fs.writeFileSync('./assets/data.json', JSON.stringify(initialData, null, 2));
    console.log('Fichier créer avec succès !');
};

const data = require("../assets/data.json");

router.get("/", (req, res) => {
    const tweets = data.tweets.reverse();
    res.send("Welcom");
});

// GET ALL TWEETS

router.get("/tweets", (req, res) => {
    const tweets = data.tweets.reverse();
    res.status(200).json(tweets);
});

// GET TWEET BY HANDLE USER

router.get("/:handle/tweets", (req, res) => {
    const handle = req.params.handle;
    const tweets = data.tweets
    const users = data.users
    const foundUser = users.find(user => user.handle === handle);
    const authorId = foundUser.id;
    const foundTweet = tweets.find(tweet => tweet.author === authorId);

    if (foundTweet) {
        res.status(200).json(foundTweet);
    } else {
        res.status(404).send("Tweets Not Found");
    }
});

// GET TWEET BY HANDLE USER WHERE MEDIA EXIST

router.get("/:handle/media", (req, res) => {
    const handle = req.params.handle;
    const tweets = data.tweets
    const users = data.users
    const foundUser = users.find(user => user.handle === handle);
    const authorId = foundUser.id;
    const foundTweet = tweets.find(tweet => tweet.author === authorId);
    console.log(foundTweet);

    if (foundTweet && foundTweet.media && foundTweet.media.length > 0) {
        res.status(200).json(foundTweet);
    } else {
        res.status(404).send("Media not found");
    }
});

// GET USER BY USERNAME

router.get("/:handle", (req, res) => {
    const handle = req.params.handle;
    const users = data.users;
    const foundUser = users.find(user => user.handle === handle);

    if (foundUser) {
        res.status(200).json(foundUser);
        console.log(foundUser);
    } else {
        res.status(404).send("User Not Found");
    }
});


// POST TWEET

router.post("/tweets", async(req, res) => {
    try {
        const tweets = data.tweets;
        console.log({ reqBody: req.body });
        const id = tweets.length + 1;
        const { author, media, retweetCount, favoriteCount, repliesCount, text, createdAt } = req.body;
        const newTweet = {
            id,
            author,
            media,
            retweetCount,
            favoriteCount,
            repliesCount,
            text,
            createdAt,
        }
        console.log(newTweet);
        tweets.push(newTweet)
        res.status(201).json({
            tweet: {
                id: id,
                author: author,
                media: media,
                retweetCount: retweetCount,
                favoriteCount: favoriteCount,
                repliesCount: repliesCount,
                text: text,
                createdAt: createdAt,
            },
            tweets: tweets
        })
        console.log(newTweet);
        // console.log({ reqBody: req.body });
        console.log("Post réussi !");
    } catch (error) {
        console.error("Erreur lors de la création du tweet :", error);
        res.status(500).json({ error: "Erreur lors de la création du tweet" });
    }
})

module.exports = router;