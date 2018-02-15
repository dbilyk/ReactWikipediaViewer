
export default class WikiData {
  constructor() {

    this.searchEntry = function (searchString, callback) {
      var searchWikiURL = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=" + searchString + "&limit=10"
      fetch(searchWikiURL, {
        headers: new Headers({
          'user-agent': "Its ya boi D, dmitri@dmitri.com",
          "origin": "*",
        }),
        format: "json",
        method: 'POST' // *GET, PUT, DELETE, etc.

      })
        .then((res) => {
          callback(res.json())
        })
    }
  }
}