const router = require("express").Router();
const initialData = require("../assets/initial-data.json");

// GET initial-data

router.get("/", (req, res) => {
    res.send(initialData.tweets);
});

router.get("/:id", (req, res) => {

});

// POST tweet

router.post("/tweets", (req, res) => {

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