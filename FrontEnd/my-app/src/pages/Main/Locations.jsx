import React from "react";
import Footer from "./Footer";
import "./Footer.css";
  
const Locations = () => {
    return(
    <div>
     <div>
            <h1 style={{
                color: "rgb(0,0,0,0.8)", 
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "right",
                margin: "0",
            }}>
                اماكن قريبه من الكليات
            </h1>
     </div>
        <div style={style.Div}>
            <img src="/Screenshot 2024-12-10 183826.png" alt="Backgroud" style={style.image} />
         <div style={style.Container}>
            <div style={style.DivForLinks}>
                <h2 style={style.Text}>كلية العلوم</h2>
                <p style={style.prag}>Break Out اتجه الي</p>
            </div>
            <div style={style.DivForLinks}>
                <h2 style={style.Text}>كلية الحقوق</h2>
                <p style={style.prag}>Break Out اتجه الي</p>
            </div>
            <div style={style.DivForLinks}>
            <h2 style={style.Text}> كلية التجارة </h2>
            <p style={style.prag}> Royal Cafeteria اتجه الي</p>
            </div>
            <div style={style.DivForLinks}>
            <h2 style={style.Text}> كلية السياسة والاقتصاد </h2>
            <p style={style.prag}> Royal Cafeteria اتجه الي</p>
            </div>
            <div style={style.DivForLinks}>
            <h2 style={style.Text}> كلية الاعلام  </h2>
            <p style={style.prag}> Time out اتجه الي</p>
            </div>
         </div>
            
        </div>
        <Footer/>
    </div>
    );

  }

const style = {
    Div: {
        position: "relative",
        width: "100%",
        height: "90vh",
        overflow: "hidden", // لمنع العناصر من تجاوز الإطار
      },
      image: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // لضبط الصورة لتملأ الشاشة بدون تشويه
        position: "absolute", // لجعل الصورة في الخلفية
        top: "0",
        left: "0",
        zIndex: "-1", // الصورة في الخلفية
      },
      Container: {
        position: "absolute",
        top: "7%", // لضبط النصوص فوق الصورة
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px", // مسافة بين العناصر
        alignItems: "center", // لضمان توسيط النصوص أفقياً
      },
      DivForLinks: {
        width: "90%", // يجعل النصوص بعرض 90% من الشاشة
        backgroundColor: "rgba(255, 255, 255, 0.8)", // خلفية بيضاء شفافة
        padding: "20px", // مسافة داخلية
        borderRadius: "10px", // حواف دائرية
        textAlign: "left", // محاذاة النصوص إلى اليسار
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // ظل خفيف
      },
      Text: {
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px", // مسافة أسفل النص
      },
      prag: {
        color: "black",
        fontSize: "1rem",
        fontWeight: "normal",
      },
    }
    export default Locations;