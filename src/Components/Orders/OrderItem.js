import React, { useState } from "react";
import "./orderitem.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import TicketForm from "../Ticket/TicketForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderItem = ({ order, selectedOrder, onClick }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    onClick(order.order_id);
  };

  const handleOrderIDClick = (e) => {
    e.stopPropagation(); // Prevent parent click event from being triggered
    navigator.clipboard.writeText(order.order_id); // Copy order ID to clipboard
    toast.success("Order ID copied to clipboard!");
  };

  const handleViewItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div
      className={`list-group-item list-group-item-action ${
        selectedOrder === order.order_id ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <div>
        <div className="card">
          <div className="left">
            <h5 className="mb-1" onClick={handleOrderIDClick}>
              Order ID:{" "}
              <b style={{ color: "#5356FF", cursor: "pointer" }}>
                {order.order_id}
              </b>
            </h5>
            <p className="mb-1">Order Date: {order.order_date}</p>
            <p className="mb-1">Delivery Date: {order.delivery_date}</p>
            <p className="mb-1">Pickup Date: {order.pickup_date}</p>
            <p className="mb-1">
              Total Amount:{" "}
              <b style={{ color: "red" }}>₹{order.total_order_amount}</b>
            </p>
          </div>
          <div className="right">
            <TicketForm />
          </div>
        </div>
        <hr className="line" />
        <p onClick={handleViewItems} className="visiblity">
          {showItems ? "Hide Items" : "View Items"}
        </p>
      </div>
      {selectedOrder === order.order_id && showItems && (
        <div>
          <ul className="list-group">
            {order.items.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <img className="product" src={item.image} alt={item.name} />
                    <span>
                      <b>{item.name}</b>
                    </span>
                    <span>Quantity: {item.quantity}</span>
                    <span className="ml-3">
                      Rent:
                      <b style={{ color: "#2aca45" }}> ₹{item.rent}</b>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <VerticalTimeline layout="1-column">
            {order.stages.map((stage, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#F0ECE5", color: "black" }}
                contentArrowStyle={{ borderRight: "7px solid grey" }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={stage.icon}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {stage.name}
                  {stage.completed ? (
                    <span style={{ fontSize: "24px", margin: "10px" }}>
                      <FcApproval />
                    </span> // Render ✓ for completed stages
                  ) : (
                    <span style={{ fontSize: "24px", margin: "10px" }}>
                      <FcDisapprove />
                    </span> // Render ✗ for incomplete stages
                  )}
                </h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
