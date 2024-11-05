import { Product } from "./components/Product";
import "./Home.css";
import BannerImg from "../assets/banner.webp";
import HeadphoneImg from "../assets/headphone.webp";
import PhoneImg from "../assets/phone.webp";
import MouseImg from "../assets/mouse.jpg";
import LampImg from "../assets/lamp.jpg";
import ShoesImg from "../assets/shoes.jpg";
import CoffeeMakerImg from "../assets/coffee maker.jpg";
import SunglassImg from "../assets/sunglasses.jpg";





export const Home = () => {
  const prod2 = [
    {
      "id": 1,
      "title": "Phone",
      "price": "25,999",
      "description": "A portable communication device with internet access, camera, and various applications.",
      "ratings": 4.5,
      "img":PhoneImg
    },
    {
      "id": 2,
      "title": "Headphones",
      "price": "3,499",
      "description": "Audio devices that provide high-quality sound, often featuring noise-cancellation and wireless options.",
      "ratings": 4.7,
      "img" : HeadphoneImg
    },
    {
      "id": 3,
      "title": "Mouse",
      "price": "1,299",
      "description": "A wireless computer mouse offering precision and convenience without tangled cords.",
      "ratings": 4.3,
      "img" : MouseImg
    }
  ]

  const prod1 = [
    {
      "id": 4,
      "title": "Desk Lamp",
      "price": "1,899",
      "description": "A portable lighting fixture designed to illuminate workspaces, perfect for reading and studying.",
      "ratings": 4.6,
      "img" : LampImg
    },
    {
      "id": 5,
      "title": "Coffee Maker",
      "price": "4,999",
      "description": "An appliance that brews coffee by heating water and passing it through ground coffee, ideal for coffee lovers.",
      "ratings": 4.4,
      "img" : CoffeeMakerImg
    }
  ]

  const prod3 = [
    {
      "id": 6,
      "title": "Sneakers",
      "price": "2,999",
      "description": "Comfortable footwear designed for sports and casual wear, featuring cushioned soles for support.",
      "ratings": 4.5,
      "img" : ShoesImg
    },
    {
      "id": 7,
      "title": "Sunglasses",
      "price": "1,499",
      "description": "Stylish eyewear that protects eyes from UV rays, often featuring polarized lenses for glare reduction.",
      "ratings": 4.8,
      "img" : SunglassImg
    }
  ]

  return (
    <section>
      <div className="home">
        <div className="home_container">
          <img className="home_img" src={BannerImg} alt="banner" />
          <div className="home_row">
            {prod1.map((prod, index) => (
              <Product key={index} prod={prod} title={prod.title} info={prod.description} price={prod.price} rating={prod.ratings} img={prod.img} />
            ))}
          </div>
          <div className="home_row">
            {prod2.map((prod, index) => (
              <Product key={index} prod={prod} title={prod.title} info={prod.description} price={prod.price} rating={prod.ratings} img={prod.img} />
            ))}
          </div>
          <div className="home_row">
            {prod3.map((prod, index) => (
              <Product key={index} prod={prod} title={prod.title} info={prod.description} price={prod.price} rating={prod.ratings} img={prod.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
