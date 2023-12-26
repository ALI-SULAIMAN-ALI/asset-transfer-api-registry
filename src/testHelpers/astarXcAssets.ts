export const astarTestXcAssets = {
	relayChain: 'polkadot',
	paraID: 2006,
	id: 'astar',
	xcAssetCnt: '20',
	data: [
		{
			paraID: 0,
			relayChain: 'polkadot',
			nativeChainID: 'polkadot',
			symbol: 'DOT',
			decimals: 10,
			interiorType: 'here',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				'here',
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						here: null,
					},
				},
			},
			asset: '340282366920938463463374607431768211455',
			contractAddress: '0xffffffffffffffffffffffffffffffffffffffff',
			source: ['2006'],
		},
		{
			paraID: 1000,
			relayChain: 'polkadot',
			nativeChainID: 'statemint',
			symbol: 'USDC',
			decimals: 6,
			interiorType: 'x3',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 1000,
				},
				{
					palletInstance: 50,
				},
				{
					generalIndex: 1337,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x3: [
							{
								parachain: 1000,
							},
							{
								palletInstance: 50,
							},
							{
								generalIndex: 1337,
							},
						],
					},
				},
			},
			asset: '4294969281',
			contractAddress: '0xffffffff000000000000000000000001000007c1',
			source: ['2006'],
		},
		{
			paraID: 1000,
			relayChain: 'polkadot',
			nativeChainID: 'statemint',
			symbol: 'USDT',
			decimals: 6,
			interiorType: 'x3',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 1000,
				},
				{
					palletInstance: 50,
				},
				{
					generalIndex: 1984,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x3: [
							{
								parachain: 1000,
							},
							{
								palletInstance: 50,
							},
							{
								generalIndex: 1984,
							},
						],
					},
				},
			},
			asset: '4294969280',
			contractAddress: '0xffffffff000000000000000000000001000007c0',
			source: ['2006'],
		},
		{
			paraID: 2000,
			relayChain: 'polkadot',
			nativeChainID: 'acala',
			symbol: 'LDOT',
			decimals: 10,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2000,
				},
				{
					generalKey: '0x0003',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2000,
							},
							{
								generalKey: '0x0003',
							},
						],
					},
				},
			},
			asset: '18446744073709551618',
			contractAddress: '0xffffffff00000000000000010000000000000002',
			source: ['2006'],
		},
		{
			paraID: 2000,
			relayChain: 'polkadot',
			nativeChainID: 'acala',
			symbol: 'ACA',
			decimals: 12,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2000,
				},
				{
					generalKey: '0x0000',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2000,
							},
							{
								generalKey: '0x0000',
							},
						],
					},
				},
			},
			asset: '18446744073709551616',
			contractAddress: '0xffffffff00000000000000010000000000000000',
			source: ['2006'],
		},
		{
			paraID: 2000,
			relayChain: 'polkadot',
			nativeChainID: 'acala',
			symbol: 'aSEED',
			decimals: 12,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2000,
				},
				{
					generalKey: '0x0001',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2000,
							},
							{
								generalKey: '0x0001',
							},
						],
					},
				},
			},
			asset: '18446744073709551617',
			contractAddress: '0xffffffff00000000000000010000000000000001',
			source: ['2006'],
		},
		{
			paraID: 2002,
			relayChain: 'polkadot',
			nativeChainID: 'clover',
			symbol: 'CLV',
			decimals: 18,
			interiorType: 'x1',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2002,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x1: {
							parachain: 2002,
						},
					},
				},
			},
			asset: '18446744073709551625',
			contractAddress: '0xffffffff00000000000000010000000000000009',
			source: ['2006'],
		},
		{
			paraID: 2004,
			relayChain: 'polkadot',
			nativeChainID: 'moonbeam',
			symbol: 'GLMR',
			decimals: 18,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2004,
				},
				{
					palletInstance: 10,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2004,
							},
							{
								palletInstance: 10,
							},
						],
					},
				},
			},
			asset: '18446744073709551619',
			contractAddress: '0xffffffff00000000000000010000000000000003',
			source: ['2006'],
		},
		{
			paraID: 2011,
			relayChain: 'polkadot',
			nativeChainID: 'equilibrium',
			symbol: 'EQD',
			decimals: 9,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2011,
				},
				{
					generalKey: '0x657164',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2011,
							},
							{
								generalKey: '0x657164',
							},
						],
					},
				},
			},
			asset: '18446744073709551629',
			contractAddress: '0xffffffff0000000000000001000000000000000d',
			source: ['2006'],
		},
		{
			paraID: 2011,
			relayChain: 'polkadot',
			nativeChainID: 'equilibrium',
			symbol: 'EQ',
			decimals: 9,
			interiorType: 'x1',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2011,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x1: {
							parachain: 2011,
						},
					},
				},
			},
			asset: '18446744073709551628',
			contractAddress: '0xffffffff0000000000000001000000000000000c',
			source: ['2006'],
		},
		{
			paraID: 2030,
			relayChain: 'polkadot',
			nativeChainID: 'bifrost',
			symbol: 'vsDOT',
			decimals: 10,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2030,
				},
				{
					generalKey: '0x0403',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2030,
							},
							{
								generalKey: '0x0403',
							},
						],
					},
				},
			},
			asset: '18446744073709551626',
			contractAddress: '0xffffffff0000000000000001000000000000000a',
			source: ['2006'],
		},
		{
			paraID: 2030,
			relayChain: 'polkadot',
			nativeChainID: 'bifrost',
			symbol: 'vDOT',
			decimals: 10,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2030,
				},
				{
					generalKey: '0x0900',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2030,
							},
							{
								generalKey: '0x0900',
							},
						],
					},
				},
			},
			asset: '18446744073709551624',
			contractAddress: '0xffffffff00000000000000010000000000000008',
			source: ['2006'],
		},
		{
			paraID: 2030,
			relayChain: 'polkadot',
			nativeChainID: 'bifrost',
			symbol: 'vASTR',
			decimals: 18,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2030,
				},
				{
					generalKey: '0x0903',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2030,
							},
							{
								generalKey: '0x0903',
							},
						],
					},
				},
			},
			asset: '18446744073709551632',
			contractAddress: '0xffffffff00000000000000010000000000000010',
			source: ['2006'],
		},
		{
			paraID: 2030,
			relayChain: 'polkadot',
			nativeChainID: 'bifrost',
			symbol: 'BNC',
			decimals: 12,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2030,
				},
				{
					generalKey: '0x0001',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2030,
							},
							{
								generalKey: '0x0001',
							},
						],
					},
				},
			},
			asset: '18446744073709551623',
			contractAddress: '0xffffffff00000000000000010000000000000007',
			source: ['2006'],
		},
		{
			paraID: 2032,
			relayChain: 'polkadot',
			nativeChainID: 'interlay',
			symbol: 'IBTC',
			decimals: 8,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2032,
				},
				{
					generalKey: '0x0001',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2032,
							},
							{
								generalKey: '0x0001',
							},
						],
					},
				},
			},
			asset: '18446744073709551620',
			contractAddress: '0xffffffff00000000000000010000000000000004',
			source: ['2006'],
		},
		{
			paraID: 2032,
			relayChain: 'polkadot',
			nativeChainID: 'interlay',
			symbol: 'INTR',
			decimals: 10,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2032,
				},
				{
					generalKey: '0x0002',
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2032,
							},
							{
								generalKey: '0x0002',
							},
						],
					},
				},
			},
			asset: '18446744073709551621',
			contractAddress: '0xffffffff00000000000000010000000000000005',
			source: ['2006'],
		},
		{
			paraID: 2034,
			relayChain: 'polkadot',
			nativeChainID: 'hydra',
			symbol: 'HDX',
			decimals: 12,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2034,
				},
				{
					generalIndex: 0,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2034,
							},
							{
								generalIndex: 0,
							},
						],
					},
				},
			},
			asset: '18446744073709551630',
			contractAddress: '0xffffffff0000000000000001000000000000000e',
			source: ['2006'],
		},
		{
			paraID: 2035,
			relayChain: 'polkadot',
			nativeChainID: 'phala',
			symbol: 'PHA',
			decimals: 12,
			interiorType: 'x1',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2035,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x1: {
							parachain: 2035,
						},
					},
				},
			},
			asset: '18446744073709551622',
			contractAddress: '0xffffffff00000000000000010000000000000006',
			source: ['2006'],
		},
		{
			paraID: 2037,
			relayChain: 'polkadot',
			nativeChainID: 'unique',
			symbol: 'UNQ',
			decimals: 18,
			interiorType: 'x1',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2037,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x1: {
							parachain: 2037,
						},
					},
				},
			},
			asset: '18446744073709551631',
			contractAddress: '0xffffffff0000000000000001000000000000000f',
			source: ['2006'],
		},
		{
			paraID: 2046,
			relayChain: 'polkadot',
			nativeChainID: 'darwinia',
			symbol: 'RING',
			decimals: 18,
			interiorType: 'x2',
			xcmV1Standardized: [
				{
					network: 'polkadot',
				},
				{
					parachain: 2046,
				},
				{
					palletInstance: 5,
				},
			],
			xcmV1MultiLocation: {
				v1: {
					parents: 1,
					interior: {
						x2: [
							{
								parachain: 2046,
							},
							{
								palletInstance: 5,
							},
						],
					},
				},
			},
			asset: '18446744073709551627',
			contractAddress: '0xffffffff0000000000000001000000000000000b',
			source: ['2006'],
		},
	],
};
