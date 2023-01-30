import dpk from "./dpk"
import crypto from "crypto"

describe("deterministicPartitionKey", () => {
    it("generates a partition key using the event object partition key property", () => {
        const event = {
            partitionKey: "test"
        }
        expect(dpk(event)).toEqual("test")
    })

    it("returns the default trivial partition key property of the KEY_DATA object if event is a falsy value e.g. (undefined, null)", () => {
        expect(dpk(0)).toEqual("0")
    })

    it("generates a partition key using SHA3-512 hash of the string version of the event object", () => {
        const event = {
            "key": "property"
        }
        const stringifiedEvent = JSON.stringify(event)
        const hashedValue = crypto.createHash("sha3-512").update(stringifiedEvent).digest("hex")
        expect(dpk(event)).toEqual(hashedValue)
    })

    it("returns a partition key using SHA3-512 hash of the string version of the candidate if the length is greater than the maxPartitionKeyLength property of KEY_DATA", () => {
        const longString = Math.ceil(Math.random() * 10).toString().repeat(300)
        const event = {
            partitionKey: longString
        }
        const hashedValue = crypto.createHash("sha3-512").update(longString).digest("hex")
        expect(dpk(event)).toEqual(hashedValue)
    })

})