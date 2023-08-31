import React, { useState } from "react";
import styles from "./CartMenu.module.css";
import { Plus } from "feather-icons-react/build/IconComponents";
import Minus from "feather-icons-react/build/IconComponents/Minus";
import { increaseCount, decreaseCount, deleteCartItem } from "../../state";
import { useDispatch } from "react-redux";
import Trash2 from "feather-icons-react/build/IconComponents/Trash2";
import ModalMain from "../reusableComponents/ModalMain";
import { ModalHeader, Modal } from "reactstrap";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  // const [count, setCount] = useState(item.count);
  const [deleteModal, setDeleteModal] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleDelete = (id) => {
    // setIsLoading(true);
    // try {
    // const deleteData = await axios.delete(`${baseUrl}/category/${id}`);
    // setRefresh(!refresh);
    console.log(id);
    dispatch(deleteCartItem({ id }));
    setDeleteModal(!deleteModal);
    // handleToast("success", "Successfully Deleted");
    // setIsLoading(false);
    // console.log("delete", deleteData);
    // } catch (error) {
    // handleToast("error", "Error While Deleting");
    // setIsLoading(false);
    // console.log("error", error);
    // }
  };

  return (
    <>
      <ModalMain
        formModal={deleteModal}
        // msg="Are you Sure Want to Delete"v
        clickHandlerCancel={() => {
          setDeleteModal(!deleteModal);
        }}
        clickHandlerSubmit={() => handleDelete(item._id)}
        // isLoading={isLoading}
        buttonColour="danger"
        buttonText="Delete"
        Component={
          <p className="mx-3" style={{ color: "red" }}>
            Are You Sure You Want To Remove This Item
          </p>
        }
      />
      <Modal
        isOpen={preview}
        toggle={() => {
          setPreview(!preview);
        }}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => {
            setPreview(!preview);
          }}
        >
          Image
        </ModalHeader>
        <img
          src={`${process.env.REACT_APP_BASE_URL}/deals/${item.image}`}
          alt="Card image cap"
          // style={{ height: "400px", width: "450px" }}
        />
      </Modal>

      <tbody>
        <tr>
          <th scope="row">{index + 1}</th>
          <td>
            <img
              onClick={() => setPreview(true)}
              src={`${process.env.REACT_APP_BASE_URL}/deals/${item.image}`}
              alt="Card image cap"
              style={{ height: "100px", width: "100px", cursor: "pointer" }}
            />
          </td>
          <td>
            <h5 className="card-title">{item.title}</h5>
          </td>
          <td>
            <p className="card-text">{item.description}</p>
          </td>
          <td>
            <p className="card-text">{item.categoryId.label}</p>
          </td>
          <td>
            <p className="price">
              <span>Rs {item.price}</span>{" "}
            </p>
          </td>
          <td>
            <div className="d-flex">



              <Minus
                className={styles.floatingAddButton}
                onClick={() => {
                  // console.log('item',item.count)
                  if (item.count > 1) dispatch(decreaseCount({ id: item._id }));
                  else setDeleteModal(!deleteModal);
                  // dispatch(deleteCartItem({ id: item._id }));
                }}
              />

              <span> {item.count} </span>{" "}
              <Plus
                className={styles.floatingAddButton}
                onClick={() => {
                  dispatch(increaseCount({ id: item._id }));
                }}
              />
            </div>
          </td>
          <td>
            <span>Rs {Math.ceil(item.price * item.count)}</span>{" "}
          </td>
          <td>
            <div
              className="button-container"
              onClick={() => {
                setDeleteModal(!deleteModal);
                // //handleDelete(row._id)
                // setDeleteId(row._id);
              }}
            >
              <Trash2 style={{ stroke: "red", cursor: "pointer" }} />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;

{
  /* <div style={{ width: "18rem" }}>

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="price">
            <span>Rs {item.price}</span>{" "}
          </p>
          <div className="d-flex  justify-content-center">
            <Minus
              className={styles.floatingAddButton}
              onClick={() => {
                if (count !== 0) setCount(count - 1);
              }}
            />
            <span> {count} </span>{" "}
            <Plus
              className={styles.floatingAddButton}
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
        </div>
      </div> */
}
