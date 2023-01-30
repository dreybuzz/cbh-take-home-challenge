import crypto from "crypto"
const KEY_DATA = {
    trivialPartitionKey: "0",
    maxPartitionKeyLength: 256
}

function hashHelper(source) {
    return crypto.createHash("sha3-512").update(source).digest("hex")
}

function deterministicPartitionKey(event) {

    const { trivialPartitionKey, maxPartitionKeyLength } = KEY_DATA

    const eventDataType = typeof event

    let candidate = event.partitionKey || JSON.stringify(event)

    candidate = eventDataType !== "string" ? JSON.stringify(candidate) : candidate

    const output = candidate.length > maxPartitionKeyLength ? hashHelper(candidate) : (candidate || trivialPartitionKey)

    return output
}




export default deterministicPartitionKey