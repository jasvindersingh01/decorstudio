import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    icon: Award,
    desc: "We use only the finest materials and state-of-the-art machinery for flawless results.",
  },
  {
    title: "On-Time Delivery",
    icon: Clock,
    desc: "Your projects delivered on schedule, every time. We value your time.",
  },
  {
    title: "Expert Team",
    icon: Users,
    desc: "Skilled professionals with years of experience in decor and printing.",
  },
  {
    title: "Creative Solutions",
    icon: Sparkles,
    desc: "Custom designs tailored to your vision. We bring your ideas to life.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Design Options" },
];

const WhyDecorStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20">
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-400 text-sm font-semibold tracking-widest">
              WHY DECOR STUDIO
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold leading-tight">
              Crafting <span className="text-yellow-400">Excellence</span> Since Day One
            </h2>

            <p className="mt-6 text-gray-400 max-w-xl">
              At Decor Studio, we combine creativity with precision to deliver
              exceptional decor and printing solutions. Our commitment to
              quality and customer satisfaction sets us apart.
            </p>

            {/* FEATURES */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" , delay: 0.2}}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-black/60 border border-white/10 rounded-2xl p-10 text-center
                transition hover:border-yellow-400/40
                hover:shadow-[0_0_60px_rgba(250,204,21,0.12)]"
              >
                <h3 className="text-5xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyDecorStudio;
