import React from "react";
import { Link } from "react-router-dom";
import {
  Music,
  Heart,
  Clock,
  Star,
  ArrowRight,
  Sparkles,
  Wand2,
} from "lucide-react";

export default function CreateSong() {
  // features
  const features = [
    {
      icon: (
        <Music className="w-6 h-6 md:w-8 md:h-8 text-gradient-primary animate-pulse" />
      ),
      title: "Custom Composition",
      description: "Get a unique song crafted just for you",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <Heart className="w-6 h-6 md:w-8 md:h-8 text-gradient-primary animate-bounce" />
      ),
      title: "Personal Touch",
      description: "Share your story and emotions through music",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: (
        <Clock className="w-6 h-6 md:w-8 md:h-8 text-gradient-primary animate-spin-slow" />
      ),
      title: "Quick Process",
      description: "Simple 3-step creation process",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: (
        <Star className="w-6 h-6 md:w-8 md:h-8 text-gradient-primary animate-twinkle" />
      ),
      title: "Professional Quality",
      description: "High-quality production standards",
      gradient: "from-rose-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1A1A1A] to-black overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="padding pt-[150px] md:pt-[150px] lg:pt-[150px] pb-[60px] max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-6 md:space-y-8 mb-16 md:mb-24">
          <div className="relative">
            <Sparkles className="absolute -top-5 -left-5 w-6 h-6 text-yellow-500 animate-twinkle" />
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 font-jetbrains text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl animate-gradient">
              Create Your Perfect Custom Song
            </h1>
            <Wand2 className="absolute -bottom-6 -right-5 w-6 h-6 text-purple-500 animate-float" />
          </div>
          <p className="text-[#868686] font-jetbrains text-sm md:text-base lg:text-lg text-center max-w-2xl backdrop-blur-sm bg-white/5 rounded-xl p-4">
            Turn your emotions into melody. Our professional musicians will
            create a unique song that tells your story.
          </p>

          <Link
            to={"/create-song/recipient"}
            className="w-full sm:w-auto group"
          >
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl px-8 md:px-10 lg:px-12 py-4 font-semibold font-jetbrains text-sm md:text-base hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 group-hover:scale-105">
              Start your song
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} bg-opacity-10 backdrop-blur-md rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-300 hover:shadow-glow border border-white/10 group`}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-white font-jetbrains font-semibold text-lg md:text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-white font-jetbrains text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16 md:mt-24 text-center relative">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-jetbrains text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Share Your Vision",
                desc: "Tell us about your recipient and song preferences",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                number: "02",
                title: "Choose Style",
                desc: "Select your preferred genre and musical elements",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                number: "03",
                title: "Get Your Song",
                desc: "Receive your professionally crafted custom song",
                gradient: "from-rose-500 to-orange-500",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-105 transition-transform"
              >
                <div
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} font-jetbrains text-4xl md:text-5xl font-bold mb-4 group-hover:animate-pulse`}
                >
                  {step.number}
                </div>
                <h3 className="text-white font-jetbrains font-semibold text-lg md:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-[#868686] font-jetbrains text-sm md:text-base backdrop-blur-sm bg-white/5 rounded-xl p-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
