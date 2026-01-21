import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Client",
    review:
      "Outstanding quality and finishing. Decor Studio delivered exactly what we envisioned for our showroom.",
  },
  {
    name: "Neha Verma",
    role: "Client",
    review:
      "Very professional team. From wallpaper to printing, everything was handled perfectly.",
  },
  {
    name: "Amit Jain",
    role: "Business Owner",
    review:
      "CNC and laser cutting work was extremely precise. Highly recommended for premium decor work.",
  },
  {
    name: "Pooja Mehta",
    role: "Client",
    review:
      "Loved the creativity and attention to detail. The final output exceeded expectations.",
  },
  {
    name: "Suresh Kumar",
    role: "Retail Owner",
    review:
      "Fast delivery, premium materials, and great support throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 md:px-16 lg:px-24">

        {/* Heading */}
        <div className="max-w-2xl mb-14 justify-center text-center mx-auto">
          <span className="inline-block mb-4 border border-yellow-400/40 text-yellow-400 px-4 py-1 rounded-full text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-gray-400">
            Trusted by businesses and individuals for premium decor and printing solutions.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="pt-14 flex justify-center">
                <div
                  className="relative w-80 bg-black/60 border border-white/10
                  rounded-2xl px-6 pb-8 pt-14
                  hover:border-yellow-400/40
                  hover:shadow-[0_0_60px_rgba(250,204,21,0.12)]
                  transition"
                >

                  {/* Avatar */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2
                    w-20 h-20 rounded-full bg-yellow-400 text-black
                    flex items-center justify-center text-3xl font-bold
                    shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                  >
                    {item.name.charAt(0)}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mt-4">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {item.role}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      “{item.review}”
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center pt-5 text-yellow-400">
                      {"★★★★★".split("").map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <a
            href="https://www.google.com/search?q=decor+studio&oq=decor+s&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMgYIAhBFGDsyBggDEEUYOzIGCAQQRRg5MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDIxMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8&lqi=CgxkZWNvciBzdHVkaW9IjfWpoZuzgIAIWhYQABABGAAYASIMZGVjb3Igc3R1ZGlvegRLb3RhkgERaW50ZXJpb3JfZGVzaWduZXI#lkt=LocalPoiReviews&rlimm=12383161537561750484&mpd=~2181649742196936328/customers/reviews"
            className="px-6 py-3 border border-yellow-400 text-yellow-400
            rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition"
          >
            View All Reviews
          </a>

          <a
            href="https://g.page/r/CdTrpULP09mrEAE/review"
            className="px-6 py-3 bg-yellow-400 text-black
            rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Write a Review
          </a>
        </div>

      </motion.div>
    </section>
  );
}
