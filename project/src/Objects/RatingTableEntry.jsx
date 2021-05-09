function RatingTableEntry(imdbID, username, stars, review, date) {
    this.imdbID = imdbID;
    this.username = username;
    this.rating = {
        "stars": stars,
        "review": review
    }
    this.date = date;
}
export default RatingTableEntry;
