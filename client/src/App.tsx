import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Signin from "./components/Signin";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Chapter1 from "./components/academic/Chapter1";
import Introduction from "./components/academic/Introduction"  
import Phase2 from "./components/academic/Phase2";
import Phase3 from "./components/academic/Phase3";
import Phase4 from "./components/academic/Phase4";
import Phase5 from "./components/academic/Phase5";

import PeerIntroduction from "./components/peer/Introduction"
import PeerChapter1 from "./components/peer/Chapter1"
import PeerPhase2 from "./components/peer/Phase2"
import PeerPhase3 from "./components/peer/Phase3"
import PeerPhase4 from "./components/peer/Phase4"
import PeerPhase5 from "./components/peer/Phase5"

import SocialIntroduction from "./components/social/Introduction"
import SocialChapter1 from "./components/social/Chapter1"
import SocialPhase2 from "./components/social/Phase2"
import SocialPhase3 from "./components/social/Phase3"
import SocialPhase4 from "./components/social/Phase4"
import SocialPhase5 from "./components/social/Phase5"


import FinancialIntroduction from "./components/financial/Introduction"
import FinancialChapter1 from "./components/financial/Chapter1"
import FinancialPhase2 from "./components/financial/Phase2"
import FinancialPhase3 from "./components/financial/Phase3"
import FinancialPhase4 from "./components/financial/Phase4"
import FinancialPhase5 from "./components/financial/Phase5"

import AdjustmentIntroduction from "./components/adjustment/Introduction"
import AdjustmentChapter1 from"./components/adjustment/Chapter1"
import AdjustmentPhase2 from"./components/adjustment/Phase2"
import AdjustmentPhase3 from"./components/adjustment/Phase3"
import AdjustmentPhase4 from"./components/adjustment/Phase4"
import AdjustmentPhase5 from"./components/adjustment/Phase5"


import CareerIntroduction from "./components/career/Content"
import CareerChapter1 from "./components/career/Chapter1"
import CareerPhase2 from "./components/career/Phase2"
import CareerPhase3 from "./components/career/Phase3"
import CareerPhase4 from "./components/career/Phase4"
import CareerPhase5 from "./components/career/Phase5"


import DiscriminationChapter1 from "./components/discrimination/Chapter1"
import DiscriminationIntroduction from "./components/discrimination/Introduction"
import DiscriminationPhase2 from "./components/discrimination/Phase2"
import DiscriminationPhase3 from "./components/discrimination/Phase3"
import DiscriminationPhase4 from "./components/discrimination/Phase4"
import DiscriminationPhase5 from "./components/discrimination/Phase5"

import EntrepreneurshipIntroduction from "./components/entrepreneurship/Introduction"
import EntrepreneurshipChapter1 from "./components/entrepreneurship/Chapter1"
import EntrepreneurshipPhase2 from "./components/entrepreneurship/Phase2"
import EntrepreneurshipPhase3 from "./components/entrepreneurship/Phase3"
import EntrepreneurshipPhase4 from "./components/entrepreneurship/Phase4"
import EntrepreneurshipPhase5 from "./components/entrepreneurship/Phase5"
import Chapter3 from "./components/academic/Chpater3";

