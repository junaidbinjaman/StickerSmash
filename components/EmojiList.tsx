import {
    StyleSheet,
    View,
    ImageSourcePropType,
    FlatList,
    Pressable,
} from 'react-native';
import {useState} from 'react';
import {Image} from 'expo-image';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

const EmojiList = ({onSelect, onCloseModal}: Props) => {
    const [emoji] = useState<ImageSourcePropType[]>([
        require('../assets/images/emoji1.png'),
        require('../assets/images/emoji2.png'),
        require('../assets/images/emoji3.png'),
        require('../assets/images/emoji4.png'),
        require('../assets/images/emoji5.png'),
        require('../assets/images/emoji6.png'),
    ]);

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={true}
                data={emoji}
                contentContainerStyle={styles.listContainer}
                renderItem={({item, index}) => (
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}
                    >
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                )}
            />
        </View>
    );
};

export default EmojiList;

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});
