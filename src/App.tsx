import "./App.css";
import Register from "./components/Register";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Layout from "./components/Layout";

import Chapter1 from "./components/academic/Chapter1";
import Content from "./components/academic/Content";
import Introduction from "./components/academic/Introduction";
import Phase2 from "./components/academic/Phase2";
import Phase3 from "./components/academic/Phase3";
import Phase4 from "./components/academic/Phase4";
import Phase5 from "./components/academic/Phase5";

import PeerChapter1 from "./components/peer/Chapter1";
import PeerContent from "./components/peer/Content";
import PeerIntroduction from "./components/peer/Introduction";
import PeerPhase2 from "./components/peer/Phase2";
import PeerPhase3 from "./components/peer/Phase3";
import PeerPhase4 from "./components/peer/Phase4";
import PeerPhase5 from "./components/peer/Phase5";

import SocialChapter1 from "./components/social/Chapter1";
import SocialContent from "./components/social/Content";
import SocialIntroduction from "./components/social/Introduction";
import SocialPhase2 from "./components/social/Phase2";
import SocialPhase3 from "./components/social/Phase3";
import SocialPhase4 from "./components/social/Phase4";
import SocialPhase5 from "./components/social/Phase5";

import FinancialChapter1 from "./components/financial/Chapter1";
import FinancialContent from "./components/financial/Content";
import FinancialIntroduction from "./components/financial/Introduction";
import FinancialPhase2 from "./components/financial/Phase2";
import FinancialPhase3 from "./components/financial/Phase3";
import FinancialPhase4 from "./components/financial/Phase4";
import FinancialPhase5 from "./components/financial/Phase5";

import CareerChapter1 from "./components/career/Chapter1";
import CareerContent from "./components/career/Content";
import CareerIntroduction from "./components/career/Introduction";
import CareerPhase2 from "./components/career/Phase2";
import CareerPhase3 from "./components/career/Phase3";
import CareerPhase4 from "./components/career/Phase4";
import CareerPhase5 from "./components/career/Phase5";

import DiscriminationContent from "./components/discrimination/Content";
import DiscriminationIntroduction from "./components/discrimination/Introduction";
import DiscriminationChapter1 from "./components/discrimination/Chapter1";
import DiscriminationPhase2 from "./components/discrimination/Phase2";
import DiscriminationPhase3 from "./components/discrimination/Phase3";
import DiscriminationPhase4 from "./components/discrimination/Phase4";
import DiscriminationPhase5 from "./components/discrimination/Phase5";

import EntrepreneurshipContent from "./components/entrepreneurship/Content";
import EntrepreneurshipChapter1 from "./components/entrepreneurship/Chapter1";
import EntrepreneurshipIntroduction from "./components/entrepreneurship/Introduction";
import EntrepreneurshipPhase2 from "./components/entrepreneurship/Phase2";
import EntrepreneurshipPhase3 from "./components/entrepreneurship/Phase3";
import EntrepreneurshipPhase4 from "./components/entrepreneurship/Phase4";
import EntrepreneurshipPhase5 from "./components/entrepreneurship/Phase5";

