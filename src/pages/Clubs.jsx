import React from "react";
function Clubs() {
    const activeClubs = [
        {
            id: 1,
            title: "Gymming and Health Club",
            desc: "A sacred space for nurturing both body and soul. This club inspires youth to stay fit, disciplined, and energetic—not just for physical strength, but to serve the Lord and society with vitality. Through regular workouts, yoga, and health awareness, we cultivate balance, purity, and endurance, recognizing the body as the temple of the soul and a divine instrument for spiritual growth."
        },
        {
            id: 2,
            title: "Music Club",
            desc: "A divine journey into the world of sound and devotion. This club nurtures the art of music as a form of bhakti, where melodies uplift the soul and connect us to the Supreme. By exploring classical, devotional, and cultural music, members experience harmony, discipline, and inner peace—transforming music into a path of spiritual expression and joy."
        },
        
    ];
    const upcomingClubs = [
        {
            id: 3,
            title: "Tech Club",
            desc: "Harnessing the power of technology for a greater purpose. This club inspires innovation that not only advances the future but also aligns with values of service, harmony, and spiritual progress. Members explore how modern tools can be used responsibly to uplift society and deepen human connection"
        },
        {
            id: 4,
            title: "Adhyatma Club",
            desc: "A sacred space for seekers of truth. Through study, reflection, and practice, this club guides members on a journey of spiritual growth, self-realization, and inner peace—helping connect the wisdom of our scriptures to everyday life."
        },
        {
            id: 5,
            title: "Sports Club",
            desc: "More than just games, this club celebrates discipline, teamwork, and resilience. Through sports and fitness, members cultivate strength of body and mind, while learning the values of humility, focus, and devotion that bring true balance in life."
        }
    ];
    return (
       <div className="container my-5">
      <h2 className="mb-4 text-center">Active Clubs</h2>
      <div className="row">
        {activeClubs.map((club) => (
          <div key={club.id} className="col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{club.title}</h5>
                <p className="card-text text-muted">{club.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5 mb-4 text-center">Upcoming Clubs</h2>
      <div className="row">
        {upcomingClubs.map((club) => (
          <div key={club.id} className="col-md-6 mb-4">
            <div className="card shadow h-100 border-secondary">
              <div className="card-body">
                <h5 className="card-title fw-bold ">{club.title}</h5>
                <p className="card-text text-muted">{club.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;