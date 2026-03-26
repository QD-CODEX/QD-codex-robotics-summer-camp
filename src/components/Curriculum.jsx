import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const modules = [
  {
    emoji: '🚀',
    badge: 'Day 1',
    title: 'Intro + Fun',
    subtitle: '3–4 hours',
    description: 'Get started with high-energy icebreakers, a tech world introduction, and the Dream App Activity.',
    skills: ['Icebreakers', 'Tech Intro', 'Dream App Activity', 'Team Formation & Quiz'],
    color: 'from-blue-600/30 to-indigo-600/30',
    border: 'border-blue-500/20',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    accentColor: 'bg-blue-500',
  },
  {
    emoji: '💻',
    badge: 'Day 2',
    title: 'Basics + Logic',
    subtitle: '3–4 hours',
    description: 'Master computer essentials through hands-on practice and sharpen your brain with logic puzzles.',
    skills: ['Computer Basics', 'Hands-on Practice', 'Logic & Puzzles'],
    color: 'from-purple-600/30 to-pink-600/30',
    border: 'border-purple-500/20',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    accentColor: 'bg-purple-500',
  },
  {
    emoji: '🐱',
    badge: 'Day 3',
    title: 'Scratch Coding',
    subtitle: '3–4 hours',
    description: 'Learn block-based coding to build your first game. Add custom features and bring your ideas to life.',
    skills: ['Scratch Intro', 'Concepts', 'Game Build', 'Add Features'],
    color: 'from-amber-600/30 to-orange-600/30',
    border: 'border-amber-500/20',
    badgeColor: 'bg-amber-500/20 text-amber-300',
    accentColor: 'bg-amber-500',
  },
  {
    emoji: '🎨',
    badge: 'Day 4',
    title: 'Canva Design',
    subtitle: '3–4 hours',
    description: 'Learn the principles of design and create professional posters. Present your work to the group.',
    skills: ['Design Basics', 'Poster Creation', 'Presentation'],
    color: 'from-pink-600/30 to-rose-600/30',
    border: 'border-pink-500/20',
    badgeColor: 'bg-pink-500/20 text-pink-300',
    accentColor: 'bg-pink-500',
  },
  {
    emoji: '🤖',
    badge: 'Day 5',
    title: 'AI Tools',
    subtitle: '3–4 hours',
    description: 'Discover the power of Artificial Intelligence. Explore tools and create stories with generated images.',
    skills: ['What is AI', 'Explore Tools', 'Story + Image Activity'],
    color: 'from-indigo-600/30 to-blue-600/30',
    border: 'border-indigo-500/20',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
    accentColor: 'bg-indigo-500',
  },
  {
    emoji: '🎯',
    badge: 'Day 6',
    title: 'Mini Project',
    subtitle: '3–4 hours',
    description: 'Select a theme and work on your own mini project with guidance from expert mentors.',
    skills: ['Project Selection', 'Work & Progress', 'Mentor Guidance'],
    color: 'from-emerald-600/30 to-teal-600/30',
    border: 'border-emerald-500/20',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    accentColor: 'bg-emerald-500',
  },
  {
    emoji: '🦾',
    badge: 'Day 7',
    title: 'Robotics Demo',
    subtitle: '3–4 hours',
    description: 'Watch live robotics demos and get hands-on experience with sensors and robot mechanics.',
    skills: ['Robotics Intro', 'Live Demo', 'Hands-on Lab', 'Q&A'],
    color: 'from-emerald-600/30 to-green-600/30',
    border: 'border-emerald-500/20',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    accentColor: 'bg-emerald-500',
  },
  {
    emoji: '🤝',
    badge: 'Day 8',
    title: 'Group Project',
    subtitle: '3–4 hours',
    description: 'Collaborate with teammates to plan and develop a larger-scale tech project.',
    skills: ['Project Planning', 'Development Phase'],
    color: 'from-yellow-600/30 to-amber-600/30',
    border: 'border-yellow-500/20',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    accentColor: 'bg-yellow-500',
  },
  {
    emoji: '🎤',
    badge: 'Day 9',
    title: 'Presentation Prep',
    subtitle: '3–4 hours',
    description: 'Finalize your slides and practice your pitch for the big showcase.',
    skills: ['Speaking Skills', 'Slide Design', 'Practice Sessions'],
    color: 'from-rose-600/30 to-red-600/30',
    border: 'border-rose-500/20',
    badgeColor: 'bg-rose-500/20 text-rose-300',
    accentColor: 'bg-rose-500',
  },
  {
    emoji: '🏆',
    badge: 'Day 10',
    title: 'Showcase & Fun',
    subtitle: 'Grand Finale',
    description: 'The big day! Students receive certificates, achievements are recorded for social media, and we celebrate with fun entertainment activities.',
    skills: ['Certificate Ceremony', 'Social Media Recording', 'Entertainment Activities'],
    color: 'from-yellow-600/30 to-amber-600/30',
    border: 'border-yellow-500/20',
    badgeColor: 'bg-yellow-500/20 text-yellow-300',
    accentColor: 'bg-yellow-500',
  },
];

export default function Curriculum() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="curriculum" ref={ref} className="py-16 sm:py-20 bg-[#080613] relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">📚 Curriculum</span>
          <h2 className="section-title mb-3">
            10 Action-Packed Days,
            <br />
            <span className="gradient-text">Unlimited Innovation</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-base max-w-md mx-auto">
            A structured journey taking you from curious beginner to confident tech creator.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card ${mod.border} overflow-hidden group hover:shadow-card-hover transition-all duration-300`}
            >
              <div className={`p-5 sm:p-6 bg-gradient-to-br ${mod.color}`}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-4xl sm:text-5xl leading-none mt-1 group-hover:scale-110 transition-transform duration-300">
                    {mod.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 ${mod.badgeColor}`}>
                      {mod.badge}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-0.5">{mod.title}</h3>
                    <p className="text-white/50 text-sm mb-3">{mod.subtitle}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{mod.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {mod.skills.map((skill) => (
                        <span key={skill} className="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                          <span className={`w-1.5 h-1.5 rounded-full ${mod.accentColor}`} />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
