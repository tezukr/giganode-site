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
  
      <div>
        <h4 class="title fs-21">TezBox Desktop Wallet</h4>
    
        <p>Once you open up TezBox Wallet on the desktop, please click on your profile icon.</p>
    
        <img
          src="~assets/img/start-using/tezBox-wallet.jpg"
          alt="TezBox Wallet"
          class="w-100 mb-4"
        >
    
        <p>In the dropdown menu choose ‘Settings’</p>
    
        <img
          src="~assets/img/start-using/tezBox-wallet-settings.jpg"
          alt="TezBox Wallet Settings"
          class="w-100 mb-4"
        >
    
        <p>
          In your settings simply change your node address to:
          <a
            href="https://mainnet-tezos.giganode.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://mainnet-tezos.giganode.io
          </a>
        </p>
    
        <img
          src="~assets/img/start-using/tezBox-wallet-address.png"
          alt="TezBox Wallet Settings"
          class="w-100 mb-4"
        >
      </div>
  
      <div>
        <h4 class="title fs-21">TezBox Chrome Wallet</h4>
    
        <p>In the main menu click on your profile icon in the top right corner.</p>
    
        <img
          src="~assets/img/start-using/tezBox-chrome-wallet.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
        
        <p>Then click on the ‘Settings’ button.</p>
  
        <img
          src="~assets/img/start-using/tezBox-chrome-wallet-settings.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
        
        <p>
          Click on the field and enter our Tezos Ukraine GigaNode address:
          <a
            href="https://mainnet-tezos.giganode.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mainnet-tezos.giganode.io
          </a>
        </p>
  
        <img
          src="~assets/img/start-using/tezBox-chrome-wallet-address.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
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
      </div>
  
      <div class="mb-4">
        <h4 class="title fs-21">Curl</h4>
        <p><em>bash:</em></p>
    
        <code>$ curl https://mainnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
      </div>
  
      <div class="mb-4">
        <h4 class="title fs-21">Wget</h4>
        <p><em>bash:</em></p>
    
        <code>$ wget -O - https://mainnet-tezos.giganode.io/chains/main/blocks/head/protocols</code>
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
