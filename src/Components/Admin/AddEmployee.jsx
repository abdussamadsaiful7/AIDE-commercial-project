import React from 'react';

const AddEmployee = () => {

    const handleAddEmployee = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const imageURL = form.imageURL.value;
        const role = form.role.value;
        const plan = form.plan.value;
        const status = form.status.value;
        const newEmployee = { name, mobile, email, role, plan, status, imageURL };

        console.log(newEmployee);
    }

    return (
        <div>
            <div>
                <form onSubmit={handleAddEmployee} className="form-control px-20 py-20 space-y-5 ">
                    <h1 className='text-center font-extrabold text-3xl'>Add  Employee</h1>

                    {/* name, price section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">Name</span>
                            </label>
                            <label className="input">
                                <input type="text" placeholder="Name" name="name" className="input input-bordered w-96 rounded-md" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">Mobile Number</span>
                            </label>
                            <label className="input">
                                <input type="text" placeholder="Mobile Number" name="mobile" className="input 
                            input-bordered w-96 rounded-md" />
                            </label>
                        </div>
                    </div>

                    {/* seller name, seller email section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">Email</span>
                            </label>
                            <label className="input">
                                <input type="email" placeholder="Email" name="email" className="input input-bordered w-96 rounded-md" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text ml-4">ImageURL</span>
                            </label>
                            <label className="input">
                                <input type="text" placeholder="URL" name="imageURL" className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>
                    {/* seller name, seller email section */}
                    <div className='lg:flex items-center justify-center'>
                        <div className=' lg:mr-[72px]'>
                            <p className='mb-1'>Role</p>
                            <select className="select select-bordered w-96" name="role">
                                <option disabled selected>Select Category</option>
                                <option>Admin</option>
                                <option>Author</option>
                                <option>Editor</option>
                                <option>Maintainer</option>
                                <option>Subscriber</option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-1'>Plan</p>
                            <select className="select select-bordered w-96" name="plan">
                                <option disabled selected>Plan</option>
                                <option>Enterprise</option>
                                <option>Company</option>
                                <option>Team</option>
                                <option>Maintainer</option>
                                <option>Basic</option>
                            </select>
                        </div>

                    </div>

                    <div className='ml-24 mr-[102px] mx-auto'>
                        <p className='mb-1'>Status</p>
                        <select className="select select-bordered w-full" name="status">
                            <option disabled selected>Status</option>
                            <option>Pending</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>


                    <div className='text-center my-4'>
                        <input className="btn btn-wide" type="submit" value="Add Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;