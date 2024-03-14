const router1 = require("express").Router();
const initialData = require("../data/initial-data.json");

// GET initial-data

router1.get("/", (req, res) => {
    res.send(initialData);
});

router1.get("/:id", (req, res) => {

});

// POST tweet

router1.post("/", (req, res) => {

    const tweets = initialData.tweets;
    const tweetAvatar = initialData.tweets.tweetAvatar;
    const tweetImage = initialData.tweets.tweetImage;
    console.log({ reqBody: req.body });
    const id = tweets.length + 1;
    const { tweetTitle, tweetP, tweetText, comments, retweet, likes } = req.body;
    const newTweet = {
        id: id,
        tweetAvatar,
        tweetTitle,
        tweetP,
        tweetText,
        tweetImage,
        comments,
        retweet,
        likes
    }
    tweets.push(newTweet)
    res.status(201).json({
        tweet: {
            id: id,
            tweetAvatar: tweetAvatar,
            tweetTitle: tweetTitle,
            tweetP: tweetP,
            tweetText: tweetText,
            tweetImage: tweetImage,
            comments: comments,
            retweet: retweet,
            likes: likes
        },
        tweets: tweets
    })
    console.log("post reussi !");
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
