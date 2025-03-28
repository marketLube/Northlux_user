import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import AddressModal from "../../components/cart/Addressmodal";
import { useDispatch, useSelector } from "react-redux";
import userService from "../../api/services/userService";
import { setUser } from "../../redux/features/user/userSlice";
import { toast } from "sonner";

const SavedAddress = () => {
  const user = useSelector((state) => state.user.user);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const addresses = user?.address;
  const dispatch = useDispatch();

  const handleDeleteAddress = async (id) => {
    try {
      const response = await userService.deleteAddress(id);
      dispatch(setUser(response?.data));
      toast.success("Address deleted successfully");
    } catch (error) {
      toast.error("Failed to delete address");
    }
  };

  return (
    <div className="saved-address-section">
      <h2>Your Saved Address</h2>
      <p className="subtitle">
        Manage your saved addresses for faster and hassle-free checkouts. Add,
        edit, or remove addresses anytime!
      </p>

      <div className="addresses-grid">
        {addresses?.map((addr, index) => (
          <div key={index} className="address-card">
            <div className="card-header">
              <span className="address-label">{addr.label}</span>
              <button className="delete-btn" onClick={() => handleDeleteAddress(addr._id)}>
                <FiTrash2 />
              </button>
            </div>
            <div className="address-info">
              <h3>{addr?.fullName}</h3>
              <h3>{addr?.street}</h3>
              <p>{addr?.city}</p>
              <p>{addr?.state}</p>
              <p>{addr?.landmark}</p>
              <p>{addr?.pincode}</p>
            </div>
          </div>
        ))}

        <button
          className="add-address-card"
          onClick={() => setIsAddressModalOpen(true)}
        >
          <div className="plus-icon">+</div>
          <span>Add new address</span>
        </button>
      </div>

      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        mode="profile"
      />
    </div>
  );
};

export default SavedAddress;
