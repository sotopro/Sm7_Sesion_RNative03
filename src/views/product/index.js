/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../assets/colors/index';
import {categories} from '../../../assets/data/categories';
import {popular} from '../../../assets/data/popular';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: colors.textDatk,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDatk,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 1,
  },
  searchText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginBottom: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 40,
    marginBottom: 26,
  },
  categorySelectIcon: {
    alignSelf: 'center',
    borderRadius: 20,
  },
  popularWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDatk,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.textDatk,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 0,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

const Product = ({navigation, route}) => {
  const {title, weight, rating, image} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.popularWrapper}>
          <View style={styles.popularCardWrapper}>
            <View>
              <View>
                <View style={styles.popularTopWrapper}>
                  <Icon name="star" size={12} color={colors.primary} />
                  <Text style={styles.popularTopText}>top of the week</Text>
                </View>
                <View style={styles.popularTitleWrapper}>
                  <Text style={styles.popularTitlesTitle}>{title}</Text>
                  <Text style={styles.popularTitlesWeight}>
                    Weight: {weight}
                  </Text>
                </View>
              </View>
              <View style={styles.popularCardBottom}>
                <View style={styles.addPizzaButton}>
                  <Icon name="plus" size={12} color={colors.textDatk} />
                </View>
                <View style={styles.ratingWrapper}>
                  <Icon name="star" size={12} color={colors.textDatk} />
                  <Text style={styles.rating}>{rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.popularCardRight}>
              <Image source={image} style={styles.popularCardImage} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Product;
