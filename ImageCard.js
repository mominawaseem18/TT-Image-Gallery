import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Image.module.css";

const ImageCard = () => {
  const images = [
    {
      name: "Mountain Lake",
      imageUrl:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Simon Berger",
      date: "January 10, 2026",
      explore: "Explore",
    },

    {
      name: "Beautiful Nature",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UfhEMhBnPsd6f9sPqrAG1uyHP_V8W_5bWc5Sua5A1A&s=10",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "James Wilson",
      date: "January 15, 2026",
      explore: "Explore",
    },

    {
      name: "Forest",
      imageUrl:
        "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg",
      desc: "A beautiful green forest landscape.",
      author: "Olivia Martin",
      date: "January 22, 2026",
      explore: "Explore",
    },

    {
      name: "Ocean",
      imageUrl:
        "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg",
      desc: "A peaceful view of the beautiful ocean.",
      author: "Daniel Smith",
      date: "February 02, 2026",
    },

    {
      name: "Waterfall",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiViIWofkcD6M3AseXAUgrec_IbvXgkx4GJuJlJ2FHOQ&s",
      desc: "A beautiful waterfall surrounded by nature.",
      author: "Emma Johnson",
      date: "February 12, 2026",
    },

    {
      name: "Desert",
      imageUrl:
        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
      desc: "A stunning desert landscape.",
      author: "Michael Brown",
      date: "February 20, 2026",
    },

    {
      name: "Snow Mountains",
      imageUrl:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      desc: "Beautiful snowy mountains and peaceful scenery.",
      author: "Sophia Davis",
      date: "March 05, 2026",
    },

    {
      name: "Green Hills",
      imageUrl:
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      desc: "Green hills with a beautiful natural view.",
      author: "William Taylor",
      date: "March 15, 2026",
    },
  ];

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <div className={styles.card} key={index}>
          <img src={image.imageUrl} alt={image.name} className={styles.image} />

          <div className={styles.content}>
            <h1>{image.name}</h1>

            <p className={styles.description}>{image.desc}</p>

            <div className={styles.info}>
              <p>
                <FontAwesomeIcon icon={faUser} />
                <span>{image.author}</span>
              </p>

              <p>
                <FontAwesomeIcon icon={faCalendar} />
                <span>{image.date}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
