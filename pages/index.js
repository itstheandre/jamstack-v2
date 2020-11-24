import axios from "axios";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  return {
    props: { characters: data.results },
    revalidate: 60,
  };
}

// export async function getServerSideProps() {
//   const { data } = await axios.get("https://rickandmortyapi.com/api/character");
//   return {
//     props: { characters: data.results },
//   };
// }

function Home(props) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);
  console.log("props:", props);
  return (
    <h1>
      {characters.map((char) => (
        <img src={char.image} />
      ))}
    </h1>
  );
}

export default Home;
