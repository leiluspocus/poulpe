/**
 * Helper pour faciliter la communication avec Twitter 
 * On hold en attendant la validation de mon compte développeur 
 * Liens utiles 
 * https://stackoverflow.com/questions/29036707/create-a-new-scheduled-tweet-via-the-api
 * https://developer.twitter.com/en/docs/tweets/post-and-engage/overview
 * https://developer.twitter.com/en/docs/ads/creatives/api-reference/scheduled-tweets#get-accounts-account-id-scheduled-tweets 
 * https://developer.twitter.com/en/docs/basics/getting-started
 */

 export default class Twitter {
    static programTweets(tweets) {
      tweets.forEach((tweet) => {
        console.log(`Publier le tweet ${tweet.content} le ${tweet.publishDate} à ${tweet.publishHour}`);
      });
    }
 }