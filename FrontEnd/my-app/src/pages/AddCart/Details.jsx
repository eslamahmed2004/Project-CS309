import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import Footer from "./Footer";

const OrderDetails = ({ initialOrder }) => {
    const [order, setOrder] = useState(initialOrder || { items: [], totalAmount: 0 }); // حالة الطلب

    // وظيفة لإضافة منتج جديد إلى الطلب
    const addItemToOrder = (item) => {
        const updatedItems = [...order.items, item];
        const updatedTotal = updatedItems.reduce((sum, curr) => sum + curr.quantity * curr.price, 0);

        setOrder({
            ...order,
            items: updatedItems,
            totalAmount: updatedTotal,
        });
    };

    // منتجات للاختيار (تستطيع جلبها من API)
    const availableItems = [
        { id: 1, name: "بيتزا", price: 100, quantity: 1, currency: "جنيه" },
        { id: 2, name: "مشروب غازي", price: 20, quantity: 1, currency: "جنيه" },
        { id: 3, name: "برجر", price: 150, quantity: 1, currency: "جنيه" },
    ];

    return (
        <div>
            {/* Navbar */}
            <navbar className="navbar2">
                <Link to="/">
                    <img src="./home.png" alt="icon" className="icon" />
                </Link>
                <button className="buttonLan">
                    AR <img src="./globe.png" alt="icon" className="iconglo" />
                </button>
                <button className="buttonflag">
                    <img src="./egypt.png" alt="icon" className="iconegy" />
                </button>
                <button className="buttonperson">
                    <img src="./user.png" alt="icon" className="iconegy" />
                </button>
            </navbar>

            {/* Container */}
            <div className="container">
                <h2>تفاصيل الطلب</h2>
                <div className="order-details">
                    <p>رقم الطلب: {order.orderNumber}</p>
                    <p>التاريخ: {order.date}</p>
                    <p>المنتجات:</p>
                    <ul>
                        {order.items.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.quantity} × {item.price} {item.currency}
                            </li>
                        ))}
                    </ul>
                    <p>المجموع: {order.totalAmount} {order.currency}</p>
                </div>
                
                <h3>منتجات للاختيار:</h3>
                <div className="available-items">
                    {availableItems.map((item) => (
                        <button
                            key={item.id}
                            className="item-button"
                            onClick={() => addItemToOrder(item)}
                        >
                            {item.name} - {item.price} {item.currency}
                        </button>
                    ))}
                </div>

                <Link to="/Restaurant">عرض المزيد من الطلبات</Link>
            </div>
            <Footer />
        </div>
    );
};

export default OrderDetails;
