import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Trophy, Sparkles, Zap, GraduationCap, Code2, Star, Rocket, Music2, VolumeX, Volume2, Pause, Play, SkipForward, SkipBack, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import LessonGrid from "@/components/LessonGrid";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const stats = [
  { icon: BookOpen, label: "\u1798\u17C1\u179A\u17C0\u1793\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A", value: "20+", color: "from-primary to-primary-glow" },
  { icon: Users, label: "\u1798\u17B7\u1793\u1785\u17B6\u17C6\u1794\u17B6\u1785\u17CB\u1785\u17BB\u17C7\u1788\u17D2\u1798\u17C4\u17C7", value: "\u17A5\u178F\u1782\u17B7\u178F\u1790\u17D2\u179B\u17C3", color: "from-neon-cyan to-primary" },
  { icon: Trophy, label: "\u1780\u1798\u17D2\u179A\u17B7\u178F\u179F\u17B7\u1780\u17D2\u179F\u17B6", value: "3 \u1780\u1798\u17D2\u179A\u17B7\u178F", color: "from-neon-pink to-primary-glow" },
];

const features = [
  {
    icon: Sparkles,
    title: "\u1798\u17C1\u179A\u17C0\u1793\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A",
    desc: "\u1784\u17B6\u1799\u1799\u179B\u17CB\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17A2\u17D2\u1793\u1780\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u1793\u17B6 \u178A\u17C4\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A\u1785\u17C1\u17C7\u1797\u17B6\u179F\u17B6\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F",
    accent: "neon-cyan",
  },
  {
    icon: Zap,
    title: "\u179A\u17C0\u1793\u178A\u17C4\u1799\u17A2\u1793\u17BB\u179C\u178F\u17D2\u178F",
    desc: "\u179F\u17B6\u1780\u179B\u17D2\u1794\u1784\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u1795\u17D2\u1791\u17B6\u179B\u17CB\u1780\u17D2\u1793\u17BB\u1784 Code Playground \u179A\u1794\u179F\u17CB\u1799\u17BE\u1784",
    accent: "neon-pink",
  },
  {
    icon: GraduationCap,
    title: "\u1782\u17D2\u179A\u1794\u17CB\u1780\u1798\u17D2\u179A\u17B7\u178F",
    desc: "\u1796\u17B8\u1790\u17D2\u1793\u17B6\u1780\u17CB\u178A\u17BE\u1798\u178A\u179B\u17CB\u1780\u1798\u17D2\u179A\u17B7\u178F\u1781\u17D2\u1796\u179F\u17CB \u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17A2\u17D2\u1793\u1780\u179A\u17C0\u1793\u1782\u17D2\u179A\u1794\u17CB\u1780\u1798\u17D2\u179A\u17B7\u178F",
    accent: "neon-orange",
  },
];

const typingWords = ["HTML & CSS", "JavaScript", "Python", "React", "Node.js", "TypeScript"];

// Playlist data
const playlist = [
  { id: 1, title: "Coding Focus Mix", artist: "Genz Dev", duration: "3:45", cover: "/images/cover-1.jpg" },
];

