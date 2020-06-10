import { coerce } from '../bytes.js'
const encode = o => Buffer.from(o).toString('base64')
const decode = s => coerce(Buffer.from(s, 'base64'))
export { encode, decode }
