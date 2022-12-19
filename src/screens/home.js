import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { StyleSheet } from "react-native";
// import Text from '../components/text/text'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    }
})