const axios = require("axios");

const getDataUrl = "https://dummyjson.com/products";
const getsingleDataUrl = "https://dummyjson.com/products";
const postDataURl = "https://dummyjson.com/products/add";
const putDataUrl = "https://dummyjson.com/products";
const patchDataUrl = "https://dummyjson.com/products";
const deleteDataUrl = "https://dummyjson.com/products";
const getAllData = async (req, res) => {
  try {
    const response = await axios.get(getDataUrl);
    const data = response.data;
    res.status(200).json({
      success: true,
      Message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      Message: `Erorr:- ${error}`,
    });
  }
};
const getsingleData = async (req, res) => {
  try {
    const response = await axios.get(`${getsingleDataUrl}/${req.params.id}`);
    const data = response.data;
    res.status(200).json({
      success: true,
      Message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      Message: `Erorr:- ${error}`,
    });
  }
};
const postData = async (req, res) => {
  try {
    const {
      id,
      title,
      descrption,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
    } = req.body;
    // console.log(incomingData);
    const { data } = await axios.post(
      postDataURl,
      {
        id,
        title,
        descrption,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(data);
    // var data = "hello";
    res.status(200).json({
      success: true,
      Message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      Message: `Erorr:- ${error}`,
    });
  }
};
const putData = async (req, res) => {
  try {
    const userData = req.body;

    // console.log(thisData);
    const { data } = await axios.put(
      `${putDataUrl}/${req.params.id}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      Message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      Message: `Erorr:- ${error}`,
    });
  }
};
const patchData = async (req, res) => {
  try {
    const userData = req.body;

    const { data } = await axios.patch(
      `${patchDataUrl}/${req.params.id}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      Message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      Message: `Erorr:- ${error}`,
    });
  }
};
const deleteData = async (req, res) => {
  try {
    const { data } = await axios.delete(`${deleteDataUrl}/${req.params.id}`);

    res.status(200).json({
      success: true,
      Message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      Message: `Erorr:- ${error}`,
    });
  }
};

module.exports = {
  getAllData,
  getsingleData,
  postData,
  putData,
  patchData,
  deleteData,
};
