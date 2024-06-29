// import processResponse from "./utils";

// export const baseUrl = "http://localhost:3000";

// // export const baseUrl =
// //   process.env.NODE_ENV === "production"
// //     ? "https://api.newsexplorer.pakasak.com"
// //     : "http://localhost:3001";

// const getSavedCards = () => {
//   return fetch(`${baseUrl}/articles`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(processResponse);
// };

// const addCardSave = ({ cardData, keyword }, token) => {
//   console.log(123);
//   console.log(token);
//   return fetch(`${baseUrl}/articles`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       keyword: keyword,
//       image: cardData.urlToImage,
//       title: cardData.title,
//       date: cardData.publishedAt,
//       text: cardData.description,
//       source: cardData.source.name,
//       link: cardData.url,
//     }),
//   }).then(processResponse);
// };

// const deleteCards = (_id, token) => {
//   return fetch(`${baseUrl}/articles/${_id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`,
//     },
//   }).then(processResponse);
// };

// // const addCardSave = (_id, token) => {
// //   return fetch(`${baseUrl}/items/${_id}/likes`, {
// //     method: "PUT",
// //     headers: {
// //       "Content-Type": "application/json",
// //       authorization: `Bearer ${token}`,
// //     },
// //   }).then(processResponse);
// // };

// // const removeCardSave = (_id, token) => {
// //   return fetch(`${baseUrl}/items/${_id}/likes`, {
// //     method: "DELETE",
// //     headers: {
// //       "Content-Type": "application/json",
// //       authorization: `Bearer ${token}`,
// //     },
// //   }).then(processResponse);
// // };

// const api = {
//   getSavedCards,
//   addCardSave,
//   deleteCards,
//   // updateUserData,
//   // addCardSave,
//   // removeCardSave,
// };

// export default api;

// stub out

import dog from "/src/images/image_01.svg";
import mountain from "/src/images/image_02.svg";
import moose from "/src/images/image_03.svg";
import forrest from "/src/images/image_04.svg";
import sky from "/src/images/image_05.svg";

export function getSavedCards() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        keyword: "Nature",
        urlToImage: dog,
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        publishedAt: "November 4, 2020",
        description:
          "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find that the world is not what it appears to be.",
        source: "TreeHugger",
        url: dog,
      },
      {
        keyword: "Nature",
        urlToImage: mountain,
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        publishedAt: "Febuary 19, 2019",
        description:
          "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
        source: "National Geaographic",
        url: mountain,
      },
      {
        keyword: "Yellowstone",
        urlToImage: forrest,
        title: "Nostalgic Photos of Tourists in U.S. National Parks",
        publishedAt: "October 19, 2020",
        description:
          "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
        source: "National Geographic",
        url: forrest,
      },
      {
        keyword: "Parks",
        urlToImage: moose,
        title: "Grand Teton Renews Historic Crest Trail",
        publishedAt: "November 4, 2020",
        description:
          "The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
        source: "National Parks Traveler",
        url: moose,
      },
      {
        keyword: "Photography",
        urlToImage: sky,
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        publishedAt: "March 16, 2020",
        description:
          "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ",
        source: "TreeHugger",
        url: sky,
      },
      // and have however many you want to show on the saved-news page
    ])
  );
}

// export function getItems() {
//   return new Promise((resolve, reject) => resolve([
//     {
//       id: "65f7368dfb74bd6a92114c85", // I just generated this at random from a mongodb id generator website
//       title: "Some news article",
//       url: "put some actual article URL here"
//       // ...etc, whatever properties it's supposed to have
//     },
//     {
//       ...another one
//     },
//     // and have however many you want to show on the saved-news page
//   ])
// }

export function saveArticle(cardData) {
  // article is a result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0",
      keyword: keyword,
      image: cardData.urlToImage,
      title: cardData.title,
      date: cardData.publishedAt,
      text: cardData.description,
      source: cardData.source.name,
      link: cardData.url,
    });
  });
}

// export function saveArticle(article) {
//   // article is a result from the NewsAPI
//   return new Promise((resolve, reject) => {
//     resolve({
//       id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
//       url: article,
//       url, // Use whatever properties the newsAPI gives you, I just made these up
//       title: article.title,
//       imageUrl: article.imagUrl,
//       // whatever other properties from the newsAPI-given article object you saved to the database
//     });
//   });
// }

export function getCards() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        keyword: "Nature",
        urlToImage: dog,
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        publishedAt: "November 4, 2020",
        description:
          "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find that the world is not what it appears to be.",
        source: "TreeHugger",
        url: dog,
      },
      {
        keyword: "Nature",
        urlToImage: mountain,
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        publishedAt: "Febuary 19, 2019",
        description:
          "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
        source: "National Geaographic",
        url: mountain,
      },
      {
        keyword: "Yellowstone",
        urlToImage: forrest,
        title: "Nostalgic Photos of Tourists in U.S. National Parks",
        publishedAt: "October 19, 2020",
        description:
          "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
        source: "National Geographic",
        url: forrest,
      },
      {
        keyword: "Parks",
        urlToImage: moose,
        title: "Grand Teton Renews Historic Crest Trail",
        publishedAt: "November 4, 2020",
        description:
          "The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
        source: "National Parks Traveler",
        url: moose,
      },
      {
        keyword: "Photography",
        urlToImage: sky,
        title: "Everyone Needs a Special 'Sit Spot' in Nature",
        publishedAt: "March 16, 2020",
        description:
          "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ",
        source: "TreeHugger",
        url: sky,
      },
      // and have however many you want to show on the saved-news page
    ])
  );
}

// Example API response for reference
export const articles = [
  {
    keyword: "Nature",
    urlToImage: dog,
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    publishedAt: "November 4, 2020",
    description:
      "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find that the world is not what it appears to be.",
    source: "TreeHugger",
    url: dog,
  },
  {
    keyword: "Nature",
    urlToImage: mountain,
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    publishedAt: "Febuary 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    source: "National Geaographic",
    url: mountain,
  },
  {
    keyword: "Yellowstone",
    urlToImage: forrest,
    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    publishedAt: "October 19, 2020",
    description:
      "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
    source: "National Geographic",
    url: forrest,
  },
  {
    keyword: "Parks",
    urlToImage: moose,
    title: "Grand Teton Renews Historic Crest Trail",
    publishedAt: "November 4, 2020",
    description:
      "The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
    source: "National Parks Traveler",
    url: moose,
  },
  {
    keyword: "Photography",
    urlToImage: sky,
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    publishedAt: "March 16, 2020",
    description:
      "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ",
    source: "TreeHugger",
    url: sky,
  },
  // more articles
];

// // Example API response for reference
// const articles = [
//   { title: 'News 1', publishedAt: '2023-10-15T12:00:00Z', source: { id: '1' } },
//   { title: 'News 2', publishedAt: '2023-10-15T13:00:00Z', source: { id: null } },
//   // more articles
// ];
