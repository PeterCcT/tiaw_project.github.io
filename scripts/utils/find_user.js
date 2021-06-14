import { db } from '../../scripts_db/index.js'
console.log(db)
import { isUserPropertiesValid } from './valid_user_properties.js'
export function findUserByPropertieAndValue(propertiesAndValues) {

    let foundedUsers = []
    const users = db.users
    if (users) {
        const [
            isAllValidProperties,
            quantityOfSearchProperties,
            invalidPropertie
        ] = isUserPropertiesValid(propertiesAndValues)

        if (isAllValidProperties) {
            for (const user of users) {
              console.log(user)
                let matchedPropertiesValues = 0
                for (const propertie in propertiesAndValues) {
                    const searchValue = propertiesAndValues[propertie]
                    const userPropertieValue = user[propertie]
                    if (userPropertieValue === searchValue)
                        matchedPropertiesValues++
                }
                if (matchedPropertiesValues === quantityOfSearchProperties)
                    foundedUsers.push(user)
            }
            return foundedUsers
        } else {
            throw new Error(`The propertie '${invalidPropertie}' does not exist in user properties'`)
        }

    }

    return foundedUsers
}