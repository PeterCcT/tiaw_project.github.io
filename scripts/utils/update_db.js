import { db } from '../../scripts_db/index.js'
import { isUserPropertiesValid } from '../../scripts/utils/valid_user_properties.js'
export function updateUserDb(email, updateValues) {
    try {
        const [
            isAllPropertiesValues,
            quantityOfSearchProperties,
            wrongProperties
        ] = isUserPropertiesValid(updateValues)

        if (isAllPropertiesValues) {
            const { users } = db
            const userIndex = users.findIndex(user => user.email === email)
            const user = users[userIndex]
            for (const keyToUpdate in updateValues) {
                user[keyToUpdate] = updateValues[keyToUpdate]
            }
            localStorage.setItem('users', JSON.stringify(db.users))
        } else {
            throw new Error()
        }
    } catch (error) {
        throw new Error(error)
    }

}