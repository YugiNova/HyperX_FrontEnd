import axios from "axios";

export const getProductList = async (page=1,limit=5,filter="id",order="asc") => {
    const res = await axios.get(`http://localhost:8080/api/product/page=${page}&limit=${limit}&filter=${filter}&order=${order}`)
    // console.log(res.data)
    return res.data.data;
}

export const createProduct = async (data:any) => {
    let productdata = {
        pid: data.pid,
        name: data.name,
        price: data.price,
        discount_id: data.discount_id,
        quantity: data.quantity,
        brand_id: data.brand_id,
        long_desc: data.long_desc,
        short_desc: data.short_desc,
        detail: data.detail,
    }
    let productJSON = JSON.stringify(productdata)
    let formdata = new FormData();
    formdata.append('image',data.image.file.originFileObj)
    formdata.append('data',productJSON)

    try {
        const result = await axios({
            method: "post",
            url: "http://localhost:8080/api/product/",
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
          })
        return result.data
    } catch (error) {
        return error
    }
}

export const deleteProduct = async (id:number) => {
    const res = await axios.delete(`http://localhost:8080/api/product/${id}`)
    return res.data
}

export const getProductDetail = async (id:number) => {
    const res = await axios.get(`http://localhost:8080/api/product/${id}`);
    return res.data.data
}