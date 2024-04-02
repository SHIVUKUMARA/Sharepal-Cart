import React, { useState } from "react";
import OrderItem from "./OrderItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./details.css";
import { RiUserReceivedLine } from "react-icons/ri";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdConfirmationNumber } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { FaTruckPickup, FaCheckCircle } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";

// Sample data
const ordersData = [
  {
    order_id: "BANTR1701441990199R",
    order_date: "Wednesday, December 06,2023",
    delivery_date: "Tuesday, December 05,2023",
    pickup_date: "Wednesday, December 20,2023",
    total_order_amount: 4278,
    stages: [
      { name: "Order Received", completed: true, icon: <RiUserReceivedLine /> },
      { name: "KYC Received", completed: true, icon: <CiMoneyCheck1 /> },
      {
        name: "Order Confirmed",
        completed: true,
        icon: <MdConfirmationNumber />,
      },
      { name: "Order Packed", completed: true, icon: <BsBox2 /> },
      {
        name: "Order Delivered",
        completed: true,
        icon: <FaPersonMilitaryToPerson />,
      },
      { name: "Pickup Due", completed: false, icon: <FaTruckPickup /> },
      { name: "Pickup Scheduled", completed: false, icon: <MdSchedule /> },
      { name: "Quality Checked", completed: false, icon: <FaCheckCircle /> },
    ],
    items: [
      {
        name: "TREK 100 Trekking Shoes - Women's EU40 - UK6.5",
        size: "EU40 - UK6.5",
        quantity: 1,
        rent: 1539,
        total_rental_amount: 1539,
        image:
          "https://5.imimg.com/data5/SELLER/Default/2021/7/VH/NP/RF/26489940/quechua-mh100-khaki-mens-hiking-shoes.jpg",
      },
      {
        name: "TREK 100 Trekking Shoes - Women's EU38 - UK5",
        size: "EU38 - UK5",
        quantity: 1,
        rent: 1539,
        total_rental_amount: 1539,
        image:
          "https://xdogtrekking.com/wp-content/uploads/2023/11/Riding-shoes-for-bikers-on-rent.png",
      },
    ],
  },
  // Add more orders here if needed
];

const Details = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOrderClick = (orderId) => {
    // Toggle visibility of order item details only on single click
    if (selectedOrder === orderId) {
      setSelectedOrder(null); // Hide details if already selected
    } else {
      setSelectedOrder(orderId); // Show details if not selected
    }
  };

  const filteredOrders = ordersData.filter((order) =>
    order.order_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="myorder">My Orders</div>
      <div className="container mt-4 order">
        <h3>Details</h3>
        <div className="list-group">
          {filteredOrders.map((order, index) => (
            <OrderItem
              key={index}
              order={order}
              selectedOrder={selectedOrder}
              onClick={handleOrderClick}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
