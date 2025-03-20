const { encrypt, decrypt } = require("./script.js");

const samplePayload = { userId: 123, username: "user1" };

const token = encrypt(samplePayload);
console.log("Encrypted Token:", token);

const decodedPayload = decrypt(token);
console.log("Decrypted Payload:", decodedPayload);
