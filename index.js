import dpk from "./dpk.js"
import pkg from 'jest'
const { runTests } = pkg


// const deterministicPartitionKey = (event) => {
//     const TRIVIAL_PARTITION_KEY = "0"
//     const MAX_PARTITION_KEY_LENGTH = 256
//     let candidate

//     if (event) {
//         if (event.partitionKey) {
//             candidate = event.partitionKey
//         } else {
//             const data = JSON.stringify(event)
//             candidate = crypto.createHash("sha3-512").update(data).digest("hex")
//         }
//     }

//     if (candidate) {
//         if (typeof candidate !== "string") {
//             candidate = JSON.stringify(candidate)
//         }
//     } else {
//         candidate = TRIVIAL_PARTITION_KEY
//     }
//     if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//         candidate = crypto.createHash("sha3-512").update(candidate).digest("hex")
//     }
//     return candidate
// }

// console.log(deterministicPartitionKey({
//     partitionKey: "test"
// }))

// console.log(dpk({
//     partitionKey: "test".repeat(200)
// }))

// runTests(tests, (res) => {
//     console.table(res.results)
// })

