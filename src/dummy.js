// function getProvider() {
  //   if (!wallet) {
  //     return null;
  //   }
  //   // create the provider and return it to the caller
  //   // network set to local network for now
  //   // const network = "http://127.0.0.1:8899";
  //   const network = WalletAdapterNetwork.Devnet;
  //   const connection = new Connection(network, "processed");

  //   const provider = new Provider(connection, wallet, {
  //     preflightCommitment: "processed",
  //   });
  //   return provider;
  // }

  // async function createCounter() {
  //   const provider = getProvider();
  //   if (!provider) {
  //     throw "Provider is null, connect your wallet.";
  //   }

  //   // create the program interface with idl, program id and provider
  //   const a = JSON.stringify(idl);
  //   const b = JSON.parse(a);
  //   const program = new Program(b, idl.metadata.address, provider);

  //   try {
  //     //interact with the program via rpc
  //     await program.rpc.initialize({
  //       accounts: {
  //         myAccount: baseAccount.publicKey,
  //         user: provider.wallet.publicKey,
  //         systemProgram: web3.SystemProgram.programId,
  //       },
  //       signers: [baseAccount],
  //     });

  //     const account = await program.account.myAccount.fetch(
  //       baseAccount.publicKey
  //     );
  //     console.log("Account: ", account);
  //   } catch (err) {
  //     console.log("Transaction error: ", err);
  //   }
  // }

  // async function incrementCounter() {
  //   const provider = getProvider();
  //   if (!provider) {
  //     throw "Provider is null, connect your wallet.";
  //   }

  //   // create the program interface with idl, program id and provider
  //   const a = JSON.stringify(idl);
  //   const b = JSON.parse(a);
  //   const program = new Program(b, idl.metadata.address, provider);

  //   try {
  //     //interact with the program via rpc
  //     await program.rpc.increment({
  //       accounts: {
  //         myAccount: baseAccount.publicKey,
  //         user: provider.wallet.publicKey,
  //         systemProgram: web3.SystemProgram.programId,
  //       },
  //     });

  //     const account = await program.account.myAccount.fetch(
  //       baseAccount.publicKey
  //     );
  //     console.log("Account data: ", account.data.toString());
  //   } catch (err) {
  //     console.log("Transaction error: ", err);
  //   }
  // }

  // async function decrementCounter() {
  //   const provider = getProvider();
  //   if (!provider) {
  //     throw "Provider is null, connect your wallet.";
  //   }

  //   // create the program interface with idl, program id and provider
  //   const a = JSON.stringify(idl);
  //   const b = JSON.parse(a);
  //   const program = new Program(b, idl.metadata.address, provider);

  //   try {
  //     //interact with the program via rpc
  //     await program.rpc.decrement({
  //       accounts: {
  //         myAccount: baseAccount.publicKey,
  //         user: provider.wallet.publicKey,
  //         systemProgram: web3.SystemProgram.programId,
  //       },
  //     });

  //     const account = await program.account.myAccount.fetch(
  //       baseAccount.publicKey
  //     );
  //     console.log("Account data: ", account.data.toString());
  //   } catch (err) {
  //     console.log("Transaction error: ", err);
  //   }
  // }

  // async function updateCounter() {
  //   const provider = getProvider();
  //   if (!provider) {
  //     throw "Provider is null, connect your wallet.";
  //   }

  //   // create the program interface with idl, program id and provider
  //   const a = JSON.stringify(idl);
  //   const b = JSON.parse(a);
  //   const program = new Program(b, idl.metadata.address, provider);

  //   try {
  //     //interact with the program via rpc
  //     await program.rpc.update(new BN(100), {
  //       accounts: {
  //         myAccount: baseAccount.publicKey,
  //         user: provider.wallet.publicKey,
  //         systemProgram: web3.SystemProgram.programId,
  //       },
  //     });

  //     const account = await program.account.myAccount.fetch(
  //       baseAccount.publicKey
  //     );
  //     console.log("Account data: ", account.data.toString());
  //   } catch (err) {
  //     console.log("Transaction error: ", err);
  //   }
  // }

  // let providerw = window.solana;
  // let connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
// After Connecting
  // connection.getBalance(providerw.publicKey).then(function(value) { console.log(value); })