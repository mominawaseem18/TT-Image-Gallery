import "./App.css";
import Header from "./components/Header";
import Images from "./components/Images";
import Nav from "./components/Nav";
import images from "./components/assests/ImagesData";

function App() {
  console.log(images);

  return (
    <div>
      <Nav />
      <Header />
      <Images images={images} />
    </div>
  );
}

export default App;
