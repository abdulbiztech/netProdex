// import { StyleSheet, Text, View, Pressable } from 'react-native';

// import {
// 	WalletConnectModal,
// 	useWalletConnectModal,
// } from '@walletconnect/modal-react-native';
// // Add in the useWalletConnectModal hook

// const projectId = '305b48a4cda3e787729533faab2e38aa';

// const providerMetadata = {
// 	name: 'YOUR_PROJECT_NAME',
// 	description: 'YOUR_PROJECT_DESCRIPTION',
// 	url: 'https://your-project-website.com/',
// 	icons: ['https://your-project-logo.com/'],
// 	redirect: {
// 		native: 'YOUR_APP_SCHEME://',
// 		universal: 'YOUR_APP_UNIVERSAL_LINK.com',
// 	},
// };

// export default function App() {
// 	// Add in the useWalletConnectModal hook + props
// 	const { open, isConnected, address, provider } = useWalletConnectModal();

// 	// Function to handle the
// 	const handleButtonPress = async () => {
// 		if (isConnected) {
// 			return provider?.disconnect();
// 		}
// 		return open();
// 	};

// 	// Main UI Render
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.heading}>NetProDex Wallet!</Text>
// 			<Text>{isConnected ? address : 'No Connected'}</Text>
// 			<Pressable
// 				onPress={handleButtonPress}
// 				style={styles.pressableMargin}
// 			>
// 				<Text>{isConnected ? 'Disconnect' : 'Connect'}</Text>
// 			</Pressable>

// 			<WalletConnectModal
// 				explorerRecommendedWalletIds={[
// 					'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
// 				]}
// 				explorerExcludedWalletIds={'ALL'}
// 				projectId={projectId}
// 				providerMetadata={providerMetadata}
// 			/>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	heading: {
// 		fontSize: 18,
// 		fontWeight: 'bold',
// 		marginBottom: 16,
// 	},
// 	pressableMargin: {
// 		marginTop: 16,
// 	},
// });

// import React from 'react';
// import { StyleSheet, View, Text, Pressable, Linking } from 'react-native';

// export default function App() {
//   const handleOpenMetaMask = () => {
//     // Open MetaMask website in the user's default browser
//     Linking.openURL('https://metamask.io/');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>React Native MetaMask Integration</Text>
//       <Pressable onPress={handleOpenMetaMask} style={styles.pressableMargin}>
//         <Text>Open MetaMask Website</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   pressableMargin: {
//     marginTop: 16,
//   },
// });
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Linking } from 'react-native';

export default function App() {
  // useEffect(() => {
  //     if()
  // }, []);
  const handleConnectAndOpenDApp = async () => {
    try {
      // Connect MetaMask
      await handleOpenMetaMask();

      // Open your dApp URL after users have connected MetaMask
      await handleOpenDApp();
    } catch (error) {
      console.error('Error during MetaMask connection:');
    }
  };

  const handleOpenMetaMask = async () => {
    try {
      // Open MetaMask website for users to install or connect
      const metamaskUrl = 'https://metamask.io/';
      await Linking.openURL(metamaskUrl);
    } catch (error) {
      throw new Error('Failed to open MetaMask:');
    }
  };

  const handleOpenDApp = async () => {
    try {
      // Open your dApp URL after users have connected MetaMask
      const dAppUrl = 'https://www.decentrawood.com/';
      await Linking.openURL(dAppUrl);
    } catch (error) {
      console.error('Error during DApp opening:');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native MetaMask Integration</Text>
      <Pressable onPress={handleConnectAndOpenDApp} style={styles.pressableMargin}>
        <Text>Connect MetaMask and Open DApp</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});
