import './App.css'
import CoreFeatures from './Components/CoreFeatures'
import Features from './Components/Features'
import Footer from './Components/Footer'
import FreeTutorial from './Components/FreeTutorial'
import Hero from './Components/Hero'
import LearnTodaySection from './Components/LearnTodaySection'
import PopularCourse from './Components/PopularCourse'
import Pricing from './Components/Pricing'
import QuestionSection from './Components/QuestionSection'
import Working from './Components/Working'


function App() {
 return (
  <div>
    <Hero></Hero>
    <Features></Features>
    <CoreFeatures></CoreFeatures>
    <PopularCourse></PopularCourse>
    <Working></Working>
    <Pricing></Pricing>
    <FreeTutorial></FreeTutorial>
    <QuestionSection></QuestionSection>
    <LearnTodaySection></LearnTodaySection>
    <Footer></Footer>
  </div>
 )
}

export default App
