import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SportsEvents = () => {
  const sportsList = [
    { id: 1, title: "ARCHERY", icon: "/images/sports-logos/archer-logo.png", link: "/archery" },
    { id: 2, title: "ATHLETICS", icon: "/images/sports-logos/athlete-logo.png", link: "/athletics" },
    { id: 3, title: "BADMINTON", icon: "/images/sports-logos/badminton-logo.png", link: "/badminton" },
    { id: 4, title: "BASEBALL", icon: "/images/sports-logos/baseball-logo.png", link: "/baseball" },
    { id: 5, title: "BASKETBALL", icon: "/images/sports-logos/basketball-logo.png", link: "/basketball" },
    { id: 6, title: "BODYBUILDING", icon: "/images/sports-logos/bodybuild-logo.png", link: "/bodybuilding" },
    { id: 7, title: "BOXING", icon: "/images/sports-logos/boxing-logo.png", link: "/boxing" },
    { id: 8, title: "CYCLING", icon: "/images/sports-logos/cycling-logo.png", link: "/cycling" },
    { id: 9, title: "FOOTBALL", icon: "/images/sports-logos/football-logo.png", link: "/football" },
    { id: 10, title: "GOLF", icon: "/images/sports-logos/golf-logo.png", link: "/golf" },
    { id: 11, title: "GYMNASTICS", icon: "/images/sports-logos/gymnastic-logo.png", link: "/gymnastics" },
    { id: 12, title: "HANDBALL", icon: "/images/sports-logos/handball-logo.png", link: "/handball" },
    { id: 13, title: "HOCKEY", icon: "/images/sports-logos/hockey-logo.png", link: "/hockey" },
    { id: 14, title: "JUDO", icon: "/images/sports-logos/judo-logo.png", link: "/judo" },
    { id: 15, title: "KARATE", icon: "/images/sports-logos/karate-logo.png", link: "/karate" },
    { id: 16, title: "KABADDI", icon: "/images/sports-logos/judo-logo.png", link: "/kabaddi" },
    { id: 17, title: "ROWING", icon: "/images/sports-logos/rowing1.png", link: "/rowing" },
    { id: 18, title: "RUGBY", icon: "/images/sports-logos/rugby.png", link: "/rugby" },
    { id: 19, title: "SAILING", icon: "/images/sports-logos/sailing.png", link: "/sailing" },
    { id: 20, title: "SHOOTING", icon: "/images/sports-logos/shooting.png", link: "/shooting" },
    { id: 21, title: "SOFTBALL", icon: "/images/sports-logos/softball.png", link: "/softball" },
    { id: 22, title: "SQUASH", icon: "/images/sports-logos/squash.png", link: "/squash" },
    { id: 23, title: "SWIMMING", icon: "/images/sports-logos/swimming.png", link: "/swimming" },
    { id: 24, title: "TABLE TENNIS", icon: "/images/sports-logos/tabletennis.png", link: "/table-tennis" },
    { id: 25, title: "TAEKWONDO", icon: "/images/sports-logos/taekwondo.png", link: "/taekwondo" },
    { id: 26, title: "TENNIS", icon: "/images/sports-logos/tennis.png", link: "/tennis" },
    { id: 27, title: "TUG OF WAR", icon: "/images/sports-logos/tugofwar.png", link: "/tug-of-war" },
    { id: 28, title: "VOLLEYBALL", icon: "/images/sports-logos/volleyball.png", link: "/volleyball" },
    { id: 29, title: "WEIGHTLIFTING", icon: "/images/sports-logos/weightlifting.png", link: "/weightlifting" },
    { id: 30, title: "WRESTLING", icon: "/images/sports-logos/wrestling.png", link: "/wrestling" },
    { id: 31, title: "WUSHU", icon: "/images/sports-logos/wushu.png", link: "/wushu" }
  ];

  const boxRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box) => {
      gsap.to(box, {
        backgroundPosition: "200% 0%",
        duration: 3,
        repeat: -1,
        ease: "linear",
      });
    });
  }, []);

  return (
    <main className="sportEvents mb-10 px-10 
    max-sm:px-0
    ">
      <div className="sport-heading">
        <h3 className="text-4xl font-semibold flex justify-center my-10">
          Sports and Events
        </h3>
      </div>

      <div className="sports px-10 w-full">
        <div className="single-box-sport grid grid-cols-3 justify-center items-center text-center gap-5 max-md:grid-cols-1">
          {sportsList.map((sport, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className="single-sport w-full rounded-2xl flex flex-col gap-5 justify-center items-center h-60 border-2 p-[2px] border-transparent bg-gradient-to-r from-yellow-400 via-sky-500 to-red-500 bg-[length:200%_100%] transition-all  "
            > 
              <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-2xl p-5">
                <div className="sport-icon w-10">
                  <img className="w-full h-full" src={sport.icon} alt={sport.title} />
                </div>
                <div className="sport-name">
                  <a
                    className="text-2xl font-medium hover:border-b-2 hover:transition-all hover:border-b-black"
                    href={sport.link}
                  >
                    {sport.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SportsEvents;
