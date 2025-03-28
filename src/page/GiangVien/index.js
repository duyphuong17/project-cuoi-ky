import "./GiangVien.css"

function GiangVien() {
    return (
        <>
            <div className="gv">
                <h1 className="gv-title">ĐỘI NGŨ GIẢNG VIÊN</h1>
                <div className="gv-main">
                    <div className="gv-img">
                        <img src="/image/anh-gv.jpg" alt="ảnh giang viên"></img>
                    </div>
                    <div className="gv-content">
                        <h2 className="gv-name">Trần Diệp Hoàng Kim</h2>
                        <div className="gv-desc">
                            <p>- Chứ chỉ IELTS 7.5</p>
                            <p>- Tốt nghiệp Ngôn ngữ Anh Đại học Đà Lạt, 5 năm kinh nghiệm dạy IELTS</p>
                        </div>
                    </div>
                </div>
                <div className="gv-main">
                    <div className="gv-img">
                        <img src="/image/anh-gv-1.jpg" alt="ảnh giang viên"></img>
                    </div>
                    <div className="gv-content">
                        <h2 className="gv-name">Phan Viết Nhân Anh</h2>
                        <div className="gv-desc">
                            <p>- Chứ chỉ IELTS 8</p>
                            <p>- Tốt nghiệp Ngôn ngữ Anh Đại học Ngoại Thương, 6 năm kinh nghiệm dạy IELTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GiangVien;