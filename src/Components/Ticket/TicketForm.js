import React, { useState } from "react";
import "./ticket.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketForm = ({ orderId }) => {
  const [ticketDetails, setTicketDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticketDetails.trim() === "") {
      // Show warning toast if textarea is empty
      toast.warn("Please enter your issue before submitting!");
    } else {
      // Here you can perform actions like sending the form data to the server, updating state, etc.
      console.log("Ticket Submitted:", { orderId, ticketDetails });
      // Show success toast if ticket submitted successfully
      toast.success("Ticket submitted successfully!");
      // For demonstration, let's just log the form data
      setTicketDetails("");
    }
  };

  return (
    <div className="ticket">
      <form
        onSubmit={handleSubmit}
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Describe your issues..."
            value={ticketDetails}
            onChange={(e) => setTicketDetails(e.target.value)}
           />
        </div>
        <button
          type="submit"
          className="btn btn-primary button"
        >
          Submit Ticket
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default TicketForm;
