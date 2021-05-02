export class Band {

    constructor(
        private id: string,
        private name: string,
        private musicGenre: MUSIC_GENRE,
        private responsible: string,
    ) { }

    getId() {
        return this.id;
    }

    getName() {
        return this.name
    }

    getMusicGenre() {
        return this.musicGenre
    }

    getResponsible() {
        return this.responsible
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setMusicGenre(musicGenre: MUSIC_GENRE) {
        this.musicGenre = musicGenre;
    }

    setResponsible(responsible: string) {
        this.responsible = responsible;
    }

    static stringToMusicGenre = (input: string): MUSIC_GENRE => {
        switch (input.toUpperCase()) {

            case "POP":
                return MUSIC_GENRE.POP;
            case "ROCK":
                return MUSIC_GENRE.ROCK;
            case "FUNK":
                return MUSIC_GENRE.FUNK;
            case "HIPHOP":
                return MUSIC_GENRE.HIPHOP;
            case "ELETRONIC":
                return MUSIC_GENRE.ELETRONIC;
            case "BLUES":
                return MUSIC_GENRE.BLUES;
            case "JAZZ":
                return MUSIC_GENRE.JAZZ;

            default:
                throw new Error("Invalid music genre");
        }
    }

    static toBandModel(band: any): Band {
        return new Band(band.id, band.name, Band.stringToMusicGenre(band.musicGenre), band.responsible);
    }
}

export interface BandInputDTO {
    name: string,
    musicGenre: string,
    responsible: string
}

export enum MUSIC_GENRE {
    POP = "POP",
    ROCK = "ROCK",
    FUNK = "FUNK",
    HIPHOP = "HIP-HOP",
    ELETRONIC = "ELETRONIC",
    BLUES = "BLUES",
    JAZZ = "JAZZ"
}