import { Plus, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { FaUser, FaEdit, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";

const MyProfilePage = () => {
    // State to manage showing/hiding the edit form
    const [isEditing, setIsEditing] = useState(false);

    // State to manage user details
    const [userDetails, setUserDetails] = useState({
        firstName: "Wisdom",
        lastName: "Smith",
        jobTitle: "Software Engineer",
        email: "wisdom@example.com",
        phone: "+123456789",
        postCode: "12345",
        city: "New York",
        country: "United States",
        desiredSalary: "£50,000/year"
    });

    const [jobTitles, setJobTitles] = useState([]);
    const [jobLocations, setJobLocations] = useState([]);
    const [newJobTitle, setNewJobTitle] = useState("");
    const [newJobLocation, setNewJobLocation] = useState("");
    const [rightToWork, setRightToWork] = useState(null);
    const [salaryEditing, setSalaryEditing] = useState(false);
    const [workingModels, setWorkingModels] = useState([]);
    const [workFromHomeOptions, setWorkFromHomeOptions] = useState([]);

    // Handle edit button click
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Handle form inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    // Handle adding/removing job titles and locations
    const handleAddJobTitle = () => {
        if (newJobTitle.trim()) {
            setJobTitles([...jobTitles, newJobTitle]);
            setNewJobTitle("");
        }
    };

    const handleRemoveJobTitle = (index) => {
        setJobTitles(jobTitles.filter((_, i) => i !== index));
    };

    const handleAddJobLocation = () => {
        if (newJobLocation.trim()) {
            setJobLocations([...jobLocations, newJobLocation]);
            setNewJobLocation("");
        }
    };

    const handleRemoveJobLocation = (index) => {
        setJobLocations(jobLocations.filter((_, i) => i !== index));
    };

    // Handle right to work toggle
    const handleRightToWork = (option) => {
        setRightToWork(option);
    };

    // Handle salary edit toggle
    const handleSalaryEditToggle = () => {
        setSalaryEditing(!salaryEditing);
    };

    const handleSaveSalary = () => {
        setSalaryEditing(false);
    };

    // Handle toggling working model options
    const toggleWorkingModel = (option) => {
        if (workingModels.includes(option)) {
            setWorkingModels(workingModels.filter((model) => model !== option));
        } else {
            setWorkingModels([...workingModels, option]);
        }
    };

    // Handle toggling work from home options
    const toggleWorkFromHomeOption = (option) => {
        if (workFromHomeOptions.includes(option)) {
            setWorkFromHomeOptions(workFromHomeOptions.filter((model) => model !== option));
        } else {
            setWorkFromHomeOptions([...workFromHomeOptions, option]);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-8 flex space-x-8 mt-7">
            {/* User Details Section */}
            <div className="w-1/3 bg-white p-6 rounded-lg border relative h-full">
                {!isEditing ? (
                    <>
                        <FaEdit
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={toggleEdit}
                        />
                        <div className="text-center space-y-4">
                            <FaUser className="text-gray-600 text-4xl mx-auto" />
                            <h2 className="text-xl font-semibold">{userDetails.firstName} {userDetails.lastName}</h2>
                            <div className="flex items-center space-x-2">
                                <FaBriefcase className="text-gray-600" />
                                <span>{userDetails.jobTitle}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaEnvelope className="text-gray-600" />
                                <span>{userDetails.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-gray-600" />
                                <span>{userDetails.phone}</span>
                            </div>
                        </div>
                    </>

                ) : (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={userDetails.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={userDetails.lastName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Current Job Title</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={userDetails.jobTitle}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={userDetails.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Post Code</label>
                            <input
                                type="text"
                                name="postCode"
                                value={userDetails.postCode}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={userDetails.city}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Country</label>
                            <select
                                name="country"
                                value={userDetails.country}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            >
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                                {/* Add more countries here */}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={userDetails.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Save and Cancel Buttons */}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={toggleEdit}
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Save
                            </button>
                            <button
                                onClick={toggleEdit}
                                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Job Preferences Section */}
            <div className="w-2/3 bg-white pl-6 pr-6 pb-6 rounded-lg space-y-14">
                {/* Job Title/Role Section */}
                <div className="border p-6 flex flex-col gap-3 rounded-sm">
                    <h2 className="text-lg font-bold">Your job title/role</h2>
                    <p className="text-gray-700">What kind of job are you looking for? Please enter all the job titles or roles that interest you.</p>
                    <div className="flex flex-wrap gap-2">
                        {jobTitles.map((title, index) => (
                            <span key={index} className="p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer">
                                {title} <X onClick={() => handleRemoveJobTitle(index)} />
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <input
                            type="text"
                            value={newJobTitle}
                            onChange={(e) => setNewJobTitle(e.target.value)}
                            className="flex-grow p-2 border rounded"
                            placeholder="Enter job titles/roles"
                        />
                        <button onClick={handleAddJobTitle} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Add</button>
                    </div>
                </div>

                {/* Job Location Section */}
                <div className="border p-6 flex flex-col gap-3 rounded-sm">
                    <h2 className="text-lg font-bold">Job Location</h2>
                    <div className="flex flex-wrap gap-2">
                        {jobLocations.map((location, index) => (
                            <span key={index} className="p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer">
                                {location} <X onClick={() => handleRemoveJobLocation(index)} />
                            </span>
                        ))}
                    </div>
                    <div className="flex space-x-2 mt-2">
                        <input
                            type="text"
                            value={newJobLocation}
                            onChange={(e) => setNewJobLocation(e.target.value)}
                            className="flex-grow p-2 border rounded"
                            placeholder="Enter job location"
                        />
                        <button onClick={handleAddJobLocation} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Add</button>
                    </div>
                </div>

                {/* Right to Work Section */}
                <div className="border p-6 flex flex-col gap-3 rounded-sm">
                    <h2 className="text-lg font-bold">Do you currently have the right to work in the UK?</h2>
                    <div className="flex space-x-4 mt-2">
                        <button
                            className={`py-2 px-4 rounded ${rightToWork === 'yes' ? 'bg-purple-700 text-white' : 'bg-purple-300 text-purple-700'}`}
                            onClick={() => handleRightToWork('yes')}
                        >
                            Yes
                        </button>
                        <button
                            className={`py-2 px-4 rounded ${rightToWork === 'no' ? 'bg-purple-700 text-white' : 'bg-purple-300 text-purple-700'}`}
                            onClick={() => handleRightToWork('no')}
                        >
                            No
                        </button>
                    </div>
                    {rightToWork === 'no' && (
                        <div className="mt-4">
                            <p className="text-gray-700">If no, please explain briefly how you intend to gain the right to work in the UK ahead of the role’s start date.</p>
                            <textarea className="w-full p-2 mt-2 border rounded" rows="4" placeholder="Enter explanation"></textarea>
                        </div>
                    )}
                </div>

                {/* Desired Salary Section */}
                <div className="border p-6 flex flex-col gap-3 rounded-sm">
                    <h2 className="text-lg font-bold">Desired Salary</h2>
                    <p className="text-gray-700">How much do you hope to earn? Your desired salary is only visible to you and recruiters.</p>
                    {!salaryEditing ? (
                        <div className="flex justify-between mt-2">
                            <span className="text-gray-800 font-semibold">{userDetails.desiredSalary}</span>
                            <FaEdit className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleSalaryEditToggle} />
                        </div>
                    ) : (
                        <div className="mt-4 space-y-4">
                            <input
                                type="text"
                                name="desiredSalary"
                                value={userDetails.desiredSalary}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your desired salary"
                            />
                            <div className="flex justify-between">
                                <button onClick={handleSaveSalary} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Save</button>
                                <button onClick={handleSalaryEditToggle} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cancel</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Working time Model */}
                <div className="border p-6 flex flex-col gap-3 rounded-sm">
                    <h2 className="text-lg font-bold">Working Time Model</h2>
                    <p className="text-gray-700">Which working time model suits your needs? Please select all that apply.</p>
                    <div className="flex gap-7">
                        <span
                            onClick={() => toggleWorkingModel("Full time")}
                            className={`p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer ${workingModels.includes("Full time") ? "bg-blue-600 text-white" : ""}`}
                        >
                            <Plus /> Full time
                        </span>
                        <span
                            onClick={() => toggleWorkingModel("Part time")}
                            className={`p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer ${workingModels.includes("Part time") ? "bg-blue-600 text-white" : ""}`}
                        >
                            <Plus /> Part time
                        </span>
                    </div>
                </div>

                {/* Working From Home Option Model */}
                <div className="border p-6 flex flex-col gap-3 rounded-sm">
                    <h2 className="text-lg font-bold">Work from Home Option</h2>
                    <p className="text-gray-700">What kind of work setting are you interested in? Please select all options that apply.</p>
                    <div className="flex gap-7">
                        <span
                            onClick={() => toggleWorkFromHomeOption("Onsite Work")}
                            className={`p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer ${workFromHomeOptions.includes("Onsite Work") ? "bg-blue-600 text-white" : ""}`}
                        >
                            <Plus /> Onsite Work
                        </span>
                        <span
                            onClick={() => toggleWorkFromHomeOption("Hybrid Work")}
                            className={`p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer ${workFromHomeOptions.includes("Hybrid Work") ? "bg-blue-600 text-white" : ""}`}
                        >
                            <Plus /> Hybrid Work
                        </span>
                        <span
                            onClick={() => toggleWorkFromHomeOption("Remote Work")}
                            className={`p-2 border rounded-full flex flex-row gap-2 items-center cursor-pointer ${workFromHomeOptions.includes("Remote Work") ? "bg-blue-600 text-white" : ""}`}
                        >
                            <Plus /> Remote Work
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;
