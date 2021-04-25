import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandDatabase } from "../data/BandDatabase";
import { BaseError } from "../error/BaseError";
import { BandInputDTO } from "../model/Band";

export class BandBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private bandDatabase: BandDatabase
    ) { }

    async registerBand(input: BandInputDTO) {

        try {

            

        } catch (error) {

            if (error.message.includes("key 'name'")) {
                throw new BaseError("Name already in use", 409)
            }

            throw new BaseError(error.message, error.statusCode)

        }
    }

}