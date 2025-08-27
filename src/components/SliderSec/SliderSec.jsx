import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderSec.css";
import { exportedOTSlideData } from "../../data/OurTestimonialsSliderData";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function SliderSec () {
  const prefersReduced = useReducedMotion();

  return (
    <section className="backgroundSLider">
      <div className="slider-container gpu">
        <Swiper
          modules={[Navigation, A11y]}
          loop={true}
          speed={500}
          slidesPerView={3}
          slidesPerGroup={1}
          initialSlide={0}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1, initialSlide: 2 },
            992: { slidesPerView: 3, slidesPerGroup: 1, initialSlide: 0 },
            1440: { slidesPerView: 3, slidesPerGroup: 1 },
          }}
        >
          {exportedOTSlideData.map((item, i) => (
            <SwiperSlide key={item?.id ?? i}>
              <motion.div
                className="card gpu"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease }}
                whileHover={prefersReduced ? {} : { y: -4, scale: 1.02 }}
                whileTap={prefersReduced ? {} : { scale: 0.97 }}
              >
                <img
                  src="assets/images/Icons/slider-icons/slider-icon.svg"
                  alt="Quote"
                />
                <p className="LexendRegular">{item.paragraph}</p>
                <h3 className="LexendMedium">{item.name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="custom-prev" aria-label="Previous testimonials">
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            initial={false}
            whileHover={prefersReduced ? {} : { scale: 1.08, opacity: 0.9 }}
            whileTap={prefersReduced ? {} : { scale: 0.92 }}
            transition={{ duration: 0.15 }}
          >
            <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </button>
        <button className="custom-next" aria-label="Next testimonials">
          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            initial={false}
            whileHover={prefersReduced ? {} : { scale: 1.08, opacity: 0.9 }}
            whileTap={prefersReduced ? {} : { scale: 0.92 }}
            transition={{ duration: 0.15 }}
          >
            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </button>
      </div>
    </section>
  );
};
