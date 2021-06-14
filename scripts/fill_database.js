import { db } from '../scripts_db/index.js'

localStorage.setItem('users',JSON.stringify(db.users))
