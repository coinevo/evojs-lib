module.exports = {
    qtum: {
        messagePrefix: '\x15COinevo Signed Message:\n',
        bech32: 'ec',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80
    },
    qtum_testnet: {
        messagePrefix: '\x15Evo Signed Message:\n',
        bech32: 'te',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
