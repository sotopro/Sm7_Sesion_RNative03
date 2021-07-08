import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import photos from '../../api/photos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
  },
});

const Blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await photos.getPhotos();
      if (result.errors) {
        setError(result.errors);
      } else {
        setData(result);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blog!</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => {
            const {albumId, id, title, url, thumbnailUrl} = item;
            return (
              <View>
                <Text>{id}</Text>
                <Text>{title}</Text>
                <Image
                  source={{uri: url}}
                  style={{width: 400, height: 400, resizeMode: 'contain'}}
                />
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Blog;
