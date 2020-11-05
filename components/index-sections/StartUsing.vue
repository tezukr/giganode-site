<template>
  <section
    id="startUsing"
    class="mt-5"
  >
    <b-container>
      <h2 class="title text-center mb-5">Start Using Now</h2>

      <div class="mb-4">
        <h4 class="title fs-21">Tezos Wallet Command Line Interface (CLI)</h4>

        <p>
          The easiest way to modify the node you are connecting
          to across many wallets is definitely Tezos CLI wallet.
          In order to change your current node please open your client
          config file nano .tezos-client/config, modifying the following variables:
        </p>

        <ol>
          <li>
            <code>"node_addr": "mainnet-tezos.giganode.io"</code>
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
        <h4 class="title fs-21">Galleon Preview Wallet</h4>

        <p>
          Make sure to download the version from official
          <a
            href="https://github.com/Cryptonomic/Deployments/wiki/Galleon:-Releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Galleon Preview GitHub.
          </a>
        </p>

        <p>
          On the Galleon GitHub page scroll down and pick the latest Galleon Preview
          release corresponding to your operating system.
        </p>

        <img
          src="~assets/img/start-using/galleon-wallet-version.png"
          alt="Galleon versions"
          class="w-100 mb-4"
        >

        <p>
          Open Galleon Preview and from the main menu click on the ‘Settings’ button in the top right corner.
        </p>

        <img
          src="~assets/img/start-using/galleon-wallet-settings.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >

        <p>
          Find ‘Choose a different node’ section.
        </p>
        <p>
          Click on the dropdown menu and choose ‘Tezos Mainnet (nautilus.cloud + giganode.io)’
        </p>

        <img
          src="~assets/img/start-using/galleon-wallet-choose-node.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >

        <p>
          Tezos Giga Node is now selected and you can return to using your Galleon Preview Wallet.
        </p>

        <img
          src="~assets/img/start-using/galleon-wallet-ready.png"
          alt="TezBox Chrome Wallet Settings"
          class="w-100 mb-4"
        >
      </div>

      <div class="mb-4">
        <h4 class="title fs-21">Tezos native client</h4>
        <p><em>bash:</em></p>

        <code>$ tezos-client -S -A mainnet-tezos.giganode.io -P 443 rpc get /chains/main/blocks/head/protocols</code><br>
        <code>$ tezos-client -S -A testnet-tezos.giganode.io -P 443 rpc get /chains/main/blocks/head/protocols</code><br>
      </div>

      <div class="mb-4">
        <h4 class="title fs-21">Curl</h4>
        <p><em>bash:</em></p>

        <code>$ curl https://mainnet-tezos.giganode.io/chains/main/blocks/head/protocols</code><br>
        <code>$ curl https://testnet-tezos.giganode.io/chains/main/blocks/head/protocols</code><br>
      </div>

      <div class="mb-4">
        <h4 class="title fs-21">Wget</h4>
        <p><em>bash:</em></p>

        <code>$ wget -O - https://mainnet-tezos.giganode.io/chains/main/blocks/head/protocols</code><br>
        <code>$ wget -O - https://testnnet-tezos.giganode.io/chains/main/blocks/head/protocols</code><br>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'StartUsing'
};
</script>
