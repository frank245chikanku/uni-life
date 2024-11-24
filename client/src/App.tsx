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


import Chapter3 from "./components/academic/chapter/Chapter3";
import Chapter2 from "./components/academic/chapter/Chapter2";

import AcademicPhase2 from "./components/academic/chapter/phase2"
import AcademicPhase3 from  "./components/academic/chapter/phase3"
import AcademicPhase4 from   "./components/academic/chapter/phase4"
import Academicphase5 from   "./components/academic/chapter/phase5"
import Academicphase6 from   "./components/academic/chapter/phase6" 

import AcademicPhase7 from "./components/academic/chapter/phase7"
import AcademicPhase8 from  "./components/academic/chapter/phase8"
import AcademicPhase9 from   "./components/academic/chapter/phase9"


import PeerIntroduction from "./components/peer/Introduction"
import PeerChapter1 from "./components/peer/Chapter1"
import PeerPhase2 from "./components/peer/Phase2"
import PeerPhase3 from "./components/peer/Phase3"
import PeerPhase4 from "./components/peer/Phase4"
import PeerPhase5 from "./components/peer/Phase5"


import PEERChapter2 from "./components/peer/chapter/PEERChapter2";
import PEERphase2 from "./components/peer/chapter/phase2"
import PEERphase3 from "./components/peer/chapter/phase3"
import PEERphase4 from "./components/peer/chapter/phase4"
import PEERphase5 from "./components/peer/chapter/phase5"


import PEERChapter3 from "./components/peer/chapter/PEERChapter3";
import PEERPhase6 from "./components/peer/chapter/phase6";
import PEERPhase7 from "./components/peer/chapter/Phase7";
import PEERPhase8 from "./components/peer/chapter/phase8";
import PEERPhase9 from "./components/peer/chapter/phase9";


import SocialIntroduction from "./components/social/Introduction"
import SocialChapter1 from "./components/social/Chapter1"
import SocialPhase2 from "./components/social/Phase2"
import SocialPhase3 from "./components/social/Phase3"
import SocialPhase4 from "./components/social/Phase4"
import SocialPhase5 from "./components/social/Phase5"

import SOCIALChapter2 from "./components/social/chapter/SOCIALChapter2";
import SOCIALChapter3 from "./components/social/chapter/SOCIALChapter3";


import SOCIALPhase2 from   "./components/social/chapter/Phase2"
import SOCIALPhase3 from   "./components/social/chapter/phase3"
import SOCIALPhase4 from   "./components/social/chapter/phase4"
import SOCIALPhase5 from   "./components/social/chapter/phase5"

import SOCIALPhase6 from   "./components/social/chapter/phase6"
import SOCIALPhase7 from   "./components/social/chapter/phase7"
import SOCIALPhase8 from   "./components/social/chapter/phase8"
import SOCIALPhase9 from   "./components/social/chapter/phase9"




import FinancialIntroduction from "./components/financial/Introduction"
import FinancialChapter1 from "./components/financial/Chapter1"
import FinancialPhase2 from "./components/financial/Phase2"
import FinancialPhase3 from "./components/financial/Phase3"
import FinancialPhase4 from "./components/financial/Phase4"
import FinancialPhase5 from "./components/financial/Phase5"

import FINANCIALChapter2 from "./components/financial/chapter /FINANCIALChapter2";
import FINANCIALChapter3 from "./components/financial/chapter /FINANCIALChapter3";

import FINANCIALPhase2 from  "./components/financial/chapter /phase2"
import FINANCIALPhase3 from  "./components/financial/chapter /phase3"
import FINANCIALPhase4 from  "./components/financial/chapter /phase4"
import FINANCIALPhase5 from  "./components/financial/chapter /phase5"

import FINANCIALPhase6 from  "./components/financial/chapter /phase6"
import FINANCIALPhase7 from  "./components/financial/chapter /phase7"
import FINANCIALPhase8 from  "./components/financial/chapter /phase8"
import FINANCIALPhase9 from  "./components/financial/chapter /phase9"





