import { useState } from "react";
import "./HoiDap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function HoiDap() {
    const [openIndexes, setOpenIndexes] = useState([]); 

    const toggleAnswer = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    const faqs = [
        {
            question: "1. Học IELTS trực tuyến tại Patado thế nào? Có gì khác so với khóa học thông thường?",
            answer: "IELTS trực tuyến tại Patado là mô hình đặc biệt 2 thầy kèm 1 trò với tiêu chuẩn giáo viên 7.5+ IELTS. Khác với lớp học sĩ số đông ( 7-15 bạn ) hoặc lớp học trực tuyến truyền thống, tại Patado, mỗi giáo viên Patado được yêu cầu tiêu chuẩn về bằng cấp 7,5+ IELTS và phụ trách tối đa 2 kỹ năng giúp bạn chuyên sâu về chương trình học. Ngoài ra Patado là đơn vị duy nhất tự tin đưa ra cam kết sau lộ trình học, nếu học viên không đạt mục tiêu tại kỳ thi IELTS sẽ được tài trợ 100% chi phí thi trị giá 4.750.000đ.",
        },
        {
            question: "2. Mình chỉ học tập với giáo viên thôi hay còn hoạt động bổ trợ nào khác?",
            answer: "Để đảm bảo chất lượng học tập, Thời lượng trên lớp, giáo viên dành tối đa thời gian cho bạn chỉ để nạp thêm kiến thức mới ( cách học cũ mất rất nhiều thời gian làm bài & chữa bài tại lớp ).  Bên cạnh đó, học viên sẽ được hướng dẫn & hỗ trợ làm bài tập tại nhà theo các hình thức khác nhau như : Bài viết, vlog hình ảnh hoặc bài tập qua ứng dụng điện thoại ( apps ). Sau 12-18 buổi học mỗi tháng, học viên được kết nối với giáo viên khác của trung tâm để thực hiện bài test đánh giá SỰ TIẾN BỘ một cách công bằng & dựa trên kết quả kiểm tra, giáo viên sẽ thực hiện điều chỉnh tốc độ – nội dung giảng dạy phù hợp ở những tiết học kế tiếp.",
        },
        {
            question: "3.Mình rất lười học, tôi sợ lượng bài tập lớn phải làm để tiến bộ, giải pháp nào cho người lười học như tôi ?",
            answer: "Chăm chỉ là yếu tố tiên quyết của việc học ngoại ngữ. Tuy nhiên, để giúp các bạn giảm tải áp lực học & lượng bài tập, chương trình tại Patado sẽ được thiết kế theo lộ trình cá nhân cho từng học viên dựa trên đầu vào & mục tiêu đầu ra.Từ đó lược bỏ những phần kiến thức rộng ít áp dụng vào thực tế, đi thẳng vào những nội dung chính, giúp bạn tiết giảm 30% thời gian ôn luyện so với lớp học truyền thống. Với mô hình lớp học 1 thầy – tối đa 2 trò, mỗi tiết học của bạn ( 60’) sẽ hiệu quả gấp nhiều lần cách học truyền thống ( 120’ – 15 học viên bao gồm cả chữa bài, làm bài trên lớp ).  Tổng kết, bạn có thể “lười” một chút với phương pháp tại Patado nhưng nếu “ không muốn làm gì vẫn giỏi ”, không ai có thể giúp bạn !",
        },
        {
            question:"4. Quyền lợi của tôi khi hoàn thành đăng ký trở thành học viên là gì ?",
            answer:"Hãy cùng gạch đầu dòng để các bạn dễ hình dung nhất có thể nhé : 1/ Đăng ký thời gian học tập linh hoạt. Mỗi tuần tối thiểu 3 buổi học, bạn sẽ được đăng ký lịch học cố định nhưng vô cùng linh hoạt từ thứ 2 đến chủ nhật – khung giờ từ 8h00 sáng đến 24h00 đêm. Học ngay không cần chờ mở lớp, không cần lo lắng cố định lịch 2 4 6 hay 3 5 7 như trước đây nữa ! 2/ “Bảo hành” giáo viên Với tiêu chuẩn giáo viên 7.0+ IELTS với chương trình giao tiếp và 7.5+ IELTS với chương trình IELTS, bạn hoàn toàn yên tâm về chuyên môn sư phạm của đội ngũ Patado. Tuy nhiên xuyên suốt lộ trình học, bạn được quyền yêu cầu thay đổi giáo viên không giới hạn nếu cảm thấy tác phong & cách truyền tải kiến thức chưa phù hợp. Vậy là hoàn toàn yên tâm lớp học sẽ đạt hiệu quả cao nhất nhé ! 3/ “Bảo trì bản thân” thường xuyên Sau 12-18 buổi học ( khoảng 1-1,5 tháng ), bạn sẽ được tham gia kiểm tra định kỳ để đo lường sự tiến bộ. Kết quả sau bài kiểm tra giúp bạn hiểu rõ sự tiến bộ trong từng kỹ năng và là căn cứ để giáo viên điều chỉnh lộ trình kế tiếp dành cho bạn ! 4/ Cam kết đầu ra cụ thể, rõ ràng & minh bạch Học viên được công nhận kết quả đào tạo chỉ khi tham gia kỳ thi IELTS quốc tế. Trường hợp không đạt mục tiêu đề ra ban đầu, Patado tài trợ 100% chi phí tham dự kỳ thi IELTS trị giá 4.750.000đ. Vậy là yên tâm cùng chiến đấu nhé !",
        },
        {
            question:"5. Học phí PATADO thế nào ?",
            answer:"Học phí PATADO là bao nhiêu? Học phí tiếng Anh tại PATADO có đắt không? là câu hỏi mà rất nhiều học viên thắc mắc. Học phí tại Patado với tiêu chuẩn giáo viên Việt chuẩn Âu 7.5+ IELTS đã nhận được phản hồi tích cực không chỉ từ những học viên tại HN và TP.HCM mà còn từ khắp Việt Nam như : Cao Bằng, Lạng Sơn, Biên Hòa, Nghệ An… Đặc biệt, chương trình đã triển khai tại 8+ nước như : Mỹ, Úc, Canada, Newzealand,Nhật Bản… Hiện tại, chi phí tại Patado dao động từ 250.000đ – 350.000đ / 1 buổi học. Mức chi phí tương đương một buổi học gia sư trước đây của bạn hoặc thấp hơn rất nhiều so với chi phí yêu cầu 1 giáo viên kèm riêng. Ngoài ra, Patado thường xuyên có những ưu đãi khuyến học để hỗ trợ các bạn học tập thật tốt đó nhé !",
        }
    ];

    return (
        <div className="hd-container">
            {faqs.map((faq, index) => (
                <div className="hd-item" key={index}>
                    <div
                        className={`hd-question ${openIndexes.includes(index) ? "active" : ""}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        {faq.question}
                        <FontAwesomeIcon icon={openIndexes.includes(index) ? faChevronDown : faChevronRight} className="hd-icon" />
                    </div>
                    <div className={`hd-answer ${openIndexes.includes(index) ? "show" : ""}`}>
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HoiDap;
