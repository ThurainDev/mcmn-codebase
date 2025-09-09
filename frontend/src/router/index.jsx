import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

// admin dashboard
import Admin from "../components/admin/Admin";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import WhatWeProvide from "../pages/What-We-Provide";
import Artist from "../pages/Artist";
import Song from "../pages/Song";
import Organization from "../pages/Organization";
import Contact from "../pages/Contact";

// components
// components | music distribution
import MusicDistribution from "../components/music-distribution/Music-Distribution";
// components | cover song licence
import CoverSongLicence from "../components/cover-song-licence/Cover-Song-Licence";
import CoverSongCopyrightLicenceTermsOfAgreement from "../components/cover-song-licence/section/Cover-Song-Copyright-Licence-Terms-Of-Agreement";
// components | church licence
import ChurchLicence from "../components/church-licence/Church-Licence";
import ChurchCopyrightLicenceTermsOfAgreement from "../components/church-licence/section/Church-Copyright-Licence-Terms-Of-Agreement";
// components | artist
import Artist_Profile from "../components/artist/Artist-Profile";
// components | tunes academy
import TunesAcademy from "../components/tunes-academy/Tunes-Academy";
// components | tunes academy | class
import PrivateLessons from "../components/tunes-academy/class/Private-Lessons";
import GroupClasses from "../components/tunes-academy/class/Group-Classes";
import OnlineClasses from "../components/tunes-academy/class/Online-Classes";
import SummerCamps from "../components/tunes-academy/class/Summer-Camps";
// components | tunes academy | checkout
import PrivateLessonsCheckout from "../components/tunes-academy/checkout/Private-Lessons-Checkout";
import GroupClassesCheckout from "../components/tunes-academy/checkout/Group-Classes-Checkout";
import OnlineClassesCheckout from "../components/tunes-academy/checkout/Online-Classes-Checkout";
import SummerCampsCheckout from "../components/tunes-academy/checkout/Summer-Camps-Checkout";
// components | create song
import CreateSong from "../components/create-song/Create-Song";
// components | create song | steps
import Recipient_StepOne from "../components/create-song/steps/Recipient_StepOne";
import Artist_StepTwo from "../components/create-song/steps/Artist_StepTwo";
import SongOptions_StepTwo from "../components/create-song/steps/SongOptions_StepTwo";
import Details_StepThree from "../components/create-song/steps/Details_StepThree";
import Review from "../components/create-song/steps/Review";
// components | song
import Song_Lyrics_Page from "../components/song/songs/Song_Lyrics_Page";
// components | album
import Album_Page from "../components/album/Album_Page";
// components | demo
import ApiDemo from "../components/demo/ApiDemo";

// error
import ErrorPage from "../error/Error-Page";

