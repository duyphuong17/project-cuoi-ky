import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <header>
                <div className="header">
                    <div className="header-top">
                        <span className="inner-title">Công ty cổ phần giáo dục Edutech Việt Nam</span>
                        <div className="inner-center">
                            <div className="inner-logo">
                                <a href="#">
                                    <img src="../image/logo.jpg" alt="logo" />
                                </a>
                            </div>
                            <div className="inner-contact">
                                <span>Edutech@patado.edu.vn</span>
                                <a href="#" className="button">Đăng ký ngay</a>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="inner-menu">
                            <Link className="custom-link" to={"/"}>Trang chủ</Link>
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle">Giới thiệu </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/giangvien/">Đội ngũ giảng viên</a></li>
                                    <hr></hr>
                                    <li><a  href="/hoidap/">Hỏi đáp - FAQ</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle">Học viên </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Học viên tiêu biểu</a></li>
                                    <hr></hr>
                                    <li><a href="#">Cảm nhận học viên</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle">Khóa học </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/tagiaotieptructuyen/">Tiếng Anh giao tiếp</a></li>
                                    <hr></hr>
                                    <li><a href="/khoahocielts/">Khóa học IELTS</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <a href="#" className="dropdown-toggle">Blog tiếng Anh </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Tiếng Anh giao tiếp</a></li>
                                    <hr></hr>
                                    <li><a href="#">Tiếng Anh cho người đi làm</a></li>
                                    <hr></hr>
                                    <li><a href="#">Luyện thi IELTS</a></li>
                                </ul>
                            </div>
                            <Link className="custom-link" to={"/lienhe/"}>Thông tin liên hệ</Link>
                        </div>
                        <div className="inner-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
