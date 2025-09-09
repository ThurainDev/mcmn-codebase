import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Song_Lyrics_Page() {
  const [activeTab, setActiveTab] = useState("lyrics");
  const [versionTab, setVersionTab] = useState("original");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    platforms: [],
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showRelatedSongs, setShowRelatedSongs] = useState(false);
  const shareModalRef = useRef(null);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.85;
        if (isInViewport) {
          el.classList.add("animate-in");
        }
      });
    };

    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close share modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        shareModalRef.current &&
        !shareModalRef.current.contains(event.target)
      ) {
        setShowShareModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      platforms: checked
        ? [...prev.platforms, value]
        : prev.platforms.filter((p) => p !== value),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // you can replace this with real API call
    alert("Your request has been submitted!");
  };

  // Related songs data
  const relatedSongs = [
    { title: "အလင်းရောင်", composer: "John Doe", category: "Praise" },
    {
      title: "ကျွန်ုပ်သည်ဘုရားသခင်ကိုချစ်သည်",
      composer: "Jane Smith",
      category: "Worship",
    },
    { title: "အမူအရာသစ်", composer: "David Lee", category: "Praise" },
    { title: "တရားမူရာတော်", composer: "Sarah Kim", category: "Worship" },
  ];

  const lyricsContent = (
    <div className="bg-black/30 p-6 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300">
      <h3 className="text-xl font-semibold text-[#D4AF37]">VERSE 1</h3>
      <p className="mt-2 text-[#E6D28C]/90">ငိုကြွေးတဲ့အသံတွေကို</p>
      <p className="mt-2 text-[#E6D28C]/90">သခင်ကြားပြီးနားထောင်တယ်..</p>
      <p className="mt-2 text-[#E6D28C]/90">
        ကျွန်ုပ်ရဲ့ခံစားချက်များ.. ပူဆွေးမှုများ
      </p>
      <p className="mt-2 text-[#E6D28C]/90">သခင်အကောင်းဆုံး နားလည်ပေးတယ်..</p>
      <p className="mt-2 text-[#E6D28C]/90">
        ကျခဲ့မျက်ရည်တွေဟာ အချည်းနှီးမဟုတ်ခဲ့ဘူး..
      </p>
      <p className="mt-2 text-[#E6D28C]/90">သိပ်သည်းလို့နေ...</p>
      <p className="mt-2 text-[#E6D28C]/90">
        နှုတ်ဖြင့်မမြွက်နိုင် ညည်းတွားခြင်းတောင်
      </p>

      <h3 className="text-xl font-semibold mt-6 text-[#D4AF37]">PRE-CHORUS</h3>
      <p className="mt-2 text-[#E6D28C]/90">
        ကျွန်ုပ်ရဲ့ မျက်ရည်ဟာ အထက်ကိုတက်သွားတယ်...
      </p>
      <p className="mt-2 text-[#E6D28C]/90">
        သခင့်ရဲ့ မျက်ရည်ဘူးတော်ထဲ သိမ်းဆည်းကာ ပြည့်လျှံလျက်
      </p>

      <h3 className="text-xl font-semibold mt-6 text-[#D4AF37]">CHORUS</h3>
      <p className="mt-2 text-[#E6D28C]/90">အဖြေပြန်လည်ပေး...</p>
      <p className="mt-2 text-[#E6D28C]/90">
        ကျွန်ုပ် ဆုတောင်းခြင်းတွေ ဘယ်တော့မှ နောက်မကျဘူး..
      </p>
      <p className="mt-2 text-[#E6D28C]/90">သူ အမြဲနားညောင်းနေခဲ့</p>
      <p className="mt-2 text-[#E6D28C]/90">အဖြေပြန်လည်ပေး...</p>
      <p className="mt-2 text-[#E6D28C]/90">
        ကျွန်ုပ်ဆုတောင်းသံတွေ ဘယ်တော့မှ နောက်မကျဘူး..
      </p>
      <p className="mt-2 text-[#E6D28C]/90">ကိုယ်တော် အမြဲနားညောင်းမူတယ်...</p>

      <h3 className="text-xl font-semibold mt-6 text-[#D4AF37]">BRIDGE</h3>
      <p className="mt-2 text-[#E6D28C]/90">အထက်ကိုတက်သော မျက်ရည်တွေ..</p>
      <p className="mt-2 text-[#E6D28C]/90">အထက်ကိုတက်သော နှလုံးသားတွေ..</p>
      <p className="mt-2 text-[#E6D28C]/90">
        အထက်ကိုတက်သော ကျွန်ုပ်ရဲ့စကားသံတွေ..
      </p>
      <p className="mt-2 text-[#E6D28C]/90">အထက်ကိုတက်သော မျက်ရည်တွေ..</p>
      <p className="mt-2 text-[#E6D28C]/90">အထက်ကိုတက်သော နှလုံးသားတွေ..</p>
      <p className="mt-2 text-[#E6D28C]/90">
        အထက်ကိုတက်သော ကျွန်ုပ် ဆုတောင်းသံတွေ..
      </p>
    </div>
  );

  const chordsContent = (
    <div className="bg-black/30 p-6 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300">
      <h3 className="text-xl font-semibold text-[#D4AF37]">VERSE 1</h3>
      <p className="text-[#E6D28C]/90 font-mono">C G Am F</p>
      <p className="text-[#E6D28C]/90 font-mono">C G Am F</p>

      <h3 className="text-xl font-semibold mt-4 text-[#D4AF37]">PRE-CHORUS</h3>
      <p className="text-[#E6D28C]/90 font-mono">Am F G C</p>

      <h3 className="text-xl font-semibold mt-4 text-[#D4AF37]">CHORUS</h3>
      <p className="text-[#E6D28C]/90 font-mono">C G Am F</p>
      <p className="text-[#E6D28C]/90 font-mono">C G Am F</p>

      <h3 className="text-xl font-semibold mt-4 text-[#D4AF37]">BRIDGE</h3>
      <p className="text-[#E6D28C]/90 font-mono">F G Am C</p>

      <div className="mt-8 p-4 bg-[#E6D28C]/10 rounded-lg">
        <h4 className="text-[#D4AF37] font-semibold mb-2">Chord Chart</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-[#E6D28C] font-mono">C</div>
            <img
              src="/images/chords/C.png"
              alt="C chord"
              className="w-full h-auto mt-2"
            />
          </div>
          <div className="text-center">
            <div className="text-[#E6D28C] font-mono">G</div>
            <img
              src="/images/chords/G.png"
              alt="G chord"
              className="w-full h-auto mt-2"
            />
          </div>
          <div className="text-center">
            <div className="text-[#E6D28C] font-mono">Am</div>
            <img
              src="/images/chords/Am.png"
              alt="Am chord"
              className="w-full h-auto mt-2"
            />
          </div>
          <div className="text-center">
            <div className="text-[#E6D28C] font-mono">F</div>
            <img
              src="/images/chords/F.png"
              alt="F chord"
              className="w-full h-auto mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const versionsData = {
    original: [
      "https://www.youtube.com/embed/g86PTC2H_9M?si=AOx4H0NWmRM0n4Cu",
      "https://www.youtube.com/embed/iPU8Amm0IB4?si=RPFdUgNJSzNGCynB",
    ],
    cover: [
      "https://www.youtube.com/embed/H6vQWXwLV-o?si=QQH7xipOYMeXavik",
      "https://www.youtube.com/embed/eBvj67rYrts?si=yw2zeiYKSuQKgkIz",
    ],
    other: ["https://www.youtube.com/embed/3B6WLUMrzQk?si=872I68NgNzvbF03_"],
  };

  const renderVersionCarousel = (videos) => (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
      }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop={videos.length > 1}
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="mt-6"
    >
      {videos.map((url, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-video w-full bg-black/50 rounded-xl overflow-hidden border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <iframe
              className="w-full h-full"
              src={url}
              title={`video-${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const coverFormContent = (
    <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-b from-black to-[#111] text-[#E6D28C]">
      <form
        onSubmit={handleSubmit}
        className="bg-black/50 px-6 sm:px-10 py-8 rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.5)] max-w-2xl w-full font-jetbrains text-sm border border-[#E6D28C]/10"
      >
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent">
          Cover Request Form
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 text-[#E6D28C]/80">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border-b border-[#E6D28C]/30 bg-transparent focus:outline-none focus:border-[#E6D28C] text-[#E6D28C] px-2 py-1 transition-all duration-300"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-[#E6D28C]/80">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border-b border-[#E6D28C]/30 bg-transparent focus:outline-none focus:border-[#E6D28C] text-[#E6D28C] px-2 py-1 transition-all duration-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-[#E6D28C]/80">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full border border-[#E6D28C]/30 bg-transparent focus:outline-none focus:border-[#E6D28C] text-[#E6D28C] px-2 py-1 rounded-lg transition-all duration-300"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-[#E6D28C]/80">
            Upload Platform
          </label>
          <div className="flex flex-wrap gap-6 mt-2">
            {["Facebook", "Youtube", "Others"].map((platform) => (
              <label
                key={platform}
                className="flex items-center space-x-2 text-[#E6D28C]/90"
              >
                <input
                  type="checkbox"
                  value={platform}
                  checked={formData.platforms.includes(platform)}
                  onChange={handleCheckbox}
                  className="accent-[#D4AF37]"
                />
                <span>{platform}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-lg hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300 font-medium"
          >
            Submit Request
          </button>
        </div>

        <p className="mt-10 text-center text-xs text-[#E6D28C]/60">
          Direct Contact: +959 111 222 333 &nbsp; mcnm@gmail.com
        </p>
      </form>
    </div>
  );

  // New section: Song Story
  const songStoryContent = (
    <div className="bg-black/30 p-6 rounded-xl border border-[#E6D28C]/10 hover:border-[#E6D28C]/30 transition-all duration-300">
      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
        The Story Behind This Song
      </h3>

      <div className="space-y-4 text-[#E6D28C]/90">
        <p>
          This song was written during a particularly challenging time in the
          composer's life. Susanna Min shares that she was going through a
          period of deep personal struggle and felt her prayers were going
          unanswered.
        </p>

        <p>
          One night, while reading Psalm 56:8 -{" "}
          <em>
            "You keep track of all my sorrows. You have collected all my tears
            in your bottle. You have recorded each one in your book"
          </em>{" "}
          - she was struck by the image of God collecting her tears.
        </p>

        <p>
          The melody came to her first, a simple tune that she hummed while
          processing her emotions. The lyrics followed naturally, expressing
          both the pain of waiting and the confidence that God hears every
          prayer.
        </p>

        <p>
          The song was first performed at a small prayer gathering in Yangon in
          2019, where it deeply resonated with many attendees who were also
          waiting for answers to their own prayers.
        </p>
      </div>

      <div className="mt-6 p-4 bg-[#E6D28C]/10 rounded-lg">
        <h4 className="text-[#D4AF37] font-semibold mb-2">
          Scripture References
        </h4>
        <ul className="list-disc list-inside space-y-2 text-[#E6D28C]/90">
          <li>
            Psalm 56:8 - "You keep track of all my sorrows. You have collected
            all my tears in your bottle."
          </li>
          <li>
            Romans 8:26 - "The Spirit helps us in our weakness. We do not know
            what we ought to pray for, but the Spirit himself intercedes for us
            through wordless groans."
          </li>
          <li>
            Revelation 8:4 - "The smoke of the incense, together with the
            prayers of God's people, went up before God from the angel's hand."
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section with Gold/Black Theme */}
      <section className="padding pt-[120px] pb-[30px] mx-auto bg-black text-[#E6D28C]">
        {/* Song Title and Composer Banner */}
        <div className="rounded-xl overflow-hidden relative mb-8 scroll-animate opacity-0 translate-y-10">
          <div className="relative h-48 sm:h-64 md:h-80 flex flex-col justify-center items-center font-jetbrains overflow-hidden">
            {/* Rich black background base */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] z-0"></div>

            {/* Gold dust effect overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
              <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#E6D28C_0%,_transparent_70%)] opacity-[0.04] mix-blend-overlay"></div>
              <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            {/* Enhanced music notes pattern with gold tint */}
            <div className="absolute inset-0 bg-[url('/images/music-notes-pattern.png')] opacity-[0.08] mix-blend-color-dodge z-0"></div>

            {/* Diagonal gold accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.07] via-transparent to-transparent z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#E6D28C]/[0.05] z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
                အဖြေပြန်လည်ပေး
              </h1>
              <p className="text-[#E6D28C]/80 text-lg md:text-xl">
                A song of hope and perseverance
              </p>
            </div>
          </div>
        </div>

        {/* Song Info and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 scroll-animate opacity-0 translate-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 md:mb-0">
            <p className="text-lg font-jetbrains">
              Composer:{" "}
              <span className="font-semibold text-[#D4AF37]">Susanna Min</span>
            </p>
            <div className="hidden sm:block h-4 w-px bg-[#E6D28C]/30"></div>
            <p className="text-lg font-jetbrains">
              Category:{" "}
              <span className="font-semibold text-[#D4AF37]">Worship</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/downloads/lyrics.pdf"
              className="px-4 py-2 bg-black/50 text-[#E6D28C] rounded-lg hover:bg-black/70 border border-[#E6D28C]/30 hover:border-[#E6D28C]/50 transition-all duration-300 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </a>

            <button
              onClick={() => setShowShareModal(!showShareModal)}
              className="px-4 py-2 bg-black/50 text-[#E6D28C] rounded-lg hover:bg-black/70 border border-[#E6D28C]/30 hover:border-[#E6D28C]/50 transition-all duration-300 flex items-center gap-2 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
              {/* Share Modal */}
              {showShareModal && (
                <div
                  ref={shareModalRef}
                  className="absolute right-0 top-full mt-2 w-48 bg-black border border-[#E6D28C]/20 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-50 overflow-hidden animate-float"
                >
                  <div className="p-2">
                    <a
                      href="https://facebook.com/share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-[#E6D28C]/10 rounded transition-colors text-[#E6D28C]/90"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-[#E6D28C]/10 rounded transition-colors text-[#E6D28C]/90"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href="https://wa.me/?text="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-[#E6D28C]/10 rounded transition-colors text-[#E6D28C]/90"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }}
                      className="w-full flex items-center gap-2 p-2 hover:bg-[#E6D28C]/10 rounded transition-colors text-[#E6D28C]/90"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-[#E6D28C]/20 scroll-animate opacity-0 translate-y-10">
          {["lyrics", "chords", "story", "versions", "cover"].map((tab) => (
            <button
              key={tab}
              className={`text-base sm:text-lg font-semibold pb-2 px-3 sm:px-4 capitalize transition-all duration-300 ${
                activeTab === tab
                  ? "border-b-2 border-[#D4AF37] text-[#D4AF37]"
                  : "text-[#E6D28C]/70 hover:text-[#E6D28C]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "lyrics" && lyricsContent}
          {activeTab === "chords" && chordsContent}
          {activeTab === "story" && songStoryContent}
          {activeTab === "versions" && (
            <>
              {/* Version Tabs */}
              <div className="flex flex-wrap gap-3 mb-4">
                {["original", "cover", "other"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-1 rounded-full border text-sm font-jetbrains transition-all duration-300 ${
                      versionTab === type
                        ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black font-medium border-transparent"
                        : "border-[#E6D28C]/30 text-[#E6D28C]/80 hover:border-[#E6D28C]/50"
                    }`}
                    onClick={() => setVersionTab(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)} Version
                  </button>
                ))}
              </div>

              {renderVersionCarousel(versionsData[versionTab])}
            </>
          )}
          {activeTab === "cover" && coverFormContent}
        </div>

        {/* Related Songs Section */}
        <div className="mt-16 scroll-animate opacity-0 translate-y-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent font-jetbrains">
              Related Songs
            </h2>
            <button
              onClick={() => setShowRelatedSongs(!showRelatedSongs)}
              className="text-[#E6D28C]/80 hover:text-[#D4AF37] transition-colors"
            >
              {showRelatedSongs ? "Show Less" : "Show More"}
            </button>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-500 ${
              showRelatedSongs
                ? "max-h-[1000px] opacity-100"
                : "max-h-[220px] overflow-hidden"
            }`}
          >
            {relatedSongs.map((song, index) => (
              <a
                key={index}
                href={`/songs/${index}`}
                className="p-4 bg-black/50 border border-[#E6D28C]/10 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(230,210,140,0.15)] hover:border-[#E6D28C]/30 transition-all duration-300 group"
              >
                <div className="text-center">
                  <h3 className="text-lg font-medium text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors">
                    {song.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#E6D28C]/60">
                    {song.composer}
                  </p>
                  <div className="mt-2 text-xs text-[#E6D28C]/60 bg-[#E6D28C]/10 inline-block px-2 py-1 rounded-full">
                    {song.category}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
