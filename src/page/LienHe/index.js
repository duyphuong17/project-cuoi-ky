import "./Lienhe.css";

function LienHe() {
    return (
        <>
            <h1 className="lh-title">THÔNG TIN LIÊN HỆ</h1>
            <div className="lh-main">
                <div className="lh-wrap">
                    <div className="lh-item">
                        <h2 className="lh-title-1">Trụ sở chính - TP.Hồ Chí Minh</h2>
                        <div className="lh-desc">
                            <p>Địa chỉ văn phòng: 216 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.Hồ Chí Minh</p>
                            <p>Hotline 1: 0125 999 777</p>
                            <p>Hotline 2: 0963 967 585</p>
                            <p>Email: Edutech@patado.edu.vn</p>
                        </div>
                    </div>
                    <div className="lh-item">
                        <h2 className="lh-title-1">Thông tin doanh nghiệp:</h2>
                        <div className="lh-desc">
                            <p>Công ty cổ phần giáo dục Edutech Việt Nam</p>
                            <p>Đăng ký lần đầu: Ngày 28 tháng 08 năm 2024</p>
                        </div>
                    </div>
                </div>
                <div className="lh-image">
                    <img src="/image/anh-lien-he.jpg" alt="Hình ảnh văn phòng" />
                </div>
            </div>
            <h2 className="lh-google-map">Hệ Thống Tiếng Anh Trực tuyến - Google Maps</h2>
            <a className="lh-gg" href="https://www.google.com/maps/place/216+%C4%90.+Nguy%E1%BB%85n+Tr%C3%A3i,+Ph%C6%B0%E1%BB%9Dng+Nguy%E1%BB%85n+C%C6%B0+Trinh,+Qu%E1%BA%ADn+1,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.764015,106.6846067,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f99cf87e8eb:0xa99359f66320adb7!8m2!3d10.7640097!4d106.6871816!16s%2Fg%2F11ss7lv8jc?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D" target="blank">
                <img src="/image/gg-map.png" alt="google map"></img>
            </a>
        </>
    )
}
export default LienHe;