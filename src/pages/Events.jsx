import React from "react";
import "./Events.css";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Fit Day ",
      desc: "A day dedicated to fitness activities and workshops. Date: 31st August 2025. Location: UM Bengaluru",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "YuvaSandesha 2025 - April 19th, Saturday",
      img: "/images/Yuvaghosti.jpg",
      desc: "Paramapoojya Sri Sri 1008 Sri SatyatmaTeertha Sripadangalavaru blessed all the youths with his divine words. Many questions raised by youths were answered in the Anugraha Sandesha of Sripadangalavaru",
    },
    {
      id: 4,
      title: "Yuvollasa 2024",
      img: "/images/img3.jpg",
      desc: "Yuvollasa - a vibrant youth festival that celebrated energy, creativity, and innovation. It provided a platform for young minds to showcase their talents in various fields.",
    },
    {
      id: 5,
      title: "Walkathon",
      img: "/images/Walkathon.jpg",
      desc: "Themed namma nade samskrutiya kade, this was a depiction of the unity of madhwas in Bengaluru. With the iconic Vidhana soudha in the background, around 3,500 participants set their foot one step closer to our samskruti",
    },
    {
      id: 6,
      title: "Recognition Workshop",
      img: "/images/Recognization.jpg",
      desc: "Every year, Yuvatma identifies and recognises top performers in 10th and 12th examinations and other competitive exams like CA, ACCA, JEE, CET etc.",
    },
    {
      id: 7,
      title: "Tulsi Sanje",
      img: "/images/img6.jpg",
      desc: "Team Yuvatma visited Sri Satyapramoda tulasi vana near Nelamangala, and participated in Kartika deepotsava, did bhajane of Sri Krishna and enjoyed a sumptuous feast post the event",
    },
    {
      id: 8,
      title: "Vibhooti Purusharu - Drama on Satyadhyaan Teertharu",
      img: "/images/img1.jpg",
      desc: "A drama was enacted by Yuvatma during the 29th Chaturmasya of Sri SatyatmaTeertha Sripadangalavaru at Mumbai. The play depicted the divine legacy of Abhinava AnandaTeertharu - Sri Satyadhyana Teertharu.",
    },
    {
      id: 9,
      title: "Rama Nireekshana Drama",
      img: "/images/img4.jpg",
      desc: "To commemorate the prana pratishta of Ayodhya Sri Rama, Yuvatma performed a drama depicting how various Rama bhaktas — Shabari, Sugreeva, Hanuman — served the Lord, and how they awaited his pratishthapane.",
    },
    {
      id: 10,
      title: "Vastra Daana",
      img: "/images/img7.jpg",
      desc: "On the occasion of Deepavali, Yuvatma donated clothes to almost 200 vidyarthis of Jayateertha Vidyapeetha. This was a special moment and indeed a unique way of celebrating the festival of lights.",
    },
    {
      id: 11,
      title: "Go Seva",
      img: "/images/img8.jpg",
      desc: "Team Yuvatma visited Krisham Goshala, Kanakapura and did various forms of go seva — cleaning of Goshala, feeding cattle etc.",
    },
  ];

  return (
    <div className="container my-5">
      {}
      <h2 className="mb-4 text-center fw-bold">Past Events</h2>
      <div className="row g-4">
        {pastEvents.map((event) => (
          <div key={event.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow h-100 event-card">
              <img
                src={event.img}
                className="card-img-top event-img"
                alt={event.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-muted">{event.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {}
      <h2 className="mt-5 mb-4 text-center fw-bold">Upcoming Events</h2>
      <div className="row g-4">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card shadow h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-muted">{event.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
