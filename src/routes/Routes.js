// import {Route, Routes} from "react-router-dom";
// import SharedLayout from "../features/ui/sharedLyout/SharedLayout";
// import React, {lazy,Suspense } from "react";
// import {LinearProgress} from "@mui/material";
//
//
// const HomePage = lazy(() =>
//     import('../pages/HomePage' ),
// );
// const NewsPage = lazy(() =>
//     import('../pages/NewsPage'),
// );
// const ProfilePage = lazy(() =>
//     import('../pages/ProfilePage'),
// );
//
//
// export  const MyRoutes = () =>{
//     return(
//         <Suspense fallback={<LinearProgress />}>
//             <Routes>
//                 <Route path="/" element={<SharedLayout />}>
//                     <Route index element={HomePage} />
//                     <Route path="/news" element={NewsPage} />
//                     <Route path="/profile" element={ProfilePage} />
//                 </Route>
//             </Routes>
//         </Suspense>
//     )
// }
