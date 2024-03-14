const router = require("express").Router();
const initialData = require("../data/initial-data.json");

// GET initial-data

router.get("/", (req, res) => {
    res.send(initialData);
});

router.get("/:id", (req, res) => {

});

// POST tweet

router.post("/", (req, res) => {

    const tweets = initialData.tweets;
    console.log({ reqBody: req.body });
    const id = tweets.length + 1;
    const { tweetTitle, tweetP, tweetText, comments, retweet, likes } = req.body;
    const newTweet = {
        id: id,
        tweetTitle,
        tweetP,
        tweetText,
        comments,
        retweet,
        likes
    }
    tweets.push(newTweet)
    res.status(201).json({
        tweet: {
            id: id,
            tweetTitle: tweetTitle,
            tweetP: tweetP,
            tweetText: tweetText,
            comments: comments,
            retweet: retweet,
            likes: likes
        },
        tweets: tweets
    })
});

module.exports = router;



// 
// "tweetAvatar": "/images/newyorkTime.png",
// "tweetAvatar": "/images/tweetLogo.png",
// "tweetAvatar": "/images/tweetLogo.png",
// "tweetAvatar": "/images/tweetLogo.png",

// "tweetImage": null,
// "tweetImage": "/images/tweetImage.png",
// "tweetImage": "/images/tweetImage.png",
// "tweetImage": "/images/tweetImage.png",
// "tweetImage": "/images/tweetImage.png",
