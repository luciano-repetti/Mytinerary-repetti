import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

const slider = {
  slider1: [
    {
      name: "Bariloche",
      url: "https://barilocheturismo.gob.ar/images/news/upload/144_54480854-0594-4512-bbf1-a2a5597709d8.jpg",
      id: 1,
    },
    {
      name: "Bolson",
      url: "https://descubrirturismo.com/wp-content/uploads/2018/04/El-Bols%C3%B3n-portada.jpg",
      id: 2,
    },
    {
      name: "Mendoza",
      url: "https://previews.123rf.com/images/meinzahn/meinzahn1505/meinzahn150501141/40540739-vista-panor%C3%A1mica-del-vi%C3%B1edo-en-la-primavera-de-tiempo.jpg",
      id: 3,
    },
    {
      name: "Tierra del Fuego",
      url: "https://www.lavanguardia.com/uploads/2018/03/28/5fa43c85c4eaa.jpeg",
      id: 4,
    },
  ],
  slider2: [
    {
      name: "washington",
      url: "https://www.viajarwashington.com/img/consejos-viaje.jpg",
      id: 1,
    },
    {
      name: "New York",
      url: "https://www.absolutviajes.com/wp-content/uploads/2015/08/nueva-york-830x524.jpg",
      id: 2,
    },
    {
      name: "The Vegas",
      url: "https://a.cdn-hotels.com/gdcs/production26/d1811/69ca3700-9beb-11e8-a942-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      id: 3,
    },
    {
      name: "Seattle",
      url: "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2019/02/Que-ver-en-Seattle.jpg",
      id: 4,
    },
  ],
  slider3: [
    {
      name: "Shanghai",
      url: "https://viajes.nationalgeographic.com.es/medio/2019/03/27/shnaghai_527bc86f_1280x720.jpg",
      id: 1,
    },
    {
      name: "Tokyo",
      url: "https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg",
      id: 2,
    },
    {
      name: "San Petersburgo",
      url: "https://www.civitatis.com/blog/wp-content/uploads/2021/06/san-petersburgo-iluminada-vista-aerea.jpg",
      id: 3,
    },
    {
      name: "London",
      url: "https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg",
      id: 4,
    },
  ],
};

function Index() {
  return (
    <>
      <Hero />
      <Slider images={slider} />
    </>
  );
}

export default Index;
