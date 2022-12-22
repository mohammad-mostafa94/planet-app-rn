import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { MercurySvg, EarthSvg, JupiterSvg, MarsSvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';


const Details = ({ navigation, route }) => {

    const planet = route.params.planet;
    const { name } = planet;

    const renderImage = () => {
        switch (name) {
            case "mercury":
                return <MercurySvg />
            case "earth":
                return <EarthSvg />
            case "jupiter":
                return <JupiterSvg />
            case "mars":
                return <MarsSvg />
            case "neptune":
                return <NeptuneSvg />
            case "saturn":
                return <SaturnSvg />
            case "uranus":
                return <UranusSvg />
            case "venus":
                return <VenusSvg />
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage(name)}
                 {/* <img src="https://i.ibb.co/DbLdxmM/svg-Jupiter.png" alt="" /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    imageView: {
        marginTop:spacing[8],
        padding: spacing[5],
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent:"center"
    }
})