const router = createBrowserRouter([
  {
    path: "/", // localhost:5173
    element: <Layout />, // Main
    children: [
      // admin dashboard
      {
        path: "/admin", // localhost:5173/admin
        element: <Admin />, // Admin
      },
      // pages
      {
        path: "/", // localhost:5173
        element: <Home />, // Home
      },
      {
        path: "/about", // localhost:5173/about
        element: <About />, // About
      },
      {
        path: "/what-we-provide", // localhost:5173/what-we-provide
        element: <WhatWeProvide />, // What We Provide
      },
      {
        path: "/artist", // localhost:5173/artist
        element: <Artist />, // Artist
      },
      {
        path: "/song", // localhost:5173/song
        element: <Song />, // Song
      },
      {
        path: "/organization", // localhost:5173/organizations
        element: <Organization />, // Organizations
      },
      {
        path: "/contact", // localhost:5173/contact
        element: <Contact />, // Contact
      },
      // components
      {
        path: "/music-distribution", // localhost:5173/music-distribution
        element: <MusicDistribution />, // Music Distribution
      },
      {
        path: "/cover-song-copyright-licence", // localhost:5173/cover-song-copyright-licence
        element: <CoverSongLicence />, // Cover Song Copyright Licence
      },
      {
        path: "/cover-song-copyright-licence-terms-of-agreement", // localhost:5173/cover-song-copyright-licence-terms-of-agreement
        element: <CoverSongCopyrightLicenceTermsOfAgreement />, // Cover Song Copyright Licence Terms Of Agreement
      },
      {
        path: "/church-copyright-licence", // localhost:5173/church-copyright-licence
        element: <ChurchLicence />,
      },
      {
        path: "/church-copyright-licence-terms-of-agreement", // localhost:5173/church-copyright-licence-terms-of-agreement
        element: <ChurchCopyrightLicenceTermsOfAgreement />, // Church Copyright Licence Terms Of Agreement
      },
      {
        path: "/artist-profile/susannamin", // localhost:5173/artist-profile
        element: <Artist_Profile />, // Artist Profile
      },
      {
        path: "/songs/tears-go-up-to-heaven", // localhost:5173/song/:songId
        element: <Song_Lyrics_Page />, // Song Lyrics Page
      },
      {
        path: "/artists/artistname/album-name", // localhost:5173/artists/:artistName/:albumName
        element: <Album_Page />, // Album Page
      },
      // Tunes Academy
      {
        path: "/tunes-academy", // localhost:5173/tunes-academy
        element: <TunesAcademy />, // Tunes Academy
      },
      {
        path: "/tunes-academy/private-lessons", // localhost:5173/tunes-academy/private-lessons
        element: <PrivateLessons />, // Private Lessons
      },
      {
        path: "/tunes-academy/group-classes", // localhost:5173/tunes-academy/group-classes
        element: <GroupClasses />, // Group Classes
      },
      {
        path: "/tunes-academy/online-classes", // localhost:5173/tunes-academy/online-classes
        element: <OnlineClasses />, // Online Classes
      },
      {
        path: "/tunes-academy/summer-camps", // localhost:5173/tunes-academy/summer-camps
        element: <SummerCamps />, // Summer Camps
      },
      // Checkout
      {
        path: "/tunes-academy/private-lessons/checkout", // localhost:5173/tunes-academy/private-lessons/checkout
        element: <PrivateLessonsCheckout />, // Private Lessons Checkout
      },
      {
        path: "/tunes-academy/group-classes/checkout", // localhost:5173/tunes-academy/group-classes/checkout
        element: <GroupClassesCheckout />, // Group Classes Checkout
      },
      {
        path: "/tunes-academy/online-classes/checkout", // localhost:5173/tunes-academy/online-classes/checkout
        element: <OnlineClassesCheckout />, // Online Classes Checkout
      },
      {
        path: "/tunes-academy/summer-camps/checkout", // localhost:5173/tunes-academy/summer-camps/checkout
        element: <SummerCampsCheckout />, // Summer Camps Checkout
      },
      // Create Song
      {
        path: "/create-song", // localhost:5173/create-song
        element: <CreateSong />, // Create Song
      },
      {
        path: "/create-song/recipient", // localhost:5173/create-song/recipient
        element: <Recipient_StepOne />, // Recipient
      },
      {
        path: "/create-song/artist", // localhost:5173/create-song/artist
        element: <Artist_StepTwo />, // Artist
      },
      {
        path: "/create-song/song-options", // localhost:5173/create-song/song-options
        element: <SongOptions_StepTwo />, // Song Options
      },
      {
        path: "/create-song/details", // localhost:5173/create-song/details
        element: <Details_StepThree />, // Details
      },
      {
        path: "/create-song/review", // localhost:5173/create-song/review
        element: <Review />, // Review
      },
      // Demo
      {
        path: "/demo", // localhost:5173/demo
        element: <ApiDemo />, // API Demo
      },
      {
        path: "*", // localhost:5173/404
        element: <ErrorPage />, // Error Page
      },
    ],
  },
]);

export default router;
