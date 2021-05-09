function MovieTableEntry(imdbID, title, plot, poster, rated, year, runtime, genre, actors, totalRating, totalUsersRated){
    this.imdbID = imdbID;
    this.title = title;
    this.plot = plot;
    this.poster = poster;
    this.rated = rated;
    this.year = year;
    this.runtime = runtime;
    this.genre = genre;
    this.actors = actors;
    this.totalRating = totalRating;
    this.totalUsersRated = totalUsersRated;
}
export default MovieTableEntry;