import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Blog } from "./pages/Blog"
import { NotFound } from "./pages/NotFound"
import { Community } from "./pages/Community"
import { Discord } from "./pages/Discord"
import { Events } from "./pages/Events"
import { Donate } from "./pages/Donate"
import { Story } from "./pages/OurStory"
import { Ressources } from "./pages/Ressources"

function App() {

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
        rel="stylesheet"
      ></link>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Discord" element={<Discord />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/OurStory" element={<Story />} />
          <Route path="/Ressources" element={<Ressources />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
