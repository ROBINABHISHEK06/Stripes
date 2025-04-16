import React, { useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonials = [
  { name: "Aditya Prakash", review: "Wonderful academy and very nice experience, surely recommended.", rating: 5 },
  { name: "Kailash Yadav", review: "Excellent Educational Institute with Great Staff. Had a great learning experience while attending the class.", rating: 5 },
  { name: "Batuhan Batur",  review: "I recently had the privilege of attending an amazing training session hosted by Stripes Academy, and I wanted to share my experience with all of you. The title of the training was 'Role-based Bridge Team, focusing on the effective management of bridge teams in challenging maritime situations. I would like to thank Zenith Gemi İşletmeciliği A.Ş. for making my participation possible in this training. It played a significant role in enhancing essential skills the maritime industry.Throughout the training, we learned how bridge teams can communicate more effectively, handle complete situations, and make critical decisions more efficiently. We also gained valuable insige  defining roles and responsibilities for smoother operations.This training isn't just beneficial for the maritime sector; it can be a valuable asset for anyone looking to enhance their leadership and teamwork skills. Here are some key takeaways <br/>1.**Effective Communication:** Clear and effective communication is vital within bridge teams, and this training helped us improve our communication skills.<br>2. **Decision-Making Processes:** Making the right decisions during challenging situations is crucial.The training helped optimize our decision-making processes.<br>3. **Team Collaboration:** Understanding team members' roles and responsibilities is key to successful collaboration. We gained a deeper appreciation for the importance of teamwork.<br>4. **Problem-Solving Abilities:** We recognized the need to develop problem-solving skills to manage complex situations effectively.Learning more about bridge teams and enhancing my skills in this area was a fantastic experience. I'd like to express my gratitude to Stripes Academy for organizing this training. I encourage you all to explore similar opportunities to broaden your horizons in your careers.", rating: 3 },
  { name: "Varun Vasisht",  review: "I've had the chance to attend the first batch organised by this institute and I can say that the institute is way better than the regular institutes. There's no doubt that this institute will touch new heights in a short span of time. Food was amazing,Lectures are informative, Simulator is unbelievable, Location is exceptional", rating: 4 },
  { name: "Sajin Mathew", review: "Attended Stripes Academy for BTRM course through our company. It was a great learning experience and got to learn industry-leading and future-ready BTRM techniques.Highly recommended Institute with high-quality training material, simulator and passionate teaching faculty.", rating: 5 },
  { name: "Michael Wilson",review: "Absolutely loved the service! Will return.", rating: 5 },
  { name: "Malin",  review: "Superb experience,  highly I had a wonderful experience with thecourse.", rating: 4 },
  { name: "Liju Luckose", review: "The campus atmosphere is very positive and relaxed...the teachers are very knowledgeable and supportive..the classroom arrangements are also highly commendable. The simulator room is also very nice... really an eco-friendly campus... and the supporting staff is very cooperative.", rating: 5 },
];

const Testimonials = () => {
  const columnRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    let scrollAmounts = [0, 0, 0]; // Scroll positions for each column
    let scrollSpeeds = [-0.5, 0.5, -0.5]; // Speed: Negative for upward, positive for downward

    const scrollColumns = () => {
      columnRefs.forEach((colRef, index) => {
        if (!colRef.current) return;

        scrollAmounts[index] += scrollSpeeds[index];
        colRef.current.scrollTop = scrollAmounts[index];

        if (scrollAmounts[index] >= colRef.current.scrollHeight / 2) {
          scrollAmounts[index] = 0; // Reset when reaching the bottom
        } else if (scrollAmounts[index] <= 0) {
          scrollAmounts[index] = colRef.current.scrollHeight / 2; // Reset when reaching the top
        }
      });

      requestAnimationFrame(scrollColumns);
    };

    scrollColumns();
  }, []);

  // Split testimonials into 3 columns
  const columns = [[], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 3].push(testimonial);
  });

  return (
    <div className="testimonial-container">
      {columns.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`testimonial-column scrolling-column ${colIndex === 0 ? 'scrolling-active' : ''}`}
          ref={columnRefs[colIndex]}
        >
          {[...column, ...column].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.review}</p>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;