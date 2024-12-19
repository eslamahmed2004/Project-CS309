import React from "react";

const Search = () => {
  return (
    <div style={StyledSearch.container}>
      <h1 style={StyledSearch.H1}>Fast delivery of food, groceries and more</h1>
      <div style={StyledSearch.searchWrapper}>
        <input
          style={StyledSearch.Searchbar}
          type="text"
          placeholder="Search for want food"
          className="search-input"
        />
        <img src="/search.webp" alt="icon" style={StyledSearch.icon} />
      </div>
    </div>
  );
};

const StyledSearch = {
  container: {
    textAlign: "center", // لتوسيط المحتوى داخل الـ div
    padding: "20px 0", // إضافة padding أعلى وأسفل
    background: "#fdc3a4", // تدرج لوني من اللون البرتقالي إلى الوردي
    minHeight: "100%", // لضمان أن المحتوى يملأ الشاشة بالكامل
  },
  searchWrapper: {
    position: "relative", // لتحديد موضع الأيقونة داخل حقل البحث
    display: "inline-block", // للتمكين من محاذاة العناصر بجانب بعضها
  },
  Searchbar: {
    width: "70%", // عرض شريط البحث
    height: "40px", // ارتفاع حقل البحث
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "10px 40px 10px 10px", // إضافة padding داخلي لترك مساحة للأيقونة
    fontSize: "16px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
    border: "1px solid #ccc",
    outline: "none",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  },
  H1: {
    fontSize: "36px",
    color: "#000000",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    margin: "80px auto",
  },
  icon: {
    position: "absolute", // يتيح وضع الأيقونة داخل الـ searchbar
    right: "25px", // تحديد المسافة من الطرف الأيمن
    top: "50%", // توسيط الأيقونة عموديًا
    transform: "translateY(-50%)", // تعديل الموضع بحيث تكون الأيقونة في المنتصف عموديًا
    width: "20px", // حجم الأيقونة
    height: "20px",
    cursor: "pointer", // إضافة مؤشر يشير إلى أن الأيقونة قابلة للنقر
  },
};

export default Search;
