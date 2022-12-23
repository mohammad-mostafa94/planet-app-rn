import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import Text from '../components/text/text';
import { spacing } from '../theme/spacing';
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';

const PlanetItem = ({ item }) => {
    const { name, color } = item;
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("Details", { planet: item })
            }} style={styles.item}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text preset="h4" style={styles.itemName}>
                    {name}
                </Text>
            </View>
            <MaterialIcons name="chevron-right" size={18} color="white" />
        </Pressable>
    )
}

export default function Home({ navigation }) {
    const renderItem = ({ item }) => {
        const { color, name } = item;
        return (
            <PlanetItem item={item} />
        )
    }
    const [list,setList] = useState(PLANET_LIST);
    const searchFilter = (text) => {
        const filteredList = PLANET_LIST.filter(item => {
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();

            return itemName.indexOf(userTypedText) > -1;
        })
        setList(filteredList);
    }

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />

            <TextInput
                placeholder="Type the planet name"
                placeholderTextColor={colors.white}
                autoCorrect={false}
                style={styles.searchInput}
                onChangeText={(text) => searchFilter(text)}
            />

            <FlatList
                // containContainerStyle={styles.list}
                // ItemSeparatorComponent={(props) => {
                //     console.log('props', props); // here you can access the trailingItem with props.trailingItem
                //     return (<View style={{ height: 5, backgroundColor: props.highlighted ? 'green' : 'gray' }} />);
                // }}
                style={styles.list}
                data={list}
                keyExtractor={(item) => item.name}

                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: spacing[4],
        justifyContent: "space-between",
    },
    itemName: {
        textTransform: "uppercase",
        marginLeft: spacing[4],
        fontWeight: "bold",
    }
    ,
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    list: {
        padding: spacing[4]
    },
    separator: {
        borderBottomColor: colors.white,
        borderWidth: 0.5
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5],
    }
})