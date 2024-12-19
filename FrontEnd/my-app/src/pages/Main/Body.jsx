import React from "react";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="container" style={styles.container}>
      <Link to="/restaurant" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(3).jpg" alt="icon" style={styles.icon} />
          <h1 style={styles.H1}>Order Food</h1>
          <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
          <p style={styles.Body}>
            توصيل مجاني وعروض حصرية وأكثر لدى شركائنا من المطاعم.
          </p>
        </div>
      </Link>

      <Link to="/drink" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(4).jpg" alt="icon" style={styles.icon} />
          <h1 style={styles.H1}>Order Snacks</h1>
          <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
          <p style={styles.Body}>
            لا تضيع وقتك في الانتظار . نوصلك لك الطعام في أسرع وقت.
          </p>
        </div>
      </Link>

      <Link to="/medicine" style={styles.Link}>
        <div style={styles.box}>
          <img src="/wallpaperflare.com_wallpaper(5).jpg" alt="icon" style={styles.icon} />
          <h1 style={styles.H1}>Order Medicin</h1>
          <img src="/order_now.svg" alt="icon" style={styles.orderIcon} />
          <p style={styles.Body}>
            نوصلك لك الدواء في أسرع وقت.
          </p>
        </div>
      </Link>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexWrap: " wrap", // ترتيب المربعات في عدة أسطر عند الحاجة
    justifyContent: "center", // توسيط العناصر داخل الحاوية
    alignItems: "stretch", // التأكد من أن جميع المربعات تأخذ نفس الارتفاع
    gap: "20px", // مسافة ثابتة بين المربعات
    margin: "20px auto",
    padding: "0 10px",
  },
  box: {
    flex: "1 1 calc(33.333% - 40px)", // حجم المربع يكون ثلث العرض
    maxWidth: "450px", // عرض المربع الأقصى
    minHeight: "400px", // الحد الأدنى لارتفاع المربع
    backgroundColor: "#ff7e5f",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  },
  icon: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "0",
  },
  orderIcon: {
    position: "absolute",
    bottom: "30px",
    right: "20px",
    width: "100px",
    height: "80px",
    zIndex: "1",
  },
  H1: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "rgba(0,0,0,0.8)",
    margin: "0",
    zIndex: "0",
  },
  Body: {
    fontSize: "40px",
    color: "rgba(255,255,255,0.8)",
    zIndex: "0",
    marginTop: "10px",
  },
  Link: {
    textDecoration: "none",
  },

  // استجابة للشاشات الصغيرة
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column", // ترتيب المربعات عموديًا
      gap: "15px", // تقليل المسافة بين المربعات
    },
    box: {
      flex: "1 1 100%", // المربع يأخذ عرض الشاشة بالكامل
      maxWidth: "100%", // عرض كامل للشاشة
      minHeight: "400px", // نفس الحد الأدنى للارتفاع
    },
  },
};


export default Food;