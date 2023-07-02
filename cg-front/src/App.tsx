// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
// When using TypeScript 3.x and below
import '@mui/lab/themeAugmentation';
import { TimeLine } from './components/TimeLine';
import { timelineData } from './components/TimeLine/timeline-content';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './components/About';
import { MaquinasMuseu } from './components/MaquinasMuseu';
import { Sources } from './components/Sources';

export default function Index() {

  return (
    <>
    <Layout> 
    <BrowserRouter>
      <Routes>
          <Route path="/timeline" element={<TimeLine content={timelineData} />} />
          <Route path="/" element={<About/>} />
          <Route path="/maquinas-museu" element={<MaquinasMuseu/>} />
          <Route path="/fontes" element={<Sources/>} />
       </Routes>
      </BrowserRouter>
    </Layout>
    </>

  );
}