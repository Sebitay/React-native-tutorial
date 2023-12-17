import { React, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState("");

  const { data, loading, error } = useFetch("search", {
    query: "React developer",
    page: "1",
    num_pages: "1",
  });

  const handleCardPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.cardsContainer}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
      >
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data.map((item, index) => (
            <PopularJobCard
              key={index}
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Popularjobs;
