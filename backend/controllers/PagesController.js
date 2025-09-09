const PagesController = {
  // Get home page data
  getHomeData: (req, res) => {
    try {
      const homeData = {
      hero: {
          title: "Myanmar Christian Music Network",
          subtitle: "Connecting Christian musicians, artists, and music lovers across Myanmar",
          ctaText: "Learn More",
          ctaLink: "/about"
        },
        sections: {
          whatWeProvide: {
            title: "What We Provide",
            description: "Comprehensive services for Christian musicians and ministries in Myanmar",
            services: [
              {
                title: "Music Distribution",
                description: "Distribute your music worldwide through digital platforms",
                icon: "🎵",
                link: "/music-distribution"
              },
              {
                title: "Tunes Academy",
                description: "Learn music from professional instructors",
                icon: "🎓",
                link: "/tunes-academy"
              },
              {
                title: "Licensing Services",
                description: "Cover song and church licensing solutions",
                icon: "📜",
                link: "/what-we-provide"
              }
            ]
          },
          featuredArtists: {
            title: "Featured Artists",
            description: "Discover talented Christian musicians from Myanmar",
            artists: [
              {
                name: "Susanna Min",
                image: "/images/susannamin.jpg",
                genre: "Contemporary Christian",
                link: "/artist-profile/susannamin"
              },
              {
                name: "John Thang Lian",
                image: "/images/John_Thang_Lian.jpg",
                genre: "Worship Music",
                link: "/artist-profile/john-thang-lian"
              }
            ]
          },
          latestReleases: {
            title: "Latest Releases",
            description: "New music from our network of artists",
            releases: [
              {
                title: "Tears Go Up to Heaven",
                artist: "Susanna Min",
                image: "/images/songs.png",
                link: "/songs/tears-go-up-to-heaven"
              }
            ]
          },
          upcomingEvents: {
            title: "Upcoming Events",
            description: "Join us for music events and workshops",
            events: [
              {
                title: "Christian Music Workshop",
                date: "2024-09-15",
                location: "Yangon",
                description: "Learn from professional musicians"
              }
            ]
          }
        }
      };
      
      res.json({
    success: true,
        data: homeData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching home data",
        error: error.message
      });
    }
  },

  // Get about page data
  getAboutData: (req, res) => {
    try {
      const aboutData = {
        hero: {
          title: "About Us",
          subtitle: "Discover the story, mission, and vision behind Myanmar Christian Music Network"
        },
        tabs: [
          "our story",
          "who we are", 
          "what to expect",
          "mission and vision",
          "join us"
        ],
        sections: {
          ourStory: {
            title: "Our Story",
            content: "Founded with a vision to unite Christian musicians across Myanmar, our network has grown from a small group of passionate artists to a thriving community dedicated to spreading the gospel through music.",
            highlights: [
              "Established in 2020",
              "Growing network of artists",
              "Community-driven approach"
            ]
          },
          whoWeAre: {
            title: "Who We Are",
            content: "We are a diverse group of Christian musicians, producers, and music enthusiasts committed to creating and sharing music that glorifies God and builds up the body of Christ.",
            team: [
              {
                role: "Founder",
                name: "Music Ministry Leader",
                description: "Leading the vision and direction"
              },
              {
                role: "Artists",
                name: "Christian Musicians",
                description: "Creating and performing music"
              }
            ]
          },
          whatToExpect: {
            title: "What To Expect",
            content: "When you join our network, you'll find a supportive community, professional development opportunities, and platforms to share your music with the world.",
            benefits: [
              "Community support",
              "Professional development",
              "Global reach",
              "Spiritual growth"
            ]
          },
          missionAndVision: {
            title: "Mission & Vision",
            mission: "To connect, equip, and empower Christian musicians in Myanmar to create and share music that glorifies God and reaches people with the gospel.",
            vision: "A thriving network of Christian musicians using their gifts to spread the love of Christ through music across Myanmar and beyond."
          }
        }
      };
      
      res.json({
        success: true,
        data: aboutData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching about data",
        error: error.message
      });
    }
  },

  // Get what-we-provide page data
  getWhatWeProvideData: (req, res) => {
    try {
      const whatWeProvideData = {
        hero: {
          title: "What We Provide",
          subtitle: "Comprehensive services for Christian musicians and ministries in Myanmar"
        },
        services: [
          {
            title: "Music Distribution",
            description: "Get your music on all major digital platforms worldwide",
            icon: "🌍",
            link: "/music-distribution",
            features: [
              "Global platform distribution",
              "Revenue collection",
              "Analytics and insights"
            ]
          },
          {
            title: "Cover Song Licensing",
            description: "Legal licensing for cover songs and arrangements",
            icon: "📜",
            link: "/cover-song-copyright-licence",
            features: [
              "Legal compliance",
              "Royalty management",
              "International coverage"
            ]
          },
          {
            title: "Church Licensing",
            description: "Licensing solutions for churches and ministries",
            icon: "⛪",
            link: "/church-copyright-licence",
            features: [
              "Ministry-focused pricing",
              "Bulk licensing options",
              "Worship team support"
            ]
          },
          {
            title: "Tunes Academy",
            description: "Professional music education and training",
            icon: "🎓",
            link: "/tunes-academy",
            features: [
              "Private lessons",
              "Group classes",
              "Online courses",
              "Summer camps"
            ]
          },
          {
            title: "Song Creation",
            description: "Collaborative songwriting and production services",
            icon: "🎵",
            link: "/create-song",
            features: [
              "Professional collaboration",
              "Production support",
              "Copyright assistance"
            ]
          },
          {
            title: "Consultation",
            description: "Expert advice on music ministry and business",
            icon: "💡",
            link: "/contact",
            features: [
              "Ministry strategy",
              "Business development",
              "Technical guidance"
            ]
          }
        ]
      };
      
      res.json({
        success: true,
        data: whatWeProvideData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching what-we-provide data",
        error: error.message
      });
    }
  },

  // Get music-distribution page data
  getMusicDistributionData: (req, res) => {
    try {
      const musicDistributionData = {
        hero: {
          title: "Music Distribution",
          subtitle: "ကမ္ဘာတစ်ဝှမ်းရှိ Digital Music Platforms များပေါ်သို့ သင့်သီချင်းများကို ဖြန့်ဖြူးပေးပါမည်",
          englishSubtitle: "Distribute your music to digital music platforms worldwide"
        },
        tabs: [
          "about",
          "services", 
          "platforms",
          "process",
          "benefits",
          "faq"
        ],
        sections: {
          about: {
            title: "About Music Distribution",
            content: "We help Christian musicians in Myanmar distribute their music globally through major digital platforms, ensuring your music reaches listeners worldwide while maintaining your rights and collecting royalties.",
            highlights: [
              "Global reach",
              "Professional distribution",
              "Revenue collection",
              "Rights protection"
            ]
          },
          services: {
            title: "Our Services",
            services: [
              {
                title: "Digital Distribution",
                description: "Get your music on Spotify, Apple Music, YouTube Music, and more",
                icon: "📱"
              },
              {
                title: "Revenue Collection",
                description: "Collect royalties from streaming, downloads, and licensing",
                icon: "💰"
              },
              {
                title: "Analytics & Insights",
                description: "Track your music's performance and audience engagement",
                icon: "📊"
              }
            ]
          },
          platforms: {
            title: "Distribution Platforms",
            platforms: [
              {
                name: "Spotify",
                logo: "/images/Spotify_Logo.svg",
                description: "World's largest music streaming platform"
              },
              {
                name: "Apple Music",
                logo: "/images/Apple_Music_Logo.svg",
                description: "Premium music streaming service"
              },
              {
                name: "YouTube Music",
                logo: "/images/YouTube_Music_Logo.svg",
                description: "Video and music streaming platform"
              },
              {
                name: "Amazon Music",
                logo: "/images/Amazon_Music_Logo.png",
                description: "Amazon's music streaming service"
              }
            ]
          },
          process: {
            title: "Distribution Process",
            steps: [
              {
                step: 1,
                title: "Submit Your Music",
                description: "Upload your music files and metadata"
              },
              {
                step: 2,
                title: "Quality Check",
                description: "We review and optimize your content"
              },
              {
                step: 3,
                title: "Distribution",
                description: "Your music goes live on all platforms"
              },
              {
                step: 4,
                title: "Monitoring",
                description: "Track performance and collect revenue"
              }
            ]
          },
          benefits: {
            title: "Benefits",
            benefits: [
              {
                title: "Global Reach",
                description: "Access listeners worldwide"
              },
              {
                title: "Professional Quality",
                description: "Industry-standard distribution"
              },
              {
                title: "Revenue Generation",
                description: "Earn from your music"
              },
              {
                title: "Analytics",
                description: "Understand your audience"
              }
            ]
          }
        }
      };
      
      res.json({
    success: true,
        data: musicDistributionData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching music distribution data",
        error: error.message
      });
    }
  },

  // Get tunes-academy page data
  getTunesAcademyData: (req, res) => {
    try {
      const tunesAcademyData = {
        hero: {
          title: "TUNES ACADEMY",
          subtitle: "Professional Music Education for All Ages",
          logo: "/images/tunes_academy_logo.jpg"
        },
        tabs: [
          "courses",
          "lessons",
          "certificates",
          "instructors",
          "testimonials",
          "events",
          "faq",
          "contact"
        ],
        sections: {
          programs: {
            title: "Programs We Offer",
            programs: [
              {
                title: "Private Lessons",
                description: "One-on-one instruction tailored to your needs",
                icon: "🎯",
                link: "/tunes-academy/private-lessons",
                features: [
                  "Personalized curriculum",
                  "Flexible scheduling",
                  "Individual attention"
                ]
              },
              {
                title: "Group Classes",
                description: "Learn with others in a collaborative environment",
                icon: "👥",
                link: "/tunes-academy/group-classes",
                features: [
                  "Collaborative learning",
                  "Cost-effective",
                  "Peer motivation"
                ]
              },
              {
                title: "Online Classes",
                description: "Learn from anywhere with our virtual platform",
                icon: "💻",
                link: "/tunes-academy/online-classes",
                features: [
                  "Remote learning",
                  "Recorded sessions",
                  "Global access"
                ]
              },
              {
                title: "Summer Camps",
                description: "Intensive music programs during school breaks",
                icon: "☀️",
                link: "/tunes-academy/summer-camps",
                features: [
                  "Intensive learning",
                  "Fun activities",
                  "Performance opportunities"
                ]
              }
            ]
          },
          lessons: {
            title: "Music Lessons We Teach",
            categories: [
              {
                title: "Instruments",
                items: ["Piano", "Guitar", "Violin", "Drums", "Voice"]
              },
              {
                title: "Music Theory",
                items: ["Reading Music", "Harmony", "Composition", "Arrangement"]
              },
              {
                title: "Performance",
                items: ["Stage Presence", "Recording", "Live Sound", "Audition Prep"]
              }
            ]
          },
          instructors: {
            title: "Our Instructors",
            instructors: [
              {
                name: "Htoo Lay",
                image: "/images/music-school/instructors/Htoo_Lay.jpg",
                specialty: "Piano & Music Theory",
                experience: "15+ years"
              },
              {
                name: "John Thang Lian",
                image: "/images/music-school/instructors/John_Thang_Lian.jpg",
                specialty: "Guitar & Worship Music",
                experience: "12+ years"
              },
              {
                name: "June Nine",
                image: "/images/music-school/instructors/June_Nine.jpg",
                specialty: "Voice & Performance",
                experience: "10+ years"
              }
            ]
          },
          testimonials: {
            title: "Student Testimonials",
            testimonials: [
              {
                name: "Sarah M.",
                program: "Private Piano Lessons",
                content: "The instructors are amazing and I've learned so much in just a few months!"
              },
              {
                name: "David L.",
                program: "Group Guitar Classes",
                content: "Great atmosphere and affordable pricing. Highly recommend!"
              }
            ]
          }
        }
      };
      
      res.json({
    success: true,
        data: tunesAcademyData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching tunes academy data",
        error: error.message
      });
    }
  },

  // Get contact page data
  getContactData: (req, res) => {
    try {
      const contactData = {
        hero: {
          title: "Get In Touch",
          subtitle: "We'd love to hear from you"
        },
        contactInfo: {
          title: "Contact Information",
          details: [
            {
              type: "Email",
              value: "info@mcmn.com",
              icon: "✉️"
            },
            {
              type: "Phone",
              value: "+95 9 123 456 789",
              icon: "📞"
            },
            {
              type: "Address",
              value: "Yangon, Myanmar",
              icon: "📍"
            }
          ],
          socialMedia: [
            {
              name: "Facebook",
              link: "https://facebook.com/mcmn",
              icon: "/images/Facebook_Logo.svg"
            },
            {
              name: "Instagram",
              link: "https://instagram.com/mcmn",
              icon: "/images/Instagram_Logo.svg"
            },
            {
              name: "YouTube",
              link: "https://youtube.com/mcmn",
              icon: "/images/YouTube_Logo.svg"
            }
          ]
        },
        paymentMethods: {
          title: "Payment Methods",
          methods: [
            {
              name: "Bank Transfer",
              banks: [
                {
                  name: "AYA Bank",
                  logo: "/images/AYA_Bank_Logo.png",
                  accountInfo: "Account: MCMN Music Network"
                },
                {
                  name: "KBZ Bank",
                  logo: "/images/KBZ_Bank_Logo.png",
                  accountInfo: "Account: MCMN Music Network"
                }
              ]
            },
            {
              name: "Digital Payments",
              services: [
                {
                  name: "Wave Pay",
                  logo: "/images/Wave_Pay_Logo.png"
                },
                {
                  name: "KBZ Pay",
                  logo: "/images/KBZ_Pay_Logo.png"
                }
              ]
            }
          ]
        },
        givingOptions: {
          title: "Select Your Giving Option Below",
          description: "Support our ministry and help us continue serving Christian musicians in Myanmar"
        }
      };
      
      res.json({
        success: true,
        data: contactData
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching contact data",
        error: error.message
      });
    }
  }
};

module.exports = PagesController;



