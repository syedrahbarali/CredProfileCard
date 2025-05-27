import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#111" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.supportBtn}>
          <Feather name="message-circle" size={20} color="#fff" />
          <Text style={styles.supportText}>support</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Syed Rahbar Ali</Text>
            <Text style={styles.memberSince}>member since Dec, 2020</Text>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Feather name="edit" size={20} color="#bbb" />
          </TouchableOpacity>
        </View>
        {/* CRED Garage */}
        <TouchableOpacity style={styles.garageBox}>
          <View style={styles.garageIconBox}>
            <FontAwesome5 name="car" size={20} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.garageText}>
              get to know your vehicles, inside out
            </Text>
            <Text style={styles.garageLink}>CRED garage →</Text>
          </View>
        </TouchableOpacity>
        {/* Credit Score, Cashback, Bank Balance */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>
              credit score{" "}
              <Text style={styles.refresh}>• REFRESH AVAILABLE</Text>
            </Text>
            <Text style={styles.infoValue}>757</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>lifetime cashback</Text>
            <Text style={styles.infoValue}>₹3</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>bank balance</Text>
            <Text style={styles.infoValueLink}>check</Text>
          </View>
        </View>
        {/* Rewards & Benefits */}
        <Text style={styles.sectionTitle}>YOUR REWARDS & BENEFITS</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listLabel}>cashback balance</Text>
          <Text style={styles.listValue}>₹0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listLabel}>coins</Text>
          <Text style={styles.listValue}>26,46,583</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listLabel}>win upto Rs 1000</Text>
          <Text style={styles.listSubLabel}>refer and earn</Text>
        </TouchableOpacity>
        {/* Transactions & Support */}
        <Text style={styles.sectionTitle}>TRANSACTIONS & SUPPORT</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listLabel}>all transactions</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 40,
    paddingBottom: 18,
    backgroundColor: "#111",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: -28, // to center title between icons
  },
  supportBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  supportText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 14,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: "#333",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  memberSince: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 2,
  },
  editBtn: {
    padding: 8,
    borderRadius: 20,
  },
  garageBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#191919",
    margin: 18,
    borderRadius: 14,
    padding: 16,
  },
  garageIconBox: {
    backgroundColor: "#222",
    borderRadius: 20,
    padding: 10,
    marginRight: 16,
  },
  garageText: {
    color: "#fff",
    fontSize: 15,
  },
  garageLink: {
    color: "#8fff8f",
    fontSize: 15,
    marginTop: 2,
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 8,
    marginBottom: 18,
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#191919",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 4,
    alignItems: "flex-start",
  },
  infoLabel: {
    color: "#aaa",
    fontSize: 13,
    marginBottom: 4,
  },
  refresh: {
    color: "#8fff8f",
    fontWeight: "bold",
    fontSize: 12,
  },
  infoValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoValueLink: {
    color: "#8fff8f",
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  sectionTitle: {
    color: "#888",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 6,
    marginLeft: 18,
    letterSpacing: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#191919",
    marginHorizontal: 18,
    marginVertical: 4,
    borderRadius: 10,
    padding: 16,
  },
  listLabel: {
    color: "#fff",
    fontSize: 16,
  },
  listValue: {
    color: "#8fff8f",
    fontSize: 16,
    fontWeight: "bold",
  },
  listSubLabel: {
    color: "#aaa",
    fontSize: 13,
    marginLeft: 8,
  },
});
