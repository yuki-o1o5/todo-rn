import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/flower.jpg');

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          onPress={() => alert('You pressed a button.')}
        />
        <Button
          label="Use this photo"
          onPress={() => alert('You pressed a button.')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
