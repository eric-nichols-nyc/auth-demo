const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

  // Define data to seed
  const usersData = [
    {
      name: "user one",
      password: "user1",
      email: "user1123@aol.com",
      uname: "user1",
      contact: 6465059007
    },
    {
        name: "user two",
        password: "user2",
        email: "user2@aol.com",
        uname: "user2",
        contact: 6465059007
      },
    {
      name: "admin one",
      password: "admin1",
      email: "admin@aol.com",
      uname: "admin1",
      contact: 6465059007,
      role: "admin",
    }
    // Add more items as needed
  ];
// Connect to MongoDB
mongoose.connect("mongodb://localhost/login_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Hash passwords before saving
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

async function seedDatabase() {
// hash passwords from usersData, return an array of promises, assign passwprds to usersData
    const promises = usersData.map(async (user) => {
       return  await hashPassword(user.password);
    });
    const hashed = await Promise.all(promises);

    const users = usersData.map((user, i) => {
        return {
            name: user.name,
            password: hashed[i],
            email: user.email,
            profileImage: user.profileImage,
            uname: user.uname,
            contact: user.contact,
            role: user.role,
        };
    });

 // Seed data into MongoDB
  User.insertMany(users)
    .then(() => {
      console.log("Data seeded successfully");
      mongoose.connection.close();
    })
    .catch((err) => console.error(err));
 }
// Run seeding script
seedDatabase();
