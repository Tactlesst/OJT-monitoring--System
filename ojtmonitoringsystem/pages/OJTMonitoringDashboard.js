import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; // For making API requests (install: npm install axios)

function OJTMonitoringDashboard() {
  const [trainees, setTrainees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const response = await axios.get('/api/trainees'); // Replace with your API endpoint
        setTrainees(response.data);
      } catch (err) {
        setError(err.message || 'Error fetching trainees.');
        console.error("Error fetching trainees:", err); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchTrainees();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleUpdateStatus = async (traineeId, newStatus) => {
    try {
      await axios.put(`/api/trainees/${traineeId}`, { status: newStatus });
      // Update the trainees state to reflect the change (more efficient than refetching all trainees)
      setTrainees(trainees.map(trainee =>
        trainee._id === traineeId ? { ...trainee, status: newStatus } : trainee
      ));
      alert('Status updated successfully!'); // Or a more user-friendly notification
    } catch (err) {
      setError(err.message || 'Error updating status.');
      console.error("Error updating status:", err);
    }
  };

  if (loading) {
    return <div>Loading trainees...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>OJT Trainee Monitoring Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map(trainee => (
            <tr key={trainee._id}> {/* Important: Use a unique key */}
              <td>{trainee.name}</td>
              <td>{trainee.department}</td>
              <td>{trainee.status}</td>
              <td>
                <button onClick={() => handleUpdateStatus(trainee._id, 'Ongoing')}>
                  Mark as Ongoing
                </button>
                <button onClick={() => handleUpdateStatus(trainee._id, 'Completed')}>
                  Mark as Completed
                </button>
                {/* Add more action buttons as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OJTMonitoringDashboard;