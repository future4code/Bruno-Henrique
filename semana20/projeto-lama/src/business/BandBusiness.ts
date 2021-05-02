import { IdGenerator } from "../services/IdGenerator";
import { BandDatabase } from "../data/BandDatabase";
import { BaseError } from "../error/BaseError";
import { Band, BandInputDTO } from "../model/Band";

export class BandBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private bandDatabase: BandDatabase
    ) { }

    async registerBand(input: BandInputDTO) {

        try {

            if (!input.name || !input.responsible || !input.musicGenre) {
                throw new BaseError("Please check if all fields were filled!", 422)
            }

            const id: string = this.idGenerator.generate()

            await this.bandDatabase.registerBand(
                id,
                input.name,
                Band.stringToMusicGenre(input.musicGenre),
                input.responsible
            )

        } catch (error) {

            if (error.message.includes("key 'name'")) {
                throw new BaseError("Name already in use", 409)
            }

            throw new BaseError(error.message, error.statusCode)

        }
    }

}

export default new BandBusiness(
    new IdGenerator(),
    new BandDatabase()
)