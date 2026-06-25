const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const CAT_API = "https://api.thecatapi.com/v1/images/search?limit=6&has_breeds=1";
const DOG_API = "https://api.thedogapi.com/v1/images/search?limit=6&has_breeds=1";

const catNames = ["Luna", "Cleo", "Misty", "Willow", "Pebble", "Nova"];
const dogNames = ["Finn", "Milo", "Harley", "Bailey", "Scout", "Juno"];
const locations = ["Seattle, WA", "Austin, TX", "Portland, OR", "Denver, CO", "Miami, FL", "Boston, MA"];

const randomFrom = (items) => items[Math.floor(Math.random() * items.length)];
const randomAge = () => `${Math.floor(Math.random() * 8) + 1} years`;
const randomGender = () => (Math.random() > 0.5 ? "Female" : "Male");

const buildPet = (item, type, name, location) => {
  const breed = item.breeds && item.breeds.length ? item.breeds[0].name : "Mixed breed";
  const temperament = item.breeds && item.breeds.length ? item.breeds[0].temperament : "gentle and curious";
  const description = `A ${breed} that is ${temperament.toLowerCase()}.`;

  return {
    id: item.id,
    name,
    type,
    breed,
    age: randomAge(),
    gender: randomGender(),
    location,
    adopted: false,
    image: item.url,
    description,
  };
};

app.get("/api/pets", async (req, res) => {
  try {
    const [catResponse, dogResponse] = await Promise.all([
      fetch(CAT_API),
      fetch(DOG_API),
    ]);

    const [catData, dogData] = await Promise.all([
      catResponse.json(),
      dogResponse.json(),
    ]);

    const cats = catData.map((item, index) =>
      buildPet(item, "Cat", catNames[index % catNames.length], randomFrom(locations))
    );
    const dogs = dogData.map((item, index) =>
      buildPet(item, "Dog", dogNames[index % dogNames.length], randomFrom(locations))
    );

    res.json([...cats, ...dogs]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch adoptable pets" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