// Enhanced Sound Button Component
const SoundButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("public/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Add event listeners
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    setAudioReady(true);
    
    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleLoadedMetadata = () => {
    // Metadata loaded
  };

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      const newTime = percentage * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const nextSong = () => {
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentSong(playlist[nextIndex]);
    // Here you would change the audio source
  };

  const prevSong = () => {
    const currentIndex = playlist.findIndex(song => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentSong(playlist[prevIndex]);
    // Here you would change the audio source
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Mini Player */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="w-80 bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Music2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Music Player</span>
                </div>
                <button 
                  onClick={togglePlayer}
                  className="p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
              </div>
            </div>

            {/* Now Playing */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Music2 className="h-6 w-6 text-white" />
                  </div>
                  {isPlaying && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-3 h-3"
                    >
                      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
                      <span className="relative rounded-full bg-success w-3 h-3 block" />
                    </motion.div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm line-clamp-1">{currentSong.title}</p>
                  <p className="text-xs text-muted-foreground">{currentSong.artist}</p>
                </div>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <Heart 
                    className={`h-4 w-4 transition-colors ${
                      isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
                    }`} 
                  />
                </button>
              </div>

              {/* Progress Bar */}
              <div 
                className="h-1.5 bg-muted rounded-full mb-2 cursor-pointer"
                onClick={handleProgressClick}
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
                </motion.div>
              </div>

              {/* Time */}
              <div className="flex justify-between text-xs text-muted-foreground mb-4">
                <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}</span>
                <span>{currentSong.duration}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSong}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <SkipBack className="h-5 w-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleSound}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-glow blur-xl opacity-50" />
                  <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center shadow-xl">
                    {isPlaying ? (
                      <Pause className="h-5 w-5 text-white" />
                    ) : (
                      <Play className="h-5 w-5 text-white ml-0.5" />
                    )}
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSong}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <SkipForward className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Volume Control */}
              <div className="mt-4 flex items-center gap-2">
                <VolumeX className="h-3 w-3 text-muted-foreground" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-1 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary/50"
                />
                <Volume2 className="h-3 w-3 text-muted-foreground" />
              </div>
            </div>

            {/* Playlist */}
            <div className="border-t border-border/50 p-2">
              <p className="text-xs font-medium text-muted-foreground px-2 py-1">Playlist</p>
              {playlist.map((song) => (
                <motion.div
                  key={song.id}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  onClick={() => setCurrentSong(song)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                    currentSong.id === song.id ? 'bg-primary/10' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <Music2 className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium line-clamp-1">{song.title}</p>
                    <p className="text-xs text-muted-foreground">{song.artist}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{song.duration}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <div className="flex items-center gap-2">
        {/* Now Playing Indicator */}
        <AnimatePresence>
          {isPlaying && !showPlayer && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-background/95 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-2 shadow-xl flex items-center gap-3"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-success"
                />
                <span className="text-sm font-medium">Now Playing</span>
              </div>
              <div className="h-4 w-px bg-border/50" />
              <span className="text-sm text-muted-foreground">{currentSong.title}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sound Button */}
        <motion.button
          onClick={togglePlayer}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative"
        >
          {/* Gradient rings */}
          <motion.div
            animate={isPlaying ? { 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary-glow to-primary blur-xl opacity-50"
          />
          
          {/* Button */}
          <div className="relative h-14 w-14 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-xl hover:shadow-primary/20 transition-all">
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Music2 className="h-6 w-6 text-primary" />
              </motion.div>
            ) : (
              <Music2 className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
          </div>

          {/* Animated waves when playing */}
          {isPlaying && (
            <>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                />
              ))}
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Sound Button */}
        <SoundButton />

        {/* Rest of your existing code... */}
        <section ref={heroRef} className="relative overflow-hidden">
          <motion.div style={{ scale: bgScale }} className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/hero-bg.mp4"
            />
            <div className="absolute inset-0 bg-background/60 dark:bg-background/75" />
            <div className="absolute inset-0 aurora opacity-40" />
          </motion.div>
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary-glow/8 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm font-medium"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span>រៀនកូដជាភាសាខ្មែរ</span>
                    <span className="text-muted-foreground">{"\u2022"}</span>
                    <span className="text-primary font-bold">ដោយឥតគិតថ្លៃ</span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                    <span className="gradient-text">រៀនកូដជាភាសាខ្មែរជាមួយ</span>
                    <br />
                    <span className="text-muted-foreground text-2xl sm:text-3xl lg:text-4xl font-bold">
                     <span className="text-primary">Genz Development</span>
                    </span>
                  </h1>

                  <div className="flex flex-wrap gap-4 pt-2 justify-center">
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Button asChild size="lg" className="gap-2.5 rounded-2xl text-base px-8 h-14 bg-gradient-to-r from-primary via-primary-deep to-primary-glow shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-all duration-300 animate-glow-pulse">
                        <Link to="/lessons">
                          <Rocket className="h-5 w-5" />
                        ចាប់ផ្ដើម
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Button asChild variant="outline" size="lg" className="gap-2 rounded-2xl text-base px-8 h-14 glass border-border/50 hover:border-primary/30 transition-all duration-300">
                        <a href="#featured">
                          <Star className="h-4 w-4" />
                          មើលមេរៀន
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Features */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 aurora opacity-40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6"
              >
                <Sparkles className="h-3.5 w-3.5" />
                
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">
                គោលបំណង់របស់ <span className="gradient-text">Genz Development</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {"\u179C\u17C1\u1791\u17B7\u1780\u17B6\u17A2\u1794\u17CB\u179A\u17C6\u179F\u179A\u179F\u17C1\u179A\u1780\u17BC\u178A\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17A2\u17D2\u1793\u1780\u1793\u17B7\u1799\u17B6\u1799\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="bento-card text-center space-y-6 gradient-border group"
                >
                  <div className="inline-flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/12 via-primary-glow/8 to-transparent border border-primary/15 mx-auto group-hover:shadow-lg group-hover:shadow-primary/15 transition-shadow duration-500">
                    <f.icon className="h-9 w-9 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="py-28 relative">
          <div className="absolute inset-0 mesh-gradient opacity-40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6"
              >
                <Code2 className="h-3.5 w-3.5" />
                {"មេរៀនពេញនិយម"}
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5">
                {"ចាប់ផ្ដើមដំណើររៀន"}
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                {"ជ្រើសរើសមេរៀនភាសាកូដដែលពេញនិយមបំផុត"}
              </p>
            </motion.div>

            <LessonGrid />

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-16">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="outline" size="lg" className="gap-2.5 rounded-2xl text-base px-10 h-14 glass border-border/50 hover:border-primary/30">
                  <Link to="/lessons">
                    {"មើលមេរៀនទាំងអស់"} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;