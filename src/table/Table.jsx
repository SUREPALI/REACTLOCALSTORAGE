import { useSelector } from 'react-redux';

export default function Table() {
    const userData = useSelector(state => state.user); // Assuming state.user is where user data is stored

    return (
        <div className="container">
            <h2 className="text-primary">TABLE DETAILS</h2>
            <table className='table table-borderd w-50'>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData.fullName}</td>
                        <td>{userData.mobileNo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
