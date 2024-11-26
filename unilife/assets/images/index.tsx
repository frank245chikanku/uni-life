import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import academic from "../../assets/education.png";
import peer from "../../assets/peer-to-peer.png";
import responsibility from "../../assets/reliability.png";
import financial from "../../assets/financial-statement.png";
import career from "../../assets/career-path.png";
import criticism from "../../assets/criticism.png";
import presentation from "../../assets/presentation.png";
import leader from "../../assets/leadership.png";

const categoryData = [
  {
    imgSrc: academic,
    altText: "academic",
    label: "Academic Integrity",
    bgColor: "#71c1fa",
    textColor: "#1f2937",
    link: "/academics",
  },
  {
    imgSrc: peer,
    altText: "peer",
    label: "Peer Pressure",
    bgColor: "#6b46c1",
    textColor: "#f3f4f6",
    link: "/peer",
  },
  {
    imgSrc: responsibility,
    altText: "responsibility",
    label: "Social Responsibility",
    bgColor: "#ffb09d",
    textColor: "#0101cf",
    link: "/social",
  },
  {
    imgSrc: financial,
    altText: "financial",
    label: "Financial Strain",
    bgColor: "#fbbf24",
    textColor: "#1f2937",
    link: "/financial",
  },
  {
    imgSrc: career,
    altText: "career",
    label: "Career Uncertainty",
    bgColor: "#3730a3",
    textColor: "#f3f4f6",
    link: "/career",
  },
  {
    imgSrc: criticism,
    altText: "criticism",
    label: "Discrimination & Bias",
    bgColor: "#71c1fa",
    textColor: "#1f2937",
    link: "/discrimination",
  },
  {
    imgSrc: presentation,
    altText: "presentation",
    label: "Entrepreneurship Uncertainty",
    bgColor: "#e11d48",
    textColor: "#f3f4f6",
    link: "/entrepreneurship",
  },
  {
    imgSrc: leader,
    altText: "leader",
    label: "Adjustment to Adjustment",
    bgColor: "#16a34a",
    textColor: "#f3f4f6",
    link: "/adjustment",
  },
];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
  container: {
    flex: 1,
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