import AdjustmentIntroduction from "./components/adjustment/Introduction"
import AdjustmentChapter1 from"./components/adjustment/Chapter1"
import AdjustmentPhase2 from"./components/adjustment/Phase2"
import AdjustmentPhase3 from"./components/adjustment/Phase3"
import AdjustmentPhase4 from"./components/adjustment/Phase4"
import AdjustmentPhase5 from"./components/adjustment/Phase5"

import ADJUSTMENTChapter2 from "./components/adjustment/chapter  /ADJUSTMENTChapter2";
import ADJUSTMENTChapter3 from "./components/adjustment/chapter  /ADJUSTMENTChapter3";

import ADJUSTMENTPhase2   from  "./components/adjustment/chapter  /phase2"
import ADJUSTMENTPhase3  from  "./components/adjustment/chapter  /phase3"
import ADJUSTMENTPhase4   from  "./components/adjustment/chapter  /phase4"
import ADJUSTMENTPhase5  from  "./components/adjustment/chapter  /phase5"
import ADJUSTMENTPhase6  from  "./components/adjustment/chapter  /phase6"

import ADJUSTMENTPhase7  from  "./components/adjustment/chapter  /phase7"
import ADJUSTMENTPhase8  from  "./components/adjustment/chapter  /phase8"
import ADJUSTMENTPhase9  from  "./components/adjustment/chapter  /Phase9"




import CareerIntroduction from "./components/career/Introduction"
import CareerChapter1 from "./components/career/Chapter1"
import CareerPhase2 from "./components/career/Phase2"
import CareerPhase3 from "./components/career/Phase3"
import CareerPhase4 from "./components/career/Phase4"
import CareerPhase5 from "./components/career/Phase5"

import CAREERChapter2 from "./components/career/chapter  /CAREERChapter2";
import CAREERChapter3 from "./components/career/chapter  /CAREERChapter3";
import CAREERPhase2 from  "./components/career/chapter  /phase2"
import CAREERPhase3 from  "./components/career/chapter  /phase3"
import CAREERPhase4 from  "./components/career/chapter  /phase4"
import CAREERPhase5 from  "./components/career/chapter  /phase5"

import CAREERPhase6 from  "./components/career/chapter  /phase6"
import CAREERPhase7 from "./components/career/chapter  /phase7"
import CAREERPhase8 from  "./components/career/chapter  /phase8"
import CAREERPhase9 from  "./components/career/chapter  /phase9"


import EntrepreneurshipIntroduction from "./components/entrepreneurship/Introduction"
import EntrepreneurshipChapter1 from "./components/entrepreneurship/Chapter1"
import EntrepreneurshipPhase2 from "./components/entrepreneurship/Phase2"
import EntrepreneurshipPhase3 from "./components/entrepreneurship/Phase3"
import EntrepreneurshipPhase4 from "./components/entrepreneurship/Phase4"
import EntrepreneurshipPhase5 from "./components/entrepreneurship/Phase5"

import ENTREPRENEURSHIPChapter2 from "./components/entrepreneurship/chapter/ENTREPRENEURSHIPChapter2";
import ENTREPRENEURSHIPChapter3 from "./components/entrepreneurship/chapter/ENTREPRENEURSHIPChapter3";
import ENTREPRENEURSHIPPhase2   from  "./components/entrepreneurship/chapter/phase2"
import ENTREPRENEURSHIPPhase3   from  "./components/entrepreneurship/chapter/phase3"
import ENTREPRENEURSHIPPhase4   from  "./components/entrepreneurship/chapter/phase4"

import ENTREPRENEURSHIPPhase5  from  "./components/entrepreneurship/chapter/phase5"
import ENTREPRENEURSHIPPhase6  from  "./components/entrepreneurship/chapter/phase6"
import ENTREPRENEURSHIPPhase7  from  "./components/entrepreneurship/chapter/phase7"
import ENTREPRENEURSHIPPhase8  from  "./components/entrepreneurship/chapter/phase8"
import ENTREPRENEURSHIPPhase9  from  "./components/entrepreneurship/chapter/phase9"


