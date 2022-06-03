export const assetsList = {
    "chain_id": "osmosis-1",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "uosmo",
            "exponent": 0,
            "aliases": []
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "uosmo",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis"
      },
      {
        "denom_units": [
          {
            "denom": "uion",
            "exponent": 0
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "uion",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion"
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos",
        "display": "atom",
        "symbol": "ATOM",
        "ibc": {
          "source_channel": "channel-141",
          "dst_channel": "channel-0",
          "source_denom": "uatom"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos"
      },
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "ibc": {
          "source_channel": "channel-9",
          "dst_channel": "channel-1",
          "source_denom": "uakt"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network"
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "ibc": {
          "source_channel": "channel-6",
          "dst_channel": "channel-4",
          "source_denom": "uxprt"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence"
      },
      {
        "description": "The PSTAKE token is primarily a governance token for the Liquid Staking Protocol.",
        "denom_units": [
          {
            "denom": "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
            "exponent": 0
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
        "name": "PSTAKE",
        "display": "pstake",
        "symbol": "PSTAKE",
        "ibc": {
          "source_channel": "channel-6",
          "dst_channel": "channel-4",
          "source_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-6",
          "source_denom": "uiris"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network"
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-2",
          "source_denom": "udvpn"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel"
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "ibc": {
          "source_channel": "channel-10",
          "dst_channel": "channel-5",
          "source_denom": "basecro"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cro.png"
        },
        "coingecko_id": "crypto-com-chain"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-8",
          "source_denom": "uregen"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen"
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "ibc": {
          "source_channel": "channel-2",
          "dst_channel": "channel-15",
          "source_denom": "uiov"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname"
      },
      {
        "description": "TICK coin is the token for the Microtick Price Discovery & Oracle App",
        "denom_units": [
          {
            "denom": "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
            "exponent": 0,
            "aliases": [
              "utick"
            ]
          },
          {
            "denom": "tick",
            "exponent": 6
          }
        ],
        "base": "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
        "display": "tick",
        "name": "Microtick",
        "symbol": "TICK",
        "ibc": {
          "source_channel": "channel-16",
          "dst_channel": "channel-39",
          "source_denom": "utick"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
        },
        "coingecko_id": "microtick"
      },
      {
        "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
        "denom_units": [
          {
            "denom": "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
            "exponent": 0,
            "aliases": [
              "ungm"
            ]
          },
          {
            "denom": "ngm",
            "exponent": 6
          }
        ],
        "base": "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
        "name": "e-Money",
        "display": "ngm",
        "symbol": "NGM",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-37",
          "source_denom": "ungm"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg"
        },
        "coingecko_id": "e-money"
      },
      {
        "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
            "exponent": 0
          },
          {
            "denom": "eeur",
            "exponent": 6
          }
        ],
        "base": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
        "name": "e-Money EUR",
        "display": "eeur",
        "symbol": "EEUR",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-37",
          "source_denom": "eeur"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg"
        },
        "coingecko_id": "e-money-eur"
      },
      {
        "description": "The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.",
        "denom_units": [
          {
            "denom": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
            "exponent": 0,
            "aliases": [
              "ubcna"
            ]
          },
          {
            "denom": "bcna",
            "exponent": 6
          }
        ],
        "base": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
        "display": "bcna",
        "name": "BitCanna",
        "symbol": "BCNA",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-51",
          "source_denom": "ubcna"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
        },
        "coingecko_id": "bitcanna"
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-42",
          "source_denom": "ujuno"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network"
      },
      {
        "description": "The native token of IXO Chain",
        "denom_units": [
          {
            "denom": "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
            "exponent": 0,
            "aliases": [
              "uixo"
            ]
          },
          {
            "denom": "ixo",
            "exponent": 6
          }
        ],
        "base": "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
        "name": "IXO",
        "display": "ixo",
        "symbol": "IXO",
        "ibc": {
          "source_channel": "channel-4",
          "dst_channel": "channel-38",
          "source_denom": "uixo"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png"
        },
        "coingecko_id": "ixo"
      },
      {
        "description": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.",
        "denom_units": [
          {
            "denom": "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
            "exponent": 0,
            "aliases": [
              "nanolike"
            ]
          },
          {
            "denom": "like",
            "exponent": 9
          }
        ],
        "base": "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
        "name": "LikeCoin",
        "display": "like",
        "symbol": "LIKE",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-53",
          "source_denom": "nanolike"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg"
        },
        "coingecko_id": "likecoin"
      },
      {
        "description": "The native staking token of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
            "exponent": 0,
            "aliases": [
              "uluna"
            ]
          },
          {
            "denom": "luna",
            "exponent": 6,
            "aliases": [
              "lunc"
            ]
          }
        ],
        "base": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
        "name": "Luna Classic",
        "display": "luna",
        "symbol": "LUNC",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-72",
          "source_denom": "uluna"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg"
        },
        "coingecko_id": "terra-luna"
      },
      {
        "description": "The USD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
            "exponent": 0,
            "aliases": [
              "uust"
            ]
          },
          {
            "denom": "ust",
            "exponent": 6,
            "aliases": [
              "ustc"
            ]
          }
        ],
        "base": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
        "name": "TerraClassicUSD",
        "display": "ust",
        "symbol": "USTC",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-72",
          "source_denom": "uust"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png"
        },
        "coingecko_id": "terrausd"
      },
      {
        "description": "The KRW stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
            "exponent": 0,
            "aliases": [
              "ukrw"
            ]
          },
          {
            "denom": "krt",
            "exponent": 6,
            "aliases": [
              "krtc"
            ]
          }
        ],
        "base": "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
        "name": "TerraClassicKRW",
        "display": "krt",
        "symbol": "KRTC",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-72",
          "source_denom": "ukrw"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png"
        },
        "coingecko_id": "terra-krw"
      },
      {
        "description": "BitSong Native Token",
        "denom_units": [
          {
            "denom": "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
            "exponent": 0,
            "aliases": [
              "ubtsg"
            ]
          },
          {
            "denom": "btsg",
            "exponent": 6
          }
        ],
        "base": "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
        "name": "BitSong",
        "display": "btsg",
        "symbol": "BTSG",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-73",
          "source_denom": "ubtsg"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
        },
        "coingecko_id": "bitsong"
      },
      {
        "description": "The native token of Ki Chain",
        "denom_units": [
          {
            "denom": "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
            "exponent": 0,
            "aliases": [
              "uxki"
            ]
          },
          {
            "denom": "xki",
            "exponent": 6
          }
        ],
        "base": "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
        "name": "Ki",
        "display": "xki",
        "symbol": "XKI",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-77",
          "source_denom": "uxki"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
        },
        "coingecko_id": "ki"
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-88",
          "source_denom": "uscrt"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret"
      },
      {
        "description": "Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem",
        "denom_units": [
          {
            "denom": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
            "exponent": 0,
            "aliases": [
              "umed"
            ]
          },
          {
            "denom": "med",
            "exponent": 6
          }
        ],
        "base": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
        "name": "MediBloc",
        "display": "med",
        "symbol": "MED",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-82",
          "source_denom": "umed"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png"
        },
        "coingecko_id": "medibloc"
      },
      {
        "description": "The staking token of Bostrom",
        "denom_units": [
          {
            "denom": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
            "exponent": 0,
            "aliases": [
              "boot"
            ]
          }
        ],
        "base": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
        "name": "Bostrom",
        "display": "boot",
        "symbol": "BOOT",
        "ibc": {
          "source_channel": "channel-2",
          "dst_channel": "channel-95",
          "source_denom": "boot"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png"
        },
        "coingecko_id": "bostrom"
      },
      {
        "description": "Native Token of Comdex Protocol",
        "denom_units": [
          {
            "denom": "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
            "exponent": 0,
            "aliases": [
              "ucmdx"
            ]
          },
          {
            "denom": "cmdx",
            "exponent": 6
          }
        ],
        "base": "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
        "name": "Comdex",
        "display": "cmdx",
        "symbol": "CMDX",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-87",
          "source_denom": "ucmdx"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png"
        },
        "coingecko_id": "comdex"
      },
      {
        "description": "Native token for the cheqd network",
        "denom_units": [
          {
            "denom": "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
            "exponent": 0,
            "aliases": [
              "ncheq"
            ]
          },
          {
            "denom": "cheq",
            "exponent": 9
          }
        ],
        "base": "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
        "display": "cheq",
        "name": "Cheqd",
        "symbol": "CHEQ",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-108",
          "source_denom": "ncheq"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
        },
        "coingecko_id": "cheqd-network"
      },
      {
        "description": "The native token of Stargaze",
        "denom_units": [
          {
            "denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
            "exponent": 0,
            "aliases": [
              "ustars"
            ]
          },
          {
            "denom": "stars",
            "exponent": 6
          }
        ],
        "base": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
        "name": "Stargaze",
        "display": "stars",
        "symbol": "STARS",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-75",
          "source_denom": "ustars"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        },
        "coingecko_id": "stargaze"
      },
      {
        "description": "Native token of the Lum Network",
        "denom_units": [
          {
            "denom": "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
            "exponent": 0,
            "aliases": [
              "ulum"
            ]
          },
          {
            "denom": "lum",
            "exponent": 6
          }
        ],
        "base": "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
        "name": "Lum",
        "display": "lum",
        "symbol": "LUM",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-115",
          "source_denom": "ulum"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png"
        },
        "coingecko_id": "lum-network"
      },
      {
        "description": "The native token of Chihuahua Chain",
        "denom_units": [
          {
            "denom": "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
            "exponent": 0,
            "aliases": [
              "uhuahua"
            ]
          },
          {
            "denom": "huahua",
            "exponent": 6
          }
        ],
        "base": "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
        "name": "Chihuahua",
        "display": "huahua",
        "symbol": "HUAHUA",
        "ibc": {
          "source_channel": "channel-7",
          "dst_channel": "channel-113",
          "source_denom": "uhuahua"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png"
        },
        "coingecko_id": "chihuahua-token"
      },
      {
        "description": "The native token of Vidulum",
        "denom_units": [
          {
            "denom": "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
            "exponent": 0,
            "aliases": [
              "uvdl"
            ]
          },
          {
            "denom": "vdl",
            "exponent": 6
          }
        ],
        "base": "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
        "name": "Vidulum",
        "display": "vdl",
        "symbol": "VDL",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-124",
          "source_denom": "uvdl"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg"
        },
        "coingecko_id": "vidulum"
      },
      {
        "description": "The native token of Desmos",
        "denom_units": [
          {
            "denom": "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
            "exponent": 0,
            "aliases": [
              "udsm"
            ]
          },
          {
            "denom": "dsm",
            "exponent": 6
          }
        ],
        "base": "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
        "name": "Desmos",
        "display": "dsm",
        "symbol": "DSM",
        "ibc": {
          "source_channel": "channel-2",
          "dst_channel": "channel-135",
          "source_denom": "udsm"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
        },
        "coingecko_id": "desmos"
      },
      {
        "description": "The native token of Dig Chain.",
        "denom_units": [
          {
            "denom": "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
            "exponent": 0,
            "aliases": [
              "udig"
            ]
          },
          {
            "denom": "dig",
            "exponent": 6
          }
        ],
        "base": "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
        "name": "Dig Chain",
        "display": "dig",
        "symbol": "DIG",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-128",
          "source_denom": "udig"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
        },
        "coingecko_id": "dig-chain"
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
            "exponent": 0
          },
          {
            "denom": "rowan",
            "exponent": 18
          }
        ],
        "base": "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "ibc": {
          "source_channel": "channel-17",
          "dst_channel": "channel-47",
          "source_denom": "rowan"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg"
        },
        "coingecko_id": "sifchain"
      },
      {
        "description": "The native token of Sommelier Chain.",
        "denom_units": [
          {
            "denom": "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
            "exponent": 0,
            "aliases": [
              "usomm"
            ]
          },
          {
            "denom": "somm",
            "exponent": 6
          }
        ],
        "base": "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
        "name": "Sommelier",
        "display": "somm",
        "symbol": "SOMM",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-165",
          "source_denom": "usomm"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
        },
        "coingecko_id": "sommelier"
      },
      {
        "description": "The native token of BandChain",
        "denom_units": [
          {
            "denom": "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
            "exponent": 0,
            "aliases": [
              "uband"
            ]
          },
          {
            "denom": "band",
            "exponent": 6
          }
        ],
        "base": "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
        "name": "Band Protocol",
        "display": "band",
        "symbol": "BAND",
        "ibc": {
          "source_channel": "channel-83",
          "dst_channel": "channel-148",
          "source_denom": "uband"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
        },
        "coingecko_id": "band-protocol"
      },
      {
        "description": "The native staking and governance token of the Konstellation Network.",
        "denom_units": [
          {
            "denom": "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
            "exponent": 0,
            "aliases": [
              "udarc"
            ]
          },
          {
            "denom": "darc",
            "exponent": 6
          }
        ],
        "base": "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
        "name": "Konstellation",
        "display": "darc",
        "symbol": "DARC",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-171",
          "source_denom": "udarc"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg"
        },
        "coingecko_id": "darcmatter-coin"
      },
      {
        "description": "The native staking and governance token of the Umee Network.",
        "denom_units": [
          {
            "denom": "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
            "exponent": 0,
            "aliases": [
              "uumee"
            ]
          },
          {
            "denom": "umee",
            "exponent": 6
          }
        ],
        "base": "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
        "name": "Umee",
        "display": "umee",
        "symbol": "UMEE",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-184",
          "source_denom": "uumee"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png"
        },
        "coingecko_id": "umee"
      },
      {
        "description": "The native token of Gravity Bridge",
        "denom_units": [
          {
            "denom": "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
            "exponent": 0,
            "aliases": [
              "ugraviton"
            ]
          },
          {
            "denom": "graviton",
            "exponent": 6
          }
        ],
        "base": "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
        "name": "Graviton",
        "display": "graviton",
        "symbol": "GRAV",
        "ibc": {
          "source_channel": "channel-10",
          "dst_channel": "channel-144",
          "source_denom": "ugraviton"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg"
        },
        "coingecko_id": "graviton"
      },
      {
        "description": "The native token of Fetch.ai Chain",
        "denom_units": [
          {
            "denom": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
            "exponent": 0,
            "aliases": [
              "afet"
            ]
          },
          {
            "denom": "fet",
            "exponent": 18
          }
        ],
        "base": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
        "name": "Fetch.ai",
        "display": "fet",
        "symbol": "FET",
        "ibc": {
          "source_channel": "channel-10",
          "dst_channel": "channel-229",
          "source_denom": "afet"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
        },
        "coingecko_id": "fetch-ai"
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
            "exponent": 0,
            "aliases": [
              "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
              "uneta"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png"
        },
        "coingecko_id": "neta"
      },
      {
        "description": "The native token cw20 for Marble DAO on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
        "denom_units": [
          {
            "denom": "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
            "exponent": 0,
            "aliases": [
              "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl"
            ]
          },
          {
            "denom": "marble",
            "exponent": 3
          }
        ],
        "base": "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
        "name": "Marble",
        "display": "marble",
        "symbol": "MARBLE",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
        },
        "coingecko_id": "marble"
      },
      {
        "description": "Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.",
        "type_asset": "cw20",
        "address": "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
        "denom_units": [
          {
            "denom": "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
            "exponent": 0,
            "aliases": [
              "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z"
            ]
          },
          {
            "denom": "hope",
            "exponent": 6
          }
        ],
        "base": "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
        "name": "Hope Galaxy",
        "display": "hope",
        "symbol": "HOPE",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
        },
        "coingecko_id": "hope-galaxy"
      },
      {
        "description": "DEC is the native token of Decentr.",
        "denom_units": [
          {
            "denom": "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
            "exponent": 0,
            "aliases": [
              "udec"
            ]
          },
          {
            "denom": "dec",
            "exponent": 6
          }
        ],
        "base": "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
        "name": "Decentr",
        "display": "dec",
        "symbol": "DEC",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-181",
          "source_denom": "udec"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
        },
        "coingecko_id": "decentr"
      },
      {
        "description": "The native token of Carbon",
        "denom_units": [
          {
            "denom": "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
            "exponent": 0,
            "aliases": [
              "swth"
            ]
          },
          {
            "denom": "dswth",
            "exponent": 8
          }
        ],
        "base": "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
        "name": "Carbon",
        "display": "dswth",
        "symbol": "SWTH",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-188",
          "source_denom": "swth"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
        },
        "coingecko_id": "switcheo"
      },
      {
        "description": "The native token of Cerberus",
        "denom_units": [
          {
            "denom": "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
            "exponent": 0,
            "aliases": [
              "ucrbrus"
            ]
          },
          {
            "denom": "crbrus",
            "exponent": 6
          }
        ],
        "base": "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
        "name": "Cerberus",
        "display": "crbrus",
        "symbol": "CRBRUS",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-212",
          "source_denom": "ucrbrus"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png"
        },
        "coingecko_id": "cerberus-2"
      },
      {
        "description": "Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem",
        "type_asset": "cw20",
        "address": "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
        "denom_units": [
          {
            "denom": "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
            "exponent": 0,
            "aliases": [
              "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa"
            ]
          },
          {
            "denom": "rac",
            "exponent": 6
          }
        ],
        "base": "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
        "name": "Racoon",
        "display": "rac",
        "symbol": "RAC",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
        },
        "coingecko_id": "racoon"
      },
      {
        "description": "The DAO token to build consensus among Hong Kong People",
        "type_asset": "cw20",
        "address": "juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
        "denom_units": [
          {
            "denom": "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
            "exponent": 0,
            "aliases": [
              "dhk"
            ]
          }
        ],
        "base": "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
        "name": "DHK",
        "display": "dhk",
        "symbol": "DHK",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
        }
      },
      {
        "description": "Tether's USD stablecoin on Axelar",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
            "exponent": 0,
            "aliases": [
              "uusdt"
            ]
          },
          {
            "denom": "axlusdt",
            "exponent": 6
          }
        ],
        "base": "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
        "name": "Tether USD",
        "display": "axlusdt",
        "symbol": "axlUSDT",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-208",
          "source_denom": "uusdt"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlusdt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlusdt.svg"
        },
        "coingecko_id": "tether"
      },
      {
        "description": "Circle's stablecoin on Axelar",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "exponent": 0,
            "aliases": [
              "uusdc"
            ]
          },
          {
            "denom": "axlusdc",
            "exponent": 6
          }
        ],
        "base": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
        "name": "USD Coin",
        "display": "axlusdc",
        "symbol": "axlUSDC",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-208",
          "source_denom": "uusdc"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlusdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlusdc.svg"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Frax's fractional-algorithmic stablecoin on Axelar",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
            "exponent": 0,
            "aliases": [
              "frax-wei"
            ]
          },
          {
            "denom": "axlfrax",
            "exponent": 18
          }
        ],
        "base": "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
        "name": "Frax",
        "display": "axlfrax",
        "symbol": "axlFRAX",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-208",
          "source_denom": "frax-wei"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlfrax.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlfrax.svg"
        },
        "coingecko_id": "frax"
      },
      {
        "description": "Dai stablecoin on Axelar",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
            "exponent": 0,
            "aliases": [
              "dai-wei"
            ]
          },
          {
            "denom": "axldai",
            "exponent": 18
          }
        ],
        "base": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
        "name": "Dai Stablecoin",
        "display": "axldai",
        "symbol": "axlDAI",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-208",
          "source_denom": "dai-wei"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axldai.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axldai.svg"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "Wrapped Ether on Axelar",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "exponent": 0,
            "aliases": [
              "weth-wei"
            ]
          },
          {
            "denom": "axlweth",
            "exponent": 18
          }
        ],
        "base": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
        "name": "Wrapped Ether",
        "display": "axlweth",
        "symbol": "axlWETH",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-208",
          "source_denom": "weth-wei"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlweth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Wrapped Bitcoin on Axelar",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "exponent": 0,
            "aliases": [
              "wbtc-satoshi"
            ]
          },
          {
            "denom": "axlwbtc",
            "exponent": 8
          }
        ],
        "base": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
        "name": "Wrapped Bitcoin",
        "display": "axlwbtc",
        "symbol": "axlWBTC",
        "ibc": {
          "source_channel": "channel-3",
          "dst_channel": "channel-208",
          "source_denom": "wbtc-satoshi"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlwbtc.png"
        },
        "coingecko_id": "wrapped-bitcoin"
      },
      {
        "description": "Gravity Bridge ETH",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
            "exponent": 0,
            "aliases": [
              "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
            ]
          },
          {
            "denom": "gweth",
            "exponent": 18
          }
        ],
        "base": "ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5",
        "name": "Wrapped Ethereum",
        "display": "gweth",
        "symbol": "gWETH",
        "ibc": {
          "source_channel": "channel-10",
          "dst_channel": "channel-144",
          "source_denom": "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/gweth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Gravity Bridge USDC",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
            "exponent": 0,
            "aliases": [
              "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
            ]
          },
          {
            "denom": "gusdc",
            "exponent": 6
          }
        ],
        "base": "ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E",
        "name": "USD Coin",
        "display": "gusdc",
        "symbol": "gUSDC",
        "ibc": {
          "source_channel": "channel-10",
          "dst_channel": "channel-144",
          "source_denom": "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/gusdc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/gusdc.svg"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Gravity Bridge Dai",
        "type_asset": "erc20",
        "denom_units": [
          {
            "denom": "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
            "exponent": 0,
            "aliases": [
              "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F"
            ]
          },
          {
            "denom": "gdai",
            "exponent": 18
          }
        ],
        "base": "ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5",
        "name": "Dai Stablecoin",
        "display": "gdai",
        "symbol": "gDAI",
        "ibc": {
          "source_channel": "channel-10",
          "dst_channel": "channel-144",
          "source_denom": "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/gdai.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/gdai.svg"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "The native token of AssetMantle",
        "denom_units": [
          {
            "denom": "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
            "exponent": 0,
            "aliases": [
              "umntl"
            ]
          },
          {
            "denom": "mntl",
            "exponent": 6
          }
        ],
        "base": "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
        "name": "AssetMantle",
        "display": "mntl",
        "symbol": "MNTL",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-232",
          "source_denom": "umntl"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png"
        },
        "coingecko_id": "assetmantle"
      },
      {
        "description": "Hash is the staking token of the Provenance Blockchain",
        "denom_units": [
          {
            "denom": "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
            "exponent": 0,
            "aliases": [
              "nhash"
            ]
          },
          {
            "denom": "hash",
            "exponent": 9
          }
        ],
        "base": "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
        "name": "Provenance",
        "display": "hash",
        "symbol": "HASH",
        "ibc": {
          "source_channel": "channel-7",
          "dst_channel": "channel-222",
          "source_denom": "nhash"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.svg"
        },
        "coingecko_id": "provenance-blockchain"
      },
      {
        "description": "GLX is the staking token of the Galaxy Chain",
        "denom_units": [
          {
            "denom": "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
            "exponent": 0,
            "aliases": [
              "uglx"
            ]
          },
          {
            "denom": "glx",
            "exponent": 6
          }
        ],
        "base": "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
        "name": "Galaxy",
        "display": "glx",
        "symbol": "GLX",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-236",
          "source_denom": "uglx"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/galaxy.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/galaxy.svg"
        }
      },
      {
        "description": "The BLOCK token of Marble DEX on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
        "denom_units": [
          {
            "denom": "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
            "exponent": 0,
            "aliases": [
              "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq"
            ]
          },
          {
            "denom": "block",
            "exponent": 6
          }
        ],
        "base": "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
        "name": "Block",
        "display": "block",
        "symbol": "BLOCK",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
        }
      },
      {
        "description": "Token governance for Junoswap",
        "type_asset": "cw20",
        "address": "juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
        "denom_units": [
          {
            "denom": "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
            "exponent": 0,
            "aliases": [
              "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g"
            ]
          },
          {
            "denom": "raw",
            "exponent": 6
          }
        ],
        "base": "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
        "name": "JunoSwap",
        "display": "raw",
        "symbol": "RAW",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png"
        }
      },
      {
        "description": "MEME Token (MEME) is the native staking token of the MEME Chain",
        "denom_units": [
          {
            "denom": "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
            "exponent": 0,
            "aliases": [
              "umeme"
            ]
          },
          {
            "denom": "meme",
            "exponent": 6
          }
        ],
        "base": "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
        "name": "Meme",
        "display": "meme",
        "symbol": "MEME",
        "ibc": {
          "source_channel": "channel-1",
          "dst_channel": "channel-238",
          "source_denom": "umeme"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
        }
      },
      {
        "description": "Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!",
        "type_asset": "cw20",
        "address": "juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
        "denom_units": [
          {
            "denom": "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
            "exponent": 0,
            "aliases": [
              "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w"
            ]
          },
          {
            "denom": "asvt",
            "exponent": 6
          }
        ],
        "base": "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
        "name": "Another.Software Validator Token",
        "display": "asvt",
        "symbol": "ASVT",
        "ibc": {
          "source_channel": "channel-47",
          "dst_channel": "channel-169",
          "source_denom": "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
        }
      },
      {
        "description": "The native EVM, governance and staking token of the Evmos Hub",
        "denom_units": [
          {
            "denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            "exponent": 0,
            "aliases": [
              "aevmos"
            ]
          },
          {
            "denom": "evmos",
            "exponent": 18
          }
        ],
        "base": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
        "name": "Evmos",
        "display": "evmos",
        "symbol": "EVMOS",
        "ibc": {
          "source_channel": "channel-0",
          "dst_channel": "channel-204",
          "source_denom": "aevmos"
        },
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg"
        },
        "coingecko_id": "evmos"
      }
    ]
  }