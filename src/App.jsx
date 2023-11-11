import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const stockHalloween = [
    {
      name: "Mucha",
      image: "https://picsum.photos/200",
      prix: 140,
      stock: 1,
      description:
        "Une poupée hantée de Mucha, prête à vous effrayer à chaque coin de rue. Idéale pour Halloween.",
      category: "Cat",
    },
    {
      name: "Plum",
      image: "https://picsum.photos/200",
      prix: 500,
      stock: 1,
      description:
        "Plongez dans les ténèbres avec Plum, la poupée ensorcelée. Elle est prête à vous faire vivre une nuit effrayante.",
      category: "horreur",
    },
    {
      name: "Moustache",
      image: "https://picsum.photos/200",
      prix: 60,
      stock: 4,
      description:
        "Moustache, le chat noir de sorcière. Un compagnon idéal pour votre soirée d'Halloween.",
      category: "Cat",
    },
    {
      name: "Gnome Lubrique",
      image: "https://picsum.photos/200",
      prix: 69,
      stock: 6,
      description:
        "Un gnome lubrique avec une lanterne qui éclaire la nuit d'Halloween. Attention, il a un sens de l'humour douteux !",
      category: "gnomes",
    },
    {
      name: "Gnome Velu",
      image: "https://picsum.photos/200",
      prix: 46,
      stock: 2,
      description:
        "Un gnome velu prêt à se fondre dans l'obscurité de la nuit d'Halloween. Ne le perdez pas de vue !",
      category: "gnomes",
    },
    {
      name: "Gnome Précieux",
      image: "https://picsum.photos/200",
      prix: 99,
      stock: 9,
      description:
        "Le gnome le plus précieux de tous, gardien des trésors cachés d'Halloween. Un gardien farfelu mais adorable.",
      category: "gnomes",
    },
    {
      name: "Gnome Glabre",
      image: "https://picsum.photos/200",
      prix: 30,
      stock: 2,
      description:
        "Un gnome glabre qui aime les bonbons d'Halloween. Il est prêt à les partager avec vous !",
      category: "gnomes",
    },
    {
      name: "Gnome Hirsute",
      image: "https://picsum.photos/200",
      prix: 209,
      stock: 12,
      description:
        "Le gnome le plus hirsute d'Halloween, un ami fidèle pour toutes vos aventures effrayantes.",
      category: "gnomes",
    },
    {
      name: "Nain Posteur",
      image: "https://picsum.photos/200",
      prix: 398,
      stock: 1,
      description:
        "Un nain posteur qui vous montrera le chemin vers des friandises inoubliables d'Halloween.",
      category: "nains",
    },
    {
      name: "Nain Gomez",
      image: "https://picsum.photos/200",
      prix: 48,
      stock: 2,
      description:
        "Nain Gomez, un ami jovial qui vous fera rire pendant la saison d'Halloween.",
      category: "nains",
    },
    {
      name: "Nain DeuxTrois",
      image: "https://picsum.photos/200",
      prix: 82,
      stock: 23,
      description:
        "Nain DeuxTrois, le nain le plus énigmatique d'Halloween. Que vous réserve-t-il ?",
      category: "nains",
    },
    {
      name: "Nain Portequoi",
      image: "https://picsum.photos/200",
      prix: 976,
      stock: 2,
      description:
        "Nain Portequoi, un nain aux réponses mystérieuses pour toutes vos questions d'Halloween.",
      category: "nains",
    },
    {
      name: "Butternut",
      image: "https://picsum.photos/200",
      prix: 10,
      stock: 26,
      description:
        "La courge Butternut d'Halloween, prête à être transformée en délicieuses soupes et purées.",
      category: "courges",
    },
    {
      name: "Citrouille",
      image: "https://picsum.photos/200",
      prix: 20,
      stock: 45,
      description:
        "La citrouille emblématique d'Halloween. Parfaite pour sculpter des lanternes effrayantes.",
      category: "courges",
    },
    {
      name: "Spaghetti",
      image: "https://picsum.photos/200",
      prix: 17,
      stock: 200,
      description:
        "Les spaghettis hantés d'Halloween, un plat incontournable pour la saison d'Halloween.",
      category: "nourriture",
    },
    {
      name: "Potiron",
      image: "https://picsum.photos/200",
      prix: 12,
      stock: 2,
      description:
        "Le potiron d'Halloween, idéal pour préparer de délicieuses tartes aux citrouilles.",
      category: "courges",
    },
  ];

  return (
    <>
      <Header count={count} />
      <ProductList
        count={count}
        setCount={setCount}
        stockHalloween={stockHalloween}
      />
      <Footer />
    </>
  );
}

export default App;
