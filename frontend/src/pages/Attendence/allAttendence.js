

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendence } from '../../action/attendenceAction.js';
import Nav from '../../components/Nav.js';
import { Table, Button, Form } from 'react-bootstrap';
import { getLocation } from '../../action/locationAction.js'; // Import the getLocation action

function GetAttendence() {
  const attendence = useSelector((state) => state.attendence.attendance?.data);
  const dispatch = useDispatch();

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredAttendence, setFilteredAttendence] = useState([]);
  const [locationId, setLocationId] = useState("");

  useEffect(() => {
    dispatch(getAttendence());
  }, [dispatch]);

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSearch = () => {
    // Filter the attendance data based on the date range
    const filteredData = attendence.filter((a) => {
      const date = new Date(a.Date).toISOString().split('T')[0];
      return date >= fromDate && date <= toDate;
    });
    setFilteredAttendence(filteredData);
  };

  const location = useSelector((state) => state?.location?.location?.data);
  console.log(location);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  return (
    <div className="container-fluid dashboard" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-lg-2 col-md-7 justify-content-center dash-position">
          <Nav />
        </div>
        <div className="col-lg-10 col-md-6 my-5 w-50 dash margin" style={{ marginLeft: '32%' }}>
          <div className="attendance-list">
            <h4 className="title px-3 fs-3" style={{ color: '#FE6777' }}>
              GET ATTENDANCE
            </h4>
            <Form.Group>
              <Form.Label>From Date</Form.Label>
              <Form.Control type="date" value={fromDate} onChange={handleFromDateChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>To Date</Form.Label>
              <Form.Control type="date" value={toDate} onChange={handleToDateChange} />
            </Form.Group>
            <Form.Group>
              <div className="input-group my-2" >
                <label htmlFor="locationId" className="pe-4">
                  Location:
                </label>
                <select
                  id="locationId"
                  value={locationId}
                  onChange={(e) => setLocationId(e.target.value)}
                  className='w-100 py-2 rounded-2 border-0'
                >
                  {location?.map((l) => (
                    <option key={l._id} value={l._id}>
                      {l.locationName}
                    </option>
                  ))}
                </select>
              </div>
            </Form.Group>
            <Button variant="primary" className='my-3' onClick={handleSearch} style={{ backgroundColor: '#FE6777' }}>
              Search
            </Button>
            {filteredAttendence.length > 0 ? (
              <Table hover className="bg-white p-4 rounded-4 shadow">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Location</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAttendence.map((a, i) => (
                    <tr key={a._id}>
                      <td>{a.userId}</td>
                      <td>{a.userFullName}</td>
                      <td>{a.Location}</td>
                      <td>{a.createdAs}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No attendance found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetAttendence;








//Aggregate


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAttendence } from '../../action/attendenceAction.js';
// import Nav from '../../components/Nav.js';
// import { Table, Button, Form } from 'react-bootstrap';

// function GetAttendence() {
//   const attendence = useSelector((state) => state.attendence.attendance?.data);
//   const dispatch = useDispatch();

//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [filteredAttendence, setFilteredAttendence] = useState([]);

//   useEffect(() => {
//     dispatch(getAttendence());
//   }, [dispatch]);

//   const handleFromDateChange = (e) => {
//     setFromDate(e.target.value);
//   };

//   const handleToDateChange = (e) => {
//     setToDate(e.target.value);
//   };

//   const handleSearch = () => {
//     // Filter the attendance data based on the date range
//     const filteredData = attendence.filter((a) => {
//       const date = new Date(a.Date).toISOString().split('T')[0];
//       return date >= fromDate && date <= toDate;
//     });
//     setFilteredAttendence(filteredData);
//   };

//   return (
//     <div className="container-fluid dashboard" style={{ height: '100vh' }}>
//       <div className="row">
//         <div className="col-lg-2 col-md-7 justify-content-center dash-position">
//           <Nav />
//         </div>
//         <div className="col-lg-10 col-md-6 my-5 w-50 dash margin" style={{ marginLeft: '32%' }}>
//           <div className="attendance-list">
//             <h4 className="title px-3 fs-3" style={{ color: '#FE6777' }}>
//               GET ATTENDANCE
//             </h4>
//             <Form.Group>
//               <Form.Label>From Date</Form.Label>
//               <Form.Control type="date" value={fromDate} onChange={handleFromDateChange} />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>To Date</Form.Label>
//               <Form.Control type="date" value={toDate} onChange={handleToDateChange} />
//             </Form.Group>
//             <Button variant="primary" onClick={handleSearch} style={{ backgroundColor: '#FE6777' }}>
//               Search
//             </Button>
//             {filteredAttendence.length > 0 ? (
//               <Table hover className="bg-white p-4 rounded-4 shadow">
//                 <thead>
//                   <tr>
//                     <th>User ID</th>
//                     <th>First Name</th>
//                     <th>Location</th>
//                     <th>Attendance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredAttendence.map((a, i) => (
//                     <tr key={a._id}>
//                       <td>{a.userId}</td>
//                       <td>{a.userFullName}</td>
//                       <td>{a.Location}</td>
//                       <td>{a.createdAs}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             ) : (
//               <p>No attendance found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetAttendence;