import DiscriminationIntroduction from "./components/discrimination/Introduction"
import DiscriminationChapter1 from "./components/discrimination/Chapter1"
import DiscriminationPhase2 from "./components/discrimination/Phase2"
import DiscriminationPhase3 from "./components/discrimination/Phase3"
import DiscriminationPhase4 from "./components/discrimination/Phase4"
import DiscriminationPhase5 from "./components/discrimination/Phase5"

import DISCRIMINATIONChapter2 from "./components/discrimination/chapter/DISCRIMINATIONChapter2";
import DISCRIMINATIONChapter3 from "./components/discrimination/chapter/DISCRIMINATIONChapter3";


import DISCRIMINATIONPhase2     from "./components/discrimination/chapter/phase2"
import DISCRIMINATIONPhase3     from "./components/discrimination/chapter/phase3"
import DISCRIMINATIONPhase4     from "./components/discrimination/chapter/phase4"
import DISCRIMINATIONPhase5     from "./components/discrimination/chapter/phase5"
import DISCRIMINATIONPhase6     from "./components/discrimination/chapter/phase6"
import DISCRIMINATIONPhase7     from "./components/discrimination/chapter/phase7"
import DISCRIMINATIONPhase8     from "./components/discrimination/chapter/phase8"
import DISCRIMINATIONPhase9     from "./components/discrimination/chapter/phase9"








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

    <Route path="/entrepreneurship/chapter2" element={<Layout><ENTREPRENEURSHIPChapter2 /></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub1" element={<Layout><ENTREPRENEURSHIPChapter2/></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub2" element={<Layout><ENTREPRENEURSHIPPhase2/></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub3" element={<Layout><ENTREPRENEURSHIPPhase3/></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub4" element={<Layout><ENTREPRENEURSHIPPhase4/></Layout>} />
    <Route path="/entrepreneurship/chapter2/sub5" element={<Layout><ENTREPRENEURSHIPPhase5/></Layout>} />

    <Route path="/entrepreneurship/chapter3" element={<Layout><ENTREPRENEURSHIPChapter3/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub1" element={<Layout><ENTREPRENEURSHIPChapter3/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub2" element={<Layout><ENTREPRENEURSHIPPhase6/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub3" element={<Layout><ENTREPRENEURSHIPPhase7/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub4" element={<Layout><ENTREPRENEURSHIPPhase8/></Layout>} />
    <Route path="/entrepreneurship/chapter3/sub5" element={<Layout><ENTREPRENEURSHIPPhase9/></Layout>} />



<Route path="/career" element={<Layout><CareerIntroduction /></Layout>} />
    <Route path="/career/chapter1" element={<Layout><CareerChapter1/></Layout>} />
    <Route path="/career/chapter1/sub2" element={<Layout><CareerPhase2/></Layout>} />
    <Route path="/career/chapter1/sub3" element={<Layout><CareerPhase3/></Layout>} />
    <Route path="/career/chapter1/sub4" element={<Layout><CareerPhase4/></Layout>} />
    <Route path="/career/chapter1/sub5" element={<Layout><CareerPhase5/></Layout>} />

    <Route path="/career/chapter2" element={<Layout><CAREERChapter2 /></Layout>} />
    <Route path="/career/chapter2/sub1" element={<Layout><CAREERChapter2/></Layout>} />
    <Route path="/career/chapter2/sub2" element={<Layout><CAREERPhase2/></Layout>} />
    <Route path="/career/chapter2/sub3" element={<Layout><CAREERPhase3/></Layout>} />
    <Route path="/career/chapter2/sub4" element={<Layout><CAREERPhase4/></Layout>} />
    <Route path="/career/chapter2/sub5" element={<Layout><CAREERPhase5/></Layout>} />
    
    <Route path="/career/chapter3" element={<Layout><CAREERChapter3 /></Layout>} />
    <Route path="/career/chapter3/sub1" element={<Layout><CAREERChapter3/></Layout>} />
    <Route path="/career/chapter3/sub2" element={<Layout><CAREERPhase6/></Layout>} />
    <Route path="/career/chapter3/sub3" element={<Layout><CAREERPhase7/></Layout>} />
    <Route path="/career/chapter3/sub4" element={<Layout><CAREERPhase8/></Layout>} />
    <Route path="/career/chapter3/sub5" element={<Layout><CAREERPhase9/></Layout>} />



<Route path="/adjustment" element={<Layout><AdjustmentIntroduction /></Layout>} />
    <Route path="/adjustment/chapter1" element={<Layout><AdjustmentChapter1/></Layout>} />
    <Route path="/adjustment/chapter1/sub2" element={<Layout><AdjustmentPhase2/></Layout>} />
    <Route path="/adjustment/chapter1/sub3" element={<Layout><AdjustmentPhase3/></Layout>} />
    <Route path="/adjustment/chapter1/sub4" element={<Layout><AdjustmentPhase4/></Layout>} />
    <Route path="/adjustment/chapter1/sub5" element={<Layout><AdjustmentPhase5/></Layout>} />

    <Route path="/adjustment/chapter2" element={<Layout><ADJUSTMENTChapter2 /></Layout>} />
    <Route path="/adjustment/chapter2/sub1" element={<Layout><ADJUSTMENTChapter2/></Layout>} />
    <Route path="/adjustment/chapter2/sub2" element={<Layout><ADJUSTMENTPhase2/></Layout>} />
    <Route path="/adjustment/chapter2/sub3" element={<Layout><ADJUSTMENTPhase3/></Layout>} />
    <Route path="/adjustment/chapter2/sub4" element={<Layout><ADJUSTMENTPhase4/></Layout>} />
    <Route path="/adjustment/chapter2/sub5" element={<Layout><ADJUSTMENTPhase5/></Layout>} />

    <Route path="/adjustment/chapter3" element={<Layout><ADJUSTMENTChapter3 /></Layout>} />
    <Route path="/adjustment/chapter3/sub1" element={<Layout><ADJUSTMENTChapter3/></Layout>} />
    <Route path="/adjustment/chapter3/sub2" element={<Layout><ADJUSTMENTPhase6/></Layout>} />
    <Route path="/adjustment/chapter3/sub3" element={<Layout><ADJUSTMENTPhase7/></Layout>} />
    <Route path="/adjustment/chapter3/sub4" element={<Layout><ADJUSTMENTPhase8/></Layout>} />
    <Route path="/adjustment/chapter3/sub5" element={<Layout><ADJUSTMENTPhase9/></Layout>} />



    
    <Route path="/financial" element={<Layout><FinancialIntroduction /></Layout>} />
    <Route path="/financial/chapter1" element={<Layout><FinancialChapter1/></Layout>} />
    <Route path="/financial/chapter1/sub2" element={<Layout><FinancialPhase2/></Layout>} />
    <Route path="/financial/chapter1/sub3" element={<Layout><FinancialPhase3/></Layout>} />
    <Route path="/financial/chapter1/sub4" element={<Layout><FinancialPhase4/></Layout>} />
    <Route path="/financial/chapter1/sub5" element={<Layout><FinancialPhase5/></Layout>} />

    <Route path="/financial/chapter2" element={<Layout><FINANCIALChapter2/></Layout>} />
    <Route path="/financial/chapter2/sub1" element={<Layout><FINANCIALChapter2/></Layout>} />
    <Route path="/financial/chapter2/sub2" element={<Layout><FINANCIALPhase2/></Layout>} />
    <Route path="/financial/chapter2/sub3" element={<Layout><FINANCIALPhase3/></Layout>} />
    <Route path="/financial/chapter2/sub4" element={<Layout><FINANCIALPhase4/></Layout>} />
    <Route path="/financial/chapter2/sub5" element={<Layout><FINANCIALPhase5/></Layout>} />

    <Route path="/financial/chapter3" element={<Layout><FINANCIALChapter3 /></Layout>} />
    <Route path="/financial/chapter3/sub1" element={<Layout><FINANCIALChapter3/></Layout>} />
    <Route path="/financial/chapter3/sub2" element={<Layout><FINANCIALPhase6/></Layout>} />
    <Route path="/financial/chapter3/sub3" element={<Layout><FINANCIALPhase7/></Layout>} />
    <Route path="/financial/chapter3/sub4" element={<Layout><FINANCIALPhase8/></Layout>} />
    <Route path="/financial/chapter3/sub5" element={<Layout><FINANCIALPhase9/></Layout>} />


    
    <Route path="/social" element={<Layout><SocialIntroduction /></Layout>} />
    <Route path="/social/chapter1" element={<Layout><SocialChapter1 /></Layout>} />
    <Route path="/social/chapter1/sub2" element={<Layout><SocialPhase2 /></Layout>} />
    <Route path="/social/chapter1/sub3" element={<Layout><SocialPhase3 /></Layout>} />
    <Route path="/social/chapter1/sub4" element={<Layout><SocialPhase4 /></Layout>} />
    <Route path="/social/chapter1/sub5" element={<Layout><SocialPhase5 /></Layout>} />

    <Route path="/social/chapter2" element={<Layout><SOCIALChapter2 /></Layout>} />
    <Route path="/social/chapter2/sub1" element={<Layout><SOCIALChapter2/></Layout>} />
    <Route path="/social/chapter2/sub2" element={<Layout><SOCIALPhase2/></Layout>} />
    <Route path="/social/chapter2/sub3" element={<Layout><SOCIALPhase3/></Layout>} />
    <Route path="/social/chapter2/sub4" element={<Layout><SOCIALPhase4/></Layout>} />
    <Route path="/social/chapter2/sub5" element={<Layout><SOCIALPhase5/></Layout>} />

    <Route path="/social/chapter3" element={<Layout><SOCIALChapter3 /></Layout>} />
    <Route path="/social/chapter3/sub1" element={<Layout><SOCIALChapter3/></Layout>} />
    <Route path="/social/chapter3/sub2" element={<Layout><SOCIALPhase6/></Layout>} />
    <Route path="/social/chapter3/sub3" element={<Layout><SOCIALPhase7/></Layout>} />
    <Route path="/social/chapter3/sub4" element={<Layout><SOCIALPhase8/></Layout>} />
    <Route path="/social/chapter3/sub5" element={<Layout><SOCIALPhase9/></Layout>}/>
    
    <Route path="/academics" element={<Layout><Introduction /></Layout>} />
    <Route path="/academics/chapter1" element={<Layout><Chapter1/></Layout>} />
    <Route path="/academics/chapter1/sub2" element={<Layout><Phase2/></Layout>} />
    <Route path="/academics/chapter1/sub3" element={<Layout><Phase3/></Layout>} />
    <Route path="/academics/chapter1/sub4" element={<Layout><Phase4/></Layout>} />
    <Route path="/academics/chapter1/sub5" element={<Layout><Phase5/></Layout>} />

<Route path="/academics/chapter2" element={<Layout><Chapter2 /></Layout>} />
    <Route path="/academics/chapter2/sub1" element={<Layout><Chapter2 /></Layout>} />
    <Route path="/academics/chapter2/sub2" element={<Layout><AcademicPhase2/></Layout>} />
    <Route path="/academics/chapter2/sub3" element={<Layout><AcademicPhase3/></Layout>} />
    <Route path="/academics/chapter2/sub4" element={<Layout><AcademicPhase4/></Layout>} />
    <Route path="/academics/chapter2/sub5" element={<Layout><Academicphase5/></Layout>} />
    
    <Route path="/academics/chapter3" element={<Layout><Chapter3 /></Layout>} />
    <Route path="/academics/chapter3/sub1" element={<Layout><Chapter3 /></Layout>} />
    <Route path="/academics/chapter3/sub2" element={<Layout><Academicphase6/></Layout>} />
    <Route path="/academics/chapter3/sub3" element={<Layout><AcademicPhase7/></Layout>} />
    <Route path="/academics/chapter3/sub4" element={<Layout><AcademicPhase8/></Layout>} />
    <Route path="/academics/chapter3/sub5" element={<Layout><AcademicPhase9/></Layout>} />
    
  



    <Route path="/discrimination" element={<Layout><DiscriminationIntroduction /></Layout>} />
    <Route path="/discrimination/chapter1" element={<Layout><DiscriminationChapter1/></Layout>} />
    <Route path="/discrimination/chapter1/sub2" element={<Layout><DiscriminationPhase2/></Layout>} />
    <Route path="/discrimination/chapter1/sub3" element={<Layout><DiscriminationPhase3/></Layout>} />
    <Route path="/discrimination/chapter1/sub4" element={<Layout><DiscriminationPhase4/></Layout>} />
    <Route path="/discrimination/chapter1/sub5" element={<Layout><DiscriminationPhase5/></Layout>} />

    <Route path="/discrimination/chapter2" element={<Layout><DISCRIMINATIONChapter2 /></Layout>} />
    <Route path="/discrimination/chapter2/sub1" element={<Layout><DISCRIMINATIONChapter2/></Layout>} />
    <Route path="/discrimination/chapter2/sub2" element={<Layout><DISCRIMINATIONPhase2/></Layout>} />
    <Route path="/discrimination/chapter2/sub3" element={<Layout><DISCRIMINATIONPhase3/></Layout>} />
    <Route path="/discrimination/chapter2/sub4" element={<Layout><DISCRIMINATIONPhase4/></Layout>} />
    <Route path="/discrimination/chapter2/sub5" element={<Layout><DISCRIMINATIONPhase5/></Layout>} />

    <Route path="/discrimination/chapter3" element={<Layout><DISCRIMINATIONChapter3 /></Layout>} />
    <Route path="/discrimination/chapter3/sub1" element={<Layout><DISCRIMINATIONChapter3/></Layout>} />
    <Route path="/discrimination/chapter3/sub2" element={<Layout><DISCRIMINATIONPhase6/></Layout>} />
    <Route path="/discrimination/chapter3/sub3" element={<Layout><DISCRIMINATIONPhase7/></Layout>} />
    <Route path="/discrimination/chapter3/sub4" element={<Layout><DISCRIMINATIONPhase8/></Layout>} />
    <Route path="/discrimination/chapter3/sub5" element={<Layout><DISCRIMINATIONPhase9/></Layout>} />


 <Route path="/peer" element={<Layout><PeerIntroduction /></Layout>} />
    <Route path="/peer/chapter1" element={<Layout><PeerChapter1/></Layout>} />
    <Route path="/peer/chapter1/sub2" element={<Layout><PeerPhase2/></Layout>} />
    <Route path="/peer/chapter1/sub3" element={<Layout><PeerPhase3/></Layout>} />
    <Route path="/peer/chapter1/sub4" element={<Layout><PeerPhase4/></Layout>} />
    <Route path="/peer/chapter1/sub5" element={<Layout><PeerPhase5/></Layout>} />

    <Route path="/peer/chapter2" element={<Layout><PEERChapter2 /></Layout>} />
    <Route path="/peer/chapter2/sub1" element={<Layout><PEERChapter2/></Layout>} />
    <Route path="/peer/chapter2/sub2" element={<Layout><PEERphase2/></Layout>} />
    <Route path="/peer/chapter2/sub3" element={<Layout><PEERphase3/></Layout>} />
    <Route path="/peer/chapter2/sub4" element={<Layout><PEERphase4/></Layout>} />
    <Route path="/peer/chapter2/sub5" element={<Layout><PEERphase5/></Layout>} />

    <Route path="/peer/chapter3" element={<Layout><PEERChapter3 /></Layout>} />
    <Route path="/peer/chapter3/sub1" element={<Layout><PEERChapter3/></Layout>} />
    <Route path="/peer/chapter3/sub2" element={<Layout><PEERPhase6/></Layout>} />
    <Route path="/peer/chapter3/sub3" element={<Layout><PEERPhase7/></Layout>} />
    <Route path="/peer/chapter3/sub4" element={<Layout><PEERPhase8/></Layout>} />
    <Route path="/peer/chapter3/sub5" element={<Layout><PEERPhase9/></Layout>} />

    </Routes> 
  );
};

export default App;
