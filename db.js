import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/vtube",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error")


// export const videos = [
//     {
//       id: 324393,
//       title: "Video awesome",
//       description: "This is something I love",
//       views: 24,
//       videoFile: "https://archive.org/details/BigBuckBunny_124",
//       creator: {
//         id: 121212,
//         name: "Nicolas",
//         email: "nico@las.com"
//       }
//     },
//     {
//       id: 1212121,
//       title: "Video super",
//       description: "This is something I love",
//       views: 24,
//       videoFile: "https://archive.org/details/BigBuckBunny_124",
//       creator: {
//         id: 121212,
//         name: "Nicolas",
//         email: "nico@las.com"
//       }
//     },
//     {
//       id: 55555,
//       title: "Video nice",
//       description: "This is something I love",
//       views: 24,
//       videoFile: "https://archive.org/details/BigBuckBunny_124",
//       creator: {
//         id: 121212,
//         name: "Nicolas",
//         email: "nico@las.com"
//       }
//     },
//     {
//       id: 11111,
//       title: "Video perfect",
//       description: "This is something I love",
//       views: 24,
//       videoFile: "https://archive.org/details/BigBuckBunny_124",
//       creator: {
//         id: 121212,
//         name: "Nicolas",
//         email: "nico@las.com"
//       }
//     }
//   ];