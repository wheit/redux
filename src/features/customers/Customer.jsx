import { useSelector } from "react-redux";

function Customer() {
  const customerFullname = useSelector((store) => store.customer.fullName);
  console.log(customerFullname);
  return <h2>👋 Welcome, {customerFullname}</h2>;
}

export default Customer;
