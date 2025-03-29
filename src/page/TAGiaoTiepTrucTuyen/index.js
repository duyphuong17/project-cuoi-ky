import "./TAGiaoTiepTrucTuyen.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function TAGiaoTiepTrucTuyen() {
    return (
        <>
            <div className="kh-bg-main" style={{ backgroundImage: `url(/image/bg-kh-2.jpg)` }}>
                <div className="kh-bg-container">
                    <div className="kh-bg-inner-wrap">
                        <h1 className="kh-bg-inner-title">KHOÁ TIẾNG ANH GIAO TIẾP TRỰC TUYẾN</h1>
                        <p className="kh-bg-inner-desc">Khoá học tiếng Anh trực tuyến đào tạo toàn diện 4 kỹ năng chất lương cao. Thiết kế riêng cho người đi làm bận rộn phục vụ đào tạo chuyên sâu giao tiếp trong môi trường làm việc.</p>
                    </div>
                </div>
                <div className="kh-bg-img">
                    <img src="/image/bg-kh-1.png" alt="anh-nen" />
                </div>
            </div>

            <div className="kh-course-container">
                <h1 className="kh-course-title">CHOOSE YOUR COURSE</h1>
                <h2 className="kh-course-subtitle">CÁC KHOÁ HỌC GIAO TIẾP TẠI PATADO</h2>

                <div className="kh-course-table">
                    <div className="kh-column">
                        <div className="kh-decs-title"></div>
                        <div className="kh-course-decs">
                            <p>Số buổi/ tuần</p>
                            <p>Quy mô lớp học</p>
                            <p>Tiêu chuẩn giáo viên</p>
                            <p>Học liệu Patado</p>
                            <p>Kiểm tra trình độ đầu vào</p>
                            <p className="kh-in">Kiểm tra định kỳ với giáo viên</p>
                            <p className="kh-in">Bảo lưu lớp học</p>
                        </div>
                    </div>
                    <div className="kh-column kh-hover">
                        <div className="kh-decs-title">Standard – Tiêu chuẩn</div>
                        <div className="kh-course-decs">
                            <p>3 buổi / tuần</p>
                            <p>1 thầy – 2 trò</p>
                            <p>7.5+ IELTS, Chứng chỉ sư phạm</p>
                            <p>&#10004;</p>
                            <p>&#10004;</p>
                            <p>1 tháng 1 lần</p>
                            <p>Theo quy định</p>
                        </div>
                        <button className="button">Đăng ký ngay</button>
                    </div>
                    <div className="kh-column kh-hover">
                        <div className="kh-decs-title">VIP – cấp tốc</div>
                        <div className="kh-course-decs">
                            <p>3-5 buổi / tuần</p>
                            <p>1 thầy – 1 trò</p>
                            <p>7.5+ IELTS, Chứng chỉ sư phạm</p>
                            <p>&#10004;</p>
                            <p>&#10004;</p>
                            <p>1 tháng 1 lần</p>
                            <p>Theo quy định</p>
                        </div>
                        <button className="button">Đăng ký ngay</button>
                    </div>
                    <div className="kh-column kh-hover">
                        <div className="kh-decs-title">Enterprise – Lớp học doanh nghiệp</div>
                        <div className="kh-course-decs">
                            <p>Tuỳ theo yêu cầu</p>
                            <p>Tuỳ theo yêu cầu</p>
                            <p>Giáo viên tuyển chọn và đội ngũ cố vấn</p>
                            <p>&#10004;</p>
                            <p>Tại doanh nghiệp</p>
                            <p>1 tháng 1 lần</p>
                            <p>Theo quy định</p>
                        </div>
                        <button className="button">Đăng ký ngay</button>
                    </div>
                </div>
            </div>


            <div className="kh-1">
                <h2 className="kh-1-title">Kèm theo trong mọi khóa học tại Patado</h2>
                <div className="kh-1-container">
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Group hỗ trợ học tập: 2000+ học viên các cấp độ</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Ứng dụng luyện phát âm 24/24 ELSA Speak AI</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Hướng dẫn học viên tự học theo lộ trình tại nhà</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Xây dựng lộ trình học tập riêng theo cá nhân và mong muốn</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Đánh giá chấm điểm giáo viên định kỳ theo tuần, tháng</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Đề xuất thay đổi giảng viên</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Thường xuyên nhắc nhở đảm bảo tiến độ học cho học viên</p>
                    </div>
                    <div className="kh-1-desc">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Tổng đài hỗ trợ 24/7 giải đáp thắc mắc học viên</p>
                    </div>
                </div>
            </div>

            {/* kh-2 */}
            <div className="kh-2 ">
                <h3 className="kh-2-title">ABOUT OUR COURSE</h3>
                <h2 className="kh-2-subtitle">KHÓA HỌC NÀY CÓ GÌ ĐẶC BIỆT</h2>
                <div className="container">
                    <div className="row align-items-center justify-content-between ">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-image">
                                <img src="/image/kh-2.1.jpg" alt="Khóa học" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-content">
                                <h3 className="kh-2-inner-title">Mô hình học 1 thầy 1 trò</h3>
                                <div className="kh-2-inner-desc">
                                    <p >- Kết nối giáo viên giỏi 8 nước gần gũi nhiệt tình với kinh nghiệm lâu năm và được sự yêu mến của nhiều học viên</p>
                                    <p >- Giáo viên sát sao, đồng hành cùng bạn 24/24, giải đáp mọi vấn đề</p>
                                    <p >- Lớp học sĩ số nhỏ chi phí chỉ bằng một nửa so với việc học trung tâm đắt đỏ</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-content">
                                <h3 className="kh-2-inner-title">Thực hành liên tục, xuyên suốt buổi học</h3>
                                <div className="kh-2-inner-desc">
                                    <p>- Học với phương pháp Shadowing nắn chuẩn cho bạn cách phát âm chuẩn, ngữ điệu như người bản xứ</p>
                                    <p >- Sửa lỗi kịp thời, hổng ở đâu bù đắp ngay lập tức</p>
                                    <p >- Luyện tập phản xạ nhanh, tư duy nói hoàn toàn bằng tiếng Anh</p>
                                    <p >- Tăng thời gian tương tác với giáo viên nhờ lớp sĩ số nhỏ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-image wow bounceInUp">
                                <img src="/image/kh-2.2.jpg" alt="Thực hành liên tục" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-between ">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-image">
                                <img src="/image/kh-2.3.jpg" alt="Lộ trình học" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-content">
                                <h3 className="kh-2-inner-title">Lộ trình học riêng cho từng học viên</h3>
                                <div className="kh-2-inner-desc">
                                    <p>- Đánh giá trình độ hoàn toàn miễn phí đem ra lời khuyên thích hợp</p>
                                    <p>- Lộ trình được thiết kế bởi cố vấn, chuyên gia giảng dạy tại Patado</p>
                                    <p>- Học theo nhu cầu, cá nhân hoá lộ trình cho học viên</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-content">
                                <h3 className="kh-2-inner-title">Thực hành liên tục, xuyên suốt buổi học</h3>
                                <div className="kh-2-inner-desc">
                                    <p >- Học với phương pháp Shadowing nắn chuẩn cho bạn cách phát âm chuẩn, ngữ điệu như người bản xứ
                                    </p>
                                    <p >- Sửa lỗi kịp thời, hổng ở đâu bù đắp ngay lập tức</p>
                                    <p >- Luyện tập phản xạ nhanh, tư duy nói hoàn toàn bằng tiếng Anh</p>
                                    <p >- Tăng thời gian tương tác với giáo viên nhờ lớp sĩ số nhỏ</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-image wow bounceInUp">
                                <img src="/image/kh-2.4.jpg" alt="Lớp học thực hành" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between ">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-image">
                                <img src="/image/kh-2.5.jpg" alt="Khóa học" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="kh-2-inner-content">
                                <h3 className="kh-2-inner-title">Ứng dụng học hiện đại</h3>
                                <div className="kh-2-inner-desc">
                                    <p >- Ứng dụng ZOOM bản VIP tối ưu riêng cho việc học trực tuyến</p>
                                    <p >- Đường truyền ổn định nhờ sử dụng sever quốc tế</p>
                                    <p >Kèm ứng dụng luyện phát âm chuẩn Elsa Speak</p>
                                    <p>- Giúp học viên kết nối với giáo viên và trao đổi một cách dễ dàng cũng như tiếp cận tài liệu và làm bài tập</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="kh-2-button">NHẬN TƯ VẤN NGAY</button>
                </div>
            </div>


            {/* kh-3 */}
            <div className="kh-3" style={{ backgroundImage: `url(/image/kh-3-bg.jpg)` }}>
                <div className="kh-3-main">
                    <h2 className="kh-3-title">NẾU BẠN ĐANG LÀ?</h2>
                    <div className="row align-items-center justify-content-between kh-3-wrap">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-3-content">
                            <img src="/image/kh-3.1.png" />
                            <div className="kh-3-desc-le">
                                <h3>Mô hình học 1 thầy 1 trò</h3>
                                <p>Người mới chưa biết gì về tiếng Anh, không biết bắt đầu học từ đâu. Học để vững kiến thức ngay từ đầu. Cần tìm một lộ trình phù hợp</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-3-content">
                            <img src="/image/kh-3.2.png" />
                            <div className="kh-3-desc-chan">
                                <h3 >Người đang học dang dở và muốn học lại</h3>
                                <p>Quá bận bịu, không đủ động lực, không sắp xếp được thời gian học, khiến bỏ dở việc học tiếng Anh</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between kh-3-wrap">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-3-content">
                            <img src="/image/kh-3.3.png" />
                            <div className="kh-3-desc-le">
                                <h3>Người đã học lâu nhưng quên,
                                    mất gốc,…</h3>
                                <p>Những người từng học nhưng phương pháp chưa đúng, không nhớ lâu, nhanh quên cần tìm lại cảm hứng tiếng Anh</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-3-content">
                            <img src="/image/kh-3.4.png" />
                            <div className="kh-3-desc-chan">
                                <h3 >Đã thử nhiều phương pháp học
                                    nhưng không hiệu quả</h3>
                                <p>Học trung tâm, tự học ở nhà, học người nước ngoài… mà vẫn không đem lại hiệu quả</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between kh-3-wrap">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-3-content">
                            <img src="/image/kh-3.5.png" />
                            <div className="kh-3-desc-le">
                                <h3>Người cần ôn luyện
                                    chứng chỉ IELTS, TOEIC, TOEFL…</h3>
                                <p>Bạn cần ôn thi chứng chỉ để phục vụ các kì thi IELTS, TOEIC, TOEFL… nhưng chi phí quá đắt đỏ</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-3-content">
                            <img src="/image/kh-3.6.png" />
                            <div className="kh-3-desc-chan">
                                <h3 >Cần học cấp tốc phục vụ:
                                    Thi quốc tịch, cấp visa, phỏng vấn,…</h3>
                                <p>Cần lộ trình riêng cấp tốc nhanh gọn để phục vụ riêng những mục tiêu và nhu cầu tiếng Anh cụ thể</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* /kh-4 */}
            <div className="kh-4">
                <h3>LÀM CHỦ 4 KỸ NĂNG</h3>
                <h2>LỘ TRÌNH KHÓA HỌC</h2>
                <div className="row kh-4-main" >
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 kh-4-content">
                        <span className="kh-4-title">Chuẩn hoá ngữ âm học cách phát âm</span>
                        <div class="kh-4-decs">
                            <p>– Phát âm chuẩn 44 phiên âm theo bảng IPA quốc tế</p>
                            <p>- Phân biệt các cặp âm dễ nhầm lẫn</p>
                            <p>– Chuẩn giọng Anh – Anh, Anh– Mỹ từ đầu</p>
                            <p>– Nghe hiểu 80% các đoạn hội thoại tiếng Anh</p>
                            <p>– Nắm bắt 5 quy tắc cơ bản luyện phát âm</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 kh-4-content">
                        <span className="kh-4-title">Học trọn bộ từ vựng thông dụng qua các chủ đề</span>
                        <div class="kh-4-decs">
                            <p>– 20 bộ từ vựng cơ bản trong cuộc sống</p>
                            <p>– Trọn bộ từ vựng phục vụ giao tiếp công sở</p>
                            <p>– Trọn bộ từ vựng tiếng anh chuyên ngành theo nhu cầu</p>
                            <p>– Trọn bộ từ vựng luyện thi các chứng chỉ theo nhu cầu</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 kh-4-content">
                        <span className="kh-4-title">Nắm trọn bí kíp ghi nhớ ngữ pháp tiếp anh</span>
                        <div class="kh-4-decs">
                            <p>– 20 quy tắc ngữ pháp cơ bản</p>
                            <p>– 9 bộ từ loại trong tiếng Anh</p>
                            <p>– 18 cấu trúc câu thông dụng</p>
                            <p>– 12 thì phổ biến trong tiếng Anh</p>
                            <p>– Nắm bắt lỗi sai cơ bản văn nói và văn viết</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 kh-4-content">
                        <span className="kh-4-title">Nắm vững kỹ năng giao tiếp</span>
                        <div class="kh-4-decs">
                            <p>– Tự tin nghe nói đọc hiểu 25 chủ đề thông dụng</p>
                            <p>– Phát triển tư duy ngôn ngữ chủ động sáng tạo câu giao tiếp</p>
                            <p>– Phát triển các kĩ năng viết email, thuyết trình, phỏng vấn…</p>
                            <p>– Kiểm tra và đánh giá nâng trình độ phần còn yếu của học viên</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* kh-5 */}
            <div className="kh-5">
                <h3>TỰ TIN GIAO TIẾP</h3>
                <h2>BẠN NHẬN ĐƯỢC GÌ SAU KHOÁ HỌC</h2>
                <div className="row kh-5-main">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-5-content">
                        <p>Nghe và hiểu được 80% đoạn hội thoại trong công việc, cuộc sống. Tránh được nhầm lẫn phổ biến khi nghe hiểu tiếng Anh</p>
                        <p>Nắm được phiên âm 44 ngữ âm tiếng Anh theo bảng phiên âm tiếng Anh quốc tế IPA</p>
                        <p>Tự tin giao tiếp, chia sẻ sở thích nói về các chủ đề thông dụng như gia đình, cuộc sống, công việc, đời sống với gia đình bạn bè</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 kh-5-content">
                        <p>Nắm vững vốn 3000 từ vựng tiếng anh giao tiếp thông dụng sử dụng trong cuộc sống, công việc.</p>
                        <p>Sử dụng thành thạo ngữ pháp tiếng Anh, học được tư duy tự phát triển và suy nghĩ câu giao tiếp mới. Tránh học vẹt và học tiếng Anh bồi</p>
                        <p>Hiểu được câu từ và nghe nói giao tiếp được với người bản xứ tự tin du lịch và giao dịch tại các quốc gia nói tiếng Anh</p>
                    </div>
                </div>
                <div>
                    <a href="#" className="kh-5-button">Đăng ký ngay</a>
                </div>
            </div>


            <div className="kh-6" style={{ backgroundImage: `url(/image/bg-kh-2.jpg)` }}>
                <h2>QUYỀN LỢI HỌC VIÊN XUYÊN SUỐT LỘ TRÌNH</h2>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 kh-6-content" >
                        <img src="/image/kh-6.1.png" />
                        <div className="kh-6-desc">
                            <span>Giảng viên</span>
                            <p>Được lựa chọn và thay đổi giáo viên yêu thích, tăng thêm hứng thú trong việc học</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 kh-6-content">
                        <img src="/image/kh-6.2.png" />
                        <div className="kh-6-desc">
                            <span>Báo cáo tiến bộ lớp học định kỳ</span>
                            <p>Kết quả được cập nhật liên tục có hỗ trợ trực tiếp qua nhóm chat, group hỗ trợ học viên</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 kh-6-content">
                        <img src="/image/kh-6.3.png" />
                        <div className="kh-6-desc">
                            <span>Cá nhân hoá lộ trình theo mục tiêu</span>
                            <p>Xây dựng lộ trình riêng, tư vấn định hướng học tuỳ theo mục tiêu của học viên</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 kh-6-content">
                        <img src="/image/kh-6.4.png" />
                        <div className="kh-6-desc">
                            <span>Tài liệu tự học tiếng Anh miễn phí</span>
                            <p>Cung cấp hệ sinh thái tài liệu, học liệu cho học viên như tiếng Anh chuyên ngành, IELTS, TOEIC</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="kh-7">
                <h2>Giáo viên của chúng tôi là ai?</h2>
                <p>Hệ thống tiếng anh trực tuyến Patado tiên phong trong việc xây dựng đội ngũ giáo viên Việt Nam 7.5+ IELTS
                    và đạt tiêu chuẩn châu âu về nghiệp vụ sư phạm.</p>
                <div>
                    <a href="/giangvien/">xem thêm</a>
                </div>
            </div>

            {/* kh-8 */}
            <div className="kh-8">
                <h2>Truy cập ngay kho bài viết hữu ích</h2>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 kh-8-content">
                        <a href="">
                            <img src="/image/kh-8.1.png" />
                        </a>
                        <div className="kh-8-desc">
                            <span >Kho 200+ Từ Vựng Tiếng Anh Chuyên Ngành Kế Toán Thông Dụng Nhất</span>
                            <p>Từ vựng tiếng anh Vocab & Grammar
                                Kế toán đã là một chuyên ngành không còn xa lạ gì với mỗi chúng ta. Trong thời đại hội nhập hóa như hiện</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm- col-4 kh-8-content">
                        <a href="">
                            <img src="/image/kh-8.2.jpg" />
                        </a>
                        <div className="kh-8-desc">
                            <span >Các bài tập luyện thi IELTS hiệu quả khi học tại nhà</span>
                            <p>Tận dụng thời gian để làm các bài tập luyện thi IELTS tại nhà nhưng bạn lại chưa biết nên tìm nguồn bài tập</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 kh-8-content">
                        <a href="">
                            <img src="/image/kh-8.1.png" />
                        </a>
                        <div className="kh-8-desc">
                            <span >[Gợi ý] Sách luyện thi IELTS tại nhà giúp bạn đạt band 5.5 – 6.0</span>
                            <p>Các bạn phân vân nên mua sách luyện thi IELTS nào phù hợp với bản thân sớm đạt band 5.5 – 6.0 IELTS? Chưa </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 kh-8-content">
                        <a href="">
                            <img src="/image/kh-8.3.jpg" />
                        </a>
                        <div className="kh-8-desc">
                            <span >Lên kế hoạch luyện thi IELTS cấp tốc đạt hiệu quả tối đa</span>
                            <p>Kinh nghiệm thi
                                Khi bắt đầu tìm hiểu về IELTS, các bạn đừng vội vàng bắt tay vào việc luyện đề hoặc học các kiến thức</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 kh-8-content">
                        <a href="">
                            <img src="/image/kh-8.4.jpg" />
                        </a>
                        <div className="kh-8-desc">
                            <span >Download tài liệu luyện thi IELTS miễn phí chuẩn quốc tế 2020</span>
                            <p>Sách luyện thi IELTS
                                Được các học viên lựa chọn là địa chỉ uy tín luôn đồng hành trên con đường học luyện thi IELT</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 kh-8-content">
                        <a href="">
                            <img src="/image/kh-8.5.jpg" />
                        </a>
                        <div className="kh-8-desc">
                            <span >Nhận biết các dạng bài tập luyện thi IELTS online Listening thường gặp.</span>
                            <p>Người mới bắt đầu tìm hiểu và luyện thi IELTS thường sẽ dành một khoảng thời gian để làm quen với các dạng</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* kh-9 */}
            <div className="kh-9">
                <div className="kh-9-title">
                    <h2>Our clients and </h2>
                    <h2 className="kh-9-partner"> partner</h2>
                </div>
                <div className="kh-9-image">
                    <img src="/image/kh-9.1.jpg" />
                    <img src="/image/kh-9.2.jpg" />
                    <img src="/image/kh-9.3.jpg" />
                    <img src="/image/kh-9.4.jpg" />
                    <img src="/image/kh-9.5.jpg" />
                </div>
            </div>

            <div className="kh-10">
                <div className="row kh-10-main" style={{ backgroundImage: `url(/image/kh-10.1.jpg)` }}>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 kh-10-image">
                        <img src="/image/kh-10.2.jpg" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="kh-10-form">
                            <h3>ĐĂNG KÝ NHẬN LỘ TRÌNH HỌC NGAY HÔM NAY</h3>
                            <input type="text" placeholder="Họ và tên" />
                            <input type="email" placeholder="Email của bạn" />
                            <input type="text" placeholder="Quốc gia bạn đang sinh sống" />
                            <input type="tel" placeholder="Số điện thoại" />
                            <input type="text" placeholder="Link Facebook/Zalo/Khác (nếu có)" />
                            <button>Đăng ký tư vấn</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default TAGiaoTiepTrucTuyen;
