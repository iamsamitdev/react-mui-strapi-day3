// import { Button, Stack } from '@mui/material'
// import { Delete, Send, Photo } from '@mui/icons-material'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"
import BackendLayout from "./layouts/BackendLayout"
import Dashboard from "./pages/Dashboard"
import Product from "./pages/Product"
import Report from "./pages/Report"
import Setting from "./pages/Setting"

function App() {

  // return (
  //   <>
  //     <h1>MUI Button</h1>
  //     <Stack spacing={2} direction="row">
  //       <Button variant="text">Text</Button>
  //       <Button variant="contained">Contained</Button>
  //       <Button variant="outlined">Outlined</Button>
  //     </Stack>

  //     <h1>MUI Button with Icons</h1>
  //     <Stack spacing={2} direction="row">
  //       <Button variant="text" startIcon={<Delete />}>Delete</Button>
  //       <Button variant="contained" startIcon={<Send />}>Send</Button>
  //       <Button variant="outlined" startIcon={<Photo />}>Photo</Button>
  //     </Stack>
  //   </>
  // )

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<BackendLayout />}>
          <Route path="/backend/dashboard" element={<Dashboard />} />
          <Route path="/backend/product" element={<Product />} />
          <Route path="/backend/report" element={<Report />} />
          <Route path="/backend/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
