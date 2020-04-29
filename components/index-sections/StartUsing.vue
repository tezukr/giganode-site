<template>
  <section 
    id="startUsing" 
    class="mt-5"
  >
    <b-container>
      <h2 class="title text-center mb-5">Start using now</h2>
      
      <div class="mb-4">
        <h4 class="title fs-21">Tezos Wallet Command Line Interface (CLI)</h4>
    
        <p>
          The easiest way to modify the node you are connecting
          to across many wallets is definitely Tezos CLI wallet.
          In order to change your current node please open your client
          config file nano .tezos-client/config, modifying t
          he following variables:
        </p>
  
        <ol>
          <li>
            <code>"node_addr": "https://mainnet-tezos.giganode.io"</code>
          </li>
          <li>
            <code>"node_port": 443</code>
          </li>
          <li>
            <code>
              "tls": true
            </code>
          </li>
        </ol>
      </div>
      
      <div class="mb-4">
        <h4 class="title fs-21">Galleon Wallet</h4>
  
        <p>
          From the main menu click on the ‘Settings’ button in the top right corner.
        </p>
        
        <img
          src="~assets/img/start-using/galleon-wallet.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
        
        <p>
          Then scroll down and find ‘Choose a different node’ section.
        </p>
        
        <p>
          Click on the dropdown menu and choose ‘Add A Custom Node’.
        </p>
  
        <img
          src="~assets/img/start-using/galleon-wallet-settings.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
        
        <p>
          Please note that you will be prompted to provide the API Key, but you simply have to leave this field empty.
        </p>
  
        <img
          src="~assets/img/start-using/galleon-wallet-address.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
        
        <p>
          Enter the URL address of our node:
          <a
            href="https://mainnet-tezos.giganode.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://mainnet-tezos.giganode.io
          </a>
        </p>
      </div>
      
      <div class="mb-4">
        <h4 class="title fs-21">Tezos native client</h4>
        <p><em>bash:</em></p>
        
        <code>$ tezos-client -S -A mainnet-tezos.giganode.io -P 443 rpc get /chains/main/blocks/head/protocols</code>
        <code>$ tezos-client -S -A testnet-tezos.giganode.io -P 443 rpc get /chains/main/blocks/head/protocols</code>
        <code>$ tezos-client -S -A labnet-tezos.giganode.io -P 443 rpc get /chains/main/blocks/head/protocols</code>
      </div>
  
      <div class="mb-4">
        <h4 class="title fs-21">Curl</h4>
        <p><em>bash:</em></p>
    
        <code>$ curl https://mainnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
        <code>$ curl https://testnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
        <code>$ curl https://labnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
      </div>
  
      <div class="mb-4">
        <h4 class="title fs-21">Wget</h4>
        <p><em>bash:</em></p>
    
        <code>$ wget -O - https://mainnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
        <code>$ wget -O - https://testnnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
        <code>$ wget -O - https://labnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'StartUsing'
};
</script>

<style scoped>

</style>
