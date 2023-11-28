
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

// import React, { useEffect } from 'react';
// import { StyleSheet, View, Text, Pressable, Linking } from 'react-native';

// export default function App() {
//   // useEffect(() => {
//   //     if()
//   // }, []);
//   const handleConnectAndOpenDApp = async () => {
//     try {
//       // Connect MetaMask
//       await handleOpenMetaMask();

//       // Open your dApp URL after users have connected MetaMask
//       await handleOpenDApp();
//     } catch (error) {
//       console.error('Error during MetaMask connection:');
//     }
//   };

//   const handleOpenMetaMask = async () => {
//     try {
//       // Open MetaMask website for users to install or connect
//       const metamaskUrl = 'https://metamask.io/';
//       await Linking.openURL(metamaskUrl);
//     } catch (error) {
//       throw new Error('Failed to open MetaMask:');
//     }
//   };

//   const handleOpenDApp = async () => {
//     try {
//       // Open your dApp URL after users have connected MetaMask
//       const dAppUrl = 'https://www.decentrawood.com/';
//       await Linking.openURL(dAppUrl);
//     } catch (error) {
//       console.error('Error during DApp opening:');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>React Native MetaMask Integration</Text>
//       <Pressable onPress={handleConnectAndOpenDApp} style={styles.pressableMargin}>
//         <Text>Connect MetaMask and Open DApp</Text>
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



// import React from 'react';
// import { StyleSheet, View, Text, Pressable, Linking, Alert } from 'react-native';

// export default function App() {
//   const handleOpenMetaMask = async () => {
//     const metamaskUrl = 'https://metamask.io/';
//     try {
//       await Linking.openURL(metamaskUrl);
//       console.log("inside metamask app");

//     } catch (error) {
//       console.error('Failed to open MetaMask:', error);
//       Alert.alert('Error', 'Failed to open MetaMask. Please make sure MetaMask is installed.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>React Native MetaMask Integration</Text>
//       {/* Pressing this button will instruct the user to open MetaMask manually */}
//       <Pressable onPress={handleOpenMetaMask} style={styles.pressableMargin}>
//         <Text>Open MetaMask</Text>
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


import React from 'react';
import { StyleSheet, View, Text, Pressable, Linking, Alert } from 'react-native';

export default function App() {
  const metamaskUrl = 'https://metamask.io/';
  const dAppUrl = 'https://netprodex.com/';
  const appLink = "https://play.google.com/store/apps/details?id=io.metamask" // Replace with your desired link

  const handleOpenMetaMask = async () => {
    try {
      const canOpen = await Linking.canOpenURL(metamaskUrl);

      if (canOpen) {
        await Linking.openURL(metamaskUrl);
      } else {

        await Alert.alert(
          'MetaMask Not Installed',
          'Please install MetaMask to proceed.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => console.log('Open In Playstore',Linking.openURL(appLink)),
            },
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error('Failed to open MetaMask:', error);
    }
  };

  const handleOpenDAppInMetaMask = async () => {
    try {
      await Linking.openURL(dAppUrl);
    } catch (error) {
      console.error('Failed to open DApp in MetaMask browser:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Net<Text style={styles.headingInside}>ProDex</Text> <Text style={styles.headingInside}>SW</Text>AP</Text>
      <View style={styles.secondContainer}>
        <Pressable onPress={handleOpenMetaMask} style={styles.pressableMargin}>
          <Text style={styles.linkText}>Open MetaMask</Text>
        </Pressable>
        <Pressable onPress={handleOpenDAppInMetaMask} style={styles.pressableMargin}>
          <Text style={styles.linkText}>Open Link</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00090c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 16,
    color: "#fff",
    borderWidth: 3,
  },
  pressableMargin: {
    padding: 15,
    color: "#fff",
    backgroundColor: "#4bc2ec",
    borderRadius: 7,
    textAlign: "center",
    width: 165,
  },

  linkText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  secondContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#031823",
    padding: 40,

  },
  headingInside: {
    color: "#4bc2ec",
  }
});