const App: React.FC = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/login" element={<Signin />} />
    <Route path="/register" element={<Register />} />

  
    <Route path="/entrepreneurship" element={<Layout><EntrepreneurshipIntroduction /></Layout>} />
    <Route path="/entrepreneurship/chapter1/sub1" element={<Layout><EntrepreneurshipChapter1/></Layout>} />
    <Route path="/entrepreneurship/chapter1/sub2" element={<Layout><EntrepreneurshipPhase2/></Layout>} />
    <Route path="/entrepreneurship/chapter1/sub3" element={<Layout><EntrepreneurshipPhase3/></Layout>} />
    <Route path="/entrepreneurship/chapter1/sub4" element={<Layout><EntrepreneurshipPhase4/></Layout>} />
    <Route path="/entrepreneurship/chapter1/sub5" element={<Layout><EntrepreneurshipPhase5/></Layout>} />

    <Route path="/entrepreneurship/chapter2" element={<Layout><EntrepreneurshipIntroduction /></Layout>} />
    <Route path="/entrepreneurship/chapter2" element={<Layout><EntrepreneurshipChapter1/></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub2" element={<Layout><EntrepreneurshipPhase2/></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub3" element={<Layout><EntrepreneurshipPhase3/></Layout>} />
    <Route path="/entrepreneurship/chapter4/sub4" element={<Layout><EntrepreneurshipPhase4/></Layout>} />
    <Route path="/entrepreneurship/chapter5/sub5" element={<Layout><EntrepreneurshipPhase5/></Layout>} />

    <Route path="/entrepreneurship/chapter3" element={<Layout><EntrepreneurshipIntroduction /></Layout>} />
    <Route path="/entrepreneurship/chapter3" element={<Layout><EntrepreneurshipChapter1/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub2" element={<Layout><EntrepreneurshipPhase2/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub3" element={<Layout><EntrepreneurshipPhase3/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub4" element={<Layout><EntrepreneurshipPhase4/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub5" element={<Layout><EntrepreneurshipPhase5/></Layout>} />


<Route path="/discrimination" element={<Layout><FinancialIntroduction /></Layout>} />
    <Route path="/discrimination/chapter1" element={<Layout><DiscriminationChapter1/></Layout>} />
    <Route path="/discrimination/chapter1/sub2" element={<Layout><DiscriminationPhase2/></Layout>} />
    <Route path="/discrimination/chapter1/sub3" element={<Layout><DiscriminationPhase3/></Layout>} />
    <Route path="/discrimination/chapter1/sub4" element={<Layout><DiscriminationPhase4/></Layout>} />
    <Route path="/discrimination/chapter1/sub5" element={<Layout><DiscriminationPhase5/></Layout>} />

    <Route path="/discrimination/chapter2" element={<Layout><DiscriminationIntroduction /></Layout>} />
    <Route path="/discrimination/chapter2" element={<Layout><DiscriminationChapter1/></Layout>} />
    <Route path="/discrimination/chapter2/sub2" element={<Layout><DiscriminationPhase2/></Layout>} />
    <Route path="/discrimination/chapter3/sub3" element={<Layout><DiscriminationPhase3/></Layout>} />
    <Route path="/discrimination/chapter4/sub4" element={<Layout><DiscriminationPhase4/></Layout>} />
    <Route path="/discrimination/chapter5/sub5" element={<Layout><DiscriminationPhase5/></Layout>} />

    <Route path="/discrimination/chapter3" element={<Layout><DiscriminationIntroduction /></Layout>} />
    <Route path="/discrimination/chapter3" element={<Layout><DiscriminationChapter1/></Layout>} />
    <Route path="/discrimination/chapter3/sub2" element={<Layout><DiscriminationPhase2/></Layout>} />
    <Route path="/discrimination/chapter3/sub3" element={<Layout><DiscriminationPhase3/></Layout>} />
    <Route path="/discrimination/chapter3/sub4" element={<Layout><DiscriminationPhase4/></Layout>} />
    <Route path="/discrimination/chapter3/sub5" element={<Layout><DiscriminationPhase5/></Layout>} />



<Route path="/career" element={<Layout><CareerIntroduction /></Layout>} />
    <Route path="/career/chapter1" element={<Layout><CareerChapter1/></Layout>} />
    <Route path="/career/chapter1/sub2" element={<Layout><CareerPhase2/></Layout>} />
    <Route path="/career/chapter1/sub3" element={<Layout><CareerPhase3/></Layout>} />
    <Route path="/career/chapter1/sub4" element={<Layout><CareerPhase4/></Layout>} />
    <Route path="/career/chapter1/sub5" element={<Layout><CareerPhase5/></Layout>} />

    <Route path="/career/chapter2" element={<Layout><CareerIntroduction /></Layout>} />
    <Route path="/career/chapter2" element={<Layout><CareerChapter1/></Layout>} />
    <Route path="/career/chapter2/sub2" element={<Layout><CareerPhase2/></Layout>} />
    <Route path="/career/chapter3/sub3" element={<Layout><CareerPhase3/></Layout>} />
    <Route path="/career/chapter4/sub4" element={<Layout><CareerPhase4/></Layout>} />
    <Route path="/career/chapter5/sub5" element={<Layout><CareerPhase5/></Layout>} />

    <Route path="/career/chapter3" element={<Layout><CareerIntroduction /></Layout>} />
    <Route path="/career/chapter3" element={<Layout><CareerChapter1/></Layout>} />
    <Route path="/career/chapter3/sub2" element={<Layout><CareerPhase2/></Layout>} />
    <Route path="/career/chapter3/sub3" element={<Layout><CareerPhase3/></Layout>} />
    <Route path="/career/chapter3/sub4" element={<Layout><CareerPhase4/></Layout>} />
    <Route path="/career/chapter3/sub5" element={<Layout><CareerPhase5/></Layout>} />



<Route path="/adjustment" element={<Layout><AdjustmentIntroduction /></Layout>} />
    <Route path="/adjustment/chapter1" element={<Layout><AdjustmentChapter1/></Layout>} />
    <Route path="/adjustment/chapter1/sub2" element={<Layout><AdjustmentPhase2/></Layout>} />
    <Route path="/adjustment/chapter1/sub3" element={<Layout><AdjustmentPhase3/></Layout>} />
    <Route path="/adjustment/chapter1/sub4" element={<Layout><AdjustmentPhase4/></Layout>} />
    <Route path="/adjustment/chapter1/sub5" element={<Layout><AdjustmentPhase5/></Layout>} />

    <Route path="/adjustment/chapter2" element={<Layout><AdjustmentIntroduction /></Layout>} />
    <Route path="/adjustment/chapter2" element={<Layout><AdjustmentChapter1/></Layout>} />
    <Route path="/adjustment/chapter2/sub2" element={<Layout><AdjustmentPhase2/></Layout>} />
    <Route path="/adjustment/chapter3/sub3" element={<Layout><AdjustmentPhase3/></Layout>} />
    <Route path="/adjustment/chapter4/sub4" element={<Layout><AdjustmentPhase4/></Layout>} />
    <Route path="/adjustment/chapter5/sub5" element={<Layout><AdjustmentPhase5/></Layout>} />

    <Route path="/adjustment/chapter3" element={<Layout><AdjustmentIntroduction /></Layout>} />
    <Route path="/adjustment/chapter3" element={<Layout><AdjustmentChapter1/></Layout>} />
    <Route path="/adjustment/chapter3/sub2" element={<Layout><AdjustmentPhase2/></Layout>} />
    <Route path="/adjustment/chapter3/sub3" element={<Layout><AdjustmentPhase3/></Layout>} />
    <Route path="/adjustment/chapter3/sub4" element={<Layout><AdjustmentPhase4/></Layout>} />
    <Route path="/adjustment/chapter3/sub5" element={<Layout><AdjustmentPhase5/></Layout>} />



    
    <Route path="/financial" element={<Layout><FinancialIntroduction /></Layout>} />
    <Route path="/financial/chapter1" element={<Layout><FinancialChapter1/></Layout>} />
    <Route path="/financial/chapter1/sub2" element={<Layout><FinancialPhase2/></Layout>} />
    <Route path="/financial/chapter1/sub3" element={<Layout><FinancialPhase3/></Layout>} />
    <Route path="/financial/chapter1/sub4" element={<Layout><FinancialPhase4/></Layout>} />
    <Route path="/financial/chapter1/sub5" element={<Layout><FinancialPhase5/></Layout>} />

    <Route path="/financial/chapter2" element={<Layout><FinancialIntroduction /></Layout>} />
    <Route path="/financial/chapter2" element={<Layout><FinancialChapter1/></Layout>} />
    <Route path="/financial/chapter2/sub2" element={<Layout><FinancialPhase2/></Layout>} />
    <Route path="/financial/chapter3/sub3" element={<Layout><FinancialPhase3/></Layout>} />
    <Route path="/financial/chapter4/sub4" element={<Layout><FinancialPhase4/></Layout>} />
    <Route path="/financial/chapter5/sub5" element={<Layout><FinancialPhase5/></Layout>} />

    <Route path="/financial/chapter3" element={<Layout><FinancialIntroduction /></Layout>} />
    <Route path="/financial/chapter3" element={<Layout><FinancialChapter1/></Layout>} />
    <Route path="/financial/chapter3/sub2" element={<Layout><FinancialPhase2/></Layout>} />
    <Route path="/financial/chapter3/sub3" element={<Layout><FinancialPhase3/></Layout>} />
    <Route path="/financial/chapter3/sub4" element={<Layout><FinancialPhase4/></Layout>} />
    <Route path="/financial/chapter3/sub5" element={<Layout><FinancialPhase5/></Layout>} />


    
    <Route path="/social" element={<Layout><SocialIntroduction /></Layout>} />
    <Route path="/social/chapter1" element={<Layout><SocialChapter1 /></Layout>} />
    <Route path="/social/chapter1/sub2" element={<Layout><SocialPhase2 /></Layout>} />
    <Route path="/social/chapter1/sub3" element={<Layout><SocialPhase3 /></Layout>} />
    <Route path="/social/chapter1/sub4" element={<Layout><SocialPhase4 /></Layout>} />
    <Route path="/social/chapter1/sub5" element={<Layout><SocialPhase5 /></Layout>} />

    <Route path="/social/chapter2" element={<Layout><SocialIntroduction /></Layout>} />
    <Route path="/social/chapter2" element={<Layout><SocialChapter1/></Layout>} />
    <Route path="/social/chapter2/sub2" element={<Layout><SocialPhase2/></Layout>} />
    <Route path="/social/chapter3/sub3" element={<Layout><SocialPhase3/></Layout>} />
    <Route path="/social/chapter4/sub4" element={<Layout><SocialPhase4/></Layout>} />
    <Route path="/social/chapter5/sub5" element={<Layout><SocialPhase5/></Layout>} />

    <Route path="/social/chapter3" element={<Layout><SocialIntroduction /></Layout>} />
    <Route path="/social/chapter3" element={<Layout><SocialChapter1/></Layout>} />
    <Route path="/social/chapter3/sub2" element={<Layout><SocialPhase2/></Layout>} />
    <Route path="/social/chapter3/sub3" element={<Layout><SocialPhase3/></Layout>} />
    <Route path="/social/chapter3/sub4" element={<Layout><SocialPhase4/></Layout>} />
    <Route path="/social/chapter3/sub5" element={<Layout><SocialPhase5/></Layout>} />

    
    <Route path="/academics" element={<Layout><Introduction /></Layout>} />
    <Route path="/academics/chapter1" element={<Layout><Chapter1/></Layout>} />
    <Route path="/academics/chapter1/sub2" element={<Layout><Phase2/></Layout>} />
    <Route path="/academics/chapter1/sub3" element={<Layout><Phase3/></Layout>} />
    <Route path="/academics/chapter1/sub4" element={<Layout><Phase4/></Layout>} />
    <Route path="/academics/chapter1/sub5" element={<Layout><Phase5/></Layout>} />

    <Route path="/academics/chapter2/sub1" element={<Layout><Introduction /></Layout>} />
    <Route path="/academics/chapter2/sub2" element={<Layout><Chapter1/></Layout>} />
    <Route path="/academics/chapter2/sub3" element={<Layout><Phase2/></Layout>} />
    <Route path="/academics/chapter3/sub4" element={<Layout><Phase3/></Layout>} />
    <Route path="/academics/chapter4/sub5" element={<Layout><Phase4/></Layout>} />
    <Route path="/academics/chapter5/sub6" element={<Layout><Phase5/></Layout>} />

    <Route path="/academics/chapter3/sub1" element={<Layout><Chapter3 /></Layout>} />
    <Route path="/academics/chapter3" element={<Layout><Chapter1/></Layout>} />
    <Route path="/academics/chapter3/sub2" element={<Layout><Phase2/></Layout>} />
    <Route path="/academics/chapter3/sub3" element={<Layout><Phase3/></Layout>} />
    <Route path="/academics/chapter3/sub4" element={<Layout><Phase4/></Layout>} />
    <Route path="/academics/chapter3/sub5" element={<Layout><Phase5/></Layout>} />

    
    <Route path="/peer" element={<Layout><PeerIntroduction /></Layout>} />
    <Route path="/peer/chapter1" element={<Layout><PeerChapter1/></Layout>} />
    <Route path="/peer/chapter1/sub2" element={<Layout><PeerPhase2/></Layout>} />
    <Route path="/peer/chapter1/sub3" element={<Layout><PeerPhase3/></Layout>} />
    <Route path="/peer/chapter1/sub4" element={<Layout><PeerPhase4/></Layout>} />
    <Route path="/peer/chapter1/sub5" element={<Layout><PeerPhase5/></Layout>} />

    <Route path="/peer/chapter2" element={<Layout><PeerIntroduction /></Layout>} />
    <Route path="/peer/chapter2" element={<Layout><PeerChapter1/></Layout>} />
    <Route path="/peer/chapter2/sub2" element={<Layout><PeerPhase2/></Layout>} />
    <Route path="/peer/chapter3/sub3" element={<Layout><PeerPhase3/></Layout>} />
    <Route path="/peer/chapter4/sub4" element={<Layout><PeerPhase4/></Layout>} />
    <Route path="/peer/chapter5/sub5" element={<Layout><PeerPhase5/></Layout>} />

    <Route path="/peer/chapter3" element={<Layout><PeerIntroduction /></Layout>} />
    <Route path="/peer/chapter3" element={<Layout><PeerChapter1/></Layout>} />
    <Route path="/peer/chapter3/sub2" element={<Layout><PeerPhase2/></Layout>} />
    <Route path="/peer/chapter3/sub3" element={<Layout><PeerPhase3/></Layout>} />
    <Route path="/peer/chapter3/sub4" element={<Layout><PeerPhase4/></Layout>} />
    <Route path="/peer/chapter3/sub5" element={<Layout><PeerPhase5/></Layout>} />

    </Routes>
  );
};

export default App;
