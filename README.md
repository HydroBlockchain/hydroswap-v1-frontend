# Hydro Swap Exchange

[![Netlify Status](https://api.netlify.com/api/v1/badges/dc832627-65d8-4f51-8afe-349fa3308e98/deploy-status)](https://app.netlify.com/sites/hydroswaps/deploys)

[HydroSwap](https://hydroswap.org) is an automated market maker (“**AMM**”) that allows two tokens to be exchanged on the [Binance Smart Chain](https://www.binance.org/en/smartChain) (BSC).

This repo is responsible for the **exchange** interface of the AMM: [hydroswap](https://hydroswap.org/)

For development on Windows, need to open git bash, go to project dir and run:
1. grep -rl 0xBCfCcbde45cE874adCB698cC183deBcF17952812 node_modules/@pancakeswap-libs/sdk/dist/ | xargs sed -i 's/0xBCfCcbde45cE874adCB698cC183deBcF17952812/0xF58cC77C7Fb1372d1E078b7335cAFa1E5ec9c029/g'
2. grep -rl 0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66 node_modules/@pancakeswap-libs/sdk/dist/ | xargs sed -i 's/0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66/0x6e3afb08919ae00604c5c93a22463eb3bd8a68f0255b31976d682f16603143c3/g'
