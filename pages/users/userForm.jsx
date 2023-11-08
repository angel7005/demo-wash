import axios from 'axios';
import {
    useState
} from 'react';



export default function UserForm (props) {

    const [values, setValues] = useState({
        username: "", 
        movil:"", 
        address:"", 
        alias:"", 
        password:"",         
        mail:""
    });

    const handleInputChange = (event) => {
        const {name, value} = event?.target;
           setValues({
             ...values,
             [name]: value,
           });
    };


    async function handleSubmit () {
        event.preventDefault();
        //setIsLoading(true)
        let newUser = {}
        axios.post('/api/users', {
            username: values.username, 
            movil: values.movil, 
            address:values.address, 
            alias: values.alias, 
            password: values.password, 
            role: "CUSTOMER", 
            mail:values.mail,
            avatar:'profile.png'
        })
        .then((res) => {        
            newUser = res.data.response.user;       
            props.setItems([...props.items,{
                id: newUser.id,
                username: newUser.username, 
                movil: newUser.movil, 
                address:newUser.address, 
                alias: newUser.alias, 
                password: newUser.password, 
                role: newUser.role, 
                mail: newUser.mail,
                avatar: newUser.avatar
            }])
            if (typeof  props.setIsOpen !== 'undefined') {
                props.setIsOpen(false) 
            }

            const ap = props.activePage;
            const nap = Math.ceil((props.items.length+1)/props.pageSize);
            if (nap>ap){
                props.setActivePage(nap);
            }
          })
        .catch((err) => {
             console.log(err);
             alert(err);
          })
          .finally(()=>{
            
          });                
    }

    return (
        <div className="flex justify-center items-center overflow-x-auto overflow-y-auto 
                        fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto xl:w-1/4 lg:w-1/3 sm:w-2/3">
           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
               <h3 className="text-3xl text-black-500 font=semibold">Register Form</h3>
               <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => {
                          props.setIsOpen(false);                          
                    }}>
                  <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-300 py-0 
                  rounded-full">
                      x
                  </span>
             </button>
            </div>
            <div className="relative p-6 flex-auto">                
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                    onSubmit={handleSubmit}>
                    <input name='username' 
                        value={values.username} 
                        type='text' 
                        placeholder='Enter your name' 
                        onChange={handleInputChange}
                        className="ctlForm"
                    />
                    <input name='alias'  
                           value={values.alias} 
                           type='text' 
                           placeholder='Enter your alias' 
                           onChange={handleInputChange}
                           className="ctlForm"
                    />
                    <input name='movil'  
                           value={values.movil} 
                           type='phone' 
                           placeholder='Enter your mobile number' 
                           onChange={handleInputChange}
                           className="ctlForm"
                    />
                    <input name='address' 
                           value={values.address} 
                           type='text' 
                           placeholder='Enter your address' 
                           onChange={handleInputChange}
                           className="ctlForm"
                    />
                    <input name='password' 
                           value={values.password} 
                           type='password' 
                           placeholder='Enter your  password' 
                           onChange={handleInputChange}
                           className="ctlForm"
                    />
                    <input name='mail'  
                        value={values.mail} 
                        type='email' 
                        placeholder='Enter your email' 
                        onChange={handleInputChange}
                        className="ctlForm"
                    />                    
                </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t 
                    border-solid border-gray-200 rounded-g">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase
                         px-6 py-2 text-sm outline-none focus:outline-none mr-3 mb-1
                         rounded-md ring-2 hover:bg-red-100"
                    type="button"
                    onClick={() => { 
                      if (typeof  props.setIsOpen !== 'undefined') {
                           props.setIsOpen(false) 
                       }                     
                    }}
                  >
                    Close
                  </button>
                  <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 
                                   text-sm outline-none focus:outline-none mb-1 ring-2
                                   hover:bg-green-100 rounded-md"                    
                    type="button"
                    onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
      </div>
     </div>
    </div>
    );
}