import AdjustmentContent from "./components/adjustment/Content";
import AdjustmentChapter1 from "./components/adjustment/Chapter1";
import AdjustmentIntroduction from "./components/adjustment/Introduction";
import AdjustmentPhase2 from "./components/adjustment/Phase2";
import AdjustmentPhase3 from "./components/adjustment/Phase3";
import AdjustmentPhase4 from "./components/adjustment/Phase4";
import AdjustmentPhase5 from "./components/adjustment/Phase5";
import Chapter2 from "./components/discrimination/Chapter2";
import Chapter3 from "./components/discrimination/Chapter3";
import Phase11 from "./components/peer/Chapter1";
import AdjustmentChapter from "./components/adjustment/Chapter1";
import CareerChapter from "./components/career/Chapter1";
import DiscrimnationChapter from "./components/discrimination/Chapter1";
import EntreprenuersChapter from "./components/entrepreneurship/Chapter1";
import FinancailChapter from "./components//financial/Chapter1";
import SocialChapter from "./components/social/Chapter1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Signup />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/academics"
        element={
          <Layout>
            <Content />
          </Layout>
        }
      />
      <Route
        path="/academics/chapter1"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academic/chapter1"
        element={
          <Layout>
            <Chapter1 />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter2"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter3"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter2/sub1"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter2/sub2"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />
      <Route
        path="/academics/chapter2/sub3"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />
      <Route
        path="/academics/chapter2/sub4"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter2/sub5"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter3/sub1"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter3/sub2"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter3/sub3"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter3/sub4"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/academics/chapter3/sub5"
        element={
          <Layout>
            <Introduction />
          </Layout>
        }
      />

      <Route
        path="/peer/chapter1"
        element={
          <Layout>
            <Phase11 />
          </Layout>
        }
      />

      <Route
        path="/social/chapter1"
        element={
          <Layout>
            <SocialChapter />
          </Layout>
        }
      />

      <Route
        path="/financial/chapter1"
        element={
          <Layout>
            <FinancailChapter />
          </Layout>
        }
      />

      <Route
        path="/career/chapter1"
        element={
          <Layout>
            <CareerChapter />
          </Layout>
        }
      />

      <Route
        path="/chapter2"
        element={
          <Layout>
            <Chapter2 />
          </Layout>
        }
      />

      <Route
        path="/chapter3"
        element={
          <Layout>
            <Chapter3 />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1"
        element={
          <Layout>
            <DiscrimnationChapter />
          </Layout>
        }
      />

      <Route
        path="/entrepreneurship/chapter1"
        element={
          <Layout>
            <EntreprenuersChapter />
          </Layout>
        }
      />

      <Route
        path="/adjustment/chapter1"
        element={
          <Layout>
            <AdjustmentChapter />
          </Layout>
        }
      />

      <Route
        path="/{categoryname}/chapter3"
        element={
          <Layout>
            <Chapter3 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub1"
        element={
          <Layout>
            <Chapter1 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub2"
        element={
          <Layout>
            <Phase2 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub3"
        element={
          <Layout>
            <Phase3 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub4"
        element={
          <Layout>
            <Phase4 />
          </Layout>
        }
      />
      <Route
        path="/chapter1/sub5"
        element={
          <Layout>
            <Phase5 />
          </Layout>
        }
      />

      <Route
        path="/peer"
        element={
          <Layout>
            <PeerContent />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1"
        element={
          <Layout>
            <PeerIntroduction />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub1"
        element={
          <Layout>
            <PeerChapter1 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub2"
        element={
          <Layout>
            <PeerPhase2 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub3"
        element={
          <Layout>
            <PeerPhase3 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub4"
        element={
          <Layout>
            <PeerPhase4 />
          </Layout>
        }
      />
      <Route
        path="/peer/chapter1/sub5"
        element={
          <Layout>
            <PeerPhase5 />
          </Layout>
        }
      />

      <Route
        path="/social"
        element={
          <Layout>
            <SocialContent />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1"
        element={
          <Layout>
            <SocialIntroduction />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub1"
        element={
          <Layout>
            <SocialChapter1 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub2"
        element={
          <Layout>
            <SocialPhase2 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub3"
        element={
          <Layout>
            <SocialPhase3 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub4"
        element={
          <Layout>
            <SocialPhase4 />
          </Layout>
        }
      />
      <Route
        path="/social/chapter1/sub5"
        element={
          <Layout>
            <SocialPhase5 />
          </Layout>
        }
      />

      <Route
        path="/financial"
        element={
          <Layout>
            <FinancialContent />
          </Layout>
        }
      />
      <Route
        path="/financial/chapter1"
        element={
          <Layout>
            <FinancialIntroduction />
          </Layout>
        }
      />
      <Route
        path="/financial/chapter1/sub1"
        element={
          <Layout>
            <FinancialChapter1 />
          </Layout>
        }
      />
      <Route
        path="/financial/chapter1/sub2"
        element={
          <Layout>
            <FinancialPhase2 />
          </Layout>
        }
      />
      <Route
        path="/financial/chapter1/sub3"
        element={
          <Layout>
            <FinancialPhase3 />
          </Layout>
        }
      />
      <Route
        path="/financial/chapter1/sub4"
        element={
          <Layout>
            <FinancialPhase4 />
          </Layout>
        }
      />
      <Route
        path="/financial/chapter1/sub5"
        element={
          <Layout>
            <FinancialPhase5 />
          </Layout>
        }
      />

      <Route
        path="/career"
        element={
          <Layout>
            <CareerContent />
          </Layout>
        }
      />
      <Route
        path="/career/chapter1"
        element={
          <Layout>
            <CareerIntroduction />
          </Layout>
        }
      />
      <Route
        path="/career/chapter1/sub1"
        element={
          <Layout>
            <CareerChapter1 />
          </Layout>
        }
      />
      <Route
        path="/career/chapter1/sub2"
        element={
          <Layout>
            <CareerPhase2 />
          </Layout>
        }
      />
      <Route
        path="/career/chapter1/sub3"
        element={
          <Layout>
            <CareerPhase3 />
          </Layout>
        }
      />
      <Route
        path="/career/chapter1/sub4"
        element={
          <Layout>
            <CareerPhase4 />
          </Layout>
        }
      />
      <Route
        path="/career/chapter1/sub5"
        element={
          <Layout>
            <CareerPhase5 />
          </Layout>
        }
      />

      <Route
        path="/discrimination"
        element={
          <Layout>
            <DiscriminationContent />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1"
        element={
          <Layout>
            <DiscriminationIntroduction />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1/sub1"
        element={
          <Layout>
            <DiscriminationChapter1 />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1/sub2"
        element={
          <Layout>
            <DiscriminationPhase2 />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1/sub3"
        element={
          <Layout>
            <DiscriminationPhase3 />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1/sub4"
        element={
          <Layout>
            <DiscriminationPhase4 />
          </Layout>
        }
      />
      <Route
        path="/discrimination/chapter1/sub5"
        element={
          <Layout>
            <DiscriminationPhase5 />
          </Layout>
        }
      />

      <Route
        path="/entrepreneurship"
        element={
          <Layout>
            <EntrepreneurshipContent />
          </Layout>
        }
      />
      <Route
        path="/entrepreneurship/chapter1"
        element={
          <Layout>
            <EntrepreneurshipIntroduction />
          </Layout>
        }
      />
      <Route
        path="/entrepreneurship/chapter1/sub1"
        element={
          <Layout>
            <EntrepreneurshipChapter1 />
          </Layout>
        }
      />
      <Route
        path="/entrepreneurship/chapter1/sub2"
        element={
          <Layout>
            <EntrepreneurshipPhase2 />
          </Layout>
        }
      />
      <Route
        path="/entrepreneurship/chapter1/sub3"
        element={
          <Layout>
            <EntrepreneurshipPhase3 />
          </Layout>
        }
      />
      <Route
        path="/entrepreneurship/chapter1/sub4"
        element={
          <Layout>
            <EntrepreneurshipPhase4 />
          </Layout>
        }
      />
      <Route
        path="/entrepreneurship/chapter1/sub5"
        element={
          <Layout>
            <EntrepreneurshipPhase5 />
          </Layout>
        }
      />

      <Route
        path="/adjustment"
        element={
          <Layout>
            <AdjustmentContent />
          </Layout>
        }
      />
      <Route
        path="/adjustment/chapter1"
        element={
          <Layout>
            <AdjustmentIntroduction />
          </Layout>
        }
      />
      <Route
        path="/adjustment/chapter1/sub1"
        element={
          <Layout>
            <AdjustmentChapter1 />
          </Layout>
        }
      />
      <Route
        path="/adjustment/chapter1/sub2"
        element={
          <Layout>
            <AdjustmentPhase2 />
          </Layout>
        }
      />
      <Route
        path="/adjustment/chapter1/sub3"
        element={
          <Layout>
            <AdjustmentPhase3 />
          </Layout>
        }
      />
      <Route
        path="/adjustment/chapter1/sub4"
        element={
          <Layout>
            <AdjustmentPhase4 />
          </Layout>
        }
      />
      <Route
        path="/adjustment/chapter1/sub5"
        element={
          <Layout>
            <AdjustmentPhase5 />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
