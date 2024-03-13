import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const OrdersCalendarView = () => {
  const [events, setEvents] = useState([]);
  const mockOrders = useSelector((store) => store.orders.ordersData);

  useEffect(() => {
    const eventsArray = mockOrders.map((order) => ({
      id: order.orderId,
      title: `Order ${order.orderId} - ${order.customerName}`,
      start: moment(order.orderDate, "D MMM YYYY").toDate(),
      end: moment(order.orderDate, "D MMM YYYY").toDate(),
    }));
    setEvents(eventsArray);
  }, []);

  const handleEventClick = (event) => {
    //console.log("Clicked Event:", event);
  };

  return (
    <div className="p-4">
      <h1 className=" text-lg md:text-2xl font-semibold mb-4 text-center">
        Orders Calendar View
      </h1>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleEventClick}
        />
      </div>
    </div>
  );
};

export default OrdersCalendarView;
