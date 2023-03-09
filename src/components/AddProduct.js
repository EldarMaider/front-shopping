import {useState, useEffect} from 'react'
import DecideDelelte from './DecideDelelte.js';
import './AddProduct.css';
import { useNavigate } from 'react-router-dom';

function AddProduct({AddUserProduct, setMessage, setShowMessage}) {
    const [showDialog, setShowDialog] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        price: 1,
        image: '',
        category: 'General'
      });
    const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleImageChange = (e) => {
          setFormValues({ ...formValues, image: e.target.files[0] })
      };
      // const file = e.target.files[0];
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //   setFormValues({ ...formValues, image: reader.result });
        // };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(formValues.name && formValues.price && formValues.category) {
            try {
                const response = await fetch('http://127.0.0.1:8000/products/', {
                  method: 'POST',
                  body: formValues,
                });
                const data = await response.json();
                console.log(data);
                AddUserProduct(data);
                setMessage({text: `Item ${formValues.name} added to your cart`,color: 'green'});
                setShowMessage(true);
                setFormValues({
                    name: '',
                    description: '',
                    price: 1,
                    image: '',
                    category: 'General'
                });
                navigate('/'); 
            } 
            catch (error) {
                console.error(error);
            }
        }
        else {
            alert('One of the mandatory fileds is missing, please make sure to fill all the necessary fields')
            setShowDialog(true)
        }
      };


    
      return (
          <>
            <h1 className='pageTitle'>Add Product</h1>
            <form className='formStyle' onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" value={formValues.description} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" name="price" min={1} value={formValues.price} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="file" name="image" onChange={handleImageChange} />
                </label>
                <br />
                <label>
                    Category:
                    <select name="category" value={formValues.category} onChange={handleInputChange}>
                    <option value="General">General</option>
                    <option value="Phones">Phones</option>
                    <option value="Computers">Computers</option>
                    <option value="Tablets">Tablets</option>
                    </select>
                </label>
                <br/>
                <button type="submit" className="submitBtn" >Add Product</button>
            </form>
            {showDialog && <DecideDelelte dialogMessage='One of the mandatory fileds is missing, please make sure to fill all the necessary fields' cancelDelete={setShowDialog(false)} />}
        </>
      );
    };

export default AddProduct
