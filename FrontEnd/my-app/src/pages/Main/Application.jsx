import React from "react";
import { Link } from "react-router-dom";

const Application = () => {
  return (
    <div style={style.backgroundStyle}>
      <h1 style={style.headingStyle}>حمل تطبيق طلبات</h1>
      <p style={style.paragraphStyle}>احصل على ما تريد، عندما تريد.</p>
      <div style={style.iconContainer}>
        {/* وضع صورة الهاتف في أقصى اليسار */}
        <img src="web2app.webp" alt="icon" style={style.icons} />
      </div>
      
      {/* الأيقونات الأخرى تحت النص */}
      <div style={style.iconWrapperContainer}>
        <div style={style.iconWrapper}>
          <Link to={"www.apple.com"} style={style.linkStyle}>
          <img src="logo_appstore.svg" alt="App Store" style={style.icon} />
          <p style={style.iconText}>App Store</p>
          </Link>
        </div>
        <div style={style.iconWrapper}>
          <Link to= "www.googleplay.com" style={style.linkStyle}>
          <img src="logo_playstore.svg" alt="Play Store" style={style.icon} />
          <p style={style.iconText}>Play Store</p>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

const style = {
  backgroundStyle: {
    backgroundColor: '#f5e0d3', // اللون البيج الفاتح للخلفية
    color: '#6a3d32', // اللون البني الداكن للنص
    padding: '80px 20px', // padding حول النص
    textAlign: 'center', // محاذاة النص إلى المنتصف
    fontFamily: "'Cairo', sans-serif", // الخط
    borderRadius: '10px', // حواف دائرية للمربع
    margin: '20px auto', // المسافة حول المربع
    maxWidth: '1000px', // تحديد أقصى عرض للمربع
  },
  headingStyle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraphStyle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // محاذاة الصورة إلى اليسار
    marginTop: '30px', // إضافة مسافة فوق الأيقونة
  },
  iconWrapperContainer: {
    display: 'flex',
    justifyContent: 'center', // محاذاة الأيقونات في الوسط
    gap: '30px', // المسافة بين الأيقونات
    marginTop: '-70px', // إضافة مسافة فوق الأيقونات
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column', // ترتيب الأيقونات والنصوص بشكل عمودي
    alignItems: 'center', // محاذاة العناصر في الوسط
    textAlign: 'center', // محاذاة النصوص إلى الوسط
  },
  icon: {
    width: '150px', // تحديد عرض الأيقونة
    height: 'auto',
    marginBottom: '1px', // المسافة بين الصورة والنص
    borderRadius: '10px', // إضافة حواف دائرية للأيقونات
  },
  iconText: {
    marginTop: '10px', // المسافة بين الصورة والنص
    fontSize: '20px', // حجم النص
    fontWeight: 'bold', // جعل النص عريض
  },
  icons: {
    width: '150px', // حجم صورة الهاتف
    height: 'auto',
    borderRadius: '10px',
  },
  linkStyle: {
    textDecoration: 'none'},
};

export default Application;
