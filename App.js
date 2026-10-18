
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const GREEN = "#176B52";
const CREAM = "#F8F7F1";

const destinations = [
  {
    id: "1",
    name: "Goa",
    location: "Goa, India",
    category: "Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    description:
      "Explore golden beaches, enjoy sunset views over the Arabian Sea, visit historic forts and discover Goa's distinctive Portuguese-influenced architecture.",
    bestTime: "November to February",
    attractions: [
      { name: "Baga Beach", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600" },
      { name: "Fort Aguada", image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=600" },
      { name: "Palolem Beach", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600" },
    ],
  },
  {
    id: "2",
    name: "Manali",
    location: "Himachal Pradesh, India",
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    description:
      "Surrounded by the Himalayas, Manali offers snowy mountain views, green valleys, river scenery and outdoor activities. Visit Solang Valley and check seasonal access before planning a trip to Rohtang Pass.",
    bestTime: "October to June",
    attractions: [
      { name: "Solang Valley", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
      { name: "Rohtang Pass", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600" },
      { name: "Old Manali", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600" },
    ],
  },
  {
    id: "3",
    name: "Hampi",
    location: "Karnataka, India",
    category: "Heritage",
    image: "https://imgs.search.brave.com/U1jPY1L0yY9VOFKcrKhiR49Qn6_IEct25BiE0VDdB8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NjkxMTAzL3Bob3Rv/L2luZGlhLWthcm5h/dGFrYS1oYW1waS12/aWV3LW9mLXZpamF5/YW5hZ2FyYS1ydWlu/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Y1k4MnNyZmtF/TkE1OTJhSTM3Q25L/YlUtOXZuaEUwZVo1/clo1MDc0Vi1FMD0",
    description:
      "Discover the historic Vijayanagara ruins, remarkable granite landscapes, ancient temples and intricate stone architecture. Don't miss the famous Stone Chariot and Virupaksha Temple.",
    bestTime: "October to February",
    attractions: [
      { name: "Virupaksha Temple", image: "https://imgs.search.brave.com/jOpgH6NBhZyko_rZfxaGOWs8DxQvBCzSA-lksjWyW18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2FybmF0YWthLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/MS8wNi92aXJ1cGFr/c2hhLXRlbXBsZS1o/YW1waS5qcGc" },
      { name: "Stone Chariot", image: "https://imgs.search.brave.com/pU5PghCDNHb0wivdohgq18q-nkuglwCX8ipOun9Zl0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzkyLzM3Lzc1/LzM2MF9GXzI5MjM3/NzU1MF95aURCSDFU/QlBXa0ZzYU9vY3N5/NTR3d3k4WmhxY2hE/US5qcGc" },
     { name: "Hampi Ruins", image: "https://imgs.search.brave.com/52cM0i--c5zGRLXmpiaZJlqJ6yuje5T5Rs9Y7mKsJvk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ3/MjE0OTIvcGV4ZWxz/LXBob3RvLTE0NzIx/NDkyLmpwZWc_Y3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" },
    ],
  },
  {
    id: "4",
    name: "Rishikesh",
    location: "Uttarakhand, India",
    category: "Adventure",
    image: "https://imgs.search.brave.com/IyG4O_LmF9c1weSd-rOwTDSJTIMP4OlOEo4YD2oqzUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDUv/OTI5Lzg3Ni9zbWFs/bC9yYWZ0aW5nLWlu/LWdhbmdhLXJpdmVy/LWluLXJpc2hpa2Vz/aC11dHRyYWtoYW5k/LXBob3RvLmpwZWc",
    description:
      "Experience the Ganga River, scenic Himalayan foothills and peaceful ashrams. Visitors can explore riverside areas, practise yoga or book rafting through authorised adventure operators.",
    bestTime: "September to November and March to May",
    attractions: [
      { name: "Lakshman Jhula", image: "https://imgs.search.brave.com/i5WDo_6ArN1hrk0_1Pmx2eK7wZ2oq9rjN9kv1oaPKyw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vbGFrc2htYW4t/amh1bGEtaXJvbi1z/dXNwZW5zaW9uLWJy/aWRnZS1nYW5nZXMt/cml2ZXItZnJvbS1m/bGF0LWFuZ2xlXzE2/MDE4MTQtMzUwLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA" },
      { name: "Ganga River", image: "https://imgs.search.brave.com/0D6pd-DWyo65ZYXf29GCzog8fP4RNucfqI8KmajvLNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb25m/bHVlbmNlLXRvLWZv/cm0tcml2ZXItZ2Fu/Z2EtaW5kaWEtdHJp/YnV0YXJpZXMtbmFt/ZWQtYmhhZ2lyYXRo/aS1hbGFrbmFuZGEt/ZGV2cHJheWFnLW9u/d2FyZHMtODQ4OTMw/MTQuanBn" },
      { name: "River Rafting", image: "https://imgs.search.brave.com/2nHj_QarB-ncxCejz2jAxCr6W08UQnOFk8XyJAOCwsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjUz/ODEyOTYvcGV4ZWxz/LXBob3RvLTI1Mzgx/Mjk2L2ZyZWUtcGhv/dG8tb2YtaGlnaC1h/bmdsZS12aWV3LW9m/LXBlb3BsZS1jYW5v/ZWluZy5qcGVnP2Nz/PXRpbnlzcmdiJmRw/cj0xJnc9NTAw" },
    ],
  },
  {
    id: "5",
    name: "Munnar",
    location: "Kerala, India",
    category: "Mountains",
    image: "https://imgs.search.brave.com/evK0fRbCTX-UGNPkkSQMYqV7iCk7ubk8SmNU3iANUHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/MTcyYjFiZTRiMGNj/OGE1NDAxZGI0YS8x/NTgwMDQ4MTczMDUx/LTNSVzJHTUZOTTZK/OUhFNThZQVlLL1Zp/ZXcrb2YrdGhlK091/dCtvZitUb3duK0Fj/Y29tbW9kYXRpb25z/K2luK011bm5hciwr/S2VyYWxh",
    description:
      "Enjoy rolling tea plantations, mist-covered hills, cool mountain air and scenic viewpoints. Mattupetty Dam and Echo Point are popular stops for nature lovers.",
    bestTime: "September to March",
    attractions: [
      { name: "Tea Gardens", image: "https://imgs.search.brave.com/gSOv9q7J5wREUvXBHb1FkE11vj3oe668kIlNA0rocpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE4LzU3LzQxLzgz/LzM2MF9GXzE4NTc0/MTgzMjVfZmRESUht/ZVZWMWhLQ1RkU1M3/OEx1czV4eHlHWGpV/eU0uanBn" },
      { name: "Mattupetty Dam", image: "https://imgs.search.brave.com/ryUFUwgbR8r0825ypiIS3UlAo83mlb0KT5ICwDHRkoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzkyLzI1Lzk0/LzM2MF9GXzEzOTIy/NTk0MTdfdllUWTk0/Qmhvd2VCWWtUZkNF/NHJsR0dxc0doTGI3/NFguanBn" },
      { name: "Echo Point", image: "https://imgs.search.brave.com/a1hi2G3hVuFpRu6w3brjsalBaqw-5VUdw_OCna8d6zQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VyYWxhaHlkZWx0/b3VyaXNtLmNvbS9p/bWFnZXMvbmV3cy9l/Y2hvLXBvaW50LW11/bm5hMS5wbmc" },
    ],
  },
  {
    id: "6",
    name: "Jaipur",
    location: "Rajasthan, India",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800",
    description:
      "Explore Rajasthan's Pink City, known for pink sandstone architecture, royal palaces, historic forts and colourful markets. Visit Hawa Mahal, Amber Fort and City Palace to experience its heritage.",
    bestTime: "October to March",
    attractions: [
      { name: "Hawa Mahal", image: "https://imgs.search.brave.com/aMGz8FPT-jcIEpxUcCZxZg_0j0EO46KuBN607UT52LY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA4/MzAxMDM4MS9waG90/by9oYXdhLW1haGFs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1hN09GcDFqMzZP/Y3pINU1ENV82NzNu/emNSTVY3Zl9DSmE4/OXlNOFVqeFVVPQ" },
      { name: "Amber Fort", image: "https://imgs.search.brave.com/K20MZWLzmg0YYzY_2xeoEAuswFxO0pC702f5QGSKD7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnZi/cjgzaG55aXV4MS5j/bG91ZGZyb250Lm5l/dC9pbWFnZS85NzUw/NTAyODU3MjgvaW1h/Z2VfbXZub242aWxm/aDdvdGQxdXEyZ2Jl/ZTYwMmIvLUZXRUJQ" },
      { name: "City Palace", image: "https://imgs.search.brave.com/DI9fIc8JvQPcL2T7Q_-6tbcapUZSDReheTqUI_DULek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFsYWNlc29ud2hl/ZWxzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMy8xMi9j/aXR5X3BhbGFjZS5q/cGc" },
    ],
  },
];

const categories = ["All", "Beaches", "Mountains", "Heritage", "Adventure"];

export default function App() {
  const [screen, setScreen] = useState("Home");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  function toggleWishlist(id) {
    setWishlist((old) =>
      old.includes(id) ? old.filter((item) => item !== id) : [...old, id]
    );
  }

  function openDestination(place) {
    setSelected(place);
    setScreen("Details");
  }

  const visibleDestinations = destinations.filter((place) => {
    const matchesName =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || place.category === category;

    const matchesWishlist =
      screen !== "Wishlist" || wishlist.includes(place.id);

    return matchesName && matchesCategory && matchesWishlist;
  });

  function DestinationCard({ place }) {
    const saved = wishlist.includes(place.id);

    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => openDestination(place)}>
          <Image source={{ uri: place.image }} style={styles.cardImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.heart}
          onPress={() => toggleWishlist(place.id)}
        >
          <Text style={styles.heartText}>{saved ? "♥" : "♡"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cardInfo}
          onPress={() => openDestination(place)}
        >
          <Text style={styles.placeName}>{place.name}</Text>
          <Text style={styles.location}>📍 {place.location}</Text>
          <Text style={styles.categoryTag}>{place.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.app}>
      <StatusBar barStyle="dark-content" backgroundColor={CREAM} />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setScreen("Home")}
          style={styles.brand}
        >
          <Text style={styles.logo}>✦</Text>
          <Text style={styles.brandName}>Travel Explorer</Text>
        </TouchableOpacity>
        <Text style={styles.headerLabel}>YOUR NEXT ADVENTURE</Text>
      </View>

      {screen === "Home" && (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.eyebrow}>EXPLORE THE WORLD</Text>
          <Text style={styles.title}>Find your next{"\n"}happy place.</Text>
          <Text style={styles.subtitle}>
            Beautiful destinations, unforgettable memories.
          </Text>

          <TextInput
            style={styles.search}
            placeholder="🔍  Search destinations..."
            placeholderTextColor="#858585"
            value={search}
            onChangeText={setSearch}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryRow}
          >
            {categories.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.chip,
                  category === item && styles.activeChip,
                ]}
              >
                <Text
                  style={[
                    styles.chipText,
                    category === item && styles.activeChipText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Popular destinations</Text>
            <Text style={styles.count}>{visibleDestinations.length} places</Text>
          </View>

          <View style={styles.grid}>
            {visibleDestinations.map((place) => (
              <DestinationCard key={place.id} place={place} />
            ))}
          </View>

          {visibleDestinations.length === 0 && (
            <Text style={styles.empty}>No destinations found. Try another search.</Text>
          )}
        </ScrollView>
      )}

      {screen === "Details" && selected && (
        <ScrollView contentContainerStyle={styles.content}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setScreen("Home")}
          >
            <Text style={styles.backText}>← Back to explore</Text>
          </TouchableOpacity>

          <Image source={{ uri: selected.image }} style={styles.heroImage} />

          <Text style={styles.eyebrow}>{selected.category.toUpperCase()}</Text>
          <Text style={styles.title}>{selected.name}</Text>
          <Text style={styles.location}>📍 {selected.location}</Text>
          <Text style={styles.description}>{selected.description}</Text>

          <View style={styles.bestTimeBox}>
            <Text style={styles.bestTimeLabel}>☀️ BEST TIME TO VISIT</Text>
            <Text style={styles.bestTime}>{selected.bestTime}</Text>
          </View>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => toggleWishlist(selected.id)}
          >
            <Text style={styles.saveButtonText}>
              {wishlist.includes(selected.id)
                ? "♥  Remove from Wishlist"
                : "♡  Add to Wishlist"}
            </Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Places you shouldn't miss</Text>

          {selected.attractions.map((attraction, index) => (
            <View key={index} style={styles.attraction}>
              <Image
                source={{ uri: attraction.image }}
                style={styles.attractionImage}
              />
              <Text style={styles.attractionName}>{attraction.name}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      {screen === "Wishlist" && (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.eyebrow}>YOUR SAVED PLACES</Text>
          <Text style={styles.title}>Your wishlist ♡</Text>
          <Text style={styles.subtitle}>
            Keep the places you dream of visiting close.
          </Text>

          {visibleDestinations.length > 0 ? (
            <View style={styles.grid}>
              {visibleDestinations.map((place) => (
                <DestinationCard key={place.id} place={place} />
              ))}
            </View>
          ) : (
            <View style={styles.emptyBox}>
              <Text style={styles.emptyIcon}>♡</Text>
              <Text style={styles.sectionTitle}>Your wishlist is empty</Text>
              <Text style={styles.subtitle}>
                Save destinations you love and find them here.
              </Text>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => setScreen("Home")}
              >
                <Text style={styles.saveButtonText}>Explore destinations</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      )}

      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setScreen("Home")}
          style={styles.navItem}
        >
          <Text style={screen === "Home" ? styles.navActive : styles.navText}>
            ◈  Explore
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen("Wishlist")}
          style={styles.navItem}
        >
          <Text
            style={screen === "Wishlist" ? styles.navActive : styles.navText}
          >
            ♡  Wishlist {wishlist.length > 0 ? `(${wishlist.length})` : ""}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: CREAM, minHeight: "100vh" },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    backgroundColor: CREAM,
    borderBottomWidth: 1,
    borderBottomColor: "#E7E5DC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  brand: { flexDirection: "row", alignItems: "center", gap: 9 },
  logo: { color: GREEN, fontSize: 27 },
  brandName: { fontSize: 20, fontWeight: "800", color: GREEN },
  headerLabel: { fontSize: 10, letterSpacing: 2, color: "#77796F" },
  content: { padding: 24, paddingBottom: 45, width: "100%", maxWidth: 1100, alignSelf: "center" },
  eyebrow: { color: GREEN, fontSize: 11, fontWeight: "800", letterSpacing: 2, marginTop: 12 },
  title: { fontSize: 38, fontWeight: "800", color: "#202D27", marginTop: 9, lineHeight: 45 },
  subtitle: { color: "#6F756F", fontSize: 15, lineHeight: 23, marginTop: 8, marginBottom: 18 },
  search: { backgroundColor: "#FFFFFF", padding: 15, borderRadius: 13, borderWidth: 1, borderColor: "#E7E5DC", fontSize: 15, marginTop: 10 },
  categoryRow: { marginTop: 18, marginBottom: 22, flexGrow: 0 },
  chip: { paddingVertical: 10, paddingHorizontal: 17, backgroundColor: "#FFFFFF", borderRadius: 24, marginRight: 9, borderWidth: 1, borderColor: "#E6E4DB" },
  activeChip: { backgroundColor: GREEN, borderColor: GREEN },
  chipText: { color: "#5D665F", fontWeight: "600" },
  activeChipText: { color: "#FFFFFF" },
  sectionHeading: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15, gap: 8 },
  sectionTitle: { color: "#26352D", fontSize: 21, fontWeight: "800", marginBottom: 14 },
  count: { color: "#7C817B", fontSize: 13 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 18 },
  card: { width: "100%", maxWidth: 330, flexGrow: 1, flexBasis: 260, backgroundColor: "#FFFFFF", borderRadius: 17, overflow: "hidden", borderWidth: 1, borderColor: "#EAE8E0", marginBottom: 6 },
  cardImage: { width: "100%", height: 195, backgroundColor: "#E0E6E0" },
  heart: { position: "absolute", top: 12, right: 12, backgroundColor: "#FFFFFF", width: 38, height: 38, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  heartText: { fontSize: 25, color: GREEN },
  cardInfo: { padding: 16, alignItems: "flex-start" },
  placeName: { fontSize: 21, fontWeight: "800", color: "#26352D" },
  location: { color: "#737970", fontSize: 13, marginTop: 6 },
  categoryTag: { marginTop: 12, color: GREEN, backgroundColor: "#E9F3EC", paddingVertical: 6, paddingHorizontal: 11, borderRadius: 18, fontSize: 12, overflow: "hidden" },
  empty: { paddingVertical: 30, color: "#6F756F" },
  backButton: { alignSelf: "flex-start", paddingVertical: 12 },
  backText: { color: GREEN, fontWeight: "700", fontSize: 15 },
  heroImage: { width: "100%", height: 320, borderRadius: 18, marginTop: 10, marginBottom: 20, backgroundColor: "#E0E6E0" },
  description: { fontSize: 16, lineHeight: 26, color: "#5D665F", marginTop: 16, marginBottom: 18 },
  bestTimeBox: { padding: 18, backgroundColor: "#E9F3EC", borderRadius: 14, marginBottom: 20 },
  bestTimeLabel: { color: GREEN, fontSize: 11, fontWeight: "800", letterSpacing: 1 },
  bestTime: { color: "#26352D", fontSize: 17, fontWeight: "700", marginTop: 8 },
  saveButton: { backgroundColor: GREEN, padding: 15, borderRadius: 12, alignItems: "center", marginBottom: 28 },
  saveButtonText: { color: "#FFFFFF", fontWeight: "800", fontSize: 15 },
  attraction: { flexDirection: "row", alignItems: "center", gap: 15, padding: 10, backgroundColor: "#FFFFFF", borderRadius: 14, marginBottom: 12, borderWidth: 1, borderColor: "#EAE8E0" },
  attractionImage: { width: 100, height: 80, borderRadius: 10, backgroundColor: "#E0E6E0" },
  attractionName: { color: "#26352D", fontSize: 16, fontWeight: "700", flexShrink: 1 },
  emptyBox: { alignItems: "center", paddingVertical: 50, paddingHorizontal: 15 },
  emptyIcon: { fontSize: 55, color: GREEN, marginBottom: 12 },
  nav: { flexDirection: "row", justifyContent: "center", gap: 45, paddingVertical: 15, backgroundColor: "#FFFFFF", borderTopWidth: 1, borderTopColor: "#E7E5DC" },
  navItem: { paddingHorizontal: 12, paddingVertical: 5 },
  navText: { color: "#77796F", fontSize: 14, fontWeight: "600" },
  navActive: { color: GREEN, fontSize: 14, fontWeight: "800" },
});
