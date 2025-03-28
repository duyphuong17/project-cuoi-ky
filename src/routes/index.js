import Layout from "../layout";
import GiangVien from "../page/GiangVien";
import HoiDap from "../page/HoiDap";
import KhoaHocIELTS from "../page/KhoaHocIELTS";
import LienHe from "../page/LienHe";
import TAGiaoTiepTrucTuyen from "../page/TAGiaoTiepTrucTuyen";
import TrangChu from "../page/TrangChu";



export const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <TrangChu/>,
      },
      {
        path: "lienhe",
        element: <LienHe/>,
      },
      {
        path: "hoidap",
        element: <HoiDap/>,
      },
      {
        path: "giangvien",
        element: <GiangVien/>,
      },
      {
        path: "tagiaotieptructuyen",
        element: <TAGiaoTiepTrucTuyen/>,
      },
      {
        path: "khoahocielts",
        element: <KhoaHocIELTS/>,
      }
    ],
  },
];
