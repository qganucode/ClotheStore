import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import "./yourOrder.scss";

const YourOrder = () => {
  const user = useSelector((state) => state.userProfile);
  const userId = user.userData.user.id.toString();
  console.log("user:", userId);

  const { loading, data, error } = useFetch(`/orders/17`);
  console.log("data orders:", data);
  // const data = [
  //   {
  //     id: 1,
  //     date: '12 / 12 / 2023',
  //     status: "Delivered",
  //     total: 1000,
  //   },
  //   {
  //     id: 2,
  //     date: '12 / 1 / 2023',
  //     status: "Cancelled",
  //     total: 2000,
  //   },
  //   {
  //     id: 3,
  //     date: '12 / 3 / 2023',
  //     status: "On the way",
  //     total: 1200,
  //   },
  //   {
  //     id: 4,
  //     date: '19 / 5 / 2023',
  //     status: "Delivered",
  //     total: 1800,
  //   },
  // ];
  return (
    <div className='yourOrder'>
      <h1 className='heading'>Your Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>
                  <p>
                    {item.status === "Delivered" && (
                      <span className='greendot'></span>
                    )}
                    {item.status === "On the way" && (
                      <span className='yellowdot'></span>
                    )}
                    {item.status === "Cancelled" && (
                      <span className='reddot'></span>
                    )}
                    {item.status}
                  </p>
                </td>
                <td>${item.total}</td>
                <td>
                  <button className='btn-order-form'>View</button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrder;
