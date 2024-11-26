import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const categoryData = [
  {
    imgSrc: require("../../assets/images/education.png"),
    altText: "academic",
    label: "Academic Integrity",
    bgColor: "#71c1fa",
    textColor: "#1f2937",
    link: "/academics",
  },
  {
    imgSrc: require("../../assets/images/peer-to-peer.png"),
    altText: "peer",
    label: "Peer Pressure",
    bgColor: "#6b46c1",
    textColor: "#f3f4f6",
    link: "/peer",
  },
  {
    imgSrc: require("../../assets/images/reliability.png"),
    altText: "responsibility",
    label: "Social Responsibility",
    bgColor: "#ffb09d",
    textColor: "#0101cf",
    link: "/social",
  },
  {
    imgSrc: require("../../assets/images/financial-statement.png"),
    altText: "financial",
    label: "Financial Strain",
    bgColor: "#fbbf24",
    textColor: "#1f2937",
    link: "/financial",
  },
  {
    imgSrc: require("../../assets/images/career-path.png"),
    altText: "career",
    label: "Career Uncertainty",
    bgColor: "#3730a3",
    textColor: "#f3f4f6",
    link: "/career",
  },
  {
    imgSrc: require("../../assets/images/criticism.png"),
    altText: "criticism",
    label: "Discrimination & Bias",
    bgColor: "#71c1fa",
    textColor: "#1f2937",
    link: "/discrimination",
  },
  {
    imgSrc: require("../../assets/images/presentation.png"),
    altText: "presentation",
    label: "Entrepreneurship Uncertainty",
    bgColor: "#e11d48",
    textColor: "#f3f4f6",
    link: "/entrepreneurship",
  },
  {
    imgSrc: require("../../assets/images/leadership.png"),
    altText: "leader",
    label: "Adjustment to Adjustment",
    bgColor: "#16a34a",
    textColor: "#f3f4f6",
    link: "/adjustment",
  },
];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.gridContainer}>
        {categoryData.map((category, index) => (
          <TouchableOpacity key={index} style={[styles.categoryCard, { backgroundColor: category.bgColor }]}>
            <Image source={category.imgSrc} style={styles.categoryImage} />
            <Text style={[styles.categoryLabel, { color: category.textColor }]}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allow ScrollView to grow as needed
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  categoryCard: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